"use client"

import DestinationGrid from '@/components/sections/Destinations/DestinationGrid'
import Hero from '@/components/sections/Destinations/Hero'
import React, { useState } from 'react'
import { FiChevronUp, FiChevronDown } from 'react-icons/fi'

const page = () => {

  // dropdown toggles
  const [regionChevron, setRegionChevron] = useState(false);
  const [seasonsChevron, setSeasonsChevron] = useState(false);

  // selected states
  const [selectedRegion, setSelectedRegion] = useState('');
  const [selectedSeason, setSelectedSeason] = useState('');

  // dropdown options
  const regions = [
    "Maldives",
    "India",
    "Japan",
    "Thailand",
    "Vietnam",
    "Cambodia",
    "Indonesia",
  ];

  const seasons = [
    "Winter",
    "Summer",
    "Spring"
  ];

  // toggle functions
  const handleRegionChevronOpen = () => {
    setRegionChevron(!regionChevron);
    setSeasonsChevron(false);
  }

  const handleSeasonsChevronOpen = () => {
    setSeasonsChevron(!seasonsChevron);
    setRegionChevron(false);
  }

  // handle selection
  const handleRegionSelect = (region: string) => {
    setSelectedRegion(region);
    setRegionChevron(false);
  }

  const handleSeasonSelect = (season: string) => {
    setSelectedSeason(season);
    setSeasonsChevron(false);
  }

  return (
    <div>

      <Hero />

      <div className='w-full flex justify-center items-center px-4'>
        <div className='max-w-[748px] w-full mt-[72px] sm:mt-32'>
          {/* Desktop */}
          <div className='w-full px-12 hidden sm:block'>
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

      {/* Filters */}
      <div className='w-full flex flex-col sm:flex-row justify-center items-center gap-x-6 mt-[100px] sm:mt-[200px] px-4 gap-y-6 relative'>
        {/* Region */}
        <div className='relative w-full sm:w-[250px]'>
          <div
            onClick={handleRegionChevronOpen}
            className={`cursor-pointer flex flex-row justify-between items-center text-base md:text-[18px] lg:text-[20px] font-host-grotesk w-full h-[50px] border border-[#312E29] py-2 px-4 rounded-full transition-all duration-200
              ${selectedRegion ? 'bg-[#312E29] text-white' : 'bg-transparent text-[#312E29]'}`}
          >
            {selectedRegion || 'Region'}
            {regionChevron ? (
              <FiChevronUp className={`text-[20px] sm:text-[30px] ${selectedRegion ? 'text-white' : 'text-[#312E29]'}`} />
            ) : (
              <FiChevronDown className={`text-[20px] sm:text-[30px] ${selectedRegion ? 'text-white' : 'text-[#312E29]'}`} />
            )}
          </div>

          {regionChevron && (
            <div className='absolute top-[60px] left-0 w-full bg-white border border-[#312E29] rounded-xl shadow-md z-10'>
              {regions.map((region, index) => (
                <div
                  key={index}
                  onClick={() => handleRegionSelect(region)}
                  className='px-4 py-2 hover:font-medium transition-all duration-200 ease-in-out cursor-pointer text-[16px] font-host-grotesk'
                >
                  {region}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Seasons */}
        <div className='relative w-full sm:w-[250px]'>
          <div
            onClick={handleSeasonsChevronOpen}
            className={`cursor-pointer flex flex-row justify-between items-center text-base md:text-[18px] lg:text-[20px] font-host-grotesk w-full h-[50px] border border-[#312E29] py-2 px-4 rounded-full transition-all duration-200
              ${selectedSeason ? 'bg-[#312E29] text-white' : 'bg-transparent text-[#312E29]'}`}
          >
            {selectedSeason || 'Seasons'}
            {seasonsChevron ? (
              <FiChevronUp className={`text-[20px] sm:text-[30px] ${selectedSeason ? 'text-white' : 'text-[#312E29]'}`} />
            ) : (
              <FiChevronDown className={`text-[20px] sm:text-[30px] ${selectedSeason ? 'text-white' : 'text-[#312E29]'}`} />
            )}
          </div>

          {seasonsChevron && (
            <div className='absolute top-[60px] left-0 w-full bg-white border border-[#312E29] rounded-xl shadow-md z-10'>
              {seasons.map((season, index) => (
                <div
                  key={index}
                  onClick={() => handleSeasonSelect(season)}
                  className='px-4 py-2 hover:font-medium transition-all duration-200 ease-in-out cursor-pointer text-[16px] font-host-grotesk'
                >
                  {season}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className='mt-[51px] sm:mt-[124px] mb-[100px] sm:mb-[78px]'>
        <DestinationGrid />
      </div>
    </div>
  )
}

export default page
