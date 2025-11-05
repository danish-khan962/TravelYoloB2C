"use client"

import React, { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"

import Hero_background_1 from "../../../public/images/bg-1.png"
import Hero_background_2 from "../../../public/images/bg-2.png"
import Hero_background_3 from "../../../public/images/bg-3.png"
import Hero_background_4 from "../../../public/images/bg-4.png"
import Hero_background_5 from "../../../public/images/bg-5.png"
import Hero_background_6 from "../../../public/images/bg-6.png"
import Hero_background_7 from "../../../public/images/bg-7.png"
import Hero_background_8 from "../../../public/images/bg-8.png"
import Black_Tint_for_Image from "../../../public/images/black_tint.png"
import Black_Tint_Mobile from "../../../public/images/black_tint_mobile.png"

// Hero Images with text content
const SwiperImages = [
  {
    backgroundImage: Hero_background_1,
    heading: "Wonder Isn't a Place. It's How We Travel.",
    subheading: "From timeless landscapes to tailored details, we design journeys that stay with you."
  },
  {
    backgroundImage: Hero_background_2,
    heading: "Where beauty meets curiosity and every destination tells a story.",
    subheading: "From iconic wonders to hidden corners, every journey with TravelYollo is crafted to feel uniquely yours."
  },
  {
    backgroundImage: Hero_background_3,
    heading: "From timeless wonders to wild horizons, every journey begins with inspiration.",
    subheading: "Whether it’s heritage, nature, or city lights, discover the world through your own lens."
  },
  {
    backgroundImage: Hero_background_4,
    heading: "Discover the world’s icons with new eyes and write stories only travel can tell.",
    subheading: "At TravelYollo, we create journeys that feel effortless, meaningful, and entirely personal."
  },
  {
    backgroundImage: Hero_background_5,
    heading: "See the world differently and let every moment unfold in its own magic.",
    subheading: "From sunrise safaris to sunsets by the beach discover travel that moves you."
  },
  //{ backgroundImage: Hero_background_6 },
  // { backgroundImage: Hero_background_7 },
  // { backgroundImage: Hero_background_8 },
]

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [previousIndex, setPreviousIndex] = useState(SwiperImages.length - 1)
  const [fade, setFade] = useState(true)
  const transitionDuration = 1000 // keep consistent

  useEffect(() => {
    const interval = setInterval(() => {
      // fade out text + image together
      setFade(false)

      // wait for fade-out, then change both image and text together
      setTimeout(() => {
        setPreviousIndex(activeIndex)
        setActiveIndex((prevIndex) =>
          prevIndex === SwiperImages.length - 1 ? 0 : prevIndex + 1
        )

        // fade in text after image switches
        setTimeout(() => {
          setFade(true)
        }, 150) // 
      }, transitionDuration)
    }, 5000)

    return () => clearInterval(interval)
  }, [activeIndex])

  return (
    <section className="relative w-screen h-full text-white">
      <div className="relative w-full h-screen">
        {/* Background layer - shows previous image */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(${SwiperImages[previousIndex].backgroundImage.src})`,
            backgroundPosition:
              previousIndex === 5 || previousIndex === 6 ? "80% center" : "center",
            zIndex: 0,
          }}
        />

        {/* Active slides layer */}
        {SwiperImages.map((item, index) => (
          <div
            key={index}
            className="absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out bg-cover bg-no-repeat"
            style={{
              opacity: index === activeIndex ? 1 : 0,
              backgroundImage: `url(${item.backgroundImage.src})`,
              backgroundPosition:
                index === 5 || index === 6 ? "80% center" : "center",
              zIndex: index === activeIndex ? 5 : 1,
            }}
          />
        ))}

        {/* Black Tint Overlay */}
        <div className="absolute inset-0 z-10">
          <Image
            src={Black_Tint_for_Image}
            alt="overlay desktop"
            fill
            priority
            className="object-cover w-full h-full hidden sm:block"
          />
          <Image
            src={Black_Tint_Mobile}
            alt="overlay mobile"
            fill
            priority
            className="object-cover w-full h-full block sm:hidden max-[500px]:block"
          />
        </div>

        {/* Content (All your original styles preserved exactly) */}
        <div className="relative z-10 flex flex-col justify-between md:justify-center items-center gap-y-[66px] px-4 pt-[67px] md:pt-0 pb-[42px] md:pb-0 h-full text-center">
          <div
            className={`flex flex-col justify-center items-center text-center transition-all duration-1000 ease-in-out ${
              fade ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            }`}
          >
            <h1 className="font-noto-serif font-light italic text-[34px] sm:text-[40px] md:text-[45px] lg:text-[52px] capitalize leading-[42px] sm:leading-[45px] md:leading-[55px] lg:leading-[65px]">
              {SwiperImages[activeIndex].heading}
            </h1>
            <p className="font-host-grotesk text-[18px] md:text-[20px] font-light mt-[28px] md:mt-[8px] px-10 md:px-0">
              {SwiperImages[activeIndex].subheading}
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-x-[26px] gap-y-[37px]">
            <Link href="/destinations">
              <button className="h-[54px] w-[223px] capitalize border-[1.5px] border-white md:border-white/70 bg-transparent hover:backdrop-blur-xs rounded-full cursor-pointer hover:bg-white/95 hover:text-black transition-all ease-in-out duration-200">
                explore destinations
              </button>
            </Link>
            <Link href="/trip-planner">
              <button className="h-[54px] w-[223px] capitalize border-[1.5px] border-white md:border-white/70 bg-transparent hover:backdrop-blur-xs rounded-full cursor-pointer hover:bg-white/95 hover:text-black transition-all ease-in-out duration-200">
                plan my trip
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
