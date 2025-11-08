import { NextResponse } from "next/server";

export async function GET(request: Request, { params }: { params: { slug: string } }) {
  const { slug } = params;

  try {
    console.log("Fetching:", `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}packages/${slug}`);

    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}packages/${slug}`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      cache: "no-store",
    });

    if (!res.ok) {
      const text = await res.text();
      console.error("Backend error:", res.status, text);
      return NextResponse.json({ error: `Failed to fetch: ${res.status}` }, { status: res.status });
    }

    const data = await res.json();

    const filteredData = {
      title: data?.title || "Untitled",
      duration_days: data?.duration_days || null,
      duration_nights: data?.duration_nights || null,
      image: data?.image || "/images/default-package.jpg",
      description: data?.description || data?.overview || "No description available.",
    };

    return NextResponse.json(filteredData);
  } catch (error) {
    console.error("Error fetching package:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
