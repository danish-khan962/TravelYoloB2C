'use client';

import React, { useState, useEffect } from 'react';
import CalendarSection from '@/components/sections/TripPlanner/CalendarSection';
import Hero from '@/components/sections/TripPlanner/Hero';
import PackageCardGrid from '@/components/sections/TripPlanner/PackageCardGrid';
import PackageGrid2 from '@/components/sections/TripPlanner/PackageGrid2';

const Page: React.FC = () => {
  const [destinations, setDestinations] = useState<any[]>([]);
  const [visibleCount, setVisibleCount] = useState(3);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    fetch('/json/popularPackages.json')
      .then((res) => res.json())
      .then((data) => setDestinations(data))
      .catch((err) => console.error('Error loading packages:', err));
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  const packagesToShow = isSmallScreen ? destinations.slice(0, visibleCount) : destinations;

  return (
    <div>
      <Hero />

      <div className='px-4 md:px-10 lg:px-16 flex flex-col sm:flex-row gap-x-[130px] gap-y-[20px] mt-[60px] items-start sm:items-center'>
        <p className='font-noto-serif text-[30px] sm:text-[40px] font-light italic leading-tight'>
          Let&apos;s Design <br />
          Your Journey
        </p>
        <p className='max-w-[700px] w-full text-[16px] sm:text-[20px] leading-[22px] sm:leading-[28px]'>
          Start building your custom itinerary with the help of our expert travel designers. Whether you have a destination in mind or are seeking inspiration, we’ll take care of every detail.
        </p>
      </div>

      <div className='flex justify-center items-center mt-[77px]'>
        <CalendarSection />
      </div>

      <div className='w-full flex justify-center items-center mt-[45px] px-4'>
        <form className='max-w-[800px] w-full flex flex-col gap-y-[19px]'>
          <input
            type='text'
            placeholder='Full name*'
            className='w-full text-[18px] font-normal outline-none border border-[#98B6E2] rounded p-3 placeholder:text-[#727272] placeholder:text-[16px] font-host-grotesk'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type='text'
            placeholder='Email*'
            className='w-full text-[18px] font-normal outline-none border border-[#98B6E2] rounded p-3 placeholder:text-[#727272] placeholder:text-[16px] font-host-grotesk'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type='text'
            placeholder='Phone'
            className='w-full text-[18px] font-normal outline-none border border-[#98B6E2] rounded p-3 placeholder:text-[#727272] placeholder:text-[16px] font-host-grotesk'
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <div className='text-[20px] mt-[55px] font-host-grotesk ml-4'>Suggested packages</div>

          <div className='w-screen lg:ml-[-35%]'>
            <PackageCardGrid />
          </div>

          <div className='flex items-start gap-4 mt-[47px]'>
            <input
              type='checkbox'
              className='appearance-none mt-[6px] w-[23px] h-[23px] border-2 border-black rounded-sm checked:bg-blue-400 checked:border-black'
            />
            <p className='max-w-[650px] w-full font-host-grotesk font-light text-[16px] sm:text-[20px] leading-[22px] sm:leading-[28px]'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <button
            className='w-full sm:w-[241px] h-[55px] bg-[#312E29] text-white hover:scale-105 cursor-pointer transition-all ease-in-out duration-200 mt-[46px] sm:mt-[57px] rounded-full'
            onClick={handleFormSubmit}
          >
            Talk to a Planner
          </button>
        </form>
      </div>

      <div className='bg-[#F9F9F9] mt-[100px] sm:mt-[135px]'>
        <div className='px-4 md:px-10 lg:px-26 pt-[55px] sm:pt-[104px] mb-[55px] sm:mb-[40px]'>
          <p className='font-noto-serif text-[32px] sm:text-[40px] font-light italic leading-tight text-center sm:text-start'>
            Popular Packages
          </p>
        </div>

        <PackageGrid2 destinations={packagesToShow} />

        {isSmallScreen && visibleCount < destinations.length && (
          <div className='flex justify-center items-center mt-[70px] mb-[130px]'>
            <button
              onClick={handleShowMore}
              className='py-2 w-[341px] text-[20px] font-medium font-host-grotesk sm:hidden border border-[#312E29] rounded-full hover:text-white hover:bg-[#312E29] hover:scale-105 cursor-pointer transition-all ease-in-out duration-200'
            >
              Show more
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
