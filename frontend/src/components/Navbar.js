import React, { useState, useEffect } from 'react'; // Added useEffect
import { ShoppingBag } from 'lucide-react';
import { Button } from "./ui/button";
import { Link } from 'react-router-dom';

const Navbar = ({ cartCount, onOpenCart }) => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => { // Using explicit useEffect
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <div className={`bg-emerald-900 text-white text-xs font-bold tracking-widest text-center py-2 fixed top-0 w-full z-50 transition-transform duration-300 ${isScrolled ? '-translate-y-full' : 'translate-y-0'}`}>
                FREE SHIPPING TODAY ONLY • USE CODE: FIRST20 FOR 20% OFF
            </div>
            <nav className={`fixed w-full z-40 glass-panel border-b border-white/10 transition-all duration-300 ${isScrolled ? 'top-0' : 'top-8'}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex-shrink-0 flex items-center">
                            <Link to="/">
                                <img src="/ENGLOGO.svg" alt="Veeyal" className="h-8 w-auto" />
                            </Link>
                        </div>
                        <div className="hidden md:flex space-x-8 items-center">
                            <Link to="/#products" className="text-sm font-medium text-gray-500 hover:text-black transition-colors">Products</Link>
                            <Link to="/#process" className="text-sm font-medium text-gray-500 hover:text-black transition-colors">Our Process</Link>
                            <Link to="/#usage" className="text-sm font-medium text-gray-500 hover:text-black transition-colors">Usage</Link>
                            <Button variant="ghost" size="icon" className="relative" onClick={onOpenCart}>
                                <ShoppingBag className="h-5 w-5" />
                                {cartCount > 0 && (
                                    <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-black rounded-full">
                                        {cartCount}
                                    </span>
                                )}
                            </Button>
                        </div>
                        <div className="md:hidden flex items-center">
                            <Button variant="ghost" size="icon" onClick={onOpenCart}>
                                <ShoppingBag className="h-5 w-5" />
                                {cartCount > 0 && (
                                    <span className="absolute top-1 right-1 h-2 w-2 bg-black rounded-full" />
                                )}
                            </Button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
