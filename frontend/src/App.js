import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { toast } from "sonner";
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import PrivacyPolicy from './pages/Legal/PrivacyPolicy';
import RefundPolicy from './pages/Legal/RefundPolicy';
import ShippingPolicy from './pages/Legal/ShippingPolicy';
import ContactUs from './pages/Legal/ContactUs';

import { UPIPayment } from './components/UPIPayment';

export default function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  // UPI State
  const [showUPIModal, setShowUPIModal] = useState(false);
  const [currentOrder, setCurrentOrder] = useState(null);

  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(p => p.id === product.id);
      if (existing) {
        return prev.map(p => p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setCartOpen(true);
    toast.success(`Added ${product.name} to bag`);
  };

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(p => p.id !== id));
  };

  const updateQuantity = (id, delta) => {
    setCart(prev => prev.map(p => {
      if (p.id === id) {
        const newQty = Math.max(1, p.quantity + delta);
        return { ...p, quantity: newQty };
      }
      return p;
    }));
  };

  const cartTotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  const handleCheckout = async (e) => {
    e.preventDefault();
    setIsCheckingOut(true);

    // SIMPLE CHECKOUT FLOW (No Payment, No WhatsApp)
    try {
      // Simulate a short delay for "processing"
      await new Promise(resolve => setTimeout(resolve, 1000));

      toast.success("Purchase Successful! Thank you for your order.");
      setCart([]);
      setCartOpen(false);

    } catch (error) {
      console.error("Checkout Error:", error);
      toast.error("Something went wrong");
    } finally {
      setIsCheckingOut(false);
    }
  };

  const handleUPIComplete = async () => {
    // 3. Manual Verification (Simulated)
    try {
      toast.info("Verifying payment...");

      // We send a "mock_signature" to backend to trigger the success flow (Order -> Paid -> WhatsApp)
      const mockResponse = {
        razorpay_order_id: currentOrder.razorpay_order_id,
        razorpay_payment_id: "pay_manual_" + Date.now(),
        razorpay_signature: "mock_signature"
      };

      const verifyResponse = await fetch('http://localhost:8000/api/payment/verify_payment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(mockResponse)
      });

      if (verifyResponse.ok) {
        toast.success("Order Placed Successfully!");
        setCart([]);
        setShowUPIModal(false);

        // WhatsApp Handoff - Send FULL Details to Admin
        const itemsList = currentOrder.items.map(i => `${i.name} x${i.quantity}`).join(', ');
        const message = `*📦 NEW ORDER - PAID VIA UPI*
---------------------
*Name:* ${currentOrder.customer_name}
*Phone:* ${currentOrder.phone}
*Address:* ${currentOrder.address}
*Items:* ${itemsList}
*Total:* ₹${currentOrder.amount / 100}
---------------------
*Payment ID:* ${mockResponse.razorpay_payment_id}
*Status:* ✅ DO NOT REPLY, AUTO-GENERATED`;

        const msgEncoded = encodeURIComponent(message);
        window.open(`https://wa.me/918610871405?text=${msgEncoded}`, '_blank');
      } else {
        toast.error("Verification failed. Please try again.");
      }
    } catch (error) {
      toast.error("Error: " + error.message);
    }
  };

  return (
    <HelmetProvider>
      <Router>
        <Layout
          cart={cart}
          cartCount={cart.reduce((acc, i) => acc + i.quantity, 0)}
          cartOpen={cartOpen}
          setCartOpen={setCartOpen}
          updateQuantity={updateQuantity}
          removeFromCart={removeFromCart}
          handleCheckout={handleCheckout}
          isCheckingOut={isCheckingOut}
        >
          {showUPIModal && currentOrder && (
            <UPIPayment
              orderId={currentOrder.order_id}
              amount={currentOrder.amount / 100}
              onPaymentComplete={handleUPIComplete}
              onCancel={() => setShowUPIModal(false)}
            />
          )}
          <Routes>
            <Route path="/" element={<HomePage onAddToCart={addToCart} />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/refund" element={<RefundPolicy />} />
            <Route path="/shipping" element={<ShippingPolicy />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </Layout>
      </Router>
    </HelmetProvider>
  );
}
