import React from 'react';
import { Helmet } from 'react-helmet-async';

const ShippingPolicy = () => {
    return (
        <div className="py-24 bg-white">
            <Helmet>
                <title>Shipping Policy | Veeyal</title>
                <meta name="description" content="Veeyal Shipping Policy - Fast and reliable delivery across India." />
            </Helmet>
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-8">Shipping Policy</h1>
                <div className="prose prose-emerald max-w-none text-gray-600">
                    <h3>Processing Time</h3>
                    <p>
                        All orders are processed within 1-2 business days. Orders are not shipped or delivered on weekends or holidays.
                    </p>
                    <h3>Shipping Rates & Delivery Estimates</h3>
                    <p>
                        Shipping charges for your order will be calculated and displayed at checkout.
                    </p>
                    <ul>
                        <li>Standard Shipping (5-7 business days): Free for orders above ₹500</li>
                        <li>Express Shipping (2-3 business days): ₹100</li>
                    </ul>
                    <h3>Shipment Confirmation & Order Tracking</h3>
                    <p>
                        You will receive a Shipment Confirmation email once your order has shipped containing your tracking number(s). The tracking number will be active within 24 hours.
                    </p>
                    <h3>Damages</h3>
                    <p>
                        Veeyal is not liable for any products damaged or lost during shipping. If you received your order damaged, please contact the shipment carrier to file a claim.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ShippingPolicy;
