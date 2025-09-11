"use client"
import React from 'react'
import { useState } from 'react'

const Contact = () => {

  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [phoneInput, setPhoneInput] = useState("");
  const [messageInput, setMessageInput] = useState("")

  // Handling form submit
  const handleFormSubmission = (e: any) => {
      e.preventDefault();
  }

  return (
    <div className='relative w-full flex justify-center items-center'>
      <form className='max-w-[878px] w-full flex flex-col gap-y-5'>

        {/* Name input */}
        <input type="text" placeholder='Full name*' className='w-full text-[18px] font-normal outline-none border border-[#98B6E2] rounded p-3 placeholder:text-[#727272] font-host-grotesk placeholder:font-host-grotesk' value={nameInput} onChange={(e) => setNameInput(e.target.value)}/>
        {/* Email input */}
        <input type="text" placeholder='Email*' className='w-full text-[18px] font-normal outline-none border border-[#98B6E2] rounded p-3 placeholder:text-[#727272] font-host-grotesk placeholder:font-host-grotesk' value={emailInput} onChange={(e) => setEmailInput(e.target.value)}/>
        {/* Phone input */}
        <input type="text" placeholder='Phone' className='w-full text-[18px] font-normal outline-none border border-[#98B6E2] rounded p-3 placeholder:text-[#727272] font-host-grotesk placeholder:font-host-grotesk' value={phoneInput} onChange={(e) => setPhoneInput(e.target.value)} />
        {/* Message input */}
        <input type="text" placeholder='Message' className='w-full text-[18px] font-normal outline-none border border-[#98B6E2] rounded p-3 placeholder:text-[#727272] font-host-grotesk placeholder:font-host-grotesk' value={messageInput} onChange={(e) => setMessageInput(e.target.value)} />

        {/* Select menu */}
        <input type="text" placeholder='How can we help?' className='w-full text-[18px] font-normal outline-none border border-[#98B6E2] rounded p-3 placeholder:text-[#727272]' />

        <div className='w-full flex justify-center items-center mt-4'>
          <button className='bg-[#312E29] w-full  md:w-[160px] h-[54px] text-white rounded-full hover:scale-105 transition-all ease-in-out duration-200 cursor-pointer text-[18px] font-host-grotesk' onClick={handleFormSubmission}> Submit </button>
        </div>
      </form>
    </div>
  )
}

export default Contact