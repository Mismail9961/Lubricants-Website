import React from 'react';

export const AxionProductSection: React.FC = () => {
  return (
    <section className="w-full bg-white text-[#4A4A4A] font-sans py-12 px-4 sm:px-8 md:px-16">
      <div className="w-full mx-auto max-w-[1440px]">
        
        {/* Top Header Label */}
        <div className="text-[12px] sm:text-xs md:text-[14px] font-bold tracking-wide text-[#5A5A5A] uppercase mb-4">
          AXION Lubricants - Our Product
        </div>

        {/* Top Divider Line */}
        <hr className="border-t border-[#A0A0A0] w-full mb-12" />

        {/* Main Content Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start mb-12">
          
          {/* Column 1: Heading Title */}
          <div className="md:col-span-3">
            <h2 className="text-4xl md:text-[46px] font-bold text-[#555555] leading-[1.1] m-0 tracking-tight">
              Product <br className="hidden sm:inline" />
              Group
            </h2>
          </div>

          {/* Column 2: First Paragraph block */}
          <div className="md:col-span-4 text-[16px] md:text-[19px] leading-relaxed text-[#4A4A4A] font-normal">
            AXION delivers high-performance engine oils, lubricants, coolants, and 
            greases designed for modern vehicles and heavy-duty machinery.
          </div>

          {/* Column 3: Second Paragraph block */}
          <div className="md:col-span-5 text-[16px] md:text-[19px] leading-relaxed text-[#4A4A4A] font-normal">
            Built on innovation and reliability, our products ensure smooth operation, 
            maximum protection, and long-lasting performance.
          </div>
          
        </div>

        {/* Bottom Divider Line */}
        <hr className="border-t border-[#A0A0A0] w-full" />

      </div>
    </section>
  );
};

export default AxionProductSection;