import os
import razorpay
from fastapi import APIRouter, HTTPException, Depends, Request
from models import OrderCreate, PaymentVerify
from services.whatsapp_service import WhatsAppService
from datetime import datetime

router = APIRouter()

# Initialize Razorpay Client
# In production, these must be set in .env
RAZORPAY_KEY_ID = os.getenv("RAZORPAY_KEY_ID", "rzp_test_placeholder")
RAZORPAY_KEY_SECRET = os.getenv("RAZORPAY_KEY_SECRET", "secret_placeholder")

client = razorpay.Client(auth=(RAZORPAY_KEY_ID, RAZORPAY_KEY_SECRET))
whatsapp_service = WhatsAppService()

@router.post("/create_order")
async def create_order(request: Request, order: OrderCreate):
    """
    1. Create a local order in DB (Pending)
    2. Create a Razorpay Order
    3. Return order_id to frontend
    """
    try:
        db = request.app.mongodb
        
        # 1. Create Razorpay Order
        # Amount must be in paise (multiply by 100)
        amount_in_paise = int(order.total_amount * 100)
        
        razorpay_order_id = ""
        
        # MOCK MODE: If keys are placeholders, skip API call
        if "placeholder" in RAZORPAY_KEY_ID:
            print("⚠️ MOCK MODE: Generating dummy order ID")
            razorpay_order_id = f"order_mock_{int(datetime.now().timestamp())}"
        else:
            razorpay_order_data = {
                "amount": amount_in_paise,
                "currency": "INR",
                "receipt": f"order_{int(datetime.now().timestamp())}",
                "payment_capture": 1 # Auto capture
            }
            razorpay_order = client.order.create(data=razorpay_order_data)
            razorpay_order_id = razorpay_order["id"]

        # 2. Store in MongoDB
        new_order = order.dict()
        new_order["razorpay_order_id"] = razorpay_order_id
        new_order["status"] = "PENDING"
        
        result = await db["orders"].insert_one(new_order)
        
        return {
            "order_id": str(result.inserted_id),
            "razorpay_order_id": razorpay_order_id,
            "amount": amount_in_paise,
            "currency": "INR",
            "key_id": RAZORPAY_KEY_ID
        }

    except Exception as e:
        print(f"Error creating order: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))

@router.post("/verify_payment")
async def verify_payment(request: Request, payment: PaymentVerify):
    """
    1. Verify signature
    2. Update DB to PAID
    3. Trigger WhatsApp Confirmation
    """
    try:
        # 1. Verify Signature
        params_dict = {
            'razorpay_order_id': payment.razorpay_order_id,
            'razorpay_payment_id': payment.razorpay_payment_id,
            'razorpay_signature': payment.razorpay_signature
        }
        
        # This will raise an error if verification fails
        # MOCK MODE BYPASS
        if payment.razorpay_signature == "mock_signature":
            print("⚠️ MOCK MODE: Skipping Signature Verification")
        else:
            client.utility.verify_payment_signature(params_dict)
        
        # 2. Update DB
        db = request.app.mongodb
        
        updated_order = await db["orders"].find_one_and_update(
            {"razorpay_order_id": payment.razorpay_order_id},
            {"$set": {
                "status": "PAID",
                "razorpay_payment_id": payment.razorpay_payment_id,
                "paid_at": datetime.utcnow()
            }},
            return_document=True
        )
        
        if not updated_order:
            raise HTTPException(status_code=404, detail="Order not found")

        # 3. Trigger WhatsApp (Dual Notification)
        # Async handoff in real production, but calling direct here
        whatsapp_service.send_admin_notification(updated_order, str(updated_order["_id"]))
        whatsapp_service.send_customer_confirmation(updated_order, str(updated_order["_id"]))
        
        return {"status": "success", "message": "Payment verified and order confirmed"}

    except razorpay.errors.SignatureVerificationError:
        raise HTTPException(status_code=400, detail="Invalid Payment Signature")
    except Exception as e:
        print(f"Error verifying payment: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))
