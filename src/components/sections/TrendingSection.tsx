'use client';

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const trendingItems = [
    // { src: "/trending/trending1.png", title: "Uzbekistan", duration: "(11D / 12N)" },
    // { src: "/trending/trending2.png", title: "Baku", duration: "(4D / 5N)" },
    // { src: "/trending/trending3.png", title: "Leh-Ladakh", duration: "(5D / 6N)" },
    { src: "/trending/trending4.jpg", title: "Bali", duration: "(5D / 6N)" },
    { src: "/trending/trending5.jpg", title: "Dubai", duration: "(5D / 6N)" },
    { src: "/trending/trending6.png", title: "India", duration: "(5D / 6N)" },
    { src: "/trending/trending7.jpg", title: "Spain", duration: "(5D / 6N)" },
    { src: "/trending/trending8.jpg", title: "Thailand", duration: "(5D / 6N)" },
    { src: "/trending/trending9.jpg", title: "United Kingdom", duration: "(5D / 6N)" },
    { src: "/trending/trending10.jpg", title: "Vietnam", duration: "(5D / 6N)" },
];

const TrendingSection: React.FC = () => {
    return (
        <section className="w-full py-[60px] sm:py-[80px] lg:py-[120px]">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
                <h2 className="text-[26px] sm:text-[28px] lg:text-[40px] font-light italic leading-[26px] sm:leading-[36px] lg:leading-[55px] text-global-1 font-noto-serif">
                    Trending Destinations
                </h2>
                <p className="text-[14px] sm:text-[16px] lg:text-[18px] font-host-grotesk font-light leading-[19px] sm:leading-[22px] lg:leading-[28px] text-global-2 mt-2.5 sm:mt-2 max-w-[600px]">
                    Explore trending escapes that inspire travel with beauty, history, and unforgettable moments.
                </p>

                {/* Swiper */}
                <div className="block mt-6 sm:mt-8 lg:mt-16">
                    <Swiper
                        spaceBetween={16}
                        loop={true}
                        autoplay={{ delay: 2500, disableOnInteraction: false }}
                        modules={[Autoplay]}
                        breakpoints={{
                            0: {
                                slidesPerView: 1.1, // below sm
                            },
                            640: {
                                slidesPerView: 2.2, // sm to md
                            },
                            768: {
                                slidesPerView: 3, // md and above
                            },
                        }}
                    >
                        {trendingItems.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="relative w-full h-[400px] rounded-lg overflow-hidden sm:rounded-xl lg:rounded-2xl">
                                    <Image
                                        src={item.src}
                                        alt={item.title}
                                        fill
                                        className="object-cover"
                                        sizes="100vw"
                                        loading='lazy'
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 bg-[#F5F5F5] px-3 sm:px-4 py-3 sm:py-4 flex justify-between items-end">
                                        <h3 className="text-black text-[14px] sm:text-[16px] lg:text-[20px] font-medium">{item.title}</h3>
                                        {/* <p className="text-[#000000] text-[12px] sm:text-[14px]">{item.duration}</p> */}
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default TrendingSection;
