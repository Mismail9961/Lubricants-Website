"use client";
import React from "react";

export default function AxionHero() {
    return (
        <section className="relative min-h-screen md:h-screen w-full overflow-hidden bg-black flex flex-col justify-end">
            {/* Embedded Tailwind Keyframes */}
            <style dangerouslySetInnerHTML={{__html: `
                @keyframes fadeIn {
                    from { opacity: 0; transform: translate(-50%, -10px); }
                    to { opacity: 0.3; }
                }
                @keyframes slideLeft {
                    from { opacity: 0; transform: translateX(-50px); }
                    to { opacity: 1; transform: translateX(0); }
                }
                @keyframes slideUp {
                    from { opacity: 0; transform: translateY(50px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}} />

            {/* Background Race Track */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: "url('/banner.jpeg')",
                }}
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/55" />

            {/* Blue Light Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-black via-transparent to-sky-900/40" />

            {/* Giant Metallic AXION Text */}
            <div className="pointer-events-none absolute left-1/2 top-[5%] md:top-[10%] z-10 -translate-x-1/2 animate-[fadeIn_1.5s_ease-out_forwards]">
                <h1
                    className="
                        whitespace-nowrap
                        text-[22vw] md:text-[16vw]
                        font-black
                        tracking-[6px] md:tracking-[10px]
                        text-transparent
                        bg-gradient-to-b
                        from-white
                        via-gray-300
                        to-gray-600
                        bg-clip-text
                        opacity-20 md:opacity-30
                    "
                >
                    AXION
                </h1>
            </div>

            {/* Main Hero Content */}
            <div className="relative z-20 w-full mt-auto pt-20 md:pt-0">
                {/* Mobile: Flex column-reverse to pull the product area structure up, 
                  allowing the absolute layout tweaks to stack elements exactly like the image.
                */}
                <div className="mx-auto flex flex-col-reverse md:flex-row w-full max-w-[1750px] items-center md:items-end justify-between px-4 sm:px-6 pb-6 md:pb-10 gap-0 md:gap-0">
                    
                    {/* Car Section */}
                    <div className="relative w-full md:w-[68%] lg:w-[72%] z-20 -mt-20 sm:-mt-32 md:mt-0 animate-[slideLeft_1.2s_ease-out_forwards]">
                        <img
                            src="https://pngimg.com/uploads/porsche/porsche_PNG10622.png"
                            alt="Porsche"
                            className="
                                w-full md:w-full
                                mx-auto md:mx-0
                                object-contain
                                drop-shadow-[0_15px_20px_rgba(0,0,0,0.8)]
                                md:drop-shadow-[0_30px_40px_rgba(0,0,0,0.9)]
                            "
                        />
                    </div>

                    {/* Product Area */}
                    <div className="relative flex flex-col items-center md:items-start w-full md:w-[32%] lg:w-[28%] md:bottom-[40px] lg:bottom-[80px] xl:bottom-[130px] justify-center animate-[slideUp_1.2s_ease-out_0.3s_both]">
                        
                        {/* Product Can */}
                        <div className="relative flex justify-center items-center md:block w-full max-w-[240px] sm:max-w-[320px] md:max-w-[430px]">
                            <img
                                src="https://axionlubricants.com/Images/HeroProduct.webp"
                                alt="Axion Oil"
                                className="relative z-10 w-[200px] sm:w-[260px] md:w-full object-contain"
                            />

                            {/* Title Text Overlay - Hidden on mobile, handled at the bottom block */}
                            <div className="hidden md:block absolute md:bottom-[170px] md:left-[-40px] z-30">
                                <h2 className="leading-[0.85] text-white">
                                    <span className="block md:text-[80px] lg:text-[95px] font-black tracking-tight drop-shadow-md">
                                        AX-0
                                    </span>
                                    <span className="block md:text-[80px] lg:text-[95px] font-black tracking-tight drop-shadow-md">
                                        0W-8
                                    </span>
                                </h2>
                            </div>
                        </div>

                        {/* Desktop Description Block */}
                        <div className="hidden md:block md:absolute md:bottom-[-40px] lg:bottom-[20px] md:left-[-20px] z-30 md:max-w-[340px] lg:max-w-[380px]">
                            <p className="md:text-[18px] lg:text-[22px] leading-relaxed text-white/90 drop-shadow-sm">
                                Ultra-low viscosity for top fuel savings,
                                smooth cold starts, and strong wear
                                protection. Made for next-gen high-
                                efficiency engines.
                            </p>
                        </div>
                    </div>
                    
                </div>

                {/* Mobile-Only Dedicated Text Footer to perfectly replicate the image layout */}
                <div className="md:hidden w-full bg-black/80 backdrop-blur-sm px-6 py-8 border-t border-white/5 z-30 relative">
                    <h2 className="leading-[0.9] text-white font-black text-[42px] tracking-tight mb-4">
                        AX-0 <br /> 0W-8
                    </h2>
                    <p className="text-[15px] sm:text-[16px] leading-relaxed text-gray-300">
                        Ultra-low viscosity for top fuel savings, smooth cold starts, and strong wear protection. Made for next-gen high-efficiency engines.
                    </p>
                </div>
            </div>

            {/* Vignette */}
            <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.8)] md:shadow-[inset_0_0_250px_rgba(0,0,0,0.8)]" />
        </section>
    );
}