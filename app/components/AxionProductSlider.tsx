"use client"
import React, { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import { products, Product } from '../data/products';

// Fixed style palette cycled across cards — since your real product data
// has no color/gradient fields, this keeps the visual design consistent
// without inventing per-product branding.
const STYLE_PALETTE = [
  { gradientFrom: '#15163E', gradientTo: '#24297A', accentWave: '#4F33A3' },
  { gradientFrom: '#11102E', gradientTo: '#1E222A', accentWave: '#40288F' },
  { gradientFrom: '#083D53', gradientTo: '#066B7A', accentWave: '#00E1B1' },
  { gradientFrom: '#3A1E10', gradientTo: '#663520', accentWave: '#B5884C' },
  { gradientFrom: '#52371E', gradientTo: '#7D5531', accentWave: '#D68FAF' },
];

// Pulls a short "grade" label from standards or typicalProperties["SAE Grade"],
// falling back to the product name if neither exists.
function getGradeLabel(product: Product): string {
  if (product.typicalProperties?.["SAE Grade"]) {
    return `SAE ${product.typicalProperties["SAE Grade"]}`;
  }
  if (product.standards) {
    return product.standards;
  }
  return product.name;
}

export const AxionPremiumSlider: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
        const isAtEnd = scrollLeft + clientWidth >= scrollWidth - 15;
        const offset = clientWidth < 640 ? 284 : 352;

        scrollContainerRef.current.scrollTo({
          left: isAtEnd ? 0 : scrollLeft + offset,
          behavior: 'smooth',
        });
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const offset = clientWidth < 640 ? 284 : 352;
      scrollContainerRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - offset : scrollLeft + offset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="w-full bg-white font-sans py-12 px-4 sm:px-8 md:px-16 overflow-hidden">
      <div className="w-full mx-auto max-w-[1440px]">

        <div className="flex justify-between items-end mb-4 px-1">
          <div className="space-y-1">
            <h3 className="text-xs font-bold text-gray-400 tracking-widest uppercase">
              Our Lineup
            </h3>
            <h2 className="text-lg sm:text-2xl font-bold text-gray-800 tracking-tight">
              All Products
            </h2>
          </div>

          <div className="flex gap-2 mb-1">
            <button
              onClick={() => scroll('left')}
              className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 hover:border-gray-400 hover:text-gray-900 active:scale-95 transition-all text-xs shadow-xs"
              aria-label="Previous products"
            >
              &#9664;
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 hover:border-gray-400 hover:text-gray-900 active:scale-95 transition-all text-xs shadow-xs"
              aria-label="Next products"
            >
              &#9654;
            </button>
          </div>
        </div>

        <hr className="border-t border-gray-100 w-full mb-10" />

        <div
          ref={scrollContainerRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
          className="flex gap-7 overflow-x-auto snap-x snap-mandatory pb-8 scroll-smooth"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          {products.map((product, index) => {
            const style = STYLE_PALETTE[index % STYLE_PALETTE.length];
            const grade = getGradeLabel(product);

            return (
              <div
                key={product.slug}
                className="min-w-[260px] sm:min-w-[296px] md:min-w-[312px] flex flex-col items-center snap-start bg-white rounded-2xl p-6 border border-gray-100/80 shadow-xs hover:shadow-xl hover:border-gray-200/50 transition-all duration-500 transform hover:-translate-y-1.5 group"
              >
                <h4 className="text-xs sm:text-sm font-bold text-gray-500 text-center mb-6 tracking-wide group-hover:text-gray-900 transition-colors duration-300">
                  {product.name}
                </h4>

                <div
                  className="relative w-[176px] h-[246px] sm:w-[196px] sm:h-[276px] rounded-xl shadow-md group-hover:shadow-2xl overflow-hidden flex flex-col justify-between p-4 mb-5 transition-all duration-500 group-hover:scale-[1.03]"
                  style={{ background: `linear-gradient(135deg, ${style.gradientFrom} 0%, ${style.gradientTo} 100%)` }}
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-1.5 bg-gradient-to-b from-gray-200 to-gray-400 rounded-t-xs -mt-1" />
                  <div className="absolute top-[-4px] right-8 w-6 h-1.5 bg-gray-300 rounded-t-xs" />

                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1200 ease-out" />

                  <div className="text-center z-10">
                    <span className="text-[9px] font-bold text-gray-300/80 tracking-widest uppercase block">
                      Petropec
                    </span>
                    <span className="text-lg font-black text-white tracking-wide block leading-tight mt-1.5 drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)] px-1">
                      {product.name}
                    </span>
                  </div>

                  <div className="text-center bg-white/10 backdrop-blur-md py-1.5 px-2 rounded-md border border-white/10 mx-1 z-10 shadow-inner">
                    <span className="text-[10px] text-white font-extrabold block tracking-tight">{grade}</span>
                    {product.standards && (
                      <span className="text-[8px] text-emerald-300 font-bold block uppercase tracking-wider mt-0.5">
                        {product.standards}
                      </span>
                    )}
                  </div>

                  {product.availableFormats && (
                    <div className="text-[9px] text-gray-300/90 space-y-0.5 font-medium pl-0.5 z-10">
                      <div>{product.availableFormats.join(' / ')}</div>
                    </div>
                  )}

                  <div
                    className="absolute bottom-0 right-0 left-0 h-16 opacity-35 pointer-events-none transition-transform duration-700 group-hover:scale-y-110"
                    style={{
                      background: `linear-gradient(0deg, ${style.accentWave} 0%, transparent 100%)`,
                      clipPath: 'ellipse(85% 55% at 50% 100%)'
                    }}
                  />
                </div>

                <span className="text-[11px] font-bold text-gray-600 bg-gray-50 border border-gray-100 px-3 py-0.5 rounded-full mb-5">
                  {grade}
                </span>

                <Link
                  href={`/products/${product.slug}`}
                  className="w-full max-w-[155px] flex items-center justify-between gap-2 pl-4 pr-1 py-1.5 border border-gray-200 rounded-full bg-white hover:border-gray-900 active:scale-95 transition-all duration-300"
                >
                  <span className="text-[11px] font-bold text-gray-700 group-hover:text-gray-900 transition-colors tracking-wide">
                    View Details
                  </span>
                  <span className="w-5 h-5 bg-gray-900 group-hover:bg-gray-800 rounded-full flex items-center justify-center text-white text-[9px] font-bold transition-all transform group-hover:translate-x-0.5">
                    ➔
                  </span>
                </Link>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default AxionPremiumSlider;