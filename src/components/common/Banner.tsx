'use client';

import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

const Banner = () => {
  return (
    <div className='hidden sm:flex w-screen bg-[#FFFFFF] sticky top-0 z-50'>
      <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-8 bg-[#FFFFFF] py-3">
        <div className="flex items-center justify-between relative">

          {/* Logo */}
          <div className="hidden sm:block flex-shrink-0">
            <Link href="/" aria-label="Go to homepage">
              <Image
                src="/new_logo_travelyollo.png"
                alt="TravelYollo Logo"
                width={260}
                height={42}
                className="w-[146px] h-[24px] sm:w-[200px] sm:h-[32px] md:w-[250px] md:h-[40px] lg:w-[250px] lg:h-[42px] xl:w-[292px] xl:h-[48px]"
                priority
              />
            </Link>
          </div>

          {/* Center Section: Call and Quote Info */}
          <div className="flex flex-wrap justify-start sm:justify-center items-center text-center gap-3 sm:gap-4 font-host-grotesk">
            <p className="text-[12px] sm:text-[14px] lg:text-[18px] font-normal">
              Call us today until 6 pm
            </p>

            <div className="flex items-center gap-2 text-[12px] sm:text-[14px] lg:text-[18px] font-normal">
              <FaPhoneAlt />
              <Link href="tel:9870066000" className="hover:cursor-pointer hover:underline">
                +1 561-941-4991
              </Link>
            </div>

            <div className="flex items-center gap-3">
              <p className="text-[12px] sm:text-[14px] md:text-base lg:text-[18px] font-normal">Or</p>
              <Link href="/trip-planner">
                <button className="text-[10px] sm:text-[12px] md:text-[14px] lg:text-base font-normal text-white bg-[#312E29] py-2 px-4 sm:px-5 md:px-6 rounded-full hover:bg-opacity-90 transition-all duration-200">
                  Request a Quote
                </button>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Banner;
