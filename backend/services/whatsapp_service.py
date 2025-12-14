import os
import requests
import json

class WhatsAppService:
    def __init__(self):
        # Using a generic provider structure
        self.api_url = os.getenv("WHATSAPP_API_URL", "https://api.whatsapp.com/v1/messages") 
        self.api_key = os.getenv("WHATSAPP_API_KEY", "")
        self.delivery_team_number = os.getenv("DELIVERY_TEAM_PHONE", "918610871405")

    def _send_message(self, to_number: str, message_body: str):
        """Helper to send or log message depending on API key presence."""
        try:
            if not self.api_key:
                print(f"[{self.__class__.__name__}] MOCK SEND to {to_number}:\n{message_body}")
                return True

            headers = {
                "Authorization": f"Bearer {self.api_key}",
                "Content-Type": "application/json"
            }
            
            payload = {
                "messaging_product": "whatsapp",
                "to": to_number,
                "type": "text",
                "text": {"body": message_body}
            }

            response = requests.post(self.api_url, headers=headers, json=payload)
            response.raise_for_status()
            return True
        except Exception as e:
            print(f"Failed to send WhatsApp message to {to_number}: {str(e)}")
            return False

    def send_admin_notification(self, order_data: dict, order_id: str):
        """Sends detailed order info to the delivery team."""
        items_str = "\n".join([f"- {item['name']} (x{item['quantity']})" for item in order_data.get('items', [])])
        
        message_body = (
            f"*🔔 NEW PAID ORDER #{order_id[-6:].upper()}*\n"
            f"--------------------------------\n"
            f"*Customer:* {order_data.get('customer_name')}\n"
            f"*Phone:* {order_data.get('phone')}\n"
            f"*Address:* {order_data.get('address')}\n"
            f"*Amount:* ₹{order_data.get('total_amount')}\n"
            f"--------------------------------\n"
            f"*Items:*\n{items_str}\n"
            f"--------------------------------\n"
            f"✅ PAYMENT VERIFIED"
        )
        return self._send_message(self.delivery_team_number, message_body)

    def send_customer_confirmation(self, order_data: dict, order_id: str):
        """Sends a confirmation message to the customer."""
        customer_phone = order_data.get('phone')
        # Basic sanitization: remove spaces, ensure it starts with country code if needed
        # For mock/demo, we assume input is reasonably correct or just format simply
        if not customer_phone: 
            return False
            
        message_body = (
            f"Hello {order_data.get('customer_name')}! 👋\n\n"
            f"Your order *#{order_id[-6:].upper()}* has been confirmed! 🎉\n\n"
            f"We are packing your items now:\n"
            f"{order_data.get('items')[0]['name']} and more...\n\n"
            f"You will receive update once shipped.\n"
            f"Thank you for choosing Veeyal! 🌿"
        )
        return self._send_message(customer_phone, message_body)

    # Legacy alias if needed, or we just update usage
    def send_order_confirmation(self, order_data: dict, order_id: str):
        return self.send_admin_notification(order_data, order_id)
