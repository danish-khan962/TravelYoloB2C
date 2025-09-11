"use client"

import DestinationCard from '@/components/sections/Destinations/DestinationCard'
import DestinationGrid from '@/components/sections/Destinations/DestinationGrid'
import Hero from '@/components/sections/Destinations/Hero'
import React from 'react'
import { useState } from 'react'
import { FiChevronUp, FiChevronDown } from 'react-icons/fi'

const page = () => {

  // toggling chevrons
  const [regionChevron, setRegionChevron] = useState(false);
  const [seasonsChevron, setSeasonsChevron] = useState(false);

  const handleRegionChevronOpen = () => {
    setRegionChevron(!regionChevron);
  }

  const handleSeasonsChevronOpen = () => {
    setSeasonsChevron(!seasonsChevron)
  }

  return (
    <div>

      <Hero />

      <div className='w-full flex justify-center items-center px-4'>
        <div className='max-w-[748px] w-full mt-[72px] sm:mt-32'>
          {/* Desktop */}
          <div className='w-full px-12 max-sm:hidden'>
            <p className='text-[#6C3B3F] text-[24px] font-light italic font-noto-serif text-center leading-normal'>We’ve spent years on the ground, building trusted connections and curating one-of-a-kind experiences - so you don’t have to.
            </p>
            <p className='text-[#6C3B3F] text-[24px] font-light italic font-noto-serif text-center leading-normal'>Every journey is designed by us, with insight, care, and an instinct
              for what feels personal and truly unforgettable.
            </p>
          </div>
          {/* Mobile */}
          <div className='max-w-[375px w-[100%] sm:hidden'>
            <p className='text-[#6C3B3F] text-[16px] font-light italic font-noto-serif text-start leading-normal'>We’ve spent years on the ground, building trusted connections and curating one-of-a-kind experiences - so you don’t have to. Every journey is designed by us, with insight, care, and an instinct
              for what feels personal and truly unforgettable.</p>
          </div>
          <p className='text-[#6C3B3F] text-[16px] sm:text-[24px] font-light italic font-noto-serif text-start  sm:text-center leading-normal mt-[40px] w-[250px] sm:w-full'>Here are a few regions we know intimately, and love designing around: </p>
        </div>
      </div>

      <div className='w-full flex flex-col sm:flex-row justify-center items-center gap-x-6 mt-[100px] sm:mt-[200px] px-4 gap-y-6'>
        <div onClick={handleRegionChevronOpen} className='cursor-pointer flex flex-row justify-between items-center text-base md:text-[18px] lg:text-[20px] font-host-grotesk w-full sm:w-[250px] h-[50px] border border-[#312E29] py-2 px-4 rounded-full'>
          Region
          {regionChevron ? (<FiChevronUp className='text-[20px] sm:text-[30px]' />) : (<FiChevronDown className='text-[20px] sm:text-[30px]' />)}
        </div>
        <div onClick={handleSeasonsChevronOpen} className='cursor-pointer flex flex-row justify-between items-center text-base md:text-[18px] lg:text-[20px] font-host-grotesk w-full sm:w-[250px] h-[50px] border border-[#312E29] py-2 px-4 rounded-full'>
          Seasons
          {seasonsChevron ? (<FiChevronUp className='text-[20px] sm:text-[30px]' />) : (<FiChevronDown className='text-[20px] sm:text-[30px]' />)}
        </div>
      </div>

      <div className='mt-[51px] sm:mt-[124px] mb-[100px] sm:mb-[78px]'>
        <DestinationGrid />
      </div>
    </div>
  )
}

export default page