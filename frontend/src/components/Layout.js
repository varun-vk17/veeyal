import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import CartDrawer from './CartDrawer';
import { Toaster } from "./ui/sonner";

const Layout = ({
    children,
    cart,
    cartCount,
    cartOpen,
    setCartOpen,
    updateQuantity,
    removeFromCart,
    handleCheckout,
    isCheckingOut
}) => {
    return (
        <div className="min-h-screen bg-background text-foreground font-sans selection:bg-black selection:text-white">
            <Navbar cartCount={cartCount} onOpenCart={() => setCartOpen(true)} />

            <main>
                {children}
            </main>

            <Footer />

            <CartDrawer
                cart={cart}
                open={cartOpen}
                onOpenChange={setCartOpen}
                updateQuantity={updateQuantity}
                removeFromCart={removeFromCart}
                handleCheckout={handleCheckout}
                isCheckingOut={isCheckingOut}
            />

            <Toaster position="top-center" />
        </div>
    );
}; // Fixed closing brace

export default Layout;
