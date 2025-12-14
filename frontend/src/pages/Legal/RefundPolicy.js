import React from 'react';
import { Helmet } from 'react-helmet-async';

const RefundPolicy = () => {
    return (
        <div className="py-24 bg-white">
            <Helmet>
                <title>Refund & Return Policy | Veeyal</title>
                <meta name="description" content="Veeyal Refund and Return Policy - Satisfaction guaranteed or your money back." />
            </Helmet>
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-8">Refund & Return Policy</h1>
                <div className="prose prose-emerald max-w-none text-gray-600">
                    <h3>Our Guarantee</h3>
                    <p>
                        We stand by the purity of our oils. If you are not satisfied with your purchase, we are here to help.
                    </p>
                    <h3>Returns</h3>
                    <p>
                        You have 7 calendar days to return an item from the date you received it. To be eligible for a return, your item must be unused and in the same condition that you received it. Your item must be in the original packaging.
                    </p>
                    <h3>Refunds</h3>
                    <p>
                        Once we receive your item, we will inspect it and notify you that we have received your returned item. We will immediately notify you on the status of your refund after inspecting the item.
                        If your return is approved, we will initiate a refund to your original method of payment (or UPI). You will receive the credit within a certain amount of days, depending on your card issuer's policies.
                    </p>
                    <h3>Damaged Items</h3>
                    <p>
                        If you received a damaged product, please notify us immediately for assistance.
                    </p>
                    <h3>Contact Us</h3>
                    <p>If you have any questions on how to return your item to us, contact us at support@veeyal.com.</p>
                </div>
            </div>
        </div>
    );
};

export default RefundPolicy;
