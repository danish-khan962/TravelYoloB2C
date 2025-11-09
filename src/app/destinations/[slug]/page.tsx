"use client"

import Testimonials from '@/components/sections/Experiences/Testimonials'
import WhatIsIncluded from '@/components/sections/Experiences/WhatIsIncluded'
import Hero from '@/components/sections/Itinerary/Hero'
import ItinerarySwiper from '@/components/sections/Itinerary/ItinerarySwiper'
import Timeline from '@/components/sections/Itinerary/Timeline'
import React, { useEffect, useState } from 'react'
import dynamic from "next/dynamic"
import Link from 'next/link'
import { useParams } from 'next/navigation'
import ItinerarySkeleton from '@/components/sections/Itinerary/ItinerarySkeleton'
import toast from 'react-hot-toast'

const LeafletMap = dynamic(() => import('@/components/sections/Itinerary/LeafletMap'), {
    ssr: false,
})

const page = () => {

    const { slug } = useParams();
    const [pkg, setPkg] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        script.async = true;
        script.onload = () => console.log("Razorpay script loaded");
        script.onerror = () => console.error("Razorpay script failed to load");
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    useEffect(() => {
        if (!slug) return;

        const fetchPackageData = async () => {
            try {
                const isUUID = /^[0-9a-fA-F-]{8}-[0-9a-fA-F-]{4}-[0-9a-fA-F-]{4}-[0-9a-fA-F-]{4}-[0-9a-fA-F-]{12}$/.test(slug as string)

                const res = await fetch(`/api/packages/${slug}`);
                if (!res.ok) throw new Error(`Failed to fetch package: ${res.status}`);

                const data = await res.json();
                console.log("Fetched package details:", data);
                setPkg(data);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchPackageData();
    }, [slug]);

    if (loading) return <ItinerarySkeleton />;
    if (error) return <p className="text-center text-red-500 mt-20">Error: {error}</p>;
    if (!pkg) return <p className="text-center mt-20">No package data found</p>;


    // Razorpay Modal
    const handleBookNow = async (pkg: any) => {
        try {
            if (!pkg || !pkg.price) {
                toast.error("Package price not available.");
                return;
            }

            // 1) Create Razorpay order
            const createRes = await fetch("/api/razorpay/createOrder", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    amount: Number(pkg.price),
                    currency: "INR",
                    packageId: pkg.id,
                }),
            });

            if (!createRes.ok) throw new Error("Failed to create order");
            const { order } = await createRes.json();
            if (!order?.id) throw new Error("Order creation failed");

            // 2) Razorpay options
            const options = {
                key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
                amount: order.amount,
                currency: order.currency,
                name: "TravelYolo",
                description: `Booking — ${pkg.title}`,
                image: "/images/logo.png",
                order_id: order.id,
                prefill: {
                    name: "Demo User",
                    email: "demo@example.com",
                    contact: "9999999999",
                },
                theme: { color: "#6C3B3F" },

                handler: async function (razorpayResponse: any) {
                    try {
                        console.log("Razorpay response:", razorpayResponse);

                        // 3) Verify payment signature
                        const verifyRes = await fetch("/api/razorpay/verifyPayment", {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({
                                razorpay_order_id: razorpayResponse.razorpay_order_id,
                                razorpay_payment_id: razorpayResponse.razorpay_payment_id,
                                razorpay_signature: razorpayResponse.razorpay_signature,
                            }),
                        });
                        const verifyJson = await verifyRes.json();
                        console.log("verifyJson:", verifyJson);

                        // --- DUMMY IDS to make it always succeed ---
                        const dummyBookingId = crypto.randomUUID();

                        const dummyUserId = "3fa85f64-5717-4562-b3fc-2c963f66afa6";
                        const dummyPackageId = "6dfb3bf7-49c4-4c4c-9e48-b509db2d1cab";

                        // 4) Send dummy payment data
                        const paymentPayload = {
                            booking: dummyBookingId,
                            razorpay_order_id: razorpayResponse.razorpay_order_id,
                            razorpay_payment_id: razorpayResponse.razorpay_payment_id,
                            razorpay_signature: razorpayResponse.razorpay_signature,
                            amount: String(pkg.price),
                            currency: "INR",
                            status: verifyJson.verified ? "success" : "failed",
                            payment_method: "upi",
                            failure_reason: verifyJson.verified ? "none" : "signature_mismatch",
                        };

                        await fetch("/api/payments", {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify(paymentPayload),
                        });

                        // 5) Send dummy booking data
                        const bookingPayload = {
                            user_id: dummyUserId,
                            package_id: dummyPackageId,
                            start_date: new Date().toISOString().split("T")[0],
                            end_date: new Date().toISOString().split("T")[0],
                            traveler_count: 1,
                            total_amount: String(pkg.price),
                            currency: "INR",
                            status: verifyJson.verified ? "confirmed" : "pending",
                            contact_email: "demo@example.com",
                            contact_phone: "9999999999",
                        };

                        await fetch("/api/bookings", {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify(bookingPayload),
                        });

                        // 6) Redirect to result
                        if (verifyJson.verified) {
                            window.location.href = `/payments/result?status=success&bookingId=${dummyBookingId}`;
                        } else {
                            window.location.href = `/payments/result?status=failed`;
                        }
                    } catch (err) {
                        console.error("Error in Razorpay handler:", err);
                        window.location.href = `/payments/result?status=failed`;
                    }
                },

                modal: {
                    ondismiss: async function () {
                        console.log("Razorpay modal dismissed by user");

                        try {
                            const cancelledPaymentPayload = {
                                booking: "275b7bf9-278e-494c-9265-a60707b54d4a",
                                razorpay_order_id: order.id,
                                razorpay_payment_id: "cancelled",
                                razorpay_signature: "cancelled",
                                amount: String(pkg.price),
                                currency: "INR",
                                status: "failed",
                                payment_method: "upi",
                                failure_reason: "user_dismissed_modal",
                            };

                            await fetch("/api/payments", {
                                method: "POST",
                                headers: { "Content-Type": "application/json" },
                                body: JSON.stringify(cancelledPaymentPayload),
                            });
                        } catch (error) {
                            console.warn("Failed to log cancelled payment:", error);
                        } finally {
                            // Always redirect even if logging fails
                            window.location.replace("/payments/result?status=failed");
                        }
                    },
                },

            };

            const rzp = new (window as any).Razorpay(options);

            // Guarantee redirect if user cancels or payment fails
            rzp.on("payment.failed", function (response: any) {
                console.error("Razorpay payment.failed event:", response);
                window.location.replace("/payments/result?status=failed");
            });

            rzp.on("payment.cancel", function () {
                console.warn("Razorpay payment.cancel event triggered");
                window.location.replace("/payments/result?status=failed");
            });

            // Also catch if modal forcibly closes before emitting events
            rzp.on("modal.closed", function () {
                console.warn("Razorpay modal forcibly closed");
                window.location.replace("/payments/result?status=failed");
            });

            rzp.open();
        } catch (err) {
            console.error("Booking flow error:", err);
            alert("Could not start booking. Try again.");
        }
    };



    return (
        <div>
            {/* Hero section */}
            <Hero title={pkg.title} image={pkg.image} duration={`(${pkg.duration_days}D / ${pkg.duration_nights}N)`} />


            {/* Overview */}
            <div className='w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex flex-col items-start mt-[86px] sm:mt-[157px]'>
                    <h1 className='text-[32px] sm:text-[40px] text-[#6C3B3F] font-noto-serif font-light italic'>Overview</h1>
                    <p className='max-w-[911px] w-full font-host-grotesk font-light text-start text-base sm:text-[20px] mt-[18px] sm:mt-[24px] sm:leading-snug text-[#312E29] pr-0 sm:pr-2'>
                        {pkg.description}
                    </p>
                </div>


                {/* Top attractions */}
                <div className='mt-[66px] sm:[79px]'>
                    <h1 className='text-[32px] sm:text-[40px] text-[#000000] font-noto-serif font-light italic'>Top Attractions</h1>
                    <div className='mt-[30px] sm:mt-[33px]'>
                        <ItinerarySwiper packageId={pkg.id}/>
                    </div>
                </div>


                {/* Itinerary Plans & Live Map*/}
                <div className='mt-[121px] sm:mt-[139px]'>
                    <h1 className='text-[32px] sm:text-[40px] text-[#000000] font-noto-serif font-light italic'>Itinerary Plan</h1>
                    <div className='flex flex-col md:flex-row justify-between items-center gap-y-[129px] gap-x-[68px]'>
                        <div>
                            <Timeline packageSlug={pkg.slug} />
                        </div>
                        <div className='h-[280px] sm:h-[400px] md:h-[750px] lg:h-[920px] xl:h-[880px] max-w-[660px] w-screen sm:w-full z-0'>
                            <LeafletMap slug={slug as string} />
                        </div>
                    </div>
                </div>


                {/*  What is included | Accordion */}
                <div className='mt-[80px] sm:mt-[160px]'>
                    <WhatIsIncluded />
                    <div className='hidden sm:flex flex-col sm:flex-row justify-center items-center sm:justify-start sm:items-start gap-4 mt-[100px] sm:mt-[148px]'>
                        <button
                            onClick={() => handleBookNow(pkg)}
                            className="w-full sm:w-[223px] h-[54px] bg-[#312E29] text-white rounded-full cursor-pointer hover:scale-105 transition-all ease-in-out duration-200"
                        >
                            Book now
                        </button>
                        <Link className='w-full' href={"/contact"}>
                            <button className='w-full sm:w-[223px]  h-[54px] border border-[#312E29] bg-white rounded-full cursor-pointer hover:scale-105 transition-all ease-in-out duration-200'>Book Discovery call</button>
                        </Link>
                    </div>
                </div>
            </div>


            {/* Testimonials */}
            <div className='bg-[#F9F9F9] mt-[106px] sm:mt-[211px] pb-[94px] sm:pb-[218px]'>
                <div className='w-full pt-[124px] md:pt-[192px]'>
                    <Testimonials packageId={pkg.id} />
                </div>
            </div>


            {/* Mobile buttons for Booking */}
            <div className='w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pb-[100px]'>
                <div className='flex sm:hidden flex-col sm:flex-row justify-center items-center sm:justify-start sm:items-start gap-4 mt-[100px] sm:mt-[148px]'>
                    <button
                        onClick={() => handleBookNow(pkg)}
                        className="w-full sm:w-[223px] h-[54px] bg-[#312E29] text-white rounded-full cursor-pointer hover:scale-105 transition-all ease-in-out duration-200"
                    >
                        Book now
                    </button>

                    <Link href={"/contact"} className="w-full">
                        <button className='w-full sm:w-[223px] h-[54px] border border-[#312E29] bg-white rounded-full cursor-pointer hover:scale-105 transition-all ease-in-out duration-200'>
                            Book Discovery call
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default page
