"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface Destination {
  title: string;
  duration?: string;
  image?: string;
}

interface SignatureExperiencesSectionProps {
  applySigTransforms: () => void;
  scheduleSigTransforms: () => void;
  sigCarouselRef: React.RefObject<HTMLDivElement>;
  scrollSigCarousel: (direction: -1 | 1) => void;
}

const SignatureExperiencesSection: React.FC<SignatureExperiencesSectionProps> = ({
  applySigTransforms,
  scheduleSigTransforms,
  sigCarouselRef,
  scrollSigCarousel,
}) => {
  const [activeIndex, setActiveIndex] = useState(2); // Start with 3rd slide
  const [progress, setProgress] = useState(0);
  const swiperRef = useRef<SwiperType>();
  const [displayData, setDisplayData] = useState<Destination[]>([]);

  const initialSlideIndex = 3;

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/json/destinations.json");
        if (!res.ok) throw new Error("Failed to fetch destinations");
        const data: Destination[] = await res.json();
        setDisplayData(data);
      } catch (error) {
        console.error("Error loading destinations:", error);
      }
    }
    fetchData();
  }, []);

  const getYTransform = (slideIndex: number) => {
    const diff = slideIndex - activeIndex;
    switch (diff) {
      case -1:
        return "translateY(-50px)";
      case 0:
        return "translateY(30px)";
      case 1:
        return "translateY(100px)";
      case 2:
        return "translateY(150px)";
      case -3:
        return "translateY(200px)";
      default:
        return "translateY(100px)";
    }
  };

  const handlePrevSlide = () => {
    if (swiperRef.current) {
      const newIndex = Math.max(0, activeIndex - 1);
      swiperRef.current.slideTo(newIndex);
    }
  };

  const handleNextSlide = () => {
    if (swiperRef.current) {
      const newIndex = Math.min(displayData.length - 1, activeIndex + 1);
      swiperRef.current.slideTo(newIndex);
    }
  };

  // Update activeIndex on slide change
  const handleSlideChange = (swiper: SwiperType) => {
    setActiveIndex(swiper.activeIndex);
  };

  // Update progress smoothly using onProgress event
  const handleProgress = (swiper: SwiperType, progressValue: number) => {
    // Clamp progress between 0 and 1
    const clamped = Math.min(Math.max(progressValue, 0), 1);
    setProgress(clamped);
  };

  const [isLoop, setIsLoop] = useState(false);

  useEffect(() => {
    const updateLoop = () => {
      setIsLoop(window.innerWidth >= 640);
    };

    updateLoop();
    window.addEventListener("resize", updateLoop);
    return () => window.removeEventListener("resize", updateLoop);
  }, []);

  // Helper for rendering titles with line breaks
  const renderTitleWithBreaks = (title: string) =>
    title.split("||").map((line, idx, arr) => (
      <React.Fragment key={idx}>
        {line}
        {idx < arr.length - 1 && <br />}
      </React.Fragment>
    ));

  return (
    <div className="hidden sm:block w-full">
      <section className="w-full mt-[37px] sm:mt-[52px] lg:mt-[74px]">
        <div id="sig-carousel" className="px-0 py-24 sm:py-28 lg:py-36">
          <div
            className="relative overflow-visible"
            style={{
              paddingTop: "160px",
              paddingBottom: "80px",
              marginTop: "-300px",
              marginBottom: "-60px",
            }}
          >
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={12}
              slidesPerView={1.2}
              centeredSlides={true}
              slidesPerGroup={1}
              slideToClickedSlide={false}
              speed={600}
              navigation={false}
              initialSlide={initialSlideIndex}
              pagination={{
                el: ".swiper-pagination-custom",
                clickable: true,
                type: "progressbar",
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2.2,
                  spaceBetween: 15,
                  slidesPerGroup: 1,
                },
                768: {
                  slidesPerView: 2.8,
                  spaceBetween: 18,
                  slidesPerGroup: 1,
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 12,
                  slidesPerGroup: 1,
                },
              }}
              className="signature-experiences-swiper overflow-visible"
              style={{
                paddingLeft: "20px",
                paddingRight: "20px",
                paddingTop: "30px",
                paddingBottom: "30px",
              }}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              onSlideChange={handleSlideChange}
              onProgress={handleProgress}
              onInit={(swiper) => {
                swiper.slideTo(initialSlideIndex, 0);
                setActiveIndex(initialSlideIndex);
                setProgress(swiper.progress ?? 0);
              }}
            >
              {displayData.map((experience, index) => (
                <SwiperSlide key={index}>
                  <div
                    className="relative max-w-[350px] w-full transition-transform duration-300 ease-out"
                    style={{
                      transformOrigin: "center bottom",
                      transform: getYTransform(index),
                    }}
                  >
                    <div className="relative">
                      {experience.image ? (
                        <Image
                          src={experience.image}
                          alt={
                            typeof experience.title === "string"
                              ? experience.title.replace(/\|\|/g, " ")
                              : "Destination image"
                          }
                          width={350}
                          height={454}
                          className="w-full h-auto rounded-t-[16px]"
                        />
                      ) : (
                        <div className="w-full aspect-[296/398] bg-global-7 animate-pulse rounded-t-[16px]" />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-global-1/80 to-transparent rounded-t-[16px]" />
                    </div>

                    <div className="bg-[#F5F5F5] rounded-b-[16px] px-4 py-3 flex justify-between items-end">
                      <h3 className="text-[14px] sm:text-[16px] lg:text-[18px] font-host-grotesk font-medium leading-[20px] sm:leading-[22px] lg:leading-[26px] text-black flex-1 line-clamp-2">
                        {renderTitleWithBreaks(experience.title)}
                      </h3>
                      {experience.duration && (
                        <span className="text-[10px] sm:text-[12px] lg:text-[14px] font-host-grotesk font-normal leading-[13px] sm:leading-[16px] lg:leading-[19px] text-black ml-2 whitespace-nowrap">
                          {experience.duration}
                        </span>
                      )}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* Navigation + Progress bar */}
      <div className="relative z-20 flex justify-center items-center w-full -mt-12 pointer-events-auto px-4">
        <button
          className="swiper-button-prev-custom w-8 h-8 flex items-center justify-center cursor-pointer hover:bg-gray-100 rounded-full transition-colors"
          aria-label="Previous slide"
          onClick={handlePrevSlide}
        >
          <Image src="/images/img_xmlid_222.svg" alt="Previous" width={8} height={14} />
          <Image src="/images/img_xmlid_222.svg" alt="Previous" width={8} height={14} />
        </button>

        {/* Progress Bar */}
        <div className="flex-1 mx-4 max-w-[300px] w-full">
          <div className="w-full h-[3px] bg-[#E7E7E7] rounded-full relative overflow-hidden">
            <div
              className="absolute top-0 left-0 h-full bg-black rounded-full transition-all duration-300 ease-out"
              style={{
                width: `${progress * 100}%`,
              }}
            />
          </div>
        </div>

        <button
          className="swiper-button-next-custom w-8 h-8 flex items-center justify-center cursor-pointer hover:bg-gray-100 rounded-full transition-colors"
          aria-label="Next slide"
          onClick={handleNextSlide}
        >
          <Image src="/images/img_arrow_right.svg" alt="Next" width={8} height={14} />
          <Image src="/images/img_arrow_right.svg" alt="Next" width={8} height={14} />
        </button>
      </div>

      {/* Global Styles */}
      <style jsx global>{`
        .signature-experiences-swiper {
          overflow: visible !important;
        }

        .signature-experiences-swiper .swiper-wrapper {
          cursor: grab;
          overflow: visible !important;
          transition-timing-function: ease-out !important;
        }

        .signature-experiences-swiper .swiper-wrapper:active {
          cursor: grabbing;
        }

        .signature-experiences-swiper .swiper-slide {
          overflow: visible !important;
          transition: transform 0.3s ease-out !important;
        }

        .signature-experiences-swiper .swiper-slide-active {
          z-index: 10;
        }
      `}</style>
    </div>
  );
};

export default SignatureExperiencesSection;
