"use client"

import React, { useEffect, useState } from "react"
import Image from "next/image"
import Black_Tint_for_Image from "../../../../public/images/black_tint.png"
import Black_Tint_Mobile from "../../../../public/images/black_tint_mobile.png"

// Desktop images
import image1 from "../../../../public/experiences/experience_1.png"
import image2 from "../../../../public/experiences/experience_2.png"
import image3 from "../../../../public/experiences/experience_3.png"
import image4 from "../../../../public/experiences/experience_4.png"

// Mobile images
import image1_mobile from "../../../../public/experiences/experience_1_mobile.png"
import image2_mobile from "../../../../public/experiences/experience_2_mobile.png"
import image3_mobile from "../../../../public/experiences/experience_3_mobile.png"
import image4_mobile from "../../../../public/experiences/experience_4_mobile.png"

const SwiperImages = [
  { backgroundImage: image1 },
  { backgroundImage: image2 },
  { backgroundImage: image3 },
  { backgroundImage: image4 },
]

const SwiperImagesMobile = [
  { backgroundImage: image1_mobile },
  { backgroundImage: image2_mobile },
  { backgroundImage: image3_mobile },
  { backgroundImage: image4_mobile },
]

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0)
    
      useEffect(() => {
        const interval = setInterval(() => {
          setActiveIndex((prevIndex) =>
            prevIndex === SwiperImages.length - 1 ? 0 : prevIndex + 1
          )
        }, 5000)
    
        return () => clearInterval(interval)
      }, [])
    
      // detect screen size for mobile adjustment
      const [isMobile, setIsMobile] = useState(false)
      useEffect(() => {
        const checkScreenSize = () => setIsMobile(window.innerWidth < 640)
        checkScreenSize()
        window.addEventListener("resize", checkScreenSize)
        return () => window.removeEventListener("resize", checkScreenSize)
      }, [])

  // Select image set based on screen size
  const currentImages = isMobile ? SwiperImagesMobile : SwiperImages

  return (
    <section className="relative w-screen h-full text-white">
      <div className="relative w-full h-screen">
         {/* Fading backgrounds on top */}
        {currentImages.map((item, index) => (
          <div
            key={index}
            className="absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out bg-cover bg-no-repeat bg-center"
            style={{
              opacity: index === activeIndex ? 1 : 0,
              backgroundImage: `url(${item.backgroundImage.src})`,
              zIndex: index === activeIndex ? 4 : 0,
              backgroundPosition:
                index === 2
                  ? isMobile
                    ? "30% center"
                    : "center"
                  : "center",
            }}
          />
        ))}

        {/* Black Tint Overlay */}
        <div className="absolute inset-0 z-10">
          {/* Desktop (>=sm = 640px) */}
          <Image
            src={Black_Tint_for_Image}
            alt="overlay desktop"
            fill
            priority
            className="object-cover w-full h-full hidden sm:block"
          />
          {/* Mobile (<500px → Tailwind doesn’t have 500px by default, so we use `max-[500px]:block` */}
          <Image
            src={Black_Tint_Mobile}
            alt="overlay mobile"
            fill
            priority
            className="object-cover w-full h-full block sm:hidden max-[500px]:block"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-start pt-[240px] sm:pt-0 sm:justify-center items-center gap-y-[66px] px-4 h-full text-center">
          <h1 className="font-noto-serif font-light italic text-[34px] sm:text-[40px] md:text-[45px] lg:text-[52px] capitalize leading-[42px] sm:leading-[45px] md:leading-[55px] lg:leading-[65px]">
            Indulge your senses, your stories begin here.
          </h1>
        </div>
      </div>
    </section>
  )
}

export default Hero
