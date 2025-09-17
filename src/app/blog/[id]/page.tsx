"use client"

import Banner from '@/components/sections/BlogPost/Banner'
import React, { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { TfiHeart } from "react-icons/tfi";
import { PiHeartFill } from "react-icons/pi";
import chevronLeft from "../../../../public/blog/blogPost/XMLID_222_left.png"
import chevronRight from "../../../../public/blog/blogPost/XMLID_222_right.png"
import blogCard_1 from "../../../../public/blog/card_image_1.png"
import blogCard_2 from "../../../../public/blog/card_image_2.png"
import blogCard_3 from "../../../../public/blog/card_image_3.png"
import linkedIn_icon from "../../../../public/images/linkedin_icon.png"
import x_icon from "../../../../public/images/x_icon.png"
import facebook_icon from "../../../../public/images/facebook_icon.png"
import instagram_icon from "../../../../public/images/instagram_icon.png"


const page = () => {

    const [favourite, setFavourite] = useState(true);

    const handleFavourite = () => {
        setFavourite(!favourite);
    }

    // Newsletter form handling
    const [email, setEmail] = useState("");
    const handleNewsletterFormSubmit = (e: any) => {
        e.preventDefault();
    }

    return (
        <div className='relative w-screen'>
            <Banner />

            <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:justify-between md:items-start mt-[25px] md:mt-[37px] gap-x-[26px]">

                {/* Top (or Left on md+) */}
                <div className='w-full md:w-[70%] md:border-r border-[#D0D0D0] pr-0 md:pr-[26px] pb-0 sm:pb-[140px] md:pb-[160px] lg:pb-[190px] md:mb-8'>
                    <div className='flex flex-row justify-between items-center'>
                        <p className='font-host-grotesk font-normal italic text-base md:text-[20px] text-[#6C3B3F]'> By John Wick • February 14, 2025 </p>
                        <span className='text-[24px] md:text-[26px] md:translate-y-[38px] cursor-pointer'>
                            {
                                favourite ? (<TfiHeart onClick={handleFavourite} />) : (<PiHeartFill className='text-red-500' onClick={handleFavourite} />)
                            }
                        </span>
                    </div>

                    <h2 className='max-w-[277px] w-full sm:max-w-[900px] text-[32px] md:text-[40px] text-[#000000] font-noto-serif font-medium italic mt-[55px] md:mt-[13px] leading-tight'>The Art of Slow Travel in Tuscany</h2>

                    <div className='max-w-[1057px] w-full flex flex-col mt-[16px] md:mt-[70px]'>
                        {/*  First 3 para div */}
                        <div className='flex flex-col gap-y-[30px]'>
                            {/* Para 1 */}
                            <p className='block md:hidden text-[20px] font-normal text-[#6D6D6D] font-host-grotesk leading-[26px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                            <p className='hidden md:block text-[20px] font-normal text-[#6D6D6D] font-host-grotesk leading-[27px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br />

                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea </p>

                            {/* Para 2 */}
                            <p className='block md:hidden text-[20px] font-normal text-[#6D6D6D] font-host-grotesk leading-[26px]'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>

                            <p className='hidden md:block text-[20px] font-normal text-[#6D6D6D] font-host-grotesk leading-[26px]'>consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br />

                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</p>

                            {/* Para 3 */}
                            <p className='block md:hidden text-[20px] font-normal text-[#6D6D6D] font-host-grotesk leading-[26px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea </p>

                            <p className='hidden md:block text-[20px] font-normal text-[#6D6D6D] font-host-grotesk leading-[26px]'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br />

                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.  </p>
                        </div>

                        <div className='mt-[68px] md:mt-[67px]'>
                            <h1 className='hidden md:block max-w-[859px] w-full font-noto-serif font-light italic text-[#6C3B3F] text-[32px] leading-snug'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam</h1>
                            <h1 className='block md:hidden font-noto-serif font-light italic text-[#6C3B3F] text-[32px] leading-snug'>Sed ut perspiciatis unde omnis iste natus error</h1>
                        </div>

                        {/* Second div  */}
                        <div className='flex flex-col gap-y-[30px] mt-[21px] md:mt-[67px]'>
                            {/* Para 4 */}
                            <p className='block md:hidden text-[20px] font-normal text-[#6D6D6D] font-host-grotesk leading-[26px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                            <p className='hidden md:block text-[20px] font-normal text-[#6D6D6D] font-host-grotesk leading-[26px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea</p>

                            {/* Para 5 */}
                            <p className='block md:hidden text-[20px] font-normal text-[#6D6D6D] font-host-grotesk leading-[26px]'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br />

                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi</p>

                            <p className='hidden md:block text-[20px] font-normal text-[#6D6D6D] font-host-grotesk leading-[26px]'>consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br />

                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</p>
                        </div>

                        <div className='flex flex-col sm:flex-row gap-[17px] md:gap-[18px] mt-[50px] md:mt-[45px]'>
                            <div className='max-w-[507px] w-full h-[420px] md:h-[590px]  bg-[#D9D9D9]'></div>
                            <div className='max-w-[507px] w-full h-[420px] md:h-[590px]  bg-[#D9D9D9]'></div>
                        </div>

                        <div className='flex flex-col gap-y-[30px] mt-[49px] md:mt-[59px]'>
                            <p className='block md:hidden text-[20px] font-normal text-[#6D6D6D] font-host-grotesk leading-[26px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                            <p className='hidden md:block text-[20px] font-normal text-[#6D6D6D] font-host-grotesk leading-[26px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br />

                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            </p>


                            <p className='block md:hidden text-[20px] font-normal text-[#6D6D6D] font-host-grotesk leading-[26px]'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                            <p className='hidden md:block text-[20px] font-normal text-[#6D6D6D] font-host-grotesk leading-[26px]'> consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br />

                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</p>
                        </div>
                    </div>

                    <hr className='h-[1px] w-full bg-[#D0D0D0] mt-[56px] md:mt-[53px]' />


                    {/*  Swiper buttons for small screen */}
                    <div className='flex sm:hidden flex-row mt-[23px] gap-x-[37px] justify-between items-center'>
                        <button className='relative w-[250px] h-[75px] text-[20px] font-noto-serif font-light italic text-[#312E29] border border-[#312E29] flex justify-center items-center'>
                            <p className='text-start absolute left-[66px] leading-tight'>Previous <br /> blog</p>
                            <Image
                                src={chevronLeft}
                                alt="previous blog"
                                width={1000}
                                height={1000}
                                className='w-[21px] h-[43px] absolute left-[21px]'
                            />
                        </button>
                        <button className='relative w-[250px] h-[75px] text-[20px] font-noto-serif font-light italic text-[#312E29] border border-[#312E29] flex justify-center items-center'>
                            <p className='text-start absolute right-[84px] leading-tight'>Next <br /> blog</p>
                            <Image
                                src={chevronRight}
                                alt="next blog"
                                width={1000}
                                height={1000}
                                className='w-[21px] h-[43px] absolute right-[21px]'
                            />
                        </button>
                    </div>

                    {/* Swiper blogs for desktop */}
                    <div className='hidden sm:flex flex-row mt-[23px] gap-x-[37px] justify-between items-center'>
                        {/* Card 1 */}
                        <div className='flex flex-row items-center gap-x-[10px]'>
                            <Image
                                src={blogCard_2}
                                alt={"post"}
                                width={1000}
                                height={1000}
                                className='w-[107px] h-[73px] rounded-lg'
                            />
                            <p className='max-w-[228px] w-full font-medium text-base font-host-grotesk'>Top 5 Hidden Gems in Europe for Mature Explorers</p>
                        </div>

                        {/* Card 2 */}
                        <div className='flex flex-row items-center gap-x-[10px] mt-[13px]'>
                            <Image
                                src={blogCard_3}
                                alt={"post"}
                                width={1000}
                                height={1000}
                                className='w-[107px] h-[73px] rounded-lg'
                            />
                            <p className='max-w-[228px] w-full font-medium text-base font-host-grotesk'>Packing Light, Living Large: Essentials for Luxury Travel</p>
                        </div>
                    </div>
                </div>



                {/* Bottom (or Right on md+) */}
                <div className='w-full md:flex-1 mt-[89px] md:mt-0'>
                    {/* Cards */}
                    <div>
                        <h2 className='font-normal font-noto-serif italic text-[#000000] text-[24px]'> Latest post </h2>
                        <div className='flex flex-col mt-[27px] max-w-[371px] w-full'>
                            {/* Card 1 */}
                            <div className='flex flex-row items-center gap-x-[10px]'>
                                <Image
                                    src={blogCard_2}
                                    alt={"post"}
                                    width={1000}
                                    height={1000}
                                    className='w-[107px] h-[73px] rounded-lg'
                                />
                                <p className='max-w-[228px] w-full font-medium text-base font-host-grotesk'>Top 5 Hidden Gems in Europe for Mature Explorers</p>
                            </div>
                            <hr className='h-[1px] bg-[#D0D0D0] w-full mt-[14px]' />

                            {/* Card 2 */}
                            <div className='flex flex-row items-center gap-x-[10px] mt-[13px]'>
                                <Image
                                    src={blogCard_3}
                                    alt={"post"}
                                    width={1000}
                                    height={1000}
                                    className='w-[107px] h-[73px] rounded-lg'
                                />
                                <p className='max-w-[228px] w-full font-medium text-base font-host-grotesk'>Packing Light, Living Large: Essentials for Luxury Travel</p>
                            </div>
                            <hr className='h-[1px] bg-[#D0D0D0] w-full mt-[14px]' />

                            {/* Card 3 */}
                            <div className='flex flex-row items-center gap-x-[10px] mt-[13px]'>
                                <Image
                                    src={blogCard_1}
                                    alt={"post"}
                                    width={1000}
                                    height={1000}
                                    className='w-[107px] h-[73px] rounded-lg'
                                />
                                <p className='max-w-[228px] w-full font-medium text-base font-host-grotesk'>The Art of Slow Travel in Tuscany</p>
                            </div>
                            <hr className='h-[1px] bg-[#D0D0D0] w-full mt-[63px] md:mt-[76px]' />
                        </div>
                    </div>


                    {/* Newsletter */}
                    <div className='mt-[57px] md:mt-[63px] mb-[136px] md:mb-0'>
                        <h2 className='font-normal font-noto-serif italic text-[#000000] text-[24px]'> Newsletter </h2>

                        <form className='max-w-[371px] w-full flex flex-col gap-y-[27px] justify-center items-center mt-[53px] md:mt-[21px]' onSubmit={handleNewsletterFormSubmit}>
                            <input type="text" placeholder='Email' className='w-full bg-[#E8E8E8] placeholder:text-base placeholder:text-[#5B564C] placeholder:font-normal font-host-grotesk py-3.5 px-6 rounded-full outline-none' value={email} onChange={(e) => setEmail(e.target.value)} />

                            <button className='text-center w-full h-[53px] text-base text-[#312E29] font-normal font-host-grotesk border border-[#312E29] rounded-full cursor-pointer hover:bg-[#312E29] hover:text-[#FFFFFF] transition-colors ease-in-out duration-200 hover:scale-105'> Subscribe </button>
                        </form>

                        <hr className='hidden sm:block mt-[81px] h-[1px] w-full bg-[#D0D0D0]' />
                    </div>

                    {/* Follow us */}
                    <div className='hidden md:flex flex-col gap-[24px] mt-[48px]'>
                        <h2 className='font-normal font-noto-serif italic text-[#000000] text-[24px]'> Follow Us </h2>
                        <div className='flex flex-row gap-x-[17px]'>
                            <Link href={"/"}>
                                <Image src={linkedIn_icon} alt={"linked in"} width={1000} height={1000} className='h-[50px] w-[50px]' />
                            </Link>
                            <Link href={"/"}>
                                <Image src={x_icon} alt={"x"} width={1000} height={1000} className='h-[50px] w-[50px]' />
                            </Link>
                            <Link href={"/"}>
                                <Image src={instagram_icon} alt={"instagram"} width={1000} height={1000} className='h-[50px] w-[50px]' />
                            </Link>
                            <Link href={"/"}>
                                <Image src={facebook_icon} alt={"facebook"} width={1000} height={1000} className='h-[50px] w-[50px]' />
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default page
