import { NextResponse } from "next/server";

export async function GET() {
  try {
    console.log("Fetching package attractions...");

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}package-attractions/`,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        cache: "no-store",
      }
    );

    if (!res.ok) {
      const text = await res.text();
      console.error("Backend error:", res.status, text);
      return NextResponse.json(
        { error: `Failed to fetch package attractions: ${res.status}` },
        { status: res.status }
      );
    }

    const data = await res.json();
    console.log("Fetched package_attractions:", data);

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching package attractions:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
