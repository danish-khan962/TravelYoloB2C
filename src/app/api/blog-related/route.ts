import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const slug = searchParams.get("slug");
    const backendUrl = slug
      ? `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}blog-related/?slug=${slug}`
      : `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}blog-related/`;

    const res = await fetch(backendUrl, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    const text = await res.text();
    return new NextResponse(text, { status: res.status });
  } catch (error) {
    console.error("Error in /api/blog-related proxy:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
