import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const { slug } = params;
  console.log("Fetching itinerary-days for slug:", slug);

  try {
    // Fetch package by slug to get its ID
    const packageUrl = `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}packages/${slug}/`;
    console.log("Package fetch URL:", packageUrl);

    const packageRes = await fetch(packageUrl, {
      headers: { "Content-Type": "application/json" },
    });

    if (!packageRes.ok) {
      console.error(" Package fetch failed:", packageRes.status);
      return NextResponse.json(
        { error: "Failed to fetch package details", status: packageRes.status },
        { status: packageRes.status }
      );
    }

    const packageData = await packageRes.json();
    console.log(" Package fetched:", packageData);

    const packageId = packageData.id;
    if (!packageId) {
      console.error(" No package ID found in response:", packageData);
      return NextResponse.json(
        { error: "Package ID not found" },
        { status: 500 }
      );
    }

    // Fetch itinerary days using that package ID
    const itineraryUrl = `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}itinerary-days/?package=${packageId}`;
    console.log("Itinerary fetch URL:", itineraryUrl);

    const itineraryRes = await fetch(itineraryUrl, {
      headers: { "Content-Type": "application/json" },
      cache: "no-store",
    });

    if (!itineraryRes.ok) {
      console.error("Itinerary fetch failed:", itineraryRes.status);
      return NextResponse.json(
        { error: "Failed to fetch itinerary days", status: itineraryRes.status },
        { status: itineraryRes.status }
      );
    }

    const itineraryData = await itineraryRes.json();
    console.log("Itinerary fetched:", itineraryData);

    const formatted =
      itineraryData?.results?.map((day: any) => ({
        id: day.id,
        day_number: day.day_number,
        title: day.title,
        activities:
          typeof day.activities === "object"
            ? JSON.stringify(day.activities, null, 2)
            : String(day.activities || ""),
      })) || [];

    return NextResponse.json(formatted, { status: 200 });
  } catch (err: any) {
    console.error("Error in itinerary-days route:", err);
    return NextResponse.json(
      { error: "Internal Server Error", details: err.message },
      { status: 500 }
    );
  }
}
