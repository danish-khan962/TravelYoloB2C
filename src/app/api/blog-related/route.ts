import { NextResponse } from "next/server";

export async function GET() {
  try {
    const base = process.env.NEXT_PUBLIC_BACKEND_BASE_URL || "";
    const backendUrl = `${base.replace(/\/+$/, "")}/blog-related/`;

    console.log("Fetching related blogs from:", backendUrl);

    const res = await fetch(backendUrl, {
      headers: { "Content-Type": "application/json" },
      cache: "no-store",
    });

    if (!res.ok) {
      const text = await res.text();
      console.error("Backend error:", res.status, text);
      return NextResponse.json(
        { error: "Failed to fetch related blogs", status: res.status, details: text },
        { status: res.status }
      );
    }

    const data = await res.json();
    return NextResponse.json(data, { status: 200 });
  } catch (err: any) {
    console.error("Error fetching related blogs:", err);
    return NextResponse.json(
      { error: "Internal Server Error", details: err?.message ?? String(err) },
      { status: 500 }
    );
  }
}
