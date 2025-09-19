"use client"

import Hero from '@/components/sections/Experiences/Hero'
import SignatureExperiencesWrapper from '@/components/sections/SignatureExperienceWrapper'
import React, { useEffect, useState } from 'react'
import WhatIsIncluded from '../../components/sections/Experiences/WhatIsIncluded'
import Testimonials from '../../components/sections/Experiences/Testimonials'
import BlogCard from '@/components/sections/Blog/BlogCard'
import EnquiryForm from '@/components/sections/Experiences/EnquiryForm'
import vector from "../../../public/images/img_vector.svg"
import Image from 'next/image'

type BlogPost = {
  image: string
  author: string
  date: string
  title: string
  description: string
}


const page = () => {
  const [blogData, setBlogData] = useState<BlogPost[]>([])

  useEffect(() => {
    fetch("/json/blogData.json")
      .then((res) => res.json())
      .then((data) => setBlogData(data.slice(0,3)))
  }, [])


  return (
    <div>
      <Hero />

      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 mt-[17px]">
        <p className='font-host-grotesk text-base sm:text-[18px] md:text-[22px] lg:text-[24px]'> Experiences{"  >>  "} <span className='text-[#6C3B3F]'> Adventure </span> </p>

        <div className='flex flex-col items-start mt-[55px] sm:mt-[120px]'>
          <h1 className='text-[32px] sm:text-[40px] text-[#6C3B3F] font-noto-serif font-light italic'>Package Overview</h1>
          <p className='max-w-[321px] sm:max-w-[830px] w-full font-host-grotesk font-light text-base sm:text-[20px] mt-[15px] sm:mt-[24px] sm:leading-snug text-[#312E29]'>Think private safaris, glacier hikes, and hot air balloons—designed for those who crave excitement with comfo</p>
        </div>

        <div className='flex flex-col items-start mt-[55px] sm:mt-[120px]'>
          <h1 className='text-[32px] sm:text-[40px] font-noto-serif font-light italic'>Experiences Itinerary</h1>
          <p className='max-w-[351px] sm:max-w-[635px] w-full font-host-grotesk font-light text-base sm:text-[20px] mt-[17px] sm:mt-[12px] sm:leading-snug text-[#312E29]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>

        <div className='w-full sm:w-screen mt-[56px] sm:mt-[150px]'>
          <SignatureExperiencesWrapper />
        </div>
      </div>


      <div className='w-full bg-[#F9F9F9] mt-[73px] sm:mt-[170px]'>
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 mt-[17px]">
          <WhatIsIncluded />
        </div>

        {/* Testimonials */}
        <div className='pt-[229px] md:pt-[289px]'>
          <Testimonials />
        </div>

        {/* Blogs */}
        <div className='w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 mt-[170px] sm:mt-[250px] pb-[86px] sm:pb-[160px]'>
          <h2
            className="hidden md:block text-[32px] sm:text-[40px] font-light italic leading-[33px] sm:leading-[44px] lg:leading-[55px] font-noto-serif"
            style={{ color: '#000000' }}
          >
            Blogs
          </h2>
          <div className='w-full flex justify-center items-center mt-[65px] sm:mt-[79px]'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-5'>
              {blogData.map((post, index) => (
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
          </div>
        </div>


      </div>


      {/* Enquiry or booking form section */}
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 mt-[79px] md:mt-[169px]">
        <h2
          className="text-[32px] sm:text-[40px] font-light italic leading-[33px] sm:leading-[44px] lg:leading-[55px] font-noto-serif"
          style={{ color: '#000000' }}
        >
          Enquiry or Booking Form
        </h2>

        <div className='relative w-full flex flex-col justify-start sm:justify-center items-start sm:items-center'>
          <div className="relative max-w-[789px] w-full text-start sm:text-center z-10">
            <p className=' text-[#6C3B3F] font-noto-serif font-light italic text-base sm:text-[18px] md:text-[20px] lg:text-[24px] text-start sm:text-center leading-[22px] sm:leading-[24px] md:leading-[26px] lg:leading-[34px] mt-[61px] sm:mt-[115px] max-w-[365px] sm:max-w-[1000px] w-full z-10'>
              Have a question, an idea, or just want to talk through what&apos;s possible? <br />
              We&apos;re ready when you are — no pressure, just a conversation.
            </p>
          </div>

          <Image
            src={vector}
            alt="vector background"
            height={1000}
            width={1000}
            className="absolute right-[20%] top-6 sm:top-10 sm:right-[30%] w-[161px] h-[150px] md:h-[192px]  md:w-[191px] opacity-100"
          />
        </div>

        <div className='mt-[67px] sm:mt-[94px] mb-[120px] sm:mb-[150px]'>
          <EnquiryForm />
        </div>
      </div>
    </div>
  )
}

export default page
