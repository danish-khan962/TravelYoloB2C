"use client"

import React, { useState, useEffect, useRef } from 'react'
import BlogCard from '@/components/sections/Blog/BlogCard'
import HeroBlog from '@/components/sections/Blog/HeroBlog'
import { StaticImageData } from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

type BlogPost = {
  image: StaticImageData | string
  author: string
  date: string
  title: string
  description: string
}

const capsuleDate = [
  "Travel Tips", "Destination Guides", "Packing and Visa info", "Culture & Food"
]

const Page = () => {
  const [blogData, setBlogData] = useState<BlogPost[]>([])
  const [visibleCount, setVisibleCount] = useState(3)
  const [isMobile, setIsMobile] = useState(false)
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  
  // ref to capsule container to detect outside clicks
  const capsuleContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const response = await fetch('/json/blogData.json')
        if (!response.ok) throw new Error('Failed to load blog data')
        const data = await response.json()
        setBlogData(data)
      } catch (error) {
        console.error('Error fetching blog data:', error)
      }
    }

    fetchBlogData()
  }, [])

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Click outside handler to clear active capsule
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        capsuleContainerRef.current &&
        !capsuleContainerRef.current.contains(event.target as Node)
      ) {
        setActiveIndex(null)
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])

  const visibleData = isMobile ? blogData.slice(0, visibleCount) : blogData

  const handleCapsuleClick = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index)
  }

  return (
    <div>
      <HeroBlog />

      {/* Capsule tags */}
      <section className='relative px-4 md:px-0'>
        <div className="flex flex-col gap-y-7 sm:gap-y-10 justify-center items-center my-[5rem] md:my-32" ref={capsuleContainerRef}>
          <div className="max-w-[789px] w-full text-start md:text-center z-10">
            <p className="font-noto-serif text-[#6C3B3F] text-[24px] font-light italic max-sm:hidden">
              Get inspired by stories from the road, destination deep-dives, and expert <br /> travel tips. Our blog is your guide to traveling better.
            </p>
            <p className="font-noto-serif text-[#6C3B3F] text-[16px] md:text-[24px] font-light italic sm:hidden">
              Get inspired by stories from the road, destination deep-dives, and expert travel tips. Our blog is your guide to traveling better.
            </p>
          </div>

          <div className="w-full">
            {isMobile ? (
              <Swiper
                spaceBetween={16}
                slidesPerView={'auto'}
                className="px-4"
                grabCursor={true}
              >
                {capsuleDate.map((data, index) => (
                  <SwiperSlide key={index} style={{ width: '198px' }}>
                    <div
                      onClick={() => handleCapsuleClick(index)}
                      className={`w-[198px] h-[50px] border rounded-full text-center text-[16px] flex items-center justify-center mx-2 cursor-pointer
                        ${activeIndex === index 
                          ? 'bg-black text-white border-black' 
                          : 'border-[#312E29] text-black'}`}
                    >
                      {data}
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              <div className="flex justify-center items-center gap-x-5">
                {capsuleDate.map((data, index) => (
                  <div
                    key={index}
                    onClick={() => handleCapsuleClick(index)}
                    className={`w-[198px] h-[50px] border rounded-full text-center text-[16px] flex items-center justify-center cursor-pointer
                      ${activeIndex === index 
                        ? 'bg-black text-white border-black' 
                        : 'border-[#312E29] text-black'}`}
                  >
                    {data}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Blog cards */}
      <section className='w-full max-w-[1440px] mx-auto sm:px-6 lg:px-8 flex justify-center items-center mb-[100px]'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-5 px-4'>
          {visibleData.map((post, index) => (
            <BlogCard
              key={index}
              image={post.image}
              author={post.author}
              date={post.date}
              title={post.title}
              description={post.description}
            />
          ))}
        </div>
      </section>

      {/* Show More */}
      {isMobile && visibleCount < blogData.length && (
        <div className='w-full flex justify-center items-center mt-[70px]  mb-[100px]'>
          <button
            onClick={() => setVisibleCount(prev => prev + 3)}
            className='w-[341px] h-[50px] text-[20px] font-host-grotesk font-medium border border-[#312E29] rounded-full md:hidden hover:bg-[#312E29] hover:text-white transition-all ease-in-out duration-200 hover:scale-105 cursor-pointer'
          >
            Show more
          </button>
        </div>
      )}
    </div>
  )
}

export default Page
