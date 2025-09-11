import React from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';

interface TravelCategory {
    id: string;
    title: string;
    subtitle: string;
    image: string;
}

const travelCategories: TravelCategory[] = [
    {
        id: '1',
        title: 'Adventure',
        subtitle: 'Thrill meets luxury.',
        image: '/images/img_cascade_boat_cl.png'
    },
    {
        id: '2',
        title: 'Honeymoon',
        subtitle: 'Romance in style.',
        image: '/images/img_cascade_boat_cl_552x480.png'
    },
    {
        id: '3',
        title: 'Family',
        subtitle: 'Travel that brings everyone closer.',
        image: '/images/img_cascade_boat_cl_1.png'
    },
    {
        id: '4',
        title: 'Beach',
        subtitle: 'Barefoot bliss, elevated.',
        image: '/images/img_cascade_boat_cl_2.png'
    }
];

const BeyondItinerarySection: React.FC = () => {
    return (
        <>
            {/* Beyond the Itinerary Section */}
            <section className="relative w-full mt-[80px] sm:mt-[100px] lg:mt-[140px] overflow-hidden">
                <div className="flex flex-col lg:flex-row w-full">
                    <div className="flex flex-col gap-12 lg:gap-16 justify-start items-start w-full lg:w-[45%] px-4 sm:px-6 lg:px-0">
                        <div className="relative w-full">
                            <div className="w-[80%] lg:w-[60%] h-[340px] sm:h-[500px] lg:h-[600px] xl:h-[700px] bg-global-9 rounded-lg"></div>
                            <div className="absolute top-[40px] sm:top-[60px] lg:top-[80px] xl:top-[100px] right-[10%] lg:right-[15%] w-[230px] sm:w-[280px] lg:w-[320px] xl:w-[380px] h-[250px] sm:h-[350px] lg:h-[420px] xl:h-[480px]">
                                <Image
                                    src="/images/img_shutterstock_1995820526_566x448.png"
                                    alt="Travel Expert"
                                    width={448}
                                    height={566}
                                    className="w-full h-full object-cover rounded-t-[150px] rounded-b-[20px] ring-1 ring-black/5 shadow-lg"
                                />
                                <div className="absolute bottom-3 left-4 right-4">
                                    <Image
                                        src="/images/img_vector_black_900.svg"
                                        alt="Decorative Vector"
                                        width={402}
                                        height={480}
                                        className="w-full h-auto opacity-80"
                                    />
                                </div>
                            </div>
                        </div>
                        {/* <h2 className="text-[24px] sm:text-[32px] lg:text-[40px] font-light italic leading-[33px] sm:leading-[44px] lg:leading-[55px] text-global-1 text-center lg:text-left font-noto-serif">
                            The World, Tailored To Your Passions...
                        </h2> */}
                    </div>
                    <div className="flex flex-col gap-6 sm:gap-8 justify-start items-start w-full lg:w-[55%] px-4 sm:px-6 lg:px-10 max-w-full lg:max-w-[650px] mt-8 lg:mt-0">
                        <div className="flex flex-col gap-4 sm:gap-6 ">
                            <h2 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[40px] font-light italic leading-[24px] sm:leading-[26px] md:leading-[30px] lg:leading-[36px] font-noto-serif" style={{ color: '#6C3B3F' }}>
                                Beyond the itinerary<br />your passport to the extraordinary.
                            </h2>
                            <div className="flex flex-col gap-3 sm:gap-4">
                                <p className="text-[14px] sm:text-base md:text-[18px] font-host-grotesk font-light leading-[19px] sm:leading-[22px] md:leading-[26px] lg:leading-[26px]" style={{ color: '#312E29' }}>
                                    At TravelYollo, we don't just plan trips—we craft extraordinary experiences. Born from a passion for seamless, immersive, and unforgettable travel, we specialize in curating bespoke journeys that redefine luxury and adventure.
                                </p>
                                <p className="text-[14px] sm:text-base md:text-[18px] font-host-grotesk font-light leading-[19px] sm:leading-[22px] md:leading-[26px]" style={{ color: '#312E29' }}>
                                    We make travel feel effortless—so you can focus on what matters most: living the experience. Whether it's remote, rugged, or richly indulgent, every journey is crafted with care to blend seamless planning with unforgettable moments.
                                </p>
                                <p className="text-[14px] sm:text-base md:text-[18px] font-host-grotesk font-light leading-[19px] sm:leading-[22px] md:leading-[26px] " style={{ color: '#312E29' }}>
                                    Whether it's a private safari in the Serengeti, an exclusive villa retreat on the Amalfi Coast, or an Arctic expedition under the Northern Lights, we ensure every detail is meticulously designed for an unparalleled experience.
                                </p>
                                <p className="text-[14px] sm:text-base md:text-[18px] font-host-grotesk font-light leading-[19px] sm:leading-[22px] md:leading-[26px]" style={{ color: '#312E29' }}>
                                    At TravelYollo, we don't just take you places—we take you beyond the expected. Let's turn your travel dreams into reality.
                                </p>
                            </div>
                        </div>
                        <Button
                            variant="outline"
                            size="md"
                            className="rounded-full px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 text-xs sm:text-sm lg:text-[16px] font-host-grotesk font-normal leading-[16px] sm:leading-[18px] lg:leading-[22px] bg-transparent transition-transform duration-200 hover:scale-105 self-start mb-2 sm:mb-0"
                            style={{
                                border: '1px solid #312E29',
                                color: '#312E29',
                                background: 'transparent'
                            }}
                        >
                            Talk to our Travel Experts
                        </Button>
                    </div>
                </div>

                {/* Section Title */}
                {/* <div className="text-center mt-16 lg:mt-24 px-4 sm:px-6 lg:px-8">
                    <h2 className="text-[24px] sm:text-[32px] lg:text-[40px] font-light italic leading-[33px] sm:leading-[44px] lg:leading-[55px] text-global-3 max-w-[800px] mx-auto font-noto-serif">
                        Beyond the itinerary your passport to the extraordinary.
                    </h2>
                </div> */}
            </section>

            {/* Travel Categories Section */}
            <section className="w-full overflow-hidden mt-12 sm:mt-16 lg:mt-36">
                <h2 className="text-[30px] md:text-[35px] lg:text-[40px] px-4 sm:px-6 lg:ml-36 font-[300] italic leading-[35px] sm:leading-[40px] md:leading-[44px] lg:leading-[55px] text-global-1 text-start sm:text-center w-[70%] sm:w-[100%] lg:text-left font-noto-serif">
                    The World, Tailored To Your Passions...
                </h2>
                <div className="flex flex-col sm:flex-row w-full mt-4 sm:mt-6 lg:mt-8">
                    {travelCategories.map((category) => (
                        <div
                            key={category.id}
                            className="relative group w-full sm:w-1/4 h-[450px] sm:h-[320px] md:h-[420px] lg:h-[520px] xl:h-[600px] overflow-hidden"
                        >
                            <Image
                                src={category.image}
                                alt={category.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />

                            {/* Dim overlay on small devices */}
                            <div className="absolute inset-0 bg-black bg-opacity-50 sm:bg-opacity-0 transition-opacity duration-500 pointer-events-none"></div>

                            {/* Overlay background — transparent on small, white with opacity on larger */}
                            <div className="absolute top-0 left-0 right-0 h-[80px] bg-transparent sm:bg-[#F5F5F5] sm:bg-opacity-0 group-hover:bg-opacity-90 transition-all duration-500 z-10 pointer-events-none"></div>

                            {/* Text content: always centered on small, slide on hover only on larger */}
                            <div className="absolute top-0 left-0 right-0 h-full flex flex-col items-center justify-center px-4 sm:px-6 py-2 text-center pointer-events-none sm:h-[70px] sm:-translate-y-full sm:group-hover:translate-y-0 sm:transition-transform sm:duration-500 sm:ease-in-out sm:z-20">
                                <h3 className="text-white sm:text-global-1 text-[30px] md:text-[32px] font-light italic font-noto-serif ">
                                    {category.title}
                                </h3>
                                {/* <p className="text-white sm:text-global-1 text-[12px]  font-host-grotesk font-light">
                                    {category.subtitle}
                                </p> */}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

        </>
    );
};

export default BeyondItinerarySection;