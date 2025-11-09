"use client";

import React, { useEffect, useState } from "react";

type TimelineItem = {
  id: string;
  day_number: number;
  title: string;
  activities: string;
};

const Timeline = ({ packageSlug }: { packageSlug: string }) => {
  const [timelineData, setTimelineData] = useState<TimelineItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!packageSlug) return;

    const fetchItineraryDays = async () => {
      try {
        const res = await fetch(`/api/packages/${packageSlug}/itinerary-days`, {
          cache: "no-store",
        });

        if (!res.ok) throw new Error(`Failed to fetch itinerary data`);
        const data = await res.json();

        setTimelineData(data);
      } catch (err: any) {
        console.error("Itinerary fetch error:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchItineraryDays();
  }, [packageSlug]);

  if (loading)
    return (
      <div className="relative w-full mt-[36px] sm:mt-[73px] animate-pulse">
        <div className="absolute left-[25px] top-0 h-full bg-[#E4D2A4]/60 w-[2px] -translate-x-1/2" />
        <div className="space-y-[42px]">
          {[1, 2, 3, 4].map((_, index) => (
            <div key={index} className="relative flex items-start">
              <div className="flex items-center justify-center w-[49px] h-[55px] bg-[#F3EDE3] border-2 border-[#E4D2A4]/70 rounded-full rounded-b-[25%] absolute left-0">
                <div className="w-[20px] h-[20px] bg-[#E4D2A4]/70 rounded-full" />
              </div>
              <div className="ml-[85px] space-y-3 w-full max-w-[600px]">
                <div className="h-[22px] w-[60%] bg-[#E4D2A4]/50 rounded" />
                <div className="h-[18px] w-[90%] bg-[#E4D2A4]/40 rounded" />
                <div className="h-[18px] w-[70%] bg-[#E4D2A4]/40 rounded" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );

  // if API failed
  if (error)
    return (
      <p className="text-center text-[#312E29] font-host-grotesk text-lg sm:text-xl italic mt-8">
        Itinerary plan is not available.
      </p>
    );

  // if no itinerary data found
  if (!timelineData || timelineData.length === 0)
    return (
      <p className="text-center text-[#312E29] font-host-grotesk text-lg sm:text-xl italic mt-8">
        Itinerary plan is not available.
      </p>
    );

  return (
    <div className="relative w-full mt-[36px] sm:mt-[73px]">
      <div className="absolute left-[25px] top-0 h-full bg-[#E4D2A4] w-[2px] -translate-x-1/2" />
      <div className="space-y-[42px]">
        {timelineData.map((item) => {
          // fix for array or JSON-string activities
          let activitiesArray: string[] = [];

          if (Array.isArray(item.activities)) {
            activitiesArray = item.activities;
          } else if (typeof item.activities === "string") {
            try {
              const parsed = JSON.parse(item.activities);
              if (Array.isArray(parsed)) {
                activitiesArray = parsed;
              } else {
                activitiesArray = item.activities.split("\n");
              }
            } catch {
              activitiesArray = item.activities.split("\n");
            }
          }

          return (
            <div key={item.id} className="relative flex items-start">
              <div className="flex items-center justify-center w-[49px] h-[55px] bg-white text-[#312E29] border-2 border-[#E4D2A4] rounded-full rounded-b-[25%] font-medium absolute left-0 font-noto-serif italic text-[20px]">
                {item.day_number}
              </div>
              <div className="ml-[85px]">
                <h3 className="font-semibold text-[#6C3B3F] font-host-grotesk text-base sm:text-[18px] md:text-[20px]">
                  {item.title}
                </h3>
                <ul className="mt-2 space-y-1 list-disc list-inside">
                  {activitiesArray
                    .filter((a) => a.trim() !== "")
                    .map((activity, i) => (
                      <li
                        key={i}
                        className="text-[#312E29] font-host-grotesk text-base sm:text-[18px] md:text-[20px]"
                      >
                        {activity}
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Timeline;
