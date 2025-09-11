"use client"

import Testimonials from '@/components/sections/Experiences/Testimonials'
import WhatIsIncluded from '@/components/sections/Experiences/WhatIsIncluded'
import Hero from '@/components/sections/Itinerary/Hero'
import ItinerarySwiper from '@/components/sections/Itinerary/ItinerarySwiper'
import Timeline from '@/components/sections/Itinerary/Timeline'
import React from 'react'
import dynamic from "next/dynamic"
import Link from 'next/link'

const LeafletMap = dynamic(() => import('@/components/sections/Itinerary/LeafletMap'), {
  ssr: false,
})

const page = () => { 
    return (
        <div>
            {/* Hero section */}
            <Hero />


            {/* Overview */}
            <div className='w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex flex-col items-start mt-[86px] sm:mt-[157px]'>
                    <h1 className='text-[32px] sm:text-[40px] text-[#6C3B3F] font-noto-serif font-light italic'>Overview</h1>
                    <p className='max-w-[911px] w-full font-host-grotesk font-light text-start text-base sm:text-[20px] mt-[18px] sm:mt-[24px] sm:leading-snug text-[#312E29] pr-0 sm:pr-2'>
                      A seamless blend of heritage, opulence, and personalized service. Discover timeless sights, stay in handpicked luxury hotels, and enjoy curated private tours—all designed to immerse you in culture and comfort without compromise.
                    </p>
                </div>
                

                {/* Top attractions */}
                <div className='mt-[66px] sm:[79px]'>
                    <h1 className='text-[32px] sm:text-[40px] text-[#000000] font-noto-serif font-light italic'>Top Attractions</h1>
                    <div className='mt-[30px] sm:mt-[33px]'>
                        <ItinerarySwiper />
                    </div>
                </div>


                {/* Itinerary Plans & Live Map*/}
                <div className='mt-[121px] sm:mt-[139px]'>
                    <h1 className='text-[32px] sm:text-[40px] text-[#000000] font-noto-serif font-light italic'>Itinerary Plan</h1>
                    <div className='flex flex-col md:flex-row justify-between items-center gap-y-[129px] gap-x-[68px]'>
                        <div>
                            <Timeline />
                        </div>
                        <div className='h-[280px] sm:h-[400px] md:h-[750px] lg:h-[920px] xl:h-[880px] max-w-[660px] w-screen sm:w-full'>
                            <LeafletMap />
                        </div>
                    </div>
                </div>


                {/*  What is included | Accordion */}
                <div className='mt-[80px] sm:mt-[160px]'>
                    <WhatIsIncluded />
                    <div className='hidden sm:flex flex-col sm:flex-row justify-center items-center sm:justify-start sm:items-start gap-4 mt-[100px] sm:mt-[148px]'>
                        <button className='w-full sm:w-[223px] h-[54px] bg-[#312E29] text-white rounded-full cursor-pointer hover:scale-105 transition-all ease-in-out duration-200'>Book now</button>
                        <button className='w-full sm:w-[223px]  h-[54px] border border-[#312E29] bg-white rounded-full cursor-pointer hover:scale-105 transition-all ease-in-out duration-200'>Book Discovery call</button>
                    </div>
                </div>
            </div>


            {/* Testimonials */}
            <div className='bg-[#F9F9F9] mt-[106px] sm:mt-[211px] pb-[94px] sm:pb-[218px]'>
                <div className='w-full pt-[124px] md:pt-[192px]'>
                    <Testimonials />
                </div>
            </div>


            {/* Mobile buttons for Booking */}
            <div className='w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pb-[100px]'>
                <div className='flex sm:hidden flex-col sm:flex-row justify-center items-center sm:justify-start sm:items-start gap-4 mt-[100px] sm:mt-[148px]'>
                    <button className='w-full sm:w-[223px] h-[54px] bg-[#312E29] text-white rounded-full cursor-pointer hover:scale-105 transition-all ease-in-out duration-200'>Book now</button>
                    
                    <Link href={"/contact"}>
                        <button className='w-full sm:w-[223px]  h-[54px] border border-[#312E29] bg-white rounded-full cursor-pointer hover:scale-105 transition-all ease-in-out duration-200'>Book Discovery call</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default page
