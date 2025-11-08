'use client';

import React, { useEffect, useState } from 'react';
import DestinationCard from './DestinationCard';
import { FiChevronDown } from 'react-icons/fi';

interface Destination {
  title: string;
  duration: string;
  image: string;
  id: string;
  slug: string;
}

const DestinationGrid: React.FC = () => {
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [visibleCount, setVisibleCount] = useState(6);
  const [screenWidth, setScreenWidth] = useState<number>(0);

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const res = await fetch(`/api/packages?package_type=destination`);
        if (!res.ok) throw new Error(`Failed to fetch destinations: ${res.status}`);

        const data = await res.json();
        console.log("Fetched destination packages:", data);

        const formattedData = data.results.map((pkg: any) => ({
          id: pkg.id,
          slug: pkg.slug,
          title: pkg.title || "Untitled",
          duration: pkg.duration_days && pkg.duration_nights
            ? `(${pkg.duration_days}D / ${pkg.duration_nights}N)`
            : "",
          image: pkg.image || "/images/default-package.jpg",
        }));

        setDestinations(formattedData);
      } catch (err) {
        console.error("Error loading destination packages:", err);
      }
    };

    fetchDestinations();
  }, []);


  //  Track screen size for responsiveness
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isSmallScreen = screenWidth < 640;
  const isMediumScreen = screenWidth >= 640 && screenWidth < 1024;
  const isLargeScreen = screenWidth >= 1024;

  const destinationsToShow = destinations.slice(0, visibleCount);

  const handleShowMore = () => {
    if (isSmallScreen) {
      setVisibleCount((prev) => Math.min(prev + 6, destinations.length));
    } else if (isMediumScreen) {
      setVisibleCount((prev) => Math.min(prev + 2, destinations.length));
    } else if (isLargeScreen) {
      setVisibleCount((prev) => Math.min(prev + 3, destinations.length));
    }
  };

  return (
    <div className="max-w-[1400px] w-full mx-auto">
      {/* Grid */}
      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-[20px] sm:gap-y-6 justify-items-center">
        {destinationsToShow.map((dest, index) => (
          <div
            key={index}
            className={`
              w-full
              ${index % 3 === 1 ? 'lg:-translate-y-[10%]' : ''}
              transition-transform duration-300
            `}
          >
            <DestinationCard
              title={
                <>
                  {dest.title.split('||').map((line, i) => (
                    <React.Fragment key={i}>
                      {line.trim()}
                      {i < dest.title.split('||').length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </>
              }
              id={dest.id}
              duration={dest.duration}
              image={dest.image}
              slug={dest.slug}
            />
          </div>
        ))}
      </div>

      {/* Show more button */}
      {isSmallScreen && visibleCount < destinations.length && (
        <div className="flex justify-center items-center mt-[70px]">
          <button
            onClick={handleShowMore}
            className="py-2 w-[341px] text-[20px] font-medium font-host-grotesk sm:hidden border border-[#312E29] rounded-full hover:text-white hover:bg-[#312E29] hover:scale-105 cursor-pointer transition-all ease-in-out duration-200"
          >
            Show more
          </button>
        </div>
      )}

      {/* Chevron */}
      {!isSmallScreen && visibleCount < destinations.length && (
        <div className="max-sm:hidden flex justify-center items-center mt-[20px]">
          <FiChevronDown
            className="cursor-pointer text-[30px] hover:scale-110 transition-transform duration-200"
            onClick={handleShowMore}
          />
        </div>
      )}
    </div>
  );
};

export default DestinationGrid;
