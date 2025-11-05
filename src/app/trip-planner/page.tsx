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
  const [countryCode, setCountryCode] = useState('+91');
  const [emailError, setEmailError] = useState('');
  const [tripDetails, setTripDetails] = useState('');

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

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);

    if (value && !validateEmail(value)) {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError('');
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Only allow numbers
    if (value === '' || /^\d+$/.test(value)) {
      setPhone(value);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate email before submission
    if (email && !validateEmail(email)) {
      setEmailError('Please enter a valid email address');
      return;
    }

    // Add your form submission logic here
    console.log({ name, email, phone: `${countryCode}${phone}`, tripDetails });
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
          What&apos;s your <br />
          dream destination?
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
          <div className='w-full'>
            <input
              type='email'
              placeholder='Email*'
              className={`w-full text-[18px] font-normal outline-none border rounded p-3 placeholder:text-[#727272] placeholder:text-[16px] font-host-grotesk ${
                emailError ? 'border-red-500' : 'border-[#98B6E2]'
              }`}
              value={email}
              onChange={handleEmailChange}
            />
            {emailError && (
              <p className='text-red-500 text-sm mt-1 ml-1'>{emailError}</p>
            )}
          </div>
          <div className='w-full flex gap-2'>
            <div className='relative w-[110px]'>
              <select
                value={countryCode}
                onChange={(e) => setCountryCode(e.target.value)}
                className='w-full text-[18px] font-normal outline-none border border-[#98B6E2] rounded p-3 pl-4 pr-9 font-host-grotesk appearance-none cursor-pointer bg-white'
                style={{ textAlign: 'center' }}
              >
                <option value='+1'>🇺🇸 +1</option>
                <option value='+44'>🇬🇧 +44</option>
                <option value='+91'>🇮🇳 +91</option>
                <option value='+61'>🇦🇺 +61</option>
                <option value='+81'>🇯🇵 +81</option>
                <option value='+86'>🇨🇳 +86</option>
                <option value='+33'>🇫🇷 +33</option>
                <option value='+49'>🇩🇪 +49</option>
                <option value='+39'>🇮🇹 +39</option>
                <option value='+34'>🇪🇸 +34</option>
                <option value='+7'>🇷🇺 +7</option>
                <option value='+55'>🇧🇷 +55</option>
                <option value='+27'>🇿🇦 +27</option>
                <option value='+52'>🇲🇽 +52</option>
                <option value='+82'>🇰🇷 +82</option>
                <option value='+65'>🇸🇬 +65</option>
                <option value='+971'>🇦🇪 +971</option>
                <option value='+966'>🇸🇦 +966</option>
                <option value='+60'>🇲🇾 +60</option>
                <option value='+66'>🇹🇭 +66</option>
              </select>
              <div className='absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none'>
                <svg className='w-4 h-4 text-[#727272]' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
                </svg>
              </div>
            </div>
            <input
              type='tel'
              placeholder='Phone'
              className='flex-1 text-[18px] font-normal outline-none border border-[#98B6E2] rounded p-3 placeholder:text-[#727272] placeholder:text-[16px] font-host-grotesk'
              value={phone}
              onChange={handlePhoneChange}
              inputMode='numeric'
              pattern='[0-9]*'
            />
          </div>
          <textarea
            placeholder='Tell us more about your trip'
            className='w-full text-[18px] font-normal outline-none border border-[#98B6E2] rounded p-3 placeholder:text-[#727272] placeholder:text-[16px] font-host-grotesk resize-vertical min-h-[100px]'
            value={tripDetails}
            onChange={(e) => setTripDetails(e.target.value)}
            rows={4}
          />

          <button
            className='w-full sm:w-[241px] h-[55px] bg-[#312E29] text-white hover:scale-105 cursor-pointer transition-all ease-in-out duration-200 mt-[46px] sm:mt-[57px] rounded-full'
            onClick={handleFormSubmit}
          >
            Talk to an Expert
          </button>

          <div className='text-[20px] mt-[55px] font-host-grotesk ml-4'>Suggested packages</div>

          <div className='w-screen lg:ml-[-35%]'>
            <PackageCardGrid />
          </div>

          {/* <div className='flex items-start gap-4 mt-[47px]'>
            <input
              type='checkbox'
              className='appearance-none mt-[6px] w-[23px] h-[23px] border-2 border-black rounded-sm checked:bg-blue-400 checked:border-black'
            />
            <p className='max-w-[650px] w-full font-host-grotesk font-light text-[16px] sm:text-[20px] leading-[22px] sm:leading-[28px]'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div> */}
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
