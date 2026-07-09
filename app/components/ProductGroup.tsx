"use client";
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ArrowUpRight, ShieldCheck, ShieldAlert, Layers } from 'lucide-react';

export const ProductGroup: React.FC = () => {
  // Smooth sequential cascading entries
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const productCategories = [
    {
      title: "Barrier Coatings",
      desc: "Advanced molecular skin formulas providing total surface isolation and oxide resistance.",
      icon: <Layers className="w-5 h-5 text-[#D4AF37]" />,
      image: "https://www.telko.com/hubfs/Pictures/Industry-Lubricants/industry-industrial-greases.jpeg?q=80&w=600",
      tag: "PT-X Shield"
    },
    {
      title: "Extreme Environment Seals",
      desc: "High-stress compound treatments engineered to defend hardware under extreme load parameters.",
      icon: <ShieldCheck className="w-5 h-5 text-[#D4AF37]" />,
      image: "https://i0.wp.com/gandharoil.com/wp-content/uploads/2021/11/Unknown-2-10.png?resize=800%2C600&ssl=1?q=80&w=600",
      tag: "Armor Grade"
    },
    {
      title: "Corrosion Inhibitors",
      desc: "Specialized defensive layers designed for permanent moisture displacement and peak asset preservation.",
      icon: <ShieldAlert className="w-5 h-5 text-[#D4AF37]" />,
      image: "https://newsroom.aaa.com/wp-content/uploads/2014/10/Advanced-fluids-simplify-car-care-reinforce-the-importance-of-safety-checks.jpg?q=80&w=600",
      tag: "Absolute Defense"
    }
  ];

  return (
    <section className="w-full bg-[#f8fafc] py-14 sm:py-20 px-3 sm:px-6 md:px-10 lg:px-16 xl:px-20 font-sans overflow-hidden select-none">
      {/* Container stripped of max-w constraints to enable true fluid full-width layout */}
      <div className="w-full">
        
        {/* --- Section Header Layout --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-4 md:gap-x-12 mb-10 sm:mb-14 items-end">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2 mb-2 tracking-[0.2em] text-[10px] uppercase font-bold text-[#0A4D34]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
              Industrial Defense
            </div>
            <h2 className="text-[28px] xs:text-[34px] sm:text-[42px] xl:text-[48px] font-black tracking-tight text-[#111] leading-[1.05]">
              Protection Lineup
            </h2>
          </div>

          <div className="md:col-span-7">
            <p className="text-[13px] sm:text-[15px] xl:text-[17px] text-gray-600 font-light leading-relaxed max-w-[64ch]">
              PRIME engineers high-performance protective coatings, hardware shields, and corrosion inhibitors matching strict industrial defense standards to guarantee asset survival under heavy operational stress.
            </p>
          </div>
        </div>

        {/* --- Category Grid: Fluid Full-Width Matrix --- */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
        >
          {productCategories.map((cat, index) => (
            <motion.a
              key={index}
              href="/products"
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="group relative rounded-2xl sm:rounded-3xl bg-white border border-gray-100 p-4 sm:p-5 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden min-h-[340px] xs:min-h-[380px] sm:min-h-[400px] w-full block cursor-pointer"
            >
              {/* Media Container Box */}
              <div className="relative w-full h-44 sm:h-56 xl:h-64 rounded-xl sm:rounded-2xl overflow-hidden bg-gray-900 mb-4 sm:mb-5">
                <img 
                  src={cat.image} 
                  alt={cat.title} 
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105 filter brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                
                {/* Upper Glassmorphism Floating Tag */}
                <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-[9px] tracking-widest uppercase font-bold text-[#0A4D34] px-2.5 py-1 rounded-md shadow-xs">
                  {cat.tag}
                </span>
              </div>

              {/* Text Block content */}
              <div className="flex-1 flex flex-col items-start">
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-[#0A4D34]/5 flex items-center justify-center transition-colors group-hover:bg-[#0A4D34]">
                    <span className="transition-colors group-hover:text-white flex items-center justify-center">
                      {React.cloneElement(cat.icon, { 
                        className: "w-4 h-4 text-[#0A4D34] group-hover:text-[#E5C158] transition-colors" 
                      })}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 tracking-tight">
                    {cat.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-light mb-5">
                  {cat.desc}
                </p>
              </div>

              {/* Interactive Row Bottom Line */}
              <div className="w-full pt-3 border-t border-gray-50 flex items-center justify-between mt-auto">
                <span className="text-[10px] sm:text-xs font-semibold tracking-wider uppercase text-[#0A4D34] group-hover:text-[#D4AF37] transition-colors">
                  Explore Metrics
                </span>
                <div className="w-7 h-7 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-[#0A4D34] group-hover:text-[#E5C158] transition-all duration-300 transform group-hover:rotate-45">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* --- Quick Action Banner Area --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="w-full mt-8 sm:mt-12 bg-[#0A4D34] rounded-2xl p-5 sm:p-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/5 rounded-full blur-2xl pointer-events-none" />
          
          <div className="z-10">
            <h4 className="text-white text-base sm:text-lg font-bold tracking-tight mb-1">
              Need custom technical specifications?
            </h4>
            <p className="text-gray-300 text-xs sm:text-sm font-light max-w-[54ch]">
              Access full material safety datasheets, barrier integrity parameters, and chemical compatibility blueprints.
            </p>
          </div>

          <motion.button
            whileTap={{ scale: 0.97 }}
            className="z-10 bg-[#D4AF37] hover:bg-[#E5C158] text-[#0A4D34] font-bold text-[10px] sm:text-xs uppercase tracking-wider px-4 sm:px-5 py-2.5 rounded-lg flex items-center gap-2 transition-colors duration-300 shadow-md shadow-black/10 whitespace-nowrap"
          >
            <span>Download Catalog</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
};

export default ProductGroup;