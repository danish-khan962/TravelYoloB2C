"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const Footer = () => {

    // Email form state
    const [email, setEmail] = useState("");

    const handleFooterFormSubmit = (e: any) => {
        e.preventDefault();
    }

    // get latest year
    const year: number = new Date().getFullYear();

    return (
        <section className='w-full  bg-[#312E29] pt-[44px] sm:pt-[83px] pb-0 '>
            <div className='w-full max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8 flex flex-col-reverse lg:flex-row justify-between gap-y-[35px]'>

                {/* Links */}
                <div className='flex flex-col lg:flex-row gap-x-1 gap-y-[40px]'>
                    {/* Logo - Phone and Email */}
                    <div>
                        <Image
                            src={"/images/img_layer_3.svg"}
                            alt={"travelYolo icon"}
                            height={1000}
                            width={1000}
                            className="w-full max-w-[280px] sm:max-w-[350px] lg:max-w-[400px] h-auto"
                        />
                        <div className='flex flex-row justify-start items-center gap-x-[15px] sm:gap-x-[31px] mt-[30px] flex-wrap gap-y-2 md:gap-y-[22px]'>
                            <Link href={"#"} className='flex flex-row items-center gap-x-2 justify-center'>
                                <span>
                                    <Image
                                        src={"/images/phone_icon.png"}
                                        alt={"phone_icon"}
                                        height={1000}
                                        width={1000}
                                        className='h-[16px] w-[16px]'
                                    />
                                </span>
                                <Link href={"tel:5619414991"} className='text-[14px] sm:text-base text-[#C9C9C9] font-host-grotesk hover:underline hover:text-white hover:font-medium transition-all ease-in-out duration-200 cursor-pointer'> +1 561-941-4991 </Link >
                            </Link>

                            {/* <span className='text-[#494744]'> | </span> */}

                            <Link href={"mailto:contact@travelyollo.com"} className='flex flex-row items-center gap-x-2 justify-center'>
                                <span>
                                    <Image
                                        src={"/images/message_icon.png"}
                                        alt={"phone_icon"}
                                        height={1000}
                                        width={1000}
                                        className='h-[14px] w-[18.5px]'
                                    />
                                </span>
                                <span className='text-[14px] sm:text-base text-[#C9C9C9] font-host-grotesk  hover:underline hover:text-white hover:font-medium transition-all ease-in-out duration-200 cursor-pointer'> contact@travelyollo.com </span>
                            </Link>

                            <Link href={"#"} className='flex flex-row items-center gap-x-2 justify-center'>
                                <span>
                                    <Image
                                        src={"/images/location_icon.png"}
                                        alt={"phone_icon"}
                                        height={1000}
                                        width={1000}
                                        className='h-[16px] w-auto'
                                    />
                                </span>
                                <span className='text-[14px] sm:text-base text-[#C9C9C9] font-host-grotesk  hover:underline hover:text-white hover:font-medium transition-all ease-in-out duration-200 cursor-pointer'> 211 Hana Rd, Edison, NJ 08817, USA </span>
                            </Link>
                        </div>

                        {/*  Social Links for mobile */}
                        <div className='flex flex-row gap-x-4 mt-[40px] md:mt-[50px] justify-start items-center'>
                            <span>
                                <Link href={"https://linkedin.com/company/travelyollo/?viewAsMember=true"} target="_blank" rel="noopener noreferrer">
                                    <Image src={"/images/linkedin_icon.png"} alt={"linkedin"} height={58} width={58} className='h-[58px] w-[58px]' />
                                </Link>
                            </span>
                            {/* <span>
                                <Link href={"https://www.x.com/profile.php?id=61573601551252"} target="_blank" rel="noopener noreferrer">
                                    <Image src={"/images/x_icon.png"} alt={"x"} height={58} width={58} className='h-[58px] w-[58px]' />
                                </Link>
                            </span> */}
                            <span>
                                <Link href={"https://www.instagram.com/travelyollo/"} target="_blank" rel="noopener noreferrer">
                                    <Image src={"/images/instagram_icon.png"} alt={"instagram"} height={58} width={58} className='h-[58px] w-[58px]' />
                                </Link>
                            </span>
                            <span>
                                <Link href={"https://www.facebook.com/profile.php?id=61573601551252"} target="_blank" rel="noopener noreferrer">
                                    <Image src={"/images/facebook_icon.png"} alt={"facebook"} height={58} width={58} className='h-[58px] w-[58px]' />
                                </Link>
                            </span>
                        </div>
                    </div>

                    {/* Links */}
                    <div className='flex flex-col sm:flex-row gap-x-[73px] gap-y-[33px]'>
                        <div className='flex flex-col'>
                            <p className='text-base font-semibold text-white font-host-grotesk'>Navigation</p>
                            <ul className='flex flex-row sm:flex-col gap-x-[10px] gap-y-[27px] mt-[19px] sm:mt-[22px] flex-wrap text-start'>
                                <li className='text-[#C9C9C9] hover:underline font-host-grotesk hover:text-white hover:font-medium transition-all ease-in-out duration-200 cursor-pointer text-[13px] sm:text-[14px] md:text-base'><Link href={"/"}> Home </Link></li>
                                <span className='block sm:hidden text-[#C9C9C9]'> | </span>
                                <li className='text-[#C9C9C9] hover:underline font-host-grotesk hover:text-white hover:font-medium transition-all ease-in-out duration-200 cursor-pointer text-[13px] sm:text-[14px] md:text-base'><Link href={"/destinations"}> Destinations </Link></li>
                                <span className='block sm:hidden text-[#C9C9C9]'> | </span>
                                <li className='text-[#C9C9C9] hover:underline font-host-grotesk hover:text-white hover:font-medium transition-all ease-in-out duration-200 cursor-pointer text-[13px] sm:text-[14px] md:text-base'><Link href={"/experiences"}> Experiences </Link></li>
                                <span className='block sm:hidden text-[#C9C9C9]'> | </span>
                                <li className='text-[#C9C9C9] hover:underline font-host-grotesk hover:text-white hover:font-medium transition-all ease-in-out duration-200 cursor-pointer text-[13px] sm:text-[14px] md:text-base'><Link href={"/trip-planner"}> Trip Planner </Link></li>
                                <li className='text-[#C9C9C9] hover:underline font-host-grotesk hover:text-white hover:font-medium transition-all ease-in-out duration-200 cursor-pointer text-[13px] sm:text-[14px] md:text-base'><Link href={"/contact"}> Contact Us </Link></li>
                            </ul>
                        </div>
                        <div className='flex flex-col'>
                            <p className='text-base font-semibold text-white font-host-grotesk'>Support</p>
                            <ul className='flex flex-col gap-x-[10px] gap-y-[27px] mt-[19px] sm:mt-[22px] flex-wrap'>
                                <li className='text-[#C9C9C9] hover:underline font-host-grotesk hover:text-white hover:font-medium transition-all ease-in-out duration-200 cursor-pointer text-[13px] sm:text-[14px] md:text-base'><Link href={"/terms-and-conditions"} > Terms and Conditions </Link></li>
                                <li className='text-[#C9C9C9] hover:underline font-host-grotesk hover:text-white hover:font-medium transition-all ease-in-out duration-200 cursor-pointer text-[13px] sm:text-[14px] md:text-base'><Link href={"/refund-and-cancellation-policy"}> Refund and Cancellation Policy </Link></li>
                                <li className='text-[#C9C9C9] hover:underline font-host-grotesk hover:text-white hover:font-medium transition-all ease-in-out duration-200 cursor-pointer text-[13px] sm:text-[14px] md:text-base'><Link href={"/shipping-or-delivery-policy"} > Shipping or Delivery Policy </Link></li>
                                <li className='text-[#C9C9C9] hover:underline font-host-grotesk hover:text-white hover:font-medium transition-all ease-in-out duration-200 cursor-pointer text-[13px] sm:text-[14px] md:text-base'><Link href={"/privacy-policy"} > Privacy Policy </Link></li>
                            </ul>
                        </div>
                        <div>

                        </div>
                    </div>

                    <hr className='inline-block sm:hidden w-full border-t border-[#4B4843] -mt-10' />
                    {/* ASTA Logo */}
                    <div className='block sm:hidden'>
                        <Image
                            src={"/asta-logo.webp"}
                            alt={"ASTA logo"}
                            height={80}
                            width={200}
                            className="h-auto w-[267px]"
                        />
                    </div>
                </div>

                {/* Newsletter */}
                <div className='flex flex-col'>
                    <p className='text-base font-semibold text-white font-host-grotesk'>Newsletter updates</p>

                    <form className='flex flex-row justify-between items-center max-w-[450px] w-full bg-[#262421] px-6 py-3 rounded-full mt-[22px]' onSubmit={handleFooterFormSubmit}>
                        <input type="text" placeholder='Email' className='text-base bg-[#262421] placeholder:text-[#5B564C] text-white outline-none font-host-grotesk' value={email} onChange={(e) => setEmail(e.target.value)} />
                        <button className='text-base text-[#E5D0A1] cursor-pointer font-host-grotesk'>Subscribe</button>
                    </form>

                    {/* ASTA Logo */}
                    <div className='hidden sm:block mt-6'>
                        <Image
                            src={"/asta-logo.webp"}
                            alt={"ASTA logo"}
                            height={80}
                            width={200}
                            className="h-auto w-[267px]"
                        />
                    </div>
                </div>
            </div>

            {/* Footer banner - Desktop */}
            <div className='hidden sm:block w-full mt-[60px] pb-[50px] md:pb-0'>
                <div className='max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8'>
                    <hr className='w-full border-t border-[#4B4843]' />
                    <div className='flex flex-row justify-between items-center py-[22px]'>
                        <p className='text-[14px] text-[#C9C9C9] font-host-grotesk font-light'>
                            Copyright © {year} TravelYollo. All Rights Reserved.
                        </p>
                        <p className='text-[14px] text-[#C9C9C9] font-host-grotesk font-light'>
                            Design and Developed by <span className='font-semibold'>ID8NXT</span>
                        </p>
                    </div>
                </div>
            </div>

            {/* Footer banner - Mobile */}
            <div className='block sm:hidden w-full mt-[38px]'>
                {/* <hr className='w-screen text-[#4B4843]' /> */}
                <div className='w-screen bg-[#161616] flex flex-col gap-1 justify-center text-center'>
                    <p className='w-full max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8 text-[14px] mt-[22px] text-[#C9C9C9] font-host-grotesk font-light'> Copyright © {year} TravelYollo. All Rights Reserved.</p>
                    <p className='text-[14px] text-[#C9C9C9] font-host-grotesk font-light mb-[80px]'>
                        Design and Developed by <span className='font-semibold'>ID8NXT</span>
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Footer
