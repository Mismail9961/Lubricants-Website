"use client";
import React from 'react';
import Image from 'next/image';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full font-sans selection:bg-white selection:text-[#0A4D34]">
      {/* Upper Footer: Deep Emerald Green Section matching logo.jpeg */}
      <div className="w-full bg-[#0B4A2D] text-white px-4 sm:px-6 md:px-8 py-10 md:py-14">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4">
          
          {/* Left / Center-Left Elements: Brand Logo & Navigation */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-12 text-center md:text-left">
            {/* PRIME Logo Image */}
            <div className="relative w-46 h-20 select-none">
              <Image
                src="/logo.png"
                alt="PRIME Logo"
                fill
                priority
                className="object-contain"
              />
            </div>

            {/* Navigation Links - Golden hover states matching the star in logo.jpeg */}
            <nav className="flex items-center gap-6 sm:gap-8 text-sm sm:text-base font-medium text-gray-200">
              <a 
                href="#about" 
                className="hover:text-[#E5C158] transition-colors duration-200 focus:outline-none focus:underline"
              >
                About Us
              </a>
              <a 
                href="#products" 
                className="hover:text-[#E5C158] transition-colors duration-200 focus:outline-none focus:underline"
              >
                Products
              </a>
              <a 
                href="#contact" 
                className="hover:text-[#E5C158] transition-colors duration-200 focus:outline-none focus:underline"
              >
                Contact Us
              </a>
            </nav>
          </div>

          {/* Right Elements: Carmetra Parent Product Identity */}
          <div className="flex flex-col items-center md:items-end select-none">
            {/* Graphic Representation of Carmetra Logo */}
            <div className="flex flex-col items-center">
              {/* Swoosh Wave Line - Gold Accent */}
              <div className="relative w-36 h-3 overflow-visible">
                <svg viewBox="0 0 144 12" fill="none" className="w-full h-full">
                  <path d="M2 10C40 1 100 13 142 2" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" />
                  <path d="M12 9C50 -1 110 11 142 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              
              {/* Carmetra Wordmark */}
              <span className="text-xl sm:text-2xl font-black tracking-wider text-white uppercase mt-0.5">
                CARMETRA
              </span>
              
              {/* Sub-label text */}
              <span className="text-[10px] uppercase tracking-wide text-gray-300 mt-0.5">
                A Product of Carmetra
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* Lower Footer: Dark Charcoal Black Attribution Banner matching the logo typography */}
      <div className="w-full bg-[#111111] text-gray-300 px-4 sm:px-6 md:px-8 py-4 text-center md:text-left border-t border-white/5">
        <div className="max-w-7xl mx-auto text-xs sm:text-sm font-medium tracking-wide">
          © 2026 PRIME Lubricants, All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;