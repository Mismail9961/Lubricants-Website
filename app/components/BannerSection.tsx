"use client";
import React from 'react';
import { motion, Variants } from 'framer-motion';

const PrimeBannerSection: React.FC = () => {
  // Explicitly typing variants prevents TypeScript from inferring broad array types
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const fadeInUpVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: [0.215, 0.61, 0.355, 1] // Safely typed now via Variants mapping
      },
    },
  };

  return (
    <section className="w-full bg-white font-sans text-[#111111] antialiased overflow-hidden">
      {/* Top Brand Header Line */}
      <div className="mx-auto max-w-7xl px-4 pt-6 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="flex flex-col"
        >
          <span className="text-xs font-black tracking-wider uppercase text-gray-500 sm:text-sm">
            PRIME <span className="font-normal text-gray-400">Fluids</span>
          </span>
          <hr className="mt-3 border-t border-gray-200" />
        </motion.div>
      </div>

      {/* Main Copy Section */}
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 gap-y-6 lg:grid-cols-12 lg:gap-x-12 lg:gap-y-0"
        >
          
          {/* Main Typography Header */}
          <motion.div variants={fadeInUpVariants} className="lg:col-span-6">
            <h1 className="text-[34px] font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Power Meets
              <span className="block text-gray-500 font-medium mt-1">Precision</span>
            </h1>
          </motion.div>

          {/* Descriptive Copy Block */}
          <motion.div 
            variants={fadeInUpVariants} 
            className="flex flex-col justify-center space-y-4 lg:col-span-6 lg:pl-4"
          >
            <p className="text-sm font-bold leading-relaxed sm:text-base md:text-lg">
              At PRIME, we fluidize more than machinery — we engineer momentum, 
              optimizing today and shaping the synthetic energy of tomorrow...
            </p>
            <p className="text-xs text-gray-600 leading-relaxed sm:text-sm md:text-base">
              so every component moves seamlessly. Always.
            </p>
          </motion.div>

        </motion.div>
      </div>

      {/* Banner Advertisement Area */}
      <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.215, 0.61, 0.355, 1] as const }}
          className="relative overflow-hidden rounded-sm bg-black shadow-lg group"
        >
          
          {/* Background Image Container */}
          <div className="absolute inset-0 z-0">
            <motion.img
              initial={{ scale: 1.08, opacity: 0.4 }}
              whileInView={{ scale: 1, opacity: 0.6 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              src="/banner.png" 
              alt="PRIME Core Power Banner"
              className="h-full w-full object-cover object-center mix-blend-screen transition-transform duration-700 ease-out group-hover:scale-105"
            />
            {/* Dark overlay gradient to guarantee readable text on tiny screens */}
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-transparent" />
          </div>

          {/* Banner Inner Content */}
          <div className="relative z-10 px-4 py-8 sm:p-10 md:p-12 lg:p-16 max-w-xl">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.h2 
                variants={fadeInUpVariants}
                className="text-xl font-bold tracking-tight text-white min-[320px]:text-2xl sm:text-3xl md:text-4xl"
              >
                Velocity Perfected.
                <span className="block mt-1">Confidence in Every Cycle.</span>
              </motion.h2>
              
              <motion.div variants={fadeInUpVariants}>
                <a
                  href="#learn-more"
                  className="inline-block mt-5 text-[11px] font-semibold uppercase tracking-widest text-gray-300 hover:text-white transition-colors duration-200 border-b border-transparent hover:border-white pb-0.5"
                >
                  Discover the Engineering.
                </a>
              </motion.div>
            </motion.div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default PrimeBannerSection;