'use client'

import React, { useState } from 'react'
import { FiChevronUp, FiChevronDown } from 'react-icons/fi'

const AccordionItem = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const FAQ = [
    { question: "Is this a group tour service?", answer: "No. Every trip is fully customized — no groups, no templates." },
    { question: "What kind of traveler is TravelYollo for?", answer: "Anyone who wants a completely tailored experience, from solo travelers to families." },
    { question: "Can I book just one part of my trip with you?", answer: "We specialize in full experiences, but feel free to reach out with your needs!" },
    { question: "How do I get started?", answer: "Just contact us. We’ll have a casual conversation about what you're dreaming of." },
  ]

  const toggleAccordion = (index: any) => {
    setOpenIndex(prevIndex => (prevIndex === index ? null : index))
  }

  return (
    <div className="max-w-[1032px] w-full mx-auto flex flex-col gap-4 pb-[100px] sm:pb-[150px]">
      {FAQ.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-lg p-6 shadow-sm"
        >
          {/* Header */}
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleAccordion(index)}
          >
            <p className="text-[#1D1D1F] text-[16px] md:text-[20px] font-medium font-host-grotesk">
              {item.question}
            </p>
            {openIndex === index ? (
              <FiChevronUp className="text-[#6C3B3F] text-[25px] md:text-[30px]" />
            ) : (
              <FiChevronDown className="text-[#6C3B3F] text-[25px] md:text-[30px]" />
            )}
          </div>

          {/* Content */}
          {openIndex === index && (
            <div className="mt-6">
              <p className="text-[#3A3A3A] text-[14px] md:text-[18px] font-normal font-host-grotesk">
                {item.answer}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default AccordionItem
