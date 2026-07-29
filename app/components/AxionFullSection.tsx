"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

const productImages = [
  { id: "0w20", src: "/P1.png", alt: "PRIME 0W-20 Engine Oil" },
  { id: "10w30", src: "/P5.png", alt: "PRIME 10W-30 Engine Oil" },
  { id: "10w40", src: "/P7.png", alt: "PRIME 10W-40 Engine Oil" },
  { id: "flowdex3-1", src: "/P2.png", alt: "PRIME Flow-Dex-3 (Variant 1)" },
  { id: "flowdex3-2", src: "/P4.png", alt: "PRIME Flow-Dex-3 (Variant 2)" },
  { id: "flowdex3-3", src: "/P17.png", alt: "PRIME Flow-Dex-3 (Variant 3)" },
];

export const PrimeFullSection: React.FC = () => {
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] },
    },
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  return (
    <section className="relative w-full min-h-[750px] bg-white py-12 px-3 xs:px-6 flex flex-col items-center justify-between overflow-hidden font-sans select-none">
      
      {/* Header Info */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="text-center max-w-2xl z-10 mb-8 px-1"
      >
        <h2 className="text-xl min-[360px]:text-2xl sm:text-4xl lg:text-5xl font-black text-[#0B4A2D] tracking-tight leading-tight uppercase">
          PROTECT is Built for{" "}
          <span className="text-[#D4AF37] block sm:inline mt-1 sm:mt-0">Performance</span>
        </h2>
        <p className="text-[12px] min-[360px]:text-sm sm:text-base font-medium text-gray-600 mt-2 tracking-wide max-w-md mx-auto">
          Trusted on every road, in every condition, by every vehicle.
        </p>
      </motion.div>

      {/* Main Showcase Grid Wrapper */}
      <div className="relative w-full max-w-6xl flex flex-col items-center justify-center my-auto z-10">
        
        {/* Clean, Floating Responsive Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 min-[360px]:grid-cols-3 sm:grid-cols-4 lg:grid-cols-7 gap-4 sm:gap-6 w-full px-1 pb-14 justify-center items-center"
        >
          {productImages.map((product) => (
            <motion.div
              key={product.id}
              variants={fadeInUp}
              whileHover={{ scale: 1.06 }}
              className="flex items-center justify-center aspect-[2/3] overflow-hidden"
            >
              <Link
                href="/products"
                aria-label={`View ${product.alt} in products`}
                className="w-full h-full flex items-center justify-center cursor-pointer relative"
              >
                <Image
                  src={product.src}
                  alt={product.alt}
                  fill
                  sizes="(max-w-360px) 50vw, (max-w-640px) 33vw, (max-w-1024px) 25vw, 15vw"
                  className="object-contain mix-blend-multiply transition-transform duration-300"
                  loading="lazy"
                />
              </Link>
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
        className="z-30 w-full max-w-xs px-4 mt-2"
      >
        <a
          href="/PRIME_PROTECT_Product_Catalogue.pdf"
          download
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full py-3.5 px-6 rounded-full bg-black text-[#D4AF37] font-bold text-xs sm:text-sm tracking-widest uppercase transition-all duration-300 hover:bg-[#0B4A2D] hover:text-white active:scale-95 shadow-md hover:shadow-xl hover:shadow-[#0B4A2D]/10 text-center border border-transparent"
        >
          Download PROTECT Catalogue
        </a>
      </motion.div>
    </section>
  );
};

export default PrimeFullSection;