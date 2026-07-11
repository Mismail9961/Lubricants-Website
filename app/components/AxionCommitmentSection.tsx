"use client";
import React from "react";

export default function PrimeCommitment() {
    return (
        <section className="w-full bg-white text-black py-12 md:py-20 px-4 sm:px-8 md:px-12 lg:px-16 select-none overflow-hidden">
            {/* Embedded Keyframes */}
            <style dangerouslySetInnerHTML={{__html: `
                @keyframes slideInLeftVariant {
                    from { opacity: 0; transform: translateX(-40px); }
                    to { opacity: 1; transform: translateX(0); }
                }
                @keyframes slideInRightVariant {
                    from { opacity: 0; transform: translateX(40px); }
                    to { opacity: 1; transform: translateX(0); }
                }
                .animate-slide-left-variant {
                    animation: slideInLeftVariant 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                }
                .animate-slide-right-variant {
                    animation: slideInRightVariant 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                }
            `}} />

            <div className="max-w-[1750px] mx-auto w-full">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-center">
                    
                    {/* Left Column: Imagery Section (With custom top-right rounded corner from image_0b875d.jpg) */}
                    <div className="col-span-1 md:col-span-6 lg:col-span-6 opacity-0 animate-slide-left-variant">
                        <div className="w-full h-auto overflow-hidden rounded-bl-[16px] rounded-br-[16px] rounded-tl-[16px] rounded-tr-[40px] sm:rounded-tr-[64px] shadow-lg md:shadow-xl">
                            <img
                                src="https://media.istockphoto.com/id/1347150429/photo/professional-mechanic-working-on-the-engine-of-the-car-in-the-garage.jpg?s=612x612&w=0&k=20&c=5zlDGgLNNaWsp_jq_L1AsGT85wrzpdl3kVH-75S-zTU="
                                alt="PRIME Protect Modern Storefront Showroom"
                                className="w-full h-auto object-cover max-h-[300px] xs:max-h-[360px] sm:max-h-[480px] md:max-h-[520px]"
                            />
                        </div>
                    </div>

                    {/* Right Column: Commitment Text */}
                    <div className="col-span-1 md:col-span-6 lg:col-span-6 flex flex-col gap-6 md:gap-8 opacity-0 animate-slide-right-variant [animation-delay:0.2s]">
                        <div className="flex flex-col gap-4">
                            <p className="text-[15px] xs:text-[16px] sm:text-[18px] lg:text-[20px] xl:text-[22px] leading-relaxed text-gray-800 font-normal tracking-wide">
                                PRIME Protect isn't just a product; it's a commitment to protection. Every formulation is engineered to protect, tested under extreme conditions, and fine-tuned to protect systems in the world's toughest environments. Whether you are optimizing city logistics or off-road infrastructure, Protect is built to keep your equipment cleaner, cooler, and better protected—for longer.
                            </p>
                        </div>

                        <div className="flex flex-col gap-4">
                            <p className="text-[15px] xs:text-[16px] sm:text-[18px] lg:text-[20px] xl:text-[22px] leading-relaxed text-gray-800 font-normal tracking-wide">
                                Driven by engineering excellence and guided by the principles of protection, local innovation, and purposeful progress, PRIME continues its mission to protect—delivering absolute efficiency, durability, and protected confidence across every industrial pathway.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}