"use client"

import React from "react"

const TermsAndConditions = () => {
  return (
    <section className="w-screen bg-[#F2E9CF]">
      <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-16 text-[#312E29]">
        <div className="space-y-12">
          {/* Page Title */}
          <h1 className="text-4xl sm:text-5xl font-noto-serif font-bold text-[#6C3B3F] text-center mb-10">
            Terms & Conditions
          </h1>

          {/* Section 1 */}
          <div>
            <h2 className="text-2xl font-noto-serif text-[#6C3B3F] mb-4">
              1) Contracting Entity
            </h2>
            <p className="font-host-grotesk leading-relaxed">
              Bookings are made with <strong>VZ TRAVELYOLLO PRIVATE LIMITED</strong>, CIN <strong>U79110MH2025PTC445161</strong>,
              trading as TravelYollo (TravelYollo.com), registered at <strong>A 802, AAKANKSHA, OFF YARI, RD, VERSOVA, ANDHERI WEST,
              Vesava, Mumbai, Mumbai- 400061, Maharashtra</strong>.
            </p>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="text-2xl font-noto-serif text-[#6C3B3F] mb-4">
              2) Definitions
            </h2>
            <ul className="list-disc pl-6 font-host-grotesk space-y-2">
              <li>
                <strong>“Client/You”:</strong> the person or organization making the booking (and travelers listed).
              </li>
              <li>
                <strong>“Services”:</strong> travel planning, tours, transfers, accommodations, activities, ticketing,
                insurance facilitation, visa assistance, and related services.
              </li>
              <li>
                <strong>“Supplier”:</strong> third-party airline, hotel, DMC, activity provider, insurer, or transport company.
              </li>
            </ul>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="text-2xl font-noto-serif text-[#6C3B3F] mb-4">
              3) Role & Liability
            </h2>
            <p className="font-host-grotesk leading-relaxed">
              TravelYollo acts as an agent/organizer, arranging Services offered by independent Suppliers. Each
              Supplier’s terms apply to its component of your booking. TravelYollo is not liable for acts/omissions of
              Suppliers or events beyond our control (force majeure). Where TravelYollo is the principal for a service
              it directly operates, TravelYollo’s direct liability is limited as per these Terms.
            </p>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="text-2xl font-noto-serif text-[#6C3B3F] mb-4">
              4) Quotes, Pricing & Taxes
            </h2>
            <ul className="list-disc pl-6 font-host-grotesk space-y-2">
              <li>
                Quotes are in <strong>USD</strong> unless stated otherwise and are subject to availability and change until paid in full.
              </li>
              <li>
                Prices may vary due to fare classes, surcharges, taxes (GST/TCS), FX fluctuations, or government changes.
              </li>
              <li>
                Obvious pricing errors may be corrected; you can accept the corrected price or cancel for a full refund of
                the amount paid to TravelYollo for the erroneous portion.
              </li>
            </ul>
          </div>

          {/* Section 5 */}
          <div>
            <h2 className="text-2xl font-noto-serif text-[#6C3B3F] mb-4">
              5) Booking Process & Documents
            </h2>
            <ul className="list-disc pl-6 font-host-grotesk space-y-2">
              <li>
                A booking is confirmed when you receive TravelYollo’s written confirmation and we receive cleared payment.
              </li>
              <li>
                You must review confirmations and itineraries and report discrepancies within 24 hours.
              </li>
              <li>
                You must hold valid passports/visas/permits and comply with health, vaccination, and entry requirements.
              </li>
            </ul>
          </div>

          {/* Section 6 */}
          <div>
            <h2 className="text-2xl font-noto-serif text-[#6C3B3F] mb-4">
              6) Payments
            </h2>
            <ul className="list-disc pl-6 font-host-grotesk space-y-2">
              <li>
                Accepted methods: cards/UPI/net-banking via Razorpay/Paypal, bank transfer, or as displayed at checkout.
              </li>
              <li>
                Payment schedules (deposits/balances) will be stated in your quote/invoice.
              </li>
              <li>
                If a payment is late, reservations may be cancelled per Supplier rules; reinstatement is subject
                to availability and additional costs.
              </li>
            </ul>
          </div>

          {/* Section 7 */}
          <div>
            <h2 className="text-2xl font-noto-serif text-[#6C3B3F] mb-4">
              7) Cancellations & Changes (By You)
            </h2>
            <ul className="list-disc pl-6 font-host-grotesk space-y-2">
              <li>
                Your right to cancel/modify is governed by the Refund & Cancellation Policy and by individual
                Supplier fare rules. Some services are non-refundable/non-changeable.
              </li>
              <li>Name changes are generally not permitted by airlines.</li>
              <li>
                Unused services are non-refundable unless expressly stated.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </section>
  )
}

export default TermsAndConditions
