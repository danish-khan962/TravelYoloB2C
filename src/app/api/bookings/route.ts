// /app/api/bookings/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Map payload to backend-required keys
    const formatted = {
      user_id: body.user_id || body.user,      // use correct field name
      package_id: body.package_id || body.package,
      start_date: body.start_date,
      end_date: body.end_date,
      traveler_count: body.traveler_count,
      total_amount: body.total_amount,
      currency: body.currency,
      status: body.status || "pending",
      contact_email: body.contact_email,
      contact_phone: body.contact_phone,
    };

    console.log("➡️ Forwarding booking payload to CMS:", formatted);

    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}bookings/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Add Authorization header later if needed:
        // "Authorization": `Bearer ${process.env.API_AUTH_TOKEN}`,
      },
      body: JSON.stringify(formatted),
    });

    const data = await res.json();
    console.log("📘 /bookings → CMS response:", res.status, data);

    return NextResponse.json(data, { status: res.status });
  } catch (error) {
    console.error("❌ Error in /api/bookings:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
