import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const packageId = searchParams.get("package");

    const baseUrl = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;
    const backendUrl = packageId
      ? `${baseUrl}testimonials/?package=${packageId}`
      : `${baseUrl}testimonials/`;

    const response = await fetch(backendUrl, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      cache: "no-store",
    });

    if (!response.ok) {
      return new Response(
        JSON.stringify({ error: "Failed to fetch testimonials" }),
        { status: response.status }
      );
    }

    const data = await response.json();
    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    console.error("Proxy error:", error);
    return new Response(
      JSON.stringify({ error: "Internal Server Error" }),
      { status: 500 }
    );
  }
}

/*  POST endpoint for comment box */
export async function POST(request: Request) {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;
    const backendUrl = `${baseUrl}testimonials/`;

    const body = await request.json();

    // build payload for backend
    const payload = {
      content: body.comment, // the text from your input box
      reviewer_name: body.name || "Anonymous",
      rating: body.rating || 5,
      trip_title: body.tripTitle || "Traveler Story",
    };

    const response = await fetch(backendUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("POST failed:", response.status, errorText);
      return NextResponse.json(
        { error: "Failed to submit testimonial", details: errorText },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json({ success: true, data }, { status: 201 });
  } catch (error: any) {
    console.error("POST /api/testimonials error:", error);
    return NextResponse.json(
      { error: "Internal Server Error", details: error.message },
      { status: 500 }
    );
  }
}
