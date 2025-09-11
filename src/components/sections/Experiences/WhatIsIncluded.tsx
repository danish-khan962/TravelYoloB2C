"use client"

import React, { useState } from 'react'
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";


const WhatIsIncluded = () => {
    const [isIncludedOpen, setIsIncludedOpen] = useState(false);
    const [isNotIncludedOpen, setIsNotIncludedOpen] = useState(false);

    const toggleIncluded = () => {
        setIsIncludedOpen(!isIncludedOpen);
    }

    const toggleNotIncluded = () => {
        setIsNotIncludedOpen(!isNotIncludedOpen);
    }

    return (
        <div className='pt-[116px] sm:pt-[105px]'>

            {/* What is included */}
            <div>
                <div className='flex justify-between place-items-baseline' >
                    <p className='font-noto-serif font-light italic text-[32px] sm:text-[40px]'>What is included</p>
                    <span>
                        {isIncludedOpen ? (
                            <GoTriangleUp onClick={toggleIncluded} className='text-[#6C3B3F] text-2xl cursor-pointer' />
                        ) : (
                            <GoTriangleDown onClick={toggleIncluded} className='text-[#6C3B3F] text-2xl cursor-pointer' />
                        )}
                    </span>
                </div>

                <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out mt-[12px] ${isIncludedOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                        }`}
                >
                    <p className='font-host-grotesk pb-[15px] text-base sm:text-[18px] md:text-[20px] leading-snug sm:leading-[22px] md:leading-[24px]'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, veniam at rem perspiciatis similique quaerat minus aut alias eligendi doloribus temporibus esse ipsa magni sed, numquam eius non natus nostrum provident. Perspiciatis est aperiam cumque blanditiis aliquid asperiores numquam porro.
                    </p>
                </div>

                <div className='w-full h-[1.5px] bg-[#6C3B3F]'></div>
            </div>

            {/* What is not included */}
            <div className='mt-[86px] sm:mt-[96px]'>
                <div className='flex justify-between place-items-baseline' >
                    <p className='font-noto-serif font-light italic text-[32px] sm:text-[40px]'>What is not included</p>
                    <span>
                        {isNotIncludedOpen ? (
                            <GoTriangleUp onClick={toggleNotIncluded} className='text-[#6C3B3F] text-2xl cursor-pointer' />
                        ) : (
                            <GoTriangleDown onClick={toggleNotIncluded} className='text-[#6C3B3F] text-2xl cursor-pointer' />
                        )}
                    </span>
                </div>

                <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out mt-[12px] ${isNotIncludedOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                        }`}
                >
                    <p className='font-host-grotesk pb-[15px] text-base sm:text-[18px] md:text-[20px] leading-snug sm:leading-[22px] md:leading-[24px]'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, veniam at rem perspiciatis similique quaerat minus aut alias eligendi doloribus temporibus esse ipsa magni sed, numquam eius non natus nostrum provident. Perspiciatis est aperiam cumque blanditiis aliquid asperiores numquam porro.
                    </p>
                </div>

                <div className='w-full h-[1.5px] bg-[#6C3B3F]'></div>
            </div>
        </div>
    )
}

export default WhatIsIncluded;
