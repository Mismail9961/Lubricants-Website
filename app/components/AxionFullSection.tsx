"use client";
import React from 'react';
import { motion, Variants } from 'framer-motion';

const productImages = [
  { id: '0w20', src: '/0W-20.png', alt: 'PRIME 0W-20 Engine Oil' },
  { id: '10w30', src: '/10W-30.png', alt: 'PRIME 10W-30 Engine Oil' },
  { id: '10w40', src: '/10W-40.png', alt: 'PRIME 10W-40 Engine Oil' },
  { id: '20w50', src: '/20W-50.png', alt: 'PRIME 20W-50 Engine Oil' },
  { id: 'flowdex3', src: '/Flow-Dex-3.png', alt: 'PRIME Flow-Dex-3' },
];

export const PrimeFullSection: React.FC = () => {
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: 'easeOut' } 
    },
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  };

  return (
    <section className="relative w-full min-h-[750px] bg-white py-8 px-2 xs:px-4 flex flex-col items-center justify-between overflow-hidden font-sans select-none">
      
      {/* Header Info */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="text-center max-w-2xl z-10 mb-6"
      >
        <h2 className="text-xl min-[360px]:text-2xl sm:text-4xl font-extrabold text-[#0B4A2D] tracking-tight leading-tight">
          PROTECT is Built for <span className="text-[#D4AF37]">Performance</span>
        </h2>
        <p className="text-[11px] sm:text-base font-semibold text-black mt-1.5 tracking-wide px-1">
          trusted on every road, in every condition, by every vehicle.
        </p>
      </motion.div>

      {/* Main Showcase Grid Wrapper */}
      <div className="relative w-full max-w-5xl flex flex-col items-center justify-center my-auto">
        
        {/* Pure Images Grid - Dense pack tailored for iPhone 5s through Desktop */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-30px' }}
          className="grid grid-cols-2 xs:grid-cols-3 md:grid-cols-5 gap-1 sm:gap-1.5 w-full px-0.5 pb-12 justify-center items-center"
        >
          {productImages.map((product) => (
            <motion.div
              key={product.id}
              variants={fadeInUp}
              whileHover={{ scale: 1.04, transition: { duration: 0.2 } }}
              className="bg-white p-0 flex items-center justify-center aspect-[2/3] overflow-hidden cursor-pointer"
            >
              <img 
                src={product.src} 
                alt={product.alt}
                className="w-full h-full object-contain mix-blend-multiply bg-white"
                loading="lazy"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Absolute Center Layer */}
        <div className="absolute bottom-0 left-0 right-0 mx-auto w-[95%] sm:w-[85%] md:w-[75%] z-20 flex justify-center items-center pointer-events-none">
          {/* YOUR LOCAL CENTRAL ASSET GOES HERE IF NEEDED */}
        </div>
      </div>

      {/* Premium UI Action Button */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="z-30 w-full max-w-xs px-3"
      >
        <button 
          onClick={() => alert('Downloading Profile...')}
          className="w-full py-3 px-4 rounded-full border-2 border-black bg-black text-[#D4AF37] font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-200 hover:bg-[#0B4A2D] hover:border-[#0B4A2D] active:scale-95 shadow-md"
        >
          Download PROTECT Profile
        </button>
      </motion.div>

    </section>
  );
};

export default PrimeFullSection;