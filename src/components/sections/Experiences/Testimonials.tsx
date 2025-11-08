"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import RatingBar from "@/components/ui/RatingBar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

interface TestimonialProfile {
  id: string;
  name: string;
  avatar: string;
}

interface Testimonial {
  id: string;
  content: string;
  rating: number;
  tripTitle: string;
  reviewer_name: string;
  reviewer_avatar: string;
}

const Testimonials: React.FC<{ packageId: string }> = ({ packageId }) => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const skeletonCards = Array(2).fill(0);

  useEffect(() => {
    if (!packageId) {
      setLoading(false);
      <p className="font-medium font-host-grotesk text-[14px] md:text-base text-gray-600">No Testimonials for related package is found.</p>
    }

    const fetchTestimonials = async () => {
      try {
        const endpoint = packageId
          ? `/api/testimonials?package=${packageId}`
          : `/api/testimonials`;

        const res = await fetch(endpoint);
        if (!res.ok) throw new Error("Failed to fetch testimonials");

        const data = await res.json();
        const formatted =
          data?.results?.map((item: any) => ({
            id: item.id,
            content: item.content,
            rating: item.rating,
            tripTitle: item.trip_title,
            reviewer_name: item.reviewer_name || "Anonymous",
            reviewer_avatar: item.reviewer_avatar || "/images/default-avatar.jpg",
          })) || [];

        setTestimonials(formatted);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, [packageId]);

  if (loading)
    return (
      <section className="w-full bg-[#F9F9F9]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-12 sm:gap-16 lg:gap-20 relative">
          <div className="text-left">
            <h2 className="text-[32px] sm:text-[40px] font-light italic leading-[33px] sm:leading-[44px] lg:leading-[55px] font-noto-serif text-black">
              Testimonials
            </h2>
            <p className="text-[14px] sm:text-[16px] lg:text-[18px] font-host-grotesk font-light leading-relaxed mt-4 max-w-[400px] text-[#312E29]">
              Real stories from travelers who discovered journeys made just for them.
            </p>
          </div>

          {/* Skeleton Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mt-6">
            {skeletonCards.map((_, idx) => (
              <div
                key={idx}
                className="flex flex-col p-6 sm:p-8 bg-white rounded-2xl shadow-sm h-full min-h-[280px] animate-pulse"
              >
                {/* Avatar + Name + Rating */}
                <div className="flex gap-4 items-start mb-4">
                  <div className="w-16 h-16 bg-gray-200 rounded-3xl" />
                  <div className="flex flex-col flex-1">
                    <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className="w-3 h-3 bg-gray-200 rounded-sm"
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Trip Title */}
                <div className="h-4 bg-gray-200 rounded w-1/2 mb-3"></div>

                {/* Content */}
                <div className="space-y-2">
                  <div className="h-3 bg-gray-200 rounded w-full"></div>
                  <div className="h-3 bg-gray-200 rounded w-11/12"></div>
                  <div className="h-3 bg-gray-200 rounded w-10/12"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    );

  if (error)
    return <p className="text-center text-red-500 mt-10">Error: {error}</p>;

  if (testimonials.length === 0)
    return (
      <p className="text-center text-gray-500 mt-10">
        No testimonials for this package yet.
      </p>
    );

  return (
    <section className="w-full" style={{ backgroundColor: "#F9F9F9" }}>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-12 sm:gap-16 lg:gap-20 relative">
          <div className="text-left">
            <h2 className="text-[32px] sm:text-[40px] font-light italic leading-[33px] sm:leading-[44px] lg:leading-[55px] font-noto-serif text-black">
              Testimonials
            </h2>
            <p className="text-[14px] sm:text-[16px] lg:text-[18px] font-host-grotesk font-light leading-relaxed mt-4 max-w-[400px] text-[#312E29]">
              Real stories from travelers who discovered journeys made just for them.
            </p>
          </div>

          {/* Swiper Section */}
          <div className="relative mt-6">
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={24}
              slidesPerView={1}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              breakpoints={{
                640: { slidesPerView: 2, spaceBetween: 32 },
                1024: { slidesPerView: 2, spaceBetween: 40 },
              }}
              className="w-full testimonial-swiper pb-12"
            >
              {testimonials.map((t) => (
                <SwiperSlide key={t.id}>
                  <div className="flex flex-col p-6 sm:p-8 bg-white rounded-2xl shadow-sm h-full min-h-[280px]">
                    <div className="flex gap-4 items-start mb-4">
                      <div className="relative w-16 h-16 rounded-3xl overflow-hidden flex-shrink-0">
                        <Image
                          src={t.reviewer_avatar}
                          alt={t.reviewer_name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex flex-col">
                        <h4 className="text-[18px] font-noto-serif italic font-normal leading-tight text-black">
                          {t.reviewer_name}
                        </h4>
                        <div className="mt-1">
                          <RatingBar rating={t.rating} readonly={true} size="sm" />
                        </div>
                      </div>
                    </div>
                    <h3 className="text-[18px] font-host-grotesk font-semibold leading-tight mb-3 text-[#8B4F5C]">
                      {t.tripTitle}
                    </h3>
                    <p className="text-[16px] font-host-grotesk font-normal leading-relaxed italic text-[#312E29]">
                      {t.content}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
