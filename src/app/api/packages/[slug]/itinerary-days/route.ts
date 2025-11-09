import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const { slug } = params;
  console.log("Fetching itinerary-days for slug:", slug);

  try {
    // Step 1: Fetch package by slug
    const packageUrl = `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}packages/${slug}/`;
    const packageRes = await fetch(packageUrl, {
      headers: { "Content-Type": "application/json" },
    });

    if (!packageRes.ok) {
      console.error("Package fetch failed:", packageRes.status);
      return NextResponse.json(
        { error: "Failed to fetch package details", status: packageRes.status },
        { status: packageRes.status }
      );
    }

    const packageData = await packageRes.json();
    const packageId = packageData.id;
    if (!packageId) {
      console.error("No package ID found in response:", packageData);
      return NextResponse.json(
        { error: "Package ID not found" },
        { status: 500 }
      );
    }

    // Step 2: Fetch itinerary days
    const itineraryUrl = `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}itinerary-days/?package=${packageId}`;
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

    // Step 3: Format result with lat/lng
    const formatted =
      itineraryData?.results?.map((day: any) => ({
        id: day.id,
        day_number: day.day_number,
        title: day.title,
        activities:
          typeof day.activities === "object"
            ? JSON.stringify(day.activities, null, 2)
            : String(day.activities || ""),
        latitude: day.latitude || null,  
        longitude: day.longitude || null, 
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
