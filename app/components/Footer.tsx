"use client";
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full font-sans selection:bg-white selection:text-red-600">
      {/* Upper Footer: Dark Gray Section */}
      <div className="w-full bg-[#2A2A2A] text-white px-4 sm:px-6 md:px-8 py-10 md:py-14">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4">
          
          {/* Left / Center-Left Elements: Brand Logo & Navigation */}
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 text-center md:text-left">
            {/* AXION Logo Wordmark */}
            <span className="text-2xl sm:text-3xl font-black tracking-widest text-white uppercase select-none">
              AXION
            </span>

            {/* Navigation Links */}
            <nav className="flex items-center gap-6 sm:gap-8 text-sm sm:text-base font-medium text-gray-300">
              <a 
                href="#about" 
                className="hover:text-red-500 transition-colors duration-200 focus:outline-none focus:underline"
              >
                About Us
              </a>
              <a 
                href="#products" 
                className="hover:text-red-500 transition-colors duration-200 focus:outline-none focus:underline"
              >
                Products
              </a>
              <a 
                href="#contact" 
                className="hover:text-red-500 transition-colors duration-200 focus:outline-none focus:underline"
              >
                Contact Us
              </a>
            </nav>
          </div>

          {/* Right Elements: Carmetra Parent Product Identity */}
          <div className="flex flex-col items-center md:items-end select-none">
            {/* Graphic Representation of Carmetra Logo */}
            <div className="flex flex-col items-center">
              {/* Swoosh Wave Line */}
              <div className="relative w-36 h-3 overflow-visible">
                <svg viewBox="0 0 144 12" fill="none" className="w-full h-full">
                  <path d="M2 10C40 1 100 13 142 2" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" />
                  <path d="M12 9C50 -1 110 11 142 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              
              {/* Carmetra Wordmark */}
              <span className="text-xl sm:text-2xl font-black tracking-wider text-white uppercase mt-0.5">
                CARMETRA
              </span>
              
              {/* Sub-label text */}
              <span className="text-[10px] uppercase tracking-wide text-gray-400 mt-0.5">
                A Product of Carmetra
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* Lower Footer: Red Attribution Banner */}
      <div className="w-full bg-[#FA1505] text-white px-4 sm:px-6 md:px-8 py-3 text-center md:text-left">
        <div className="max-w-7xl mx-auto text-xs sm:text-sm font-medium tracking-wide">
          © 2025 AXION Lubricants, All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;