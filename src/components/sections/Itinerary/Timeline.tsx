"use client"

import React, { useEffect, useState } from "react"

type TimelineItem = {
  step: number
  title: string
  details: string[]
}

const Timeline = () => {
  const [timelineData, setTimelineData] = useState<TimelineItem[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch("/json/timelineData.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch timeline data.")
        }
        return res.json()
      })
      .then((data) => {
        setTimelineData(data)
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  if (loading) return <p className="text-center text-[#312E29]">Loading timeline...</p>
  if (error) return <p className="text-center text-red-500">Error: {error}</p>

  return (
    <div className="relative w-full mt-[36px] sm:mt-[73px]">
      {/* Vertical line */}
      <div className="absolute left-[25px] top-0 h-full bg-[#E4D2A4] w-[2px] -translate-x-1/2" />

      {/* Timeline items */}
      <div className="space-y-[42px]">
        {timelineData.map((item, index) => (
          <div key={index} className="relative flex items-start">
            {/* Step Number */}
            <div className="flex items-center justify-center w-[49px] h-[55px] bg-white text-[#312E29] border-2 border-[#E4D2A4] rounded-full rounded-b-[25%] font-medium absolute left-0 font-noto-serif italic text-[20px]">
              {item.step}
            </div>

            {/* Content */}
            <div className="ml-[85px]">
              <h3 className="font-semibold text-[#6C3B3F] font-host-grotesk text-base sm:text-[18px] md:text-[20px]">
                {item.title}
              </h3>
              <ul className="mt-2 space-y-1">
                {item.details.map((detail, i) => (
                  <li
                    key={i}
                    className="text-[#312E29] font-host-grotesk text-base sm:text-[18px] md:text-[20px]"
                  >
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Timeline
