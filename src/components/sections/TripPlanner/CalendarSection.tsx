'use client'
import { useState } from 'react'
import { DateRange } from 'react-date-range'
import { GoTriangleDown, GoTriangleUp } from 'react-icons/go'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import './customCalendar.css'

export default function CalendarSection() {
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ])

  const [budget, setBudget] = useState([3000, 75000])
  const [isDestinationOpen, setIsDestinationOpen] = useState(false)
  const [isTravelersOpen, setIsTravelersOpen] = useState(false)

  const now = new Date()
  const minDate = new Date(now.getFullYear(), now.getMonth(), now.getDate())
  const maxMonth = now.getMonth() + 6
  const maxDate = new Date(now.getFullYear(), maxMonth + 1, 0)

  return (
    <div className='flex flex-col md:flex-row gap-y-8 gap-x-10 bg-[#FAFAFA] px-4 md:px-6 lg:px-8 py-[60px] md:py-8 rounded-xl font-host-grotesk max-w-[866px] w-full'>
      {/* Left Inputs */}
      <div className='max-w-[700px] w-full space-y-6'>
        {/* Destination */}
        <div>
          <label className='block mb-2 font-normal text-[20px] ml-2'>Where do you dream of going?</label>
          <div className='relative'>
            <select
              className='w-full appearance-none bg-white rounded-md p-4 text-[#989898] text-[14px] lg:text-[18px] border border-[#98B6E2] pr-10'
              onFocus={() => setIsDestinationOpen(true)}
              onBlur={() => setIsDestinationOpen(false)}
            >
              <option>Select a destination to begin your journey.</option>
              {/* Additional destination options can be added here */}
            </select>
            {isDestinationOpen ? (
              <GoTriangleUp className='pointer-events-none absolute right-4 top-1/2 transform -translate-y-1/2 text-[#6C3B3F] text-xl' />
            ) : (
              <GoTriangleDown className='pointer-events-none absolute right-4 top-1/2 transform -translate-y-1/2 text-[#6C3B3F] text-xl' />
            )}
          </div>
        </div>

        {/* Travelers */}
        <div>
          <label className='block mb-2 font-normal text-[20px] ml-2'>Who’s traveling?</label>
          <div className='relative'>
            <select
              className='w-full appearance-none bg-white rounded-md p-4 text-[#989898] text-[14px] lg:text-[18px] border border-[#98B6E2] pr-10'
              onFocus={() => setIsTravelersOpen(true)}
              onBlur={() => setIsTravelersOpen(false)}
            >
              <option>Tell us how many travelers</option>
              {/* Additional traveler options can be added here */}
            </select>
            {isTravelersOpen ? (
              <GoTriangleUp className='pointer-events-none absolute right-4 top-1/2 transform -translate-y-1/2 text-[#6C3B3F] text-xl' />
            ) : (
              <GoTriangleDown className='pointer-events-none absolute right-4 top-1/2 transform -translate-y-1/2 text-[#6C3B3F] text-xl' />
            )}
          </div>
        </div>

        {/* Budget Slider */}
        <div>
          <label className='block mb-2 font-normal text-[20px] mt-0 md:mt-8 ml-2'>What’s your travel budget?</label>
          <div className='flex items-center justify-between text-sm font-semibold mt-2 mb-1'>
            <span>${budget[0]}</span>
            <span>${budget[1]}</span>
          </div>
          <input
            type='range'
            min='3000'
            max='75000'
            value={budget[0]}
            onChange={(e) => setBudget([parseInt(e.target.value), budget[1]])}
            className='w-full custom-slider'
            style={{
              '--progress': `${((budget[0] - 3000) / (75000 - 3000)) * 100}%`,
            } as React.CSSProperties}
          />
        </div>
      </div>

      {/* Calendar */}
      <div className='flex-1'>
        <p className='block mb-2 font-normal text-[20px] text-start sm:text-center'>When would you like to travel?</p>
        <div className="calendar-wrapper">
          <DateRange
            editableDateInputs={true}
            onChange={(item: any) => setDateRange([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={dateRange}
            rangeColors={['#824040']}
            minDate={minDate}
            maxDate={maxDate}
          />
        </div>
      </div>
    </div>
  )
}
