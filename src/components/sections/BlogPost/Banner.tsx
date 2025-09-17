import React from 'react'
import Image from 'next/image'
import blogBannerDesktop from '../../../../public/blog/blogPost/blogPost_1.png'
import blogBannerMobile from '../../../../public/blog/blogPost/blogPostMobile_1.png'

const Banner = () => {
  return (
    <div className="relative w-full h-[80vh]">

      {/* Desktop Image */}
      <Image
        src={blogBannerDesktop}
        alt="Blog banner desktop"
        fill
        priority
        className="hidden xxs:block object-cover object-center"
      />

      {/* Mobile Image */}
      <Image
        src={blogBannerMobile}
        alt="Blog banner mobile"
        fill
        priority
        className="block xxs:hidden object-cover object-center"
      />

    </div>
  )
}

export default Banner
