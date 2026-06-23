"use client";

import { motion, Transition } from "framer-motion";

export default function AixonValuesSection() {
  // Defining transition strictly as a Framer Motion Transition type to solve the Easing type error
  const transitionConfig: Transition = { 
    duration: 0.6, 
    ease: "easeOut" 
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: transitionConfig,
  };

  return (
    <section className="w-full bg-[#fcfcfc] py-12 md:py-20 text-[#1a1a1a]">
      <div className="mx-auto max-w-[1500px] px-4 md:px-8">
        
        {/* Section Heading */}
        <motion.div 
          initial={fadeInUp.initial}
          whileInView={fadeInUp.whileInView}
          viewport={fadeInUp.viewport}
          transition={fadeInUp.transition}
          className="mb-10 md:mb-16"
        >
          <h2 className="text-[44px] sm:text-[56px] lg:text-[64px] font-bold tracking-tight text-[#4a4a4a] leading-none">
            Our <br /> Values
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          
          {/* Card 1: Vision */}
          <motion.div
            initial={fadeInUp.initial}
            whileInView={fadeInUp.whileInView}
            viewport={fadeInUp.viewport}
            transition={fadeInUp.transition}
            className="flex flex-col bg-[#f5f5f5] rounded-[24px] p-8 sm:p-10 min-h-[480px] justify-between"
          >
            <div>
              {/* Hot Pink Circle */}
              <div className="mb-10 h-20 w-20 rounded-full bg-[#ff0055]" />
              
              <h3 className="text-2xl font-bold mb-6 text-black">Vision</h3>
              
              <p className="text-[16px] sm:text-[17px] leading-relaxed text-[#444] font-normal">
                Aixon Group strives to be a leading global enterprise, delivering
                innovative and sustainable solutions across industries. By focusing on
                quality, reliability, and progress, we aim to drive excellence, improve
                lives, and build a better, more sustainable future.
              </p>
            </div>
          </motion.div>

          {/* Card 2: Mission */}
          <motion.div
            initial={fadeInUp.initial}
            whileInView={fadeInUp.whileInView}
            viewport={fadeInUp.viewport}
            transition={{ ...transitionConfig, delay: 0.1 }}
            className="relative overflow-hidden flex flex-col bg-[#f5f5f5] rounded-[24px] p-8 sm:p-10 min-h-[480px]"
          >
            <div className="relative z-10">
              <p className="text-[16px] sm:text-[17px] leading-relaxed text-[#444]">
                Our <span className="font-bold text-black">mission</span> is to provide superior products
                and services that meet the evolving needs of our customers across the automotive and
                industrial sectors. We are committed to innovation, customer satisfaction, and
                sustainable growth while maintaining the highest standards of integrity and quality.
              </p>
            </div>

            {/* Decorative Orbs Base Graphics */}
            <div className="absolute right-[-10%] bottom-[-15%] w-[85%] aspect-square pointer-events-none select-none flex items-end justify-end">
              <img
                src="https://axionlubricants.com/Images/JounreyDiv4.webp"
                alt=""
                className="absolute w-full h-full object-contain object-bottom right-[-5%] bottom-[-5%]"
              />
              <div className="absolute left-0 bottom-[20%] w-[32%] aspect-square rounded-full bg-[#8378e9] flex items-center justify-center shadow-lg">
                <div className="w-[35%] aspect-square rounded-full bg-white" />
              </div>
            </div>
          </motion.div>

          {/* Card 3: Power in Motion Banner */}
          <motion.div
            initial={fadeInUp.initial}
            whileInView={fadeInUp.whileInView}
            viewport={fadeInUp.viewport}
            transition={{ ...transitionConfig, delay: 0.2 }}
            className="relative overflow-hidden rounded-[24px] min-h-[480px] md:col-span-2 lg:col-span-1 group"
          >
            <img
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1400" 
              alt="Power in Motion"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />

            <div className="absolute inset-0 p-8 sm:p-10 flex flex-col justify-start z-10">
              <h3 className="text-white font-bold leading-[1.15] text-[32px] sm:text-[38px] tracking-tight max-w-[280px] sm:max-w-[340px]">
                Power in Motion.
                <br />
                Confidence in
                <br />
                Every Drop.
              </h3>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}