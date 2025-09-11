"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const Footer = () => {

    // Email form state
    const [email, setEmail] = useState("");

    const handleFooterFormSubmit = (e: any) =>{
        e.preventDefault();
    }

    return (
        <section className='w-full  bg-[#312E29] pt-[44px] sm:pt-[83px] pb-0 sm:pb-[60px] '>
            <div className='w-full max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8 flex flex-col-reverse lg:flex-row justify-between gap-y-[35px]'>

                {/* Links */}
                <div className='flex flex-col sm:flex-row gap-x-[160px] gap-y-[40px]'>
                    {/* Logo - Phone and Email */}
                    <div>
                        <Image
                            src={"/images/img_layer_3.svg"}
                            alt={"travelYolo icon"}
                            height={1000}
                            width={1000}
                            className="w-full max-w-[280px] sm:max-w-[350px] lg:max-w-[400px] h-auto"
                        />
                        <div className='flex flex-row justify-start items-center gap-x-[15px] sm:gap-x-[31px] mt-[30px] flex-wrap gap-y-2'>
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
                                <span className='text-[14px] sm:text-base text-[#C9C9C9] font-host-grotesk hover:underline hover:text-white hover:font-medium transition-all ease-in-out duration-200 cursor-pointer'> +91 98700 66000 </span>
                            </Link>

                            <span className='text-[#494744]'> | </span>

                            <Link href={"mailto:contact@travelyollo.com"}  className='flex flex-row items-center gap-x-2 justify-center'>
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
                        </div>
                    </div>

                    {/* Links */}
                    <div className='flex flex-col sm:flex-row gap-x-[73px] gap-y-[33px]'>
                        <div className='flex flex-col'>
                            <p className='text-base font-semibold text-white font-host-grotesk'>Navigation</p>
                            <ul className='flex flex-row sm:flex-col gap-x-[10px] gap-y-[27px] mt-[19px] sm:mt-[22px]'>
                                <li className='text-[#C9C9C9] hover:underline font-host-grotesk hover:text-white hover:font-medium transition-all ease-in-out duration-200 cursor-pointer'><Link href={"/contact"}> Contact Us </Link></li>
                                <span className='block sm:hidden text-[#C9C9C9]'> | </span>
                                <li className='text-[#C9C9C9] hover:underline font-host-grotesk hover:text-white hover:font-medium transition-all ease-in-out duration-200 cursor-pointer'><Link href={"/destinations"}> Destinations </Link></li>
                                <span className='block sm:hidden text-[#C9C9C9]'> | </span>
                                <li className='text-[#C9C9C9] hover:underline font-host-grotesk hover:text-white hover:font-medium transition-all ease-in-out duration-200 cursor-pointer'><Link href={"/experiences"}> Experiences </Link></li>
                            </ul>
                        </div>
                        <div className='flex flex-col'>
                            <p className='text-base font-semibold text-white font-host-grotesk'>Support</p>
                            <ul className='flex flex-row sm:flex-col gap-x-[10px] gap-y-[27px] mt-[19px] sm:mt-[22px]'>
                                <li className='text-[#C9C9C9] hover:underline font-host-grotesk hover:text-white hover:font-medium transition-all ease-in-out duration-200 cursor-pointer'><Link href={"#"}> Help center </Link></li>
                                <span className='block sm:hidden text-[#C9C9C9]'> | </span>
                                <li className='text-[#C9C9C9] hover:underline font-host-grotesk hover:text-white hover:font-medium transition-all ease-in-out duration-200 cursor-pointer'><Link href={"#"}> Terms of service </Link></li>
                                <span className='block sm:hidden text-[#C9C9C9]'> | </span>
                                <li className='text-[#C9C9C9] hover:underline font-host-grotesk hover:text-white hover:font-medium transition-all ease-in-out duration-200 cursor-pointer'><Link href={"#"}> Partnership</Link></li>
                            </ul>
                        </div>
                        <div>

                        </div>
                    </div>
                    

                     {/*  Social Links for mobile */}
                <div className='flex sm:hidden flex-row gap-x-4 -ml-3 -mt-6'>
                    <span>
                        <Link href={"/"}>
                            <Image src={"/images/linkedin_icon.png"} alt={"linkedin"} height={58} width={58} className='h-[58px] w-[58px]' />
                        </Link>
                    </span>
                    <span>
                        <Link href={"/"}>
                            <Image src={"/images/x_icon.png"} alt={"linkedin"} height={58} width={58} className='h-[58px] w-[58px]' />
                        </Link>
                    </span>
                    <span>
                        <Link href={"/"}>
                            <Image src={"/images/instagram_icon.png"} alt={"linkedin"} height={58} width={58} className='h-[58px] w-[58px]' />
                        </Link>
                    </span>
                    <span>
                        <Link href={"/"}>
                            <Image src={"/images/facebook_icon.png"} alt={"linkedin"} height={58} width={58} className='h-[58px] w-[58px]' />
                        </Link>
                    </span>
                </div>

                </div>

                {/* Newsletter */}
                <div className='flex flex-col'>
                    <p className='text-base font-semibold text-white font-host-grotesk'>Newsletter updates</p>

                    <form className='flex flex-row justify-between items-center max-w-[450px] w-full bg-[#262421] px-6 py-3 rounded-full mt-[22px]' onSubmit={handleFooterFormSubmit}>
                        <input type="text" placeholder='Email' className='text-base bg-[#262421] placeholder:text-[#5B564C] text-white outline-none font-host-grotesk' value={email} onChange={(e) => setEmail(e.target.value)}/>
                        <button className='text-base text-[#E5D0A1] cursor-pointer font-host-grotesk'>Subscribe</button>
                    </form>

                    <div className='hidden sm:flex flex-row gap-x-4 mt-[24px]'>
                        <span>
                            <Link href={"/"}>
                                <Image src={"/images/linkedin_icon.png"} alt={"linkedin"} height={36} width={36} className='h-[36px] w-[36px]' />
                            </Link>
                        </span>
                        <span>
                            <Link href={"/"}>
                                <Image src={"/images/x_icon.png"} alt={"linkedin"} height={36} width={36} className='h-368px] w-[36px]' />
                            </Link>
                        </span>
                        <span>
                            <Link href={"/"}>
                                <Image src={"/images/instagram_icon.png"} alt={"linkedin"} height={36} width={36} className='h-[36px] w-[36px]' />
                            </Link>
                        </span>
                        <span>
                            <Link href={"/"}>
                                <Image src={"/images/facebook_icon.png"} alt={"linkedin"} height={36} width={36} className='h-[36px] w-[36px]' />
                            </Link>
                        </span>
                    </div>
                </div>
            </div>


            {/* Footer banner */}
            <div className='block sm:hidden w-full mt-[38px]'>
                <hr  className='w-screen text-[#4B4843]'/>

                <p className='w-full max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8 text-[14px] py-[22px] text-[#C9C9C9]  font-host-grotesk font-light'> Terms and conditions  |  Privacy policy</p>

                <div className='w-screen bg-[#161616]'>
                    <p className='w-full max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8 text-[14px] py-[22px] text-[#C9C9C9] font-host-grotesk font-light'> Copyright © 2026 TravelYollo. All Rights Reserved.</p>
                </div>
            </div>
        </section>
    )
}

export default Footer
