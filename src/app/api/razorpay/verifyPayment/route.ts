// src/app/api/razorpay/verifyPayment/route.ts
import crypto from "crypto";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export async function POST(req: Request) {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
      await req.json();

    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      console.log("Missing payment parameters");
      return NextResponse.json({ verified: false, error: "Missing parameters" });
    }

    const secret = process.env.RAZORPAY_KEY_SECRET;
    if (!secret) {
      console.error("Missing RAZORPAY_SECRET in env");
      return NextResponse.json({ verified: false, error: "Server config missing" });
    }

    const generatedSignature = crypto
      .createHmac("sha256", secret)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest("hex");

    console.log("Generated Signature:", generatedSignature);
    console.log("Razorpay Signature:", razorpay_signature);

    if (generatedSignature === razorpay_signature) {
      console.log("Payment verified successfully");
      return NextResponse.json({ verified: true });
    } else {
      console.log("Signature mismatch");
      return NextResponse.json({ verified: false });
    }
  } catch (error: any) {
    console.error("Error verifying payment:", error);
    return NextResponse.json({ verified: false, error: error.message });
  }
}
