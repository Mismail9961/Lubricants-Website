"use client";
import React from "react";

export default function AxionHero() {
    return (
        <section className="relative min-h-screen w-full overflow-hidden bg-black flex flex-col justify-between select-none">
            {/* Embedded Keyframes */}
            <style dangerouslySetInnerHTML={{__html: `
                @keyframes fadeIn {
                    from { opacity: 0; transform: translate(-50%, -10px); }
                    to { opacity: 0.25; }
                }
                @keyframes slideLeft {
                    from { opacity: 0; transform: translateX(-60px); }
                    to { opacity: 1; transform: translateX(0); }
                }
                @keyframes slideUp {
                    from { opacity: 0; transform: translateY(60px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}} />

            {/* Background Race Track */}
            <div
                className="absolute inset-0 bg-cover bg-center transition-all duration-500"
                style={{
                    backgroundImage: "url('/banner.jpeg')",
                }}
            />

            {/* Overlays for Depth */}
            <div className="absolute inset-0 bg-black/50" />
            <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-black/80 via-black/20 to-sky-950/30" />

            {/* Giant Background Watermark Text */}
            <div className="pointer-events-none absolute left-1/2 top-[14%] md:top-[12%] z-10 -translate-x-1/2 animate-[fadeIn_1.5s_ease-out_forwards]">
                <h1 className="whitespace-nowrap text-[22vw] md:text-[15vw] font-black tracking-[6px] md:tracking-[16px] text-transparent bg-gradient-to-b from-white via-gray-400 to-transparent bg-clip-text opacity-25">
                    AXION
                </h1>
            </div>

            {/* --- MAIN CONTENT BODY --- */}
            {/* Built using a dynamic flex-col structure on mobile to cleanly position product area above the car */}
            <div className="relative z-20 w-full max-w-[1750px] mx-auto px-4 sm:px-8 md:px-12 pt-24 md:pt-32 flex flex-col md:grid md:grid-cols-12 gap-6 md:gap-4 items-center md:items-end justify-between h-full grow">
                
                {/* Mobile Product Container (Flips to top on mobile, sits right on desktop) */}
                <div className="order-1 md:order-2 col-span-1 md:col-span-5 lg:col-span-4 flex flex-col items-center md:items-start w-full relative z-20 animate-[slideUp_1.2s_ease-out_0.3s_both] md:pb-6">
                    
                    {/* Relative Wrapper for Text Canvas Overlay */}
                    <div className="relative w-full max-w-[140px] xs:max-w-[160px] sm:max-w-[200px] md:max-w-[340px] lg:max-w-[380px] mx-auto md:mx-0 flex justify-center md:block">
                        
                        {/* Product Can */}
                        <img
                            src="https://axionlubricants.com/Images/HeroProduct.webp"
                            alt="Axion Oil"
                            className="w-full h-auto max-h-[30vh] md:max-h-[55vh] lg:max-h-[58vh] xl:max-h-[62vh] object-contain relative z-10 filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
                        />

                        {/* Desktop Typography Overlay */}
                        <div className="hidden md:block absolute bottom-[42%] lg:bottom-[45%] left-[-45px] lg:left-[-60px] z-30 pointer-events-none">
                            <h2 className="leading-[0.8] text-white font-black tracking-tighter text-[70px] lg:text-[88px] xl:text-[105px] drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
                                <span className="block">AX-0</span>
                                <span className="block">0W-8</span>
                            </h2>
                        </div>
                    </div>

                    {/* Desktop Subtext Description */}
                    <div className="hidden md:block mt-6 max-w-[320px] lg:max-w-[360px] text-left">
                        <p className="text-[15px] lg:text-[17px] xl:text-[19px] leading-relaxed text-gray-200/90 drop-shadow-md font-normal">
                            Ultra-low viscosity for top fuel savings, smooth cold starts, and strong wear protection. Made for next-gen high-efficiency engines.
                        </p>
                    </div>
                </div>

                {/* Mobile Car Container (Flips to bottom on mobile, sits left on desktop) */}
                <div className="order-2 md:order-1 col-span-1 md:col-span-7 lg:col-span-8 w-full relative z-20 animate-[slideLeft_1.2s_ease-out_forwards] mt-auto md:mt-0">
                    <img
                        src="https://pngimg.com/uploads/porsche/porsche_PNG10622.png"
                        alt="Porsche"
                        className="w-full h-auto max-w-[280px] xs:max-w-[320px] sm:max-w-[440px] md:max-w-none mx-auto object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.85)] md:drop-shadow-[0_45px_50px_rgba(0,0,0,0.95)]"
                    />
                </div>

            </div>

            {/* --- MOBILE FOOTER DISPLAY (Optimized for iPhone 5s / Small Screens) --- */}
            <div className="md:hidden w-full bg-gradient-to-t from-black via-black/95 to-black/80 backdrop-blur-md px-5 py-5 sm:px-8 sm:py-8 border-t border-white/10 z-30 relative">
                <h2 className="leading-[0.9] text-white font-black text-[28px] sm:text-[42px] tracking-tight mb-2">
                    AX-0 <br /> 0W-8
                </h2>
                <p className="text-[12px] sm:text-[15px] leading-relaxed text-gray-300 font-light">
                    Ultra-low viscosity for top fuel savings, smooth cold starts, and strong wear protection. Made for next-gen high-efficiency engines.
                </p>
            </div>

            {/* High-fidelity Vignette Frame */}
            <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_60px_rgba(0,0,0,0.85)] md:shadow-[inset_0_0_200px_rgba(0,0,0,1)]" />
        </section>
    );
}