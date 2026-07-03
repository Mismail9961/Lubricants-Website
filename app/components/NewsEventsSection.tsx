"use client";
import React from 'react';
import { motion, Variants } from 'framer-motion';

export const NewsEventsSection: React.FC = () => {
  // Safe TypeScript Framer Motion Variants for smooth fade-in entry
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: 'easeOut' } 
    }
  };

  return (
    <div className="w-full bg-white font-sans selection:bg-red-500 selection:text-white">
      {/* Main Content Area - Full Width Design */}
      <div className="w-full px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          
          {/* LEFT SIDE: Heading Section */}
          <div className="lg:col-span-3">
            <h2 className="text-gray-800 text-3xl sm:text-4xl xl:text-5xl font-extrabold tracking-tight leading-tight lg:sticky lg:top-8">
              News &<br />Events
            </h2>
          </div>

          {/* RIGHT SIDE: News Cards Grid */}
          <div className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12">
            
            {/* CARD 1: PRIME AutoCare */}
            <motion.article 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              className="flex flex-col group w-full"
            >
              <div className="overflow-hidden rounded-2xl bg-gray-100 aspect-[16/10] w-full mb-5 shadow-sm">
                <img 
                  src="https://images.unsplash.com/photo-1625047509248-ec889cbff17f?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="PRIME AutoCare facility exterior at night" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1625047509248-ec889cbff17f?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop&q=80&w=1200";
                  }}
                />
              </div>
              <time className="text-xs text-gray-400 font-medium tracking-wide mb-2 block border-b border-red-500/20 pb-1">
                16-7-25
              </time>
              <h3 className="text-black font-bold text-lg sm:text-xl xl:text-2xl mb-3 group-hover:text-red-600 transition-colors">
                PRIME AutoCare
              </h3>
              <p className="text-gray-600 text-sm sm:text-base xl:text-lg leading-relaxed">
                Experience premium oil change services at PRIME Autocare — where advanced facilities, expert care, 
                and high-performance lubricants keep your engine running at its best. Fast, reliable, and designed for 
                today's vehicles.
              </p>
            </motion.article>

            {/* CARD 2: PRIME Industrial Grease */}
            <motion.article 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              className="flex flex-col group w-full"
            >
              <div className="overflow-hidden rounded-2xl bg-gray-100 aspect-[16/10] w-full mb-5 shadow-sm">
                <img 
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWOocJ7giYSM59P6_4yA2aIeopRPrqKHGJjdCf8pj9SYyY5vRhChlZrPZH&s=10" 
                  alt="Industrial ball bearing with blue grease coating" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                  onError={(e) => {
                    e.currentTarget.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWOocJ7giYSM59P6_4yA2aIeopRPrqKHGJjdCf8pj9SYyY5vRhChlZrPZH&s=10?auto=format&fit=crop&q=80&w=1200";
                  }}
                />
              </div>
              <time className="text-xs text-gray-400 font-medium tracking-wide mb-2 block border-b border-red-500/20 pb-1">
                16-7-25
              </time>
              <h3 className="text-black font-bold text-lg sm:text-xl xl:text-2xl mb-3 group-hover:text-red-600 transition-colors">
                PRIME Industrial Grease
              </h3>
              <div className="space-y-4 text-gray-600 text-sm sm:text-base xl:text-lg leading-relaxed">
                <p>
                  PRIME proudly launches its high-performance Industrial Grease, developed to meet 
                  the rigorous demands of heavy-duty machinery and industrial applications.
                </p>
                <p>
                  It is formulated with advanced anti-wear technology and superior thermal stability.
                </p>
              </div>
            </motion.article>

          </div>
        </div>
      </div>

      {/* FOOTER SECTION: Full Width Separator Line + Facebook Branding */}
      <footer className="w-full border-t border-gray-300 py-6">
        <div className="w-full px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 flex justify-end">
          <a 
            href="https://facebook.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-black hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 rounded-md p-1"
            aria-label="Follow PRIME on Facebook"
          >
            <svg 
              className="w-6 h-6 fill-current" 
              viewBox="0 0 24 24"
            >
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default NewsEventsSection;