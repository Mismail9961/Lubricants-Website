"use client";
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';

export const AxionSection: React.FC = () => {
  // Explicitly typing the variants to satisfy Framer Motion / TypeScript rules
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  return (
    <div className="w-full min-h-screen bg-white p-4 sm:p-6 md:p-8 flex items-center justify-center font-sans selection:bg-blue-500 selection:text-white">
      {/* Main Grid Container - Responsive down to iPhone 5s (320px) */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-auto"
      >
        
        {/* TOP LEFT / MAIN HEADER BLOCK */}
        <motion.div 
          variants={fadeInUp}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          className="relative md:col-span-2 h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden group shadow-md"
        >
          <img 
            src="https://media.istockphoto.com/id/1126926765/photo/engine-start-and-stop-button.jpg?s=612x612&w=0&k=20&c=3cQ7-nXlz-K0P6EMYJ3BShsM6T05QBXOsH0W4gMZtf0=" 
            alt="Engine Start Stop" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent p-6 sm:p-8 flex flex-col justify-end">
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-none max-w-xs sm:max-w-md">
              Start Your Journey with <span className="text-blue-400">AXION</span>
            </h1>
          </div>
        </motion.div>

        {/* TOP RIGHT / MECHANIC BLOCK */}
        <motion.div 
          variants={fadeInUp}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          className="h-48 sm:h-64 md:h-96 rounded-2xl overflow-hidden shadow-md group"
        >
          <img 
            src="https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcLzYtdGlwcy1mb3Itc3RhcnRpbmctYW4tb2xkLWVuZ2luZTMuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo4Mjh9fX0=" 
            alt="Mechanic working on engine" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </motion.div>

        {/* BOTTOM LEFT / VALUE PROP 1 */}
        <motion.div 
          variants={fadeInUp}
          className="bg-gray-50 rounded-2xl p-6 sm:p-8 flex flex-col justify-between min-h-[280px] shadow-sm border border-gray-100"
        >
          {/* Animated Accent Circle */}
          <motion.div 
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="w-12 h-12 rounded-full bg-rose-500 flex items-center justify-center text-white mb-6"
          >
            <ShieldCheck size={24} />
          </motion.div>
          <div>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
              Choosing AXION means choosing reliability, performance, and innovation.
            </p>
            <p className="text-gray-900 text-sm sm:text-base font-medium leading-relaxed">
              <strong className="font-bold text-black">Our products</strong> are engineered to meet the highest standards, ensuring optimal protection and efficiency for engines and machines across industries.
            </p>
          </div>
        </motion.div>

        {/* BOTTOM MIDDLE / VALUE PROP 2 */}
        <motion.div 
          variants={fadeInUp}
          className="relative bg-gray-50 rounded-2xl p-6 sm:p-8 flex flex-col justify-between min-h-[280px] overflow-hidden shadow-sm border border-gray-100"
        >
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed z-10 max-w-[85%]">
            With a commitment to quality and a forward-thinking approach, AXION keeps you moving — today and into the future.
          </p>
          
          {/* Decorative bubble graphic layered nicely */}
          <div className="absolute right-[-20%] bottom-[-20%] w-48 h-48 sm:w-56 sm:h-56 pointer-events-none mix-blend-multiply opacity-90">
            <img 
              src="https://axionlubricants.com/Images/JounreyDiv4.webp" 
              alt="Axion design element" 
              className="w-full h-full object-contain animate-pulse"
              style={{ animationDuration: '6s' }}
            />
          </div>
        </motion.div>

        {/* BOTTOM RIGHT / CONFIDENCE BLOCK */}
        <motion.div 
          variants={fadeInUp}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          className="relative h-80 sm:h-96 md:h-auto rounded-2xl overflow-hidden group shadow-md"
        >
          <img 
            src="https://www.cupra.com/content/dam/public/cupra-website/home-2025/hero-car-range/small/cupra-tavascan-century-bronze-matt.jpg" 
            alt="Luxury Performance Car" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 brightness-75"
          />
          
          {/* Subtle neon light overlay effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent p-6 sm:p-8 flex flex-col justify-between">
            {/* Minimal neon status indicator */}
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-600"></span>
              </span>
            </div>
            
            <h2 className="text-white text-2xl sm:text-3xl font-bold tracking-tight leading-snug">
              Power in Motion.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">
                Confidence in Every Drop.
              </span>
            </h2>
          </div>
        </motion.div>

      </motion.div>
    </div>
  );
};

export default AxionSection;