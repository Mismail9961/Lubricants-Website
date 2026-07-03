"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { Menu, X, ArrowRight, Globe } from 'lucide-react';

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState<'EN' | 'AR'>('EN');

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className="absolute top-0 left-0 w-full z-50 bg-[#0A4D34]/30 backdrop-blur-md border-b border-white/5 font-sans selection:bg-[#0A4D34] selection:text-[#E5C158]">
      {/* Responsive padding: tighter on tiny screens like iPhone 5s (px-3) to prevent overlapping */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 md:px-8 h-24 flex items-center justify-between relative">
        
        {/* LEFT NAV LINKS (Desktop) */}
        <nav className="hidden md:flex items-center gap-8 text-white font-medium text-sm lg:text-base">
          <a href="/about-us" className="hover:text-[#E5C158] transition-colors duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-[#E5C158] after:transition-all after:duration-300">
            About Us
          </a>
          <a href="/products" className="hover:text-[#E5C158] transition-colors duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-[#E5C158] after:transition-all after:duration-300">
            Products
          </a>
        </nav>

        {/* LOGO: Scaled intelligently down to w-32 on iPhone 5s/SE sizes */}
        <div className="flex-1 md:flex-initial flex justify-start md:justify-center">
          <a href="/" className="relative block h-16 w-32 xs:w-40 sm:w-48 md:w-56 select-none transition-transform duration-200 hover:scale-[1.02]">
            <Image
              src="/logo.png"
              alt="PRIME Logistics Logo"
              fill
              priority
              className="object-contain object-left md:object-center"
              sizes="(max-w-320px) 128px, (max-w-768px) 160px, 224px"
            />
          </a>
        </div>

        {/* RIGHT NAV & CONTROLS */}
        <div className="flex items-center gap-2 sm:gap-6">
          <a 
            href="/contact-us" 
            className="hidden md:block text-white font-medium text-sm lg:text-base hover:text-[#E5C158] transition-colors duration-200"
          >
            Contact Us
          </a>

          {/* Desktop Language Switcher (Hidden on Mobile for screen real estate) */}
          <div className="hidden sm:flex bg-[#0A4D34]/50 backdrop-blur-md p-1 rounded-full items-center relative w-20 h-8 select-none border border-white/10">
            <div 
              className={`absolute top-1 bottom-1 w-[34px] bg-white rounded-full transition-all duration-300 ease-out ${
                language === 'EN' ? 'left-1' : 'left-[42px]'
              }`}
            />
            <button
              onClick={() => setLanguage('EN')}
              className={`z-10 flex-1 text-center text-xs font-bold transition-colors duration-200 ${
                language === 'EN' ? 'text-[#0A4D34]' : 'text-white hover:text-[#E5C158]'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage('AR')}
              className={`z-10 flex-1 text-center text-xs font-bold transition-colors duration-200 ${
                language === 'AR' ? 'text-[#0A4D34]' : 'text-white hover:text-[#E5C158]'
              }`}
            >
              AR
            </button>
          </div>

          {/* PREMIUM HAMBURGER TOGGLE */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-white hover:text-[#E5C158] active:scale-95 focus:outline-none p-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all"
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* PREMIUM FULL-SCREEN MOBILE DRAWER */}
      <div 
        className={`fixed inset-0 bg-[#0A4D34]/98 backdrop-blur-xl z-50 md:hidden flex flex-col justify-between transition-all duration-500 ease-in-out ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto translate-x-0' : 'opacity-0 pointer-events-none translate-x-full'
        }`}
      >
        {/* Mobile Menu Header */}
        <div className="h-24 px-3 flex items-center justify-between border-b border-white/5">
          <div className="relative h-12 w-32">
            <Image src="/logo.png" alt="Logo" fill className="object-contain object-left" />
          </div>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-white p-2 rounded-xl bg-white/5 border border-white/10"
          >
            <X size={22} />
          </button>
        </div>

        {/* Navigation Links with Premium Indicators */}
        <nav className="flex flex-col gap-2 px-6 py-4 overflow-y-auto hierarchy-links">
          {[
            { label: 'About Us', href: '/about-us' },
            { label: 'Products', href: '/products' },
            { label: 'Contact Us', href: '/contact-us' }
          ].map((link, idx) => (
            <a 
              key={idx}
              href={link.href} 
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-between py-4 text-lg font-semibold text-white border-b border-white/5 active:text-[#E5C158] transition-colors group"
            >
              <span>{link.label}</span>
              <ArrowRight size={18} className="text-[#E5C158] opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
            </a>
          ))}
        </nav>

        {/* Premium Mobile Menu Bottom Panel */}
        <div className="p-6 bg-[#0A4D34]/50 border-t border-white/5 flex flex-col gap-4">
          {/* Integrated Language Switcher for Mobile UI */}
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-white/60 tracking-wider uppercase flex items-center gap-1.5">
              <Globe size={14} className="text-[#E5C158]" /> Language / لغة
            </span>
            <div className="bg-[#012b1c] p-0.5 rounded-lg flex border border-white/10">
              <button 
                onClick={() => setLanguage('EN')}
                className={`px-3 py-1 text-xs font-bold rounded-md transition-all ${language === 'EN' ? 'bg-white text-[#0A4D34]' : 'text-white/70'}`}
              >
                EN
              </button>
              <button 
                onClick={() => setLanguage('AR')}
                className={`px-3 py-1 text-xs font-bold rounded-md transition-all ${language === 'AR' ? 'bg-white text-[#0A4D34]' : 'text-white/70'}`}
              >
                AR
              </button>
            </div>
          </div>
          
          <div className="text-center text-[10px] text-white/40 tracking-widest uppercase mt-2">
            © 2026 PRIME Logistics Global
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;