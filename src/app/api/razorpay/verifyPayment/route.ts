// src/app/api/razorpay/verifyPayment/route.ts
import crypto from "crypto";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = body;

    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      console.log("Missing Razorpay params", body);
      return NextResponse.json({ verified: false, reason: "missing_fields" });
    }

    const secret = process.env.RAZORPAY_KEY_SECRET;
    if (!secret) {
      console.error("Missing RAZORPAY_KEY_SECRET in env");
      return NextResponse.json({ verified: false, reason: "no_secret" });
    }

    const hmac = crypto.createHmac("sha256", secret);
    hmac.update(`${razorpay_order_id}|${razorpay_payment_id}`);
    const generatedSignature = hmac.digest("hex");

    const verified = generatedSignature === razorpay_signature;

    console.log({
      generatedSignature,
      razorpay_signature,
      verified,
    });

    return NextResponse.json({ verified });
  } catch (err: any) {
    console.error("Error verifying payment:", err);
    return NextResponse.json({ verified: false, reason: "server_error" });
  }
}
