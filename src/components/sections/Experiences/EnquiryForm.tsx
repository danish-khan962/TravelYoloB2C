"use client"

import React, {useState} from 'react'

const EnquiryForm = () => {

    // Creating form input states
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    
    // Preventing default form submission
    const handleFormSubmit = (e: any) => {
        e.preventDefault();
    }

  return (
    <div className='relative w-full flex justify-center items-center'>
      <form className='max-w-[878px] w-full flex flex-col gap-y-5' onSubmit={handleFormSubmit}>

        {/* Name input */}
        <div className='flex flex-col gap-y-5 md:flex-row gap-x-[24px]'>
            <input type="text" placeholder='First name*' className='w-full text-[18px] font-normal outline-none border border-[#98B6E2] rounded p-3 placeholder:text-[#727272] font-host-grotesk placeholder:font-host-grotesk' value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
            <input type="text" placeholder='Last name*' className='w-full text-[18px] font-normal outline-none border border-[#98B6E2] rounded p-3 placeholder:text-[#727272] font-host-grotesk placeholder:font-host-grotesk' value={lastName} onChange={(e) => setLastName(e.target.value)}/>
        </div>
        {/* Email input */}
        <input type="text" placeholder='Email*' className='w-full text-[18px] font-normal outline-none border border-[#98B6E2] rounded p-3 placeholder:text-[#727272] font-host-grotesk placeholder:font-host-grotesk' value={email} onChange={(e) => setEmail(e.target.value)}/>
        {/* Phone input */}
        <input type="text" placeholder='Phone' className='w-full text-[18px] font-normal outline-none border border-[#98B6E2] rounded p-3 placeholder:text-[#727272] font-host-grotesk placeholder:font-host-grotesk' value={phone} onChange={(e) => setPhone(e.target.value)}/>
        {/* Message input */}
        <input type="text" placeholder='Tell us more about your travel plans' className='w-full text-[18px] font-normal outline-none border border-[#98B6E2] rounded p-3 placeholder:text-[#727272] font-host-grotesk placeholder:font-host-grotesk' value={message} onChange={(e) => setMessage(e.target.value)}/>


        <div className='w-full flex justify-center items-center mt-[67px] md:mt-[55px]'>
          <button className='bg-[#312E29] w-full  md:w-[160px] h-[54px] text-white rounded-full hover:scale-105 transition-all ease-in-out duration-200 cursor-pointer text-[18px] font-host-grotesk'> Submit </button>
        </div>
      </form>
    </div>
  )
}

export default EnquiryForm
