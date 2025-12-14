import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactUs = () => {
    return (
        <div className="py-24 bg-white">
            <Helmet>
                <title>Contact Us | Veeyal</title>
                <meta name="description" content="Contact Veeyal support. We are here to help you with your cold-pressed oil needs." />
            </Helmet>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold text-center text-gray-900 mb-16">Get in Touch</h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">

                    <div className="flex flex-col items-center text-center p-8 bg-stone-50 rounded-3xl">
                        <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-800 mb-6">
                            <Phone className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us</h3>
                        <p className="text-gray-500">Mon-Sat from 9am to 6pm</p>
                        <a href="tel:+918610871405" className="text-emerald-700 font-semibold mt-4 hover:underline">+91 86108 71405</a>
                    </div>

                    <div className="flex flex-col items-center text-center p-8 bg-stone-50 rounded-3xl">
                        <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-800 mb-6">
                            <Mail className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
                        <p className="text-gray-500">We'll get back to you within 24 hours</p>
                        <a href="mailto:support@veeyal.com" className="text-emerald-700 font-semibold mt-4 hover:underline">support@veeyal.com</a>
                    </div>

                    <div className="flex flex-col items-center text-center p-8 bg-stone-50 rounded-3xl">
                        <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-800 mb-6">
                            <MapPin className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Visit Us</h3>
                        <p className="text-gray-500">
                            123, Green Farm Road,<br />
                            Coimbatore, Tamil Nadu,<br />
                            India - 641001
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ContactUs;
