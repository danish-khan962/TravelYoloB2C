'use client';

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const trendingItems = [
    { src: "/trending/trending1.png", title: "Uzbekistan", duration: "(11D / 12N)" },
    { src: "/trending/trending2.png", title: "Baku", duration: "(4D / 5N)" },
    { src: "/trending/trending3.png", title: "Leh-Ladakh", duration: "(5D / 6N)" },
];

const TrendingSection: React.FC = () => {
    return (
        <section className="w-full py-[60px] sm:py-[80px] lg:py-[120px]">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
                <h2 className="text-[20px] sm:text-[28px] lg:text-[40px] font-light italic leading-[26px] sm:leading-[36px] lg:leading-[55px] text-global-1 font-noto-serif">
                    Trending
                </h2>
                <p className="text-[14px] sm:text-[16px] lg:text-[18px] font-host-grotesk font-light leading-[19px] sm:leading-[22px] lg:leading-[24px] text-global-2 mt-2 max-w-[600px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>

                {/* Swiper for below lg (i.e., < 1024px) */}
                <div className="block lg:hidden mt-6">
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
                                slidesPerView: 2.2, // sm to below lg
                            }
                        }}
                    >
                        {trendingItems.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
                                    <Image
                                        src={item.src}
                                        alt={item.title}
                                        fill
                                        className="object-cover"
                                        sizes="100vw"
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 bg-[#F5F5F5] px-3 py-3 flex justify-between items-end">
                                        <h3 className="text-black text-[14px] font-medium">{item.title}</h3>
                                        <p className="text-[#000000] text-[12px]">{item.duration}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* Flex layout for lg and up */}
                <div className="hidden lg:flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8 mt-6 sm:mt-8 lg:mt-16">
                    {trendingItems.map((item, index) => (
                        <div
                            key={index}
                            className="relative w-full lg:flex-1 h-[400px] sm:h-[450px] lg:h-[600px] rounded-lg sm:rounded-xl lg:rounded-2xl overflow-hidden"
                        >
                            <Image
                                src={item.src}
                                alt={item.title}
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 33vw, 33vw"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-[#F5F5F5] px-3 sm:px-4 py-3 sm:py-4 flex justify-between items-end">
                                <h3 className="text-black text-[14px] sm:text-[16px] lg:text-[20px] font-medium">{item.title}</h3>
                                <p className="text-[#000000] text-[12px] sm:text-[14px]">{item.duration}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrendingSection;
