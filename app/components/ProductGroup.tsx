"use client";
import React, { useState, useRef } from 'react';
import { motion, Variants } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export const ProductGroup: React.FC = () => {
  // State for tracking mouse position inside the banner for the custom cursor badge
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const bannerRef = useRef<HTMLDivElement>(null);

  // Smooth entry variants for the grid headers
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
    }
  };

  // Track cursor position relative to the banner bounding box
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!bannerRef.current) return;
    const rect = bannerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <section className="w-full bg-white py-16 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 font-sans overflow-hidden select-none">
      <div className="w-full">
        
        {/* --- Top Layout Grid --- */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-12 gap-y-6 md:gap-x-12 mb-12 lg:mb-16 items-start"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.div variants={itemVariants} className="md:col-span-4">
            <h2 className="text-[32px] sm:text-[40px] xl:text-[48px] font-black tracking-tight text-[#222] leading-[1.1]">
              Product<br />Group
            </h2>
          </motion.div>

          <motion.div variants={itemVariants} className="md:col-span-4">
            <p className="text-[14px] sm:text-[15px] xl:text-[17px] text-[#555] font-normal leading-[1.6] md:pt-1">
              AXION delivers high-performance engine oils, lubricants, coolants, and greases 
              designed for modern vehicles and heavy-duty machinery.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="md:col-span-4">
            <p className="text-[14px] sm:text-[15px] xl:text-[17px] text-[#555] font-normal leading-[1.6] md:pt-1">
              Built on innovation and reliability, our products ensure smooth operation, 
              maximum protection, and long-lasting performance.
            </p>
          </motion.div>
        </motion.div>

        {/* --- Lower Media Section --- */}
        <div className="space-y-5 w-full">
          <h3 className="text-xs sm:text-sm xl:text-base font-bold tracking-normal text-[#444] px-0.5">
            Our Engine Oils
          </h3>

          {/* Media Wrapper with tracking rules — updates cursor behavior on desktop */}
          <div 
            ref={bannerRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="relative rounded-[24px] sm:rounded-[32px] overflow-hidden bg-[#0c0d0f] shadow-xl aspect-[320/215] sm:aspect-[16/10] md:aspect-[16/9] w-full max-h-[720px] sm:cursor-none"
          >
            
            {/* High-Contrast Local Image Asset */}
            <img 
              src="/BannerSection.png" 
              alt="AXION Commercial Fleet Lineup" 
              className="w-full h-full object-cover object-center filter brightness-[0.82] contrast-[1.08] pointer-events-none"
              onError={(e) => {
                // Fallback architecture in case file structure changes down the road
                e.currentTarget.src = "https://images.unsplash.com/photo-1616422285623-13ff0162193c?q=80&w=1400";
              }}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10 pointer-events-none" />

            {/* --- Custom Follower Badge (Replaces Cursor) --- */}
            {/* Hidden on small touch screens (under 640px) to prevent broken mobile touches */}
            <motion.div 
              className="absolute hidden sm:flex left-0 top-0 w-24 h-24 md:w-28 md:h-28 rounded-full bg-[#1433D6] items-center justify-center pointer-events-none z-30 shadow-lg shadow-[#1433D6]/30 mix-blend-normal"
              animate={{
                x: mousePos.x - (typeof window !== 'undefined' && window.innerWidth >= 768 ? 56 : 48),
                y: mousePos.y - (typeof window !== 'undefined' && window.innerWidth >= 768 ? 56 : 48),
                scale: isHovered ? 1 : 0,
                opacity: isHovered ? 1 : 0
              }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 28,
                mass: 0.4, // Lower mass makes it follow the mouse instantly with zero lag
                scale: { duration: 0.2 }
              }}
            >
              <svg 
                className="w-full h-full animate-[spin_16s_linear_infinite]" 
                viewBox="0 0 100 100"
              >
                <path
                  id="badgeTextPath"
                  d="M 50, 50 m -36, 0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0"
                  fill="none"
                />
                <text className="fill-white text-[8.5px] font-bold tracking-[2.4px] uppercase">
                  <textPath href="#badgeTextPath" startOffset="0%">
                    AXION • VIEW ALL OF OUR PRODUCTS •
                  </textPath>
                </text>
              </svg>
            </motion.div>

            {/* Premium Cut-Corner Action Button */}
            <div className="absolute bottom-5 left-5 sm:bottom-8 sm:left-8 z-40">
              <motion.button
                className="relative flex items-center gap-2.5 bg-[#1433D6] text-white pl-5 pr-4 py-2.5 sm:py-3 text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-colors duration-300 sm:cursor-pointer group"
                style={{
                  clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 7px), calc(100% - 7px) 100%, 0 100%)'
                }}
                whileHover={{ backgroundColor: '#000c7b' }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="translate-y-[0.5px]">Explore Now</span>
                <div className="w-4 h-4 rounded-full bg-white/10 flex items-center justify-center overflow-hidden">
                  <ArrowUpRight className="w-3 h-3 text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </motion.button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default ProductGroup;