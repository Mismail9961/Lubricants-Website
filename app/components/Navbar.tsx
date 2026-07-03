"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState<'EN' | 'AR'>('EN');

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className="absolute top-0 left-0 w-full z-50 bg-transparent font-sans selection:bg-[#0A4D34] selection:text-[#E5C158]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 h-20 flex items-center justify-between">
        
        {/* LEFT NAV LINKS (Hidden on mobile) */}
        <nav className="hidden md:flex items-center gap-8 text-white font-medium text-sm lg:text-base">
          <a href="#about" className="hover:text-[#E5C158] transition-colors duration-200">
            About Us
          </a>
          <a href="#products" className="hover:text-[#E5C158] transition-colors duration-200">
            Products
          </a>
        </nav>

        {/* CENTER LOGO - Styled with Next.js Image matching logo.jpeg / image_fa2f05.png */}
        <div className="flex-1 md:flex-initial flex justify-start md:justify-center">
          <div className="relative w-36 h-12 select-none">
            <Image
              src="/logo.png"
              alt="PRIME Logo"
              fill
              priority
              className="object-contain"
            />
          </div>
        </div>

        {/* RIGHT NAV & LANGUAGE SWITCHER */}
        <div className="flex items-center gap-4 sm:gap-6">
          <a 
            href="#contact" 
            className="hidden md:block text-white font-medium text-sm lg:text-base hover:text-[#E5C158] transition-colors duration-200"
          >
            Contact Us
          </a>

          {/* Pill-shaped Language Switcher in Deep Emerald Green matching logo.jpeg */}
          <div className="bg-[#0A4D34]/50 backdrop-blur-sm p-1 rounded-full flex items-center relative w-20 h-8 select-none border border-white/10">
            {/* Sliding background element */}
            <div 
              className={`absolute top-1 bottom-1 w-[34px] bg-white rounded-full transition-all duration-300 ease-out ${
                language === 'EN' ? 'left-1' : 'left-[42px]'
              }`}
            />
            <button
              onClick={() => setLanguage('EN')}
              className={`z-10 flex-1 text-center text-xs font-bold transition-colors duration-200 ${
                language === 'EN' ? 'text-[#0A4D34]' : 'text-white hover:text-gray-200'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage('AR')}
              className={`z-10 flex-1 text-center text-xs font-bold transition-colors duration-200 ${
                language === 'AR' ? 'text-[#0A4D34]' : 'text-white hover:text-gray-200'
              }`}
            >
              AR
            </button>
          </div>

          {/* HAMBURGER TOGGLE */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-white hover:text-[#E5C158] focus:outline-none p-1"
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* MOBILE DRAWER OVERLAY (Tailored with brand colors) */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-20 bg-[#0A4D34]/95 backdrop-blur-md z-40 md:hidden flex flex-col justify-start px-6 py-8 animate-fade-in">
          <nav className="flex flex-col gap-6 text-xl font-bold text-white tracking-wide">
            <a 
              href="#about" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="border-b border-white/10 pb-3 active:text-[#E5C158]"
            >
              About Us
            </a>
            <a 
              href="/products" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="border-b border-white/10 pb-3 active:text-[#E5C158]"
            >
              Products
            </a>
            <a 
              href="#contact" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="border-b border-white/10 pb-3 active:text-[#E5C158]"
            >
              Contact Us
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;