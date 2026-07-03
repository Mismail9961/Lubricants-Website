"use client"
import React, { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import { products, Product } from '../data/products';

// Pulls a short "grade" label — prefers an explicit gradeLabel override,
// then the SAE Grade from typicalProperties, then standards,
// falling back to the product name if none exist.
function getGradeLabel(product: Product): string {
  if (product.gradeLabel) {
    return product.gradeLabel;
  }
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
    }, 2500);

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
    <section className="w-full font-sans py-12 px-4 sm:px-8 md:px-16 bg-white relative">
      <div className="w-full mx-auto max-w-[1440px] relative z-10">

        <div className="flex justify-between items-end mb-4 px-1">
          <div className="space-y-1">
            <h3 className="text-xs font-bold text-gray-400 tracking-widest uppercase">
              Our Lineup
            </h3>
            <h2 className="text-lg sm:text-2xl font-bold text-gray-900 tracking-tight">
              All Products
            </h2>
          </div>

          <div className="flex gap-2 mb-1">
            <button
              onClick={() => scroll('left')}
              className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 active:scale-95 transition-all text-xs shadow-sm"
              aria-label="Previous products"
            >
              &#9664;
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 active:scale-95 transition-all text-xs shadow-sm"
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
          className="flex gap-10 overflow-x-auto snap-x snap-mandatory pb-8 scroll-smooth"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          {products.map((product) => {
            const grade = getGradeLabel(product);

            return (
              <div
                key={product.slug}
                className="w-[240px] sm:w-[260px] h-[560px] flex-shrink-0 flex flex-col items-center snap-start group bg-white"
              >
                {/* Product name — fixed height so 1 or 2 line names line up the same */}
                <h4 className="w-full h-[56px] flex items-center justify-center text-lg sm:text-xl font-extrabold text-gray-900 text-center leading-tight tracking-tight uppercase px-1">
                  {product.name}
                </h4>

                {/* Product image — fixed box, all bottles align the same size */}
                <div className="w-[200px] h-[300px] flex items-center justify-center mt-4 mb-4 transition-transform duration-500 group-hover:scale-[1.04]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>

                {/* Grade */}
                <p className="h-[24px] text-sm font-semibold text-gray-700 mb-5 tracking-wide">
                  {grade}
                </p>

                {/* View Details button with gradient border */}
                <Link
                  href={`/products/${product.slug}`}
                  className="relative w-full max-w-[190px] p-[1.5px] rounded-full transition-transform duration-300 active:scale-95 mt-auto"
                  style={{
                    background: 'linear-gradient(90deg, #d94f8c 0%, #6a5fd6 50%, #2fb6d9 100%)',
                  }}
                >
                  <span className="flex items-center justify-between gap-2 pl-5 pr-1.5 py-1.5 rounded-full bg-white w-full h-full">
                    <span className="text-sm font-bold text-gray-900 tracking-wide">
                      View Details
                    </span>
                    <span className="w-7 h-7 bg-gray-900 rounded-full flex items-center justify-center text-white text-xs font-bold transition-transform duration-300 group-hover:translate-x-0.5 shrink-0">
                      ➔
                    </span>
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