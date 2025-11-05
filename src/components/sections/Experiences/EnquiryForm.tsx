"use client";

import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const EnquiryForm = () => {
  // Form states
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  // Form submission
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation checks
    if (!firstName.trim()) {
      toast.error("First name is required.");
      return;
    }
    if (!lastName.trim()) {
      toast.error("Last name is required.");
      return;
    }
    if (!email.trim() || !email.includes("@")) {
      toast.error("Please enter a valid email address.");
      return;
    }
    if (phone && !/^\d{10}$/.test(phone)) {
      toast.error("Phone number must contain exactly 10 digits.");
      return;
    }

    // Save form data
    const formData = {
      firstName,
      lastName,
      email,
      phone,
      message,
      submittedAt: new Date().toLocaleString(),
    };

    localStorage.setItem("enquiryForm", JSON.stringify(formData));

    toast.success("Form submitted successfully!");

    // Clear form
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setMessage("");

    // Show overlay for 4s
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 4000);
  };

  return (
    <div className="relative w-full flex justify-center items-center">
      {/* Toast container */}
      <Toaster position="top-center" reverseOrder={false} />

      {/* Success Overlay */}
      {showSuccess && (
        <>
          <div className="absolute inset-0 z-20 flex justify-center items-center bg-[#D9D9D9]/30 backdrop-blur-sm rounded-md transition-all duration-300">
            <p className="fade-in-scale max-w-[650px] w-full leading-snug text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-noto-serif text-center px-4 text-[#6C3B3F] font-semibold italic">
              Hooray! Your travel plans are one step closer to reality.
            </p>
          </div>

          <style>
            {`
              @keyframes fadeInScale {
                0% { opacity: 0; transform: scale(0.95); }
                100% { opacity: 1; transform: scale(1); }
              }
              .fade-in-scale {
                animation: fadeInScale 0.5s ease-out;
              }
            `}
          </style>
        </>
      )}

      <form
        className={`max-w-[878px] w-full flex flex-col gap-y-5 transition-all duration-300 ${
          showSuccess ? "blur-sm pointer-events-none" : ""
        }`}
        onSubmit={handleFormSubmit}
      >
        {/* Name inputs */}
        <div className="flex flex-col gap-y-5 md:flex-row gap-x-[24px]">
          <input
            type="text"
            placeholder="First name*"
            className="w-full text-[18px] font-normal outline-none border border-[#98B6E2] rounded p-3 placeholder:text-[#727272] font-host-grotesk"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Last name*"
            className="w-full text-[18px] font-normal outline-none border border-[#98B6E2] rounded p-3 placeholder:text-[#727272] font-host-grotesk"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        {/* Email */}
        <input
          type="text"
          placeholder="Email*"
          className="w-full text-[18px] font-normal outline-none border border-[#98B6E2] rounded p-3 placeholder:text-[#727272] font-host-grotesk"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Phone */}
        <input
          type="text"
          placeholder="Phone"
          className="w-full text-[18px] font-normal outline-none border border-[#98B6E2] rounded p-3 placeholder:text-[#727272] font-host-grotesk"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        {/* Message */}
        <input
          type="text"
          placeholder="Tell us more about your travel plans"
          className="w-full text-[18px] font-normal outline-none border border-[#98B6E2] rounded p-3 placeholder:text-[#727272] font-host-grotesk"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <div className="w-full flex justify-center items-center mt-[67px] md:mt-[55px]">
          <button
            type="submit"
            className="bg-[#312E29] w-full md:w-[160px] h-[54px] text-white rounded-full hover:scale-105 transition-all ease-in-out duration-200 cursor-pointer text-[18px] font-host-grotesk"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default EnquiryForm;
