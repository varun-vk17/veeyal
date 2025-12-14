import React from 'react';
import { Helmet } from 'react-helmet-async';

const PrivacyPolicy = () => {
    return (
        <div className="py-24 bg-white">
            <Helmet>
                <title>Privacy Policy | Veeyal</title>
                <meta name="description" content="Privacy Policy for Veeyal - How we collect, use, and protect your data." />
            </Helmet>
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
                <div className="prose prose-emerald max-w-none text-gray-600">
                    <p>Last updated: December 14, 2025</p>
                    <p>
                        This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
                    </p>
                    <h3>Collecting and Using Your Personal Data</h3>
                    <p>
                        While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:
                    </p>
                    <ul>
                        <li>Email address</li>
                        <li>First name and last name</li>
                        <li>Phone number</li>
                        <li>Address, State, Province, ZIP/Postal code, City</li>
                    </ul>
                    <h3>Security of Your Personal Data</h3>
                    <p>
                        The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.
                    </p>
                    <h3>Contact Us</h3>
                    <p>If you have any questions about this Privacy Policy, You can contact us:</p>
                    <ul>
                        <li>By email: support@veeyal.com</li>
                        <li>By phone: +91 86108 71405</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
