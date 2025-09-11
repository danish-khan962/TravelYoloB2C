'use client'

import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

import ItineraryCard from './ItineraryCard'

type Attraction = {
  image: string
  title: string
  description: string
}

const ItinerarySwiper = () => {
  const [attractions, setAttractions] = useState<Attraction[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/json/topAttractions.json')
        const data = await res.json()
        setAttractions(data)
      } catch (error) {
        console.error('Failed to load itinerary data:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <div className="relative md:w-screen md:-ml-6 md:pl-6 lg:-ml-16 lg:pl-16">
      <Swiper
        modules={[]}
        spaceBetween={20}
        slidesPerView={1.1}
        loop={true}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3.5 },
        }}
      >
        {attractions.map((item, index) => (
          <SwiperSlide key={index}>
            <ItineraryCard
              image={item.image}
              title={item.title}
              description={item.description}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default ItinerarySwiper
