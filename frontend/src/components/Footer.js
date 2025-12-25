import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
    <footer className="bg-white border-t border-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                <div className="col-span-1 md:col-span-2">
                    <Link to="/">
                        <img src="/ENGLOGO.svg" alt="Veeyal" className="h-8 w-auto mb-6" />
                    </Link>
                    <p className="text-muted-foreground max-w-sm leading-relaxed">
                        <b>From our family farm to your kitchen.</b><br />
                        We started Veeyal to bring back the authentic taste of real wood-pressed oil in Pollachi. No middlemen, no chemicals—just pure, honest oil.
                    </p>
                </div>
                <div>
                    <h4 className="font-medium mb-6">Shop</h4>
                    <ul className="space-y-4 text-muted-foreground">
                        <li><Link to="/#products" className="hover:text-black transition-colors">Groundnut Oil</Link></li>
                        <li><Link to="/#products" className="hover:text-black transition-colors">Sesame Oil</Link></li>
                        <li><Link to="/#products" className="hover:text-black transition-colors">Coconut Oil</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-medium mb-6">Company</h4>
                    <ul className="space-y-4 text-muted-foreground">
                        <li><Link to="/contact" className="hover:text-black transition-colors">Contact</Link></li>
                        <li><Link to="/privacy" className="hover:text-black transition-colors">Privacy Policy</Link></li>
                        <li><Link to="/shipping" className="hover:text-black transition-colors">Shipping Policy</Link></li>
                        <li><Link to="/refund" className="hover:text-black transition-colors">Refund Policy</Link></li>
                    </ul>
                </div>
            </div>
            <div className="border-t border-gray-100 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                <p>© 2025 Veeyal. All rights reserved.</p>
                <p>Designed for healthy living.</p>
            </div>
        </div>
    </footer>
);

export default Footer;
