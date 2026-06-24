"use client";
import React from 'react';
import { motion, Variants } from 'framer-motion';

export default function ContactUsBanner() {
  
  // Clean stagger and lift animation configurations
  const textContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] },
    },
  };

  return (
    <section className="w-full bg-white px-4 xs:px-6 md:px-0 py-8 md:py-12 lg:py-16 overflow-x-hidden">
      {/* Container is full width on desktop view (md screens and up) */}
      <div className="w-full mx-auto">
        
        {/* Banner Container - Width maximized for desktop, heights expanded significantly */}
        <div 
          className="relative w-full min-h-[280px] xs:min-h-[320px] sm:min-h-[380px] md:min-h-[500px] lg:min-h-[580px] xl:min-h-[640px] md:rounded-none overflow-hidden bg-cover bg-center flex items-center shadow-md"
          style={{ 
            backgroundImage: `url('https://axionlubricants.com/Images/ContactUsBottomBanner.webp')` 
          }}
        >
          {/* Subtle overlay to enhance text contrast on dynamic backgrounds */}
          <div className="absolute inset-0 bg-black/15 mix-blend-multiply pointer-events-none" />

          {/* Animating Text Content Wrapper */}
          <motion.div 
            className="relative z-10 w-full pl-6 pr-4 xs:pl-8 sm:pl-12 md:pl-16 lg:pl-24 max-w-xl md:max-w-2xl lg:max-w-4xl py-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={textContainerVariants}
          >
            {/* Main Headline */}
            <motion.h2 
              variants={itemVariants}
              className="text-white font-bold tracking-tight text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-[50px] xl:text-[56px] leading-[1.15] md:leading-[1.2]"
            >
              Power in Motion.<br />
              Confidence in<br />
              Every Drop.
            </motion.h2>

            {/* Subtext Action Link */}
            <motion.div 
              variants={itemVariants} 
              className="pt-4 md:pt-6 lg:pt-8"
            >
              <a 
                href="#learn-more" 
                className="inline-block text-white/90 hover:text-white text-[11px] xs:text-xs md:text-sm lg:text-base font-medium tracking-wide border-b border-transparent hover:border-white transition-all duration-200"
              >
                Learn More.
              </a>
            </motion.div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}