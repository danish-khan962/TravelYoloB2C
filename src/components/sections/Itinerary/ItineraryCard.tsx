import React from 'react'
import Image from 'next/image'

type ItineraryCardProps = {
  image: string
  title: string
  description: string
}

const ItineraryCard = ({ image, title, description }: ItineraryCardProps) => {
  return (
    <div className='max-w-[503px] w-full flex flex-col'>
      <Image
        src={image}
        alt={title}
        height={503}
        width={503}
        className='w-full h-full rounded-md'
      />

      <p className='mt-[18px] sm:mt-[25px] font-host-grotesk text-[20px] font-medium'>{title}</p>

      <p className='max-w-[294px] sm:max-w-[415px] w-full mt-[6px] sm:mt-[9px] text-[#312E29] font-host-grotesk text-base'>
        {description}
      </p>
    </div>
  )
}

export default ItineraryCard
