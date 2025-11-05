// components/RazorpayCheckout.tsx
'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

type Props = {
  amount: number;
  currency?: string;
  receipt?: string;
  notes?: Record<string, string>;
  name?: string;
  description?: string;
  image?: string;
  payload?: Record<string, any>;
};

const loadRazorpayScript = (): Promise<boolean> =>
  new Promise((resolve) => {
    if (typeof window === 'undefined') return resolve(false);
    if ((window as any).Razorpay) return resolve(true);

    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });

export default function RazorpayCheckout({
  amount,
  currency = 'INR',
  receipt,
  notes,
  name = 'Your Company',
  description = 'Payment',
  image,
  payload = {},
}: Props) {
  const router = useRouter();
  const PUBLIC_KEY = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!;

  const onPay = async () => {
    if (!PUBLIC_KEY) {
      alert('Public key not found');
      return;
    }

    // Create order from your API
    const orderRes = await fetch('/api/razorpay/createOrder', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount, currency, receipt, notes }),
    });

    const data = await orderRes.json();
    if (!orderRes.ok || !data.order) {
      console.error('Order creation failed', data);
      return;
    }

    const order = data.order;
    const loaded = await loadRazorpayScript();
    if (!loaded) {
      alert('Failed to load Razorpay SDK');
      return;
    }

    const baseUrl = window.location.origin;

    const options = {
      key: PUBLIC_KEY,
      amount: order.amount,
      currency: order.currency,
      name,
      description,
      image,
      order_id: order.id,

      // Disable Razorpay auto-redirect
      redirect: false,

      handler: async (response: any) => {
        try {
          const verifyRes = await fetch('/api/razorpay/verifyPayment', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              payload,
            }),
          });

          const verifyJson = await verifyRes.json();
          console.log("VERIFY RESPONSE:", verifyJson);

          const baseUrl = window.location.origin;

          if (verifyJson?.verified === true) {
            console.log("Payment Verified — Redirecting...");
            setTimeout(() => {
              window.location.href = `${baseUrl}/payments/result?status=success&order_id=${response.razorpay_order_id}&payment_id=${response.razorpay_payment_id}`;
            }, 500);
          } else {
            console.log("❌ Payment Verification Failed — Redirecting...");
            setTimeout(() => {
              window.location.href = `${baseUrl}/payments/result?status=failure&order_id=${response.razorpay_order_id}`;
            }, 500);
          }
        } catch (err) {
          console.error("❌ Error verifying payment:", err);
          const baseUrl = window.location.origin;
          window.location.href = `${baseUrl}/payments/result?status=failure&reason=server_error`;
        }

        // Prevent Razorpay auto-redirect
        return false;
      },




      prefill: {
        name: '',
        email: '',
        contact: '',
      },
      notes,
      theme: { color: '#F37254' },

      modal: {
        ondismiss: function () {
          console.log('User closed payment');
          window.location.href = `${baseUrl}/payments/result?status=failure&reason=user_cancelled`;
        },
      },
    };

    const rzp = new (window as any).Razorpay(options);

    //  Explicitly catch failed payments
    rzp.on('payment.failed', (response: any) => {
      console.error('Payment failed:', response.error);
      window.location.href = `${baseUrl}/payments/result?status=failure&reason=${response.error.reason || 'payment_failed'}`;
    });

    rzp.open();
  };

  return (
    <button
      onClick={onPay}
      className="px-5 py-2 rounded-full bg-slate-800 text-white hover:opacity-90"
    >
      Pay ₹{amount}
    </button>
  );
}
