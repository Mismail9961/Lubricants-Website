"use client";
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState<'EN' | 'AR'>('EN');

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className="absolute top-0 left-0 w-full z-50 bg-transparent font-sans selection:bg-blue-600 selection:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 h-20 flex items-center justify-between">
        
        {/* LEFT NAV LINKS (Hidden on mobile/iPhone 5s) */}
        <nav className="hidden md:flex items-center gap-8 text-white font-medium text-sm lg:text-base">
          <a href="/about-us" className="hover:text-gray-300 transition-colors duration-200">
            About Us
          </a>
          <a href="#products" className="hover:text-gray-300 transition-colors duration-200">
            Products
          </a>
        </nav>

        {/* CENTER LOGO (Always visible) */}
        <div className="flex-1 md:flex-initial flex justify-start md:justify-center">
          <span className="text-2xl sm:text-3xl font-black tracking-widest text-white uppercase select-none">
            AXION
          </span>
        </div>

        {/* RIGHT NAV & LANGUAGE SWITCHER */}
        <div className="flex items-center gap-4 sm:gap-6">
          <a 
            href="/contact-us" 
            className="hidden md:block text-white font-medium text-sm lg:text-base hover:text-gray-300 transition-colors duration-200"
          >
            Contact Us
          </a>

          {/* Pill-shaped Language Switcher */}
          <div className="bg-blue-600/40 backdrop-blur-sm p-1 rounded-full flex items-center relative w-20 h-8 select-none border border-white/10">
            {/* Sliding background element */}
            <div 
              className={`absolute top-1 bottom-1 w-[34px] bg-white rounded-full transition-all duration-300 ease-out ${
                language === 'EN' ? 'left-1' : 'left-[42px]'
              }`}
            />
            <button
              onClick={() => setLanguage('EN')}
              className={`z-10 flex-1 text-center text-xs font-bold transition-colors duration-200 ${
                language === 'EN' ? 'text-blue-900' : 'text-white hover:text-gray-200'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage('AR')}
              className={`z-10 flex-1 text-center text-xs font-bold transition-colors duration-200 ${
                language === 'AR' ? 'text-blue-900' : 'text-white hover:text-gray-200'
              }`}
            >
              AR
            </button>
          </div>

          {/* HAMBURGER TOGGLE (Visible on Mobile/iPhone 5s only) */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-white hover:text-gray-300 focus:outline-none p-1"
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* MOBILE DRAWER OVERLAY (Tailored for small devices like iPhone 5s) */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-20 bg-black/95 backdrop-blur-md z-40 md:hidden flex flex-col justify-start px-6 py-8 animate-fade-in">
          <nav className="flex flex-col gap-6 text-xl font-bold text-white tracking-wide">
            <a 
              href="#about" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="border-b border-white/10 pb-3 active:text-blue-400"
            >
              About Us
            </a>
            <a 
              href="#products" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="border-b border-white/10 pb-3 active:text-blue-400"
            >
              Products
            </a>
            <a 
              href="#contact" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="border-b border-white/10 pb-3 active:text-blue-400"
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