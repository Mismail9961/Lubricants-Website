"use client";
import React from 'react';
import { motion } from 'framer-motion';

export const BannerDropSection: React.FC = () => {
  return (
    <section className="w-full bg-black overflow-hidden select-none">
      {/* 
        Responsive height block: 
        - Perfectly preserves a cinematic feel on massive screens.
        - Scales safely down to an explicit minimum height of 260px to accommodate the iPhone 5s safely without text squishing.
      */}
      <div className="relative w-full aspect-[21/9] min-h-[260px] sm:min-h-[380px] md:min-h-[480px] lg:min-h-[600px] flex items-end">
        
        {/* Background Image Asset Layer */}
        <div className="absolute inset-0 w-full h-full">
          <img 
            src="/surreal-geometric-shapes-barren-desert.jpg" 
            alt="Power in Motion banner visual background" 
            className="w-full h-full object-cover object-center filter brightness-[0.75] contrast-[1.05]"
            onError={(e) => {
              // Safety fallback structure mirroring the core color palette of image_264f21.jpg
              e.currentTarget.src = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1600";
            }}
          />
          {/* Subtle gradient overlay to enhance typography readability on high-exposure spots */}
          <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-black/20 pointer-events-none" />
        </div>

        {/* 
          Content Overlays Wrapper:
          - Custom fluid padding tailored to stretch side-to-side on large devices.
          - Drops to narrow 18px horizontal padding specifically for the 320px wide profile of iPhone 5s.
        */}
        <div className="relative z-10 w-full px-[18px] sm:px-10 lg:px-16 xl:px-24 pb-8 sm:pb-12 md:pb-16 lg:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-[260px] xs:max-w-xs sm:max-w-md md:max-w-xl lg:max-w-2xl"
          >
            {/* 
              Responsive Type Stack:
              - text-xl fits natively inside a 320px viewport without wrapping phrases unnaturally.
              - Standard tailwind screens take over for modern larger breakpoints.
            */}
            <h2 className="text-white text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight leading-[1.15] text-left drop-shadow-md">
              Pure Performance.<br />
              Precision in<br />
              Every Turn.
            </h2>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default BannerDropSection;