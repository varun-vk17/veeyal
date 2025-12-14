import React from 'react';
import QRCode from 'react-qr-code';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { CheckCircle2, Copy, Smartphone } from 'lucide-react';
import { toast } from 'sonner';

export function UPIPayment({ orderId, amount, onPaymentComplete, onCancel }) {
    // 1. Construct UPI String
    // Format: upi://pay?pa={vpa}&pn={name}&am={amount}&tr={ref}&cu=INR
    const vpa = "varunkumaran170-1@okaxis";
    const name = "Veeyal"; // Short name to avoid encoding issues
    const formattedAmount = parseFloat(amount).toFixed(2);
    // Simplified UPI String (Removed 'tr' to prevent app rejection)
    const upiUrl = `upi://pay?pa=${vpa}&pn=${name}&am=${formattedAmount}&cu=INR`;

    const copyVPA = () => {
        navigator.clipboard.writeText(vpa);
        toast.success("UPI ID copied!");
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in zoom-in-95">
            <Card className="w-full max-w-md shadow-2xl bg-white">
                <CardHeader className="text-center border-b pb-4">
                    <CardTitle className="text-xl font-bold text-emerald-900">Scan & Pay ₹{amount}</CardTitle>
                    <CardDescription>
                        Order ID: <span className="font-mono text-emerald-600">{orderId.slice(-6).toUpperCase()}</span>
                    </CardDescription>
                </CardHeader>

                <CardContent className="pt-6 space-y-6">
                    {/* QR Code Section */}
                    <div className="flex flex-col items-center justify-center space-y-3">
                        <div className="p-3 bg-white border-2 border-emerald-100 rounded-2xl shadow-inner">
                            <QRCode
                                value={upiUrl}
                                size={180}
                                level="M"
                                viewBox={`0 0 256 256`}
                            />
                        </div>
                        <p className="text-xs text-gray-500">Scan with any UPI App</p>
                    </div>

                    {/* VPA Display */}
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-100">
                        <div className="flex flex-col">
                            <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">UPI ID</span>
                            <span className="font-medium text-gray-700">{vpa}</span>
                        </div>
                        <Button variant="ghost" size="icon" onClick={copyVPA} className="h-8 w-8 text-gray-400 hover:text-emerald-600">
                            <Copy className="h-4 w-4" />
                        </Button>
                    </div>

                    {/* Mobile Deep Links */}
                    <div className="grid grid-cols-2 gap-3">
                        <a href={upiUrl} className="col-span-2">
                            <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white h-12 rounded-xl" size="lg">
                                <Smartphone className="mr-2 h-5 w-5" /> Open UPI App
                            </Button>
                        </a>
                    </div>

                    {/* Confirmation Action */}
                    <div className="pt-2">
                        <Button
                            onClick={onPaymentComplete}
                            className="w-full bg-black hover:bg-gray-800 text-white h-12 rounded-xl text-base font-semibold shadow-lg shadow-black/10"
                        >
                            <CheckCircle2 className="mr-2 h-5 w-5 text-green-400" />
                            I Have Paid
                        </Button>
                        <p className="text-[10px] text-center text-gray-400 mt-2 px-4">
                            Clicking this will confirm your order and open WhatsApp to send proof of payment.
                        </p>
                    </div>

                    <button
                        onClick={onCancel}
                        className="w-full text-center text-sm text-gray-400 hover:text-red-500 py-2"
                    >
                        Cancel Payment
                    </button>
                </CardContent>
            </Card>
        </div>
    );
}
