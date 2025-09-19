"use client";

import Banner from "@/components/sections/BlogPost/Banner";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { TfiHeart } from "react-icons/tfi";
import { PiHeartFill } from "react-icons/pi";
import chevronLeft from "../../../../public/blog/blogPost/XMLID_222_left.png";
import chevronRight from "../../../../public/blog/blogPost/XMLID_222_right.png";
import blogCard_1 from "../../../../public/blog/card_image_1.png";
import blogCard_2 from "../../../../public/blog/card_image_2.png";
import blogCard_3 from "../../../../public/blog/card_image_3.png";
import linkedIn_icon from "../../../../public/images/linkedin_icon.png";
import x_icon from "../../../../public/images/x_icon.png";
import facebook_icon from "../../../../public/images/facebook_icon.png";
import instagram_icon from "../../../../public/images/instagram_icon.png";

import blogInternalData from "../../../../public/json/blogInternalData.json"; // ✅ JSON import

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

// Map JSON image keys to actual imports
const imageMap: Record<string, any> = {
  blogCard_1,
  blogCard_2,
  blogCard_3,
};

// Social links (static)
const socialLinks = [
  { id: 1, icon: linkedIn_icon, alt: "linked in", url: "/" },
  { id: 2, icon: x_icon, alt: "x", url: "/" },
  { id: 3, icon: instagram_icon, alt: "instagram", url: "/" },
  { id: 4, icon: facebook_icon, alt: "facebook", url: "/" },
];

const Page = () => {
  const [favourite, setFavourite] = useState(true);
  const [email, setEmail] = useState("");

  // Get first blog entry from JSON
  const blogData = blogInternalData[0];
  const blogCards = blogData.blogCards.map((card) => ({
    ...card,
    image: imageMap[card.image] || blogCard_1,
  }));

  return (
    <div className="relative w-screen">
      <Banner />

      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col mdplus:flex-row md:justify-between md:items-start mt-[25px] md:mt-[37px] gap-x-[26px]">
        {/* Left section */}
        <div className="w-full mdplus:w-[70%] mdplus:border-r border-[#D0D0D0] pr-0 mdplus:pr-[26px] pb-0 sm:pb-[30px] mdplus:pb-[160px] lg:pb-[190px] md:mb-8">
          <div className="flex flex-row justify-between items-center">
            <p className="font-host-grotesk font-normal italic text-base md:text-[20px] text-[#6C3B3F]">
              By {blogData.author} • {blogData.date}
            </p>
            <span className="text-[24px] md:text-[26px] translate-y-0 lg:translate-y-[38px] cursor-pointer">
              {favourite ? (
                <TfiHeart onClick={() => setFavourite(!favourite)} />
              ) : (
                <PiHeartFill
                  className="text-red-500"
                  onClick={() => setFavourite(!favourite)}
                />
              )}
            </span>
          </div>

          <h2 className="max-w-[277px] w-full sm:max-w-[900px] text-[32px] md:text-[40px] text-[#000000] font-noto-serif font-medium italic mt-[55px] md:mt-[13px] leading-tight">
            {blogData.title}
          </h2>

          {/* Paragraphs */}
          <div className="max-w-[1057px] w-full flex flex-col mt-[16px] md:mt-[70px]">
            <div className="flex flex-col gap-y-[30px]">
              {blogData.paragraphs.mobile.map((p, i) => (
                <p
                  key={`mobile-${i}`}
                  className="block md:hidden text-[18px] md:text-[20px] font-normal text-[#6D6D6D] font-host-grotesk leading-[26px]"
                  dangerouslySetInnerHTML={{ __html: p }}
                />
              ))}
              {blogData.paragraphs.desktop.map((p, i) => (
                <p
                  key={`desktop-${i}`}
                  className="hidden md:block text-[18px] md:text-[20px] font-normal text-[#6D6D6D] font-host-grotesk leading-[26px]"
                  dangerouslySetInnerHTML={{ __html: p }}
                />
              ))}
            </div>

            <div className="mt-[68px] md:mt-[67px]">
              <h1 className="hidden md:block max-w-[859px] w-full font-noto-serif font-light italic text-[#6C3B3F] text-[32px] leading-snug">
                {blogData.quote.desktop}
              </h1>
              <h1 className="block md:hidden font-noto-serif font-light italic text-[#6C3B3F] text-[32px] leading-snug">
                {blogData.quote.mobile}
              </h1>
            </div>

            {/* Second Paragraphs */}
            <div className="flex flex-col gap-y-[30px] mt-[21px] md:mt-[67px]">
              {blogData.secondSet.mobile.map((p, i) => (
                <p
                  key={`sm-${i}`}
                  className="block md:hidden text-[18px] md:text-[20px] font-normal text-[#6D6D6D] font-host-grotesk leading-[26px]"
                  dangerouslySetInnerHTML={{ __html: p }}
                />
              ))}
              {blogData.secondSet.desktop.map((p, i) => (
                <p
                  key={`lg-${i}`}
                  className="hidden md:block text-[18px] md:text-[20px] font-normal text-[#6D6D6D] font-host-grotesk leading-[26px]"
                  dangerouslySetInnerHTML={{ __html: p }}
                />
              ))}
            </div>

            {/* Image placeholders */}
            <div className="flex flex-col sm:flex-row gap-[17px] md:gap-[18px] mt-[50px] md:mt-[45px]">
              <div className="max-w-[507px] w-full h-[420px] md:h-[590px] bg-[#D9D9D9]"></div>
              <div className="max-w-[507px] w-full h-[420px] md:h-[590px] bg-[#D9D9D9]"></div>
            </div>

            {/* Third Paragraphs */}
            <div className="flex flex-col gap-y-[30px] mt-[49px] md:mt-[59px]">
              {blogData.thirdSet.mobile.map((p, i) => (
                <p
                  key={`m3-${i}`}
                  className="block md:hidden text-[18px] md:text-[20px] font-normal text-[#6D6D6D] font-host-grotesk leading-[26px]"
                  dangerouslySetInnerHTML={{ __html: p }}
                />
              ))}
              {blogData.thirdSet.desktop.map((p, i) => (
                <p
                  key={`d3-${i}`}
                  className="hidden md:block text-[18px] md:text-[20px] font-normal text-[#6D6D6D] font-host-grotesk leading-[26px]"
                  dangerouslySetInnerHTML={{ __html: p }}
                />
              ))}
            </div>
          </div>

          <hr className="h-[1px] w-full bg-[#D0D0D0] mt-[56px] md:mt-[53px]" />

          {/*  Swiper buttons Mobile */}
          <div className="flex flex-row justify-between items-center sm:hidden gap-2 mt-[23px]">
              <Link href={"#"}>
                <span className="relative flex justify-center items-center text-start w-[170px] h-[75px] border border-[#312E29] group max-380:w-[160px]"> 
                  <p className="absolute left-[66px] font-noto-serif text-[20px] text-[#312E29] italic font-light leading-snug"> Previous <br /> blog </p>  
                  <Image
                  src={chevronLeft}
                  alt="previous blog"
                  width={1000}
                  height={1000}
                  className="w-[21px] h-[43px] absolute left-[21px]"
                  />
                </span>
              </Link>

              <Link href={"#"}>
                <span className="relative flex justify-center items-center text-start w-[170px] h-[75px] border border-[#312E29] group max-380:w-[160px]"> 
                  <p className="absolute right-[66px] font-noto-serif text-[20px] text-[#312E29] italic font-light leading-snug"> Next <br /> blog </p>  
                  <Image
                  src={chevronRight}
                  alt="next blog"
                  width={1000}
                  height={1000}
                  className="w-[21px] h-[43px] absolute right-[21px]"
                  />
                </span>
              </Link>
          </div>

          {/* Swiper blogs desktop */}
          <div className="hidden sm:flex items-center justify-between mt-[23px] relative">
            {/* Left Chevron */}
            <div className="flex-shrink-0 cursor-pointer z-10" id="custom-prev">
              <Image src={chevronLeft} alt="previous" width={21} height={43} />
            </div>

            <Swiper
              modules={[Navigation]}
              navigation={{
                prevEl: "#custom-prev",
                nextEl: "#custom-next",
              }}
              loop={true}
              className="w-full max-w-[calc(100%-120px)] mx-[40px]"
              breakpoints={{
                320: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 170,
                },
              }}
            >
              {blogCards.map((card) => (
                <SwiperSlide key={card.id}>
                  <div className="flex flex-col md:flex-row justify-center text-center md:text-start items-center gap-[10px]">
                    <Image
                      src={card.image}
                      alt={card.title}
                      width={1000}
                      height={1000}
                      className="w-[107px] h-[73px] rounded-lg"
                    />
                    <p className="max-w-[228px] w-full font-medium text-base font-host-grotesk">
                      {card.title}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Right Chevron */}
            <div className="flex-shrink-0 cursor-pointer z-10" id="custom-next">
              <Image src={chevronRight} alt="next" width={21} height={43} />
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:flex-1 mt-[89px] md:mt-0">
          <div>
            <h2 className="font-normal font-noto-serif italic text-[#000000] text-[24px]">
              Latest post
            </h2>
            <div className="flex flex-col mt-[27px] max-w-[371px] w-full">
              {blogCards.map((card) => (
                <div
                  key={card.id}
                  className="flex flex-row items-center gap-x-[10px] mt-[13px] first:mt-0"
                >
                  <Image
                    src={card.image}
                    alt={card.title}
                    width={1000}
                    height={1000}
                    className="w-[107px] h-[73px] rounded-lg"
                  />
                  <Link href={"/#"}>
                    <p className="max-w-[228px] w-full font-medium text-base font-host-grotesk hover:underline cursor-pointer">
                      {card.title}
                    </p>
                  </Link>
                </div>
              ))}
              <hr className="h-[1px] bg-[#D0D0D0] w-full mt-[63px] md:mt-[76px]" />
            </div>
          </div>

          {/* Newsletter */}
          <div className="mt-[57px] md:mt-[63px] mb-[136px] md:mb-0">
            <h2 className="font-normal font-noto-serif italic text-[#000000] text-[24px]">
              Newsletter
            </h2>
            <form
              className="max-w-[371px] w-full flex flex-col gap-y-[27px] justify-center items-center mt-[53px] md:mt-[21px]"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="text"
                placeholder="Email"
                className="w-full bg-[#E8E8E8] placeholder:text-base placeholder:text-[#5B564C] placeholder:font-normal font-host-grotesk py-3.5 px-6 rounded-full outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button className="text-center w-full h-[53px] text-base text-[#312E29] font-normal font-host-grotesk border border-[#312E29] rounded-full cursor-pointer hover:bg-[#312E29] hover:text-[#FFFFFF] transition-colors ease-in-out duration-200 hover:scale-105">
                Subscribe
              </button>
            </form>
            <hr className="hidden sm:block mt-[81px] h-[1px] w-full bg-[#D0D0D0]" />
          </div>

          {/* Follow Us */}
          <div className="hidden md:flex flex-col gap-[24px] mt-[48px]">
            <h2 className="font-normal font-noto-serif italic text-[#000000] text-[24px]">
              Follow Us
            </h2>
            <div className="flex flex-row gap-x-[17px]">
              {socialLinks.map((item) => (
                <Link key={item.id} href={item.url}>
                  <Image
                    src={item.icon}
                    alt={item.alt}
                    width={1000}
                    height={1000}
                    className="h-[50px] w-[50px]"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Custom Swiper Navigation Style */}
      <style jsx global>{`
        .custom-swiper .swiper-button-prev,
        .custom-swiper .swiper-button-next {
          color: #312e29 !important;
        }
        .custom-swiper .swiper-button-prev::after,
        .custom-swiper .swiper-button-next::after {
          font-size: 22px;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
};

export default Page;
