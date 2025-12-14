from pydantic import BaseModel, Field, EmailStr
from typing import List, Optional
from datetime import datetime

class OrderItem(BaseModel):
    id: int
    name: str
    price: float
    quantity: int
    image: Optional[str] = None

class OrderCreate(BaseModel):
    customer_name: str
    phone: str
    address: str
    items: List[OrderItem]
    total_amount: float
    status: str = "PENDING"  # PENDING, PAID, FAILED
    created_at: datetime = Field(default_factory=datetime.utcnow)

class PaymentVerify(BaseModel):
    razorpay_order_id: str
    razorpay_payment_id: str
    razorpay_signature: str
