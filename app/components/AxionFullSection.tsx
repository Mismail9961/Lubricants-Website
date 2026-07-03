"use client";
import React from 'react';
import { motion, Variants } from 'framer-motion';

interface ProductCard {
  id: string;
  name: string;
  subName: string;
  typeBadge?: string;
  description: string;
  sae: string;
  api: string;
  bgColor: string;
  accentLine: string;
}

const products: ProductCard[] = [
  {
    id: 'px-104',
    name: 'PRIME',
    subName: 'PX-104 - PRECISION',
    description: 'Heavy-duty diesel engine oil offering superior performance under high loads and extreme temperatures for demanding conditions.',
    sae: 'SAE 15W-40',
    api: 'API CK-4',
    bgColor: 'from-[#1a2e26] to-[#111e19]',
    accentLine: 'bg-emerald-500',
  },
  {
    id: 'px-21',
    name: 'PRIME',
    subName: 'PX-21 - ULTIMA',
    typeBadge: 'MULTIGRADE MINERAL',
    description: 'Provides strong engine protection and sludge resistance for a wide range of older petrol and diesel vehicles, ensuring cleaner operation.',
    sae: 'SAE 20W-50',
    api: 'API SL/CF',
    bgColor: 'from-[#4a2e16] to-[#2d1b0d]',
    accentLine: 'bg-amber-600',
  },
  {
    id: 'px-1',
    name: 'PRIME',
    subName: 'PX-1 - PREMIUM',
    typeBadge: 'Fully Synthetic',
    description: 'Provides exceptional fuel economy, low-temperature fluidity, and wear protection. Suitable for ultra-efficient modern engines.',
    sae: 'SAE 0W-16',
    api: 'API SP ILSAC GF-6A',
    bgColor: 'from-[#1e1b4b] to-[#0f0e26]',
    accentLine: 'bg-indigo-600',
  },
  {
    id: 'px-103',
    name: 'PRIME',
    subName: 'PX-103 - PRECISION',
    description: 'Heavy-duty diesel engine oil offering superior fuel economy, wear protection, and cold start performance for advanced engine systems.',
    sae: 'SAE 5W-30',
    api: 'API CK-4',
    bgColor: 'from-[#064e3b] to-[#022c22]',
    accentLine: 'bg-teal-500',
  },
];

export const PrimeFullSection: React.FC = () => {
  // Statically typed variants to eliminate any TS evaluation errors
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: 'easeOut' } 
    },
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  return (
    <section className="relative w-full min-h-[900px] bg-white py-10 px-4 flex flex-col items-center justify-between overflow-hidden font-sans select-none">
      
      {/* Header Info */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="text-center max-w-2xl z-10 mb-4"
      >
        <h2 className="text-2xl sm:text-4xl font-extrabold text-black tracking-tight">
          PRIME is Built for Performance
        </h2>
        <p className="text-xs sm:text-base font-medium text-gray-600 mt-2 tracking-wide px-2">
          trusted on every road, in every condition, by every vehicle.
        </p>
      </motion.div>

      {/* Main Showcase Grid & Asset Insertion Wrapper */}
      <div className="relative w-full max-w-5xl flex flex-col items-center justify-center my-auto">
        
        {/* Canisters Layer */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4 w-full px-1 sm:px-6 pb-20 md:pb-28"
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={fadeInUp}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className={`relative rounded-t-xl p-3 sm:p-4 bg-gradient-to-b ${product.bgColor} text-white border-t-4 border-gray-300/80 shadow-xl flex flex-col justify-between aspect-[3/4] min-w-[130px]`}
            >
              {/* Tin Can Structural Caps */}
              <div className="absolute -top-3 left-4 w-6 h-3 bg-gray-400 rounded-t-sm border-t border-gray-200 opacity-90" />
              <div className="absolute -top-3 right-6 w-4 h-3 bg-gray-400 rounded-t-sm border-t border-gray-200 opacity-90" />

              <div>
                <span className="text-[8px] sm:text-[9px] uppercase tracking-widest text-gray-400 block mb-0.5">
                  Advanced Formula
                </span>
                <h3 className="text-lg sm:text-2xl font-black tracking-wider text-gray-100">
                  {product.name}
                </h3>
                <h4 className="text-[9px] sm:text-xs font-bold text-gray-300 tracking-tight">
                  {product.subName}
                </h4>
                
                {product.typeBadge && (
                  <span className="inline-block bg-white text-black text-[7px] font-extrabold px-1.5 py-0.5 rounded-sm mt-1 uppercase">
                    {product.typeBadge}
                  </span>
                )}
                
                {/* Clean responsive reduction for older viewports */}
                <p className="hidden sm:block text-[9px] text-gray-400 mt-2 leading-relaxed font-light">
                  {product.description}
                </p>
              </div>

              {/* Specification Block */}
              <div className="mt-4 border-t border-white/10 pt-2">
                <div className="text-xs sm:text-sm font-black text-white">{product.sae}</div>
                <div className="text-[8px] sm:text-[10px] text-gray-400 font-medium tracking-tighter">
                  {product.api}
                </div>
                
                {/* Decorative Bottom Colored Ribbon */}
                <div className={`w-full h-1 mt-2 rounded-full ${product.accentLine} opacity-90`} />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Absolute Center Layer: Drop your laptop image container directly inside here */}
        <div className="absolute bottom-0 left-0 right-0 mx-auto w-[95%] sm:w-[85%] md:w-[75%] z-20 flex justify-center items-center">
          
          {/* YOUR LOCAL CAR IMAGE COMPONENT GOES HERE */}
          {/* Example setup: 
              <motion.img 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                src="/my-car-asset.png" 
                className="w-full h-auto object-contain" 
              /> 
          */}

        </div>
      </div>

      {/* Download Action Button */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="z-30 w-full max-w-xs px-4 mt-6"
      >
        <button 
          onClick={() => alert('Downloading Profile...')}
          className="w-full py-2.5 px-6 rounded-full border-2 border-transparent bg-gradient-to-r from-purple-500 via-sky-400 to-emerald-400 text-black font-semibold text-sm sm:text-base tracking-wide hover:shadow-lg transition-all duration-300 active:scale-95 bg-origin-border"
          style={{
            backgroundClip: 'padding-box, border-box',
            backgroundImage: 'linear-gradient(to right, white, white), linear-gradient(to right, #a855f7, #38bdf8, #34d399)'
          }}
        >
          <span className="bg-gradient-to-r from-gray-800 to-black bg-clip-text text-transparent font-bold">
            Download PRIME Profile
          </span>
        </button>
      </motion.div>

    </section>
  );
};

export default PrimeFullSection;