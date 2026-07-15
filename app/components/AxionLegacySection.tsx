"use client";
import React from "react";

export default function PrimeLegacy() {
    return (
        <section className="w-full bg-white text-black py-12 md:py-20 px-4 sm:px-8 md:px-12 lg:px-16 select-none overflow-hidden">
            {/* Embedded Keyframes */}
            <style dangerouslySetInnerHTML={{__html: `
                @keyframes slideInLeft {
                    from { opacity: 0; transform: translateX(-40px); }
                    to { opacity: 1; transform: translateX(0); }
                }
                @keyframes slideInRight {
                    from { opacity: 0; transform: translateX(40px); }
                    to { opacity: 1; transform: translateX(0); }
                }
                .animate-slide-left {
                    animation: slideInLeft 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                }
                .animate-slide-right {
                    animation: slideInRight 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                }
            `}} />

            <div className="max-w-[1750px] mx-auto w-full">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-center">
                    
                    {/* Left Column: Story Text */}
                    <div className="col-span-1 md:col-span-6 lg:col-span-5 flex flex-col gap-6 md:gap-8 opacity-0 animate-slide-left">
                        <div className="flex flex-col gap-4">
                            <p className="text-[15px] xs:text-[16px] sm:text-[18px] lg:text-[20px] xl:text-[22px] leading-relaxed text-gray-800 font-normal tracking-wide">
                                <strong className="font-semibold text-black">PRIME LUBETECH Oils</strong> is an entity created as an alliance of experienced and well-reputed professionals in the Auto & Industrial Lubricants Business. 
                            </p>
                        </div>

                        <div className="flex flex-col gap-4">
                            <p className="text-[15px] xs:text-[16px] sm:text-[18px] lg:text-[20px] xl:text-[22px] leading-relaxed text-gray-800 font-normal tracking-wide">
                                The core purpose of establishing this company is to provide the absolute best and high-end equivalent products at highly economical rates when compared to standard multinational alternatives. We deliver premium reliability without the heavy compromise on cost.
                            </p>
                        </div>
                    </div>

                    {/* Right Column: Imagery Section */}
                    <div className="col-span-1 md:col-span-6 lg:col-span-7 opacity-0 animate-slide-right [animation-delay:0.2s]">
                        <div className="w-full h-auto overflow-hidden rounded-[24px] sm:rounded-[32px] shadow-lg md:shadow-xl">
                            <img
                                src="https://axionlubricants.com/Images/AboutImage1.webp" 
                                alt="PRIME City Skyline Landscape"
                                className="w-full h-full object-cover max-h-[300px] xs:max-h-[360px] sm:max-h-[480px] md:max-h-[520px]"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}