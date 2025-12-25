import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

const CartDrawer = ({
    cart,
    open,
    onOpenChange,
    updateQuantity,
    removeFromCart,
    handleCheckout,
    isCheckingOut
}) => {
    const cartTotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

    return (
        <Sheet open={open} onOpenChange={onOpenChange}>
            <SheetContent className="w-full sm:max-w-md flex flex-col h-full">
                <SheetHeader className="mb-6">
                    <SheetTitle className="text-2xl font-medium">Your Bag</SheetTitle>
                </SheetHeader>

                <div className="flex-1 overflow-y-auto pr-2">
                    {cart.length === 0 ? (
                        <div className="flex flex-col items-center justify-center h-64 text-muted-foreground">
                            <ShoppingBag className="h-12 w-12 mb-4 opacity-20" />
                            <p>Your bag is empty</p>
                            <Button variant="link" onClick={() => onOpenChange(false)}>Continue Shopping</Button>
                        </div>
                    ) : (
                        <div className="space-y-6">
                            {cart.map(item => (
                                <div key={item.id} className="flex gap-4">
                                    <div className="h-24 w-20 flex-shrink-0 overflow-hidden rounded-xl bg-secondary">
                                        <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                                    </div>
                                    <div className="flex flex-1 flex-col">
                                        <div className="flex justify-between text-base font-medium">
                                            <h3>{item.name}</h3>
                                            <p>₹{(item.price * item.quantity).toFixed(2)}</p>
                                        </div>
                                        <p className="mt-1 text-sm text-muted-foreground">{item.tagline}</p>
                                        <div className="flex items-center justify-between text-sm mt-auto">
                                            <div className="flex items-center border rounded-lg">
                                                <button className="px-3 py-1 hover:bg-gray-100" onClick={() => updateQuantity(item.id, -1)}>-</button>
                                                <span className="px-2">{item.quantity}</span>
                                                <button className="px-3 py-1 hover:bg-gray-100" onClick={() => updateQuantity(item.id, 1)}>+</button>
                                            </div>
                                            <button
                                                type="button"
                                                className="font-medium text-destructive hover:text-destructive/80"
                                                onClick={() => removeFromCart(item.id)}
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {cart.length > 0 && (
                    <div className="border-t pt-6 mt-6">
                        <div className="flex justify-between text-base font-medium mb-6">
                            <p>Subtotal</p>
                            <p>₹{cartTotal.toFixed(2)}</p>
                        </div>

                        <form onSubmit={handleCheckout} className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="name">Name (Optional)</Label>
                                <Input id="name" placeholder="Your Name" className="rounded-xl" />
                            </div>

                            <Button type="submit" className="w-full rounded-xl h-12 text-base bg-emerald-700 hover:bg-emerald-800" disabled={isCheckingOut}>
                                {isCheckingOut ? (
                                    <span className="flex items-center gap-2">
                                        <span className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                        Processing...
                                    </span>
                                ) : (
                                    "Order on WhatsApp"
                                )}
                            </Button>
                        </form>
                    </div>
                )}
            </SheetContent>
        </Sheet >
    );
};

export default CartDrawer;
