"use client"
import React, { useMemo, useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import { products, Product } from '../data/products';

const CATEGORIES: Product["category"][] = [
  "Lubricants",
  "ATF/GearOil",
  "Special Products",
];

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
  const [activeCategory, setActiveCategory] = useState<Product["category"]>("Lubricants");
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  const categoryProducts = useMemo(
    () => products.filter((p) => p.category === activeCategory),
    [activeCategory]
  );

  // Auto-scroll, paused on hover/touch, restarts whenever the active category changes.
  useEffect(() => {
    if (isPaused || categoryProducts.length === 0) return;

    const interval = setInterval(() => {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
        const isAtEnd = scrollLeft + clientWidth >= scrollWidth - 15;
        const offset = clientWidth < 380 ? 176 : clientWidth < 640 ? 220 : 352;

        scrollContainerRef.current.scrollTo({
          left: isAtEnd ? 0 : scrollLeft + offset,
          behavior: 'smooth',
        });
      }
    }, 2500);

    return () => clearInterval(interval);
  }, [isPaused, activeCategory, categoryProducts.length]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const offset = clientWidth < 380 ? 176 : clientWidth < 640 ? 220 : 352;
      scrollContainerRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - offset : scrollLeft + offset,
        behavior: 'smooth',
      });
    }
  };

  const handleCategoryChange = (category: Product["category"]) => {
    setActiveCategory(category);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ left: 0, behavior: 'auto' });
    }
  };

  return (
    <section className="w-full font-sans py-8 sm:py-12 px-3 sm:px-8 md:px-16 bg-white relative">
      <div className="w-full mx-auto max-w-[1440px] relative z-10">

        {/* Category tabs */}
        <div className="flex flex-wrap items-center gap-x-4 sm:gap-x-8 gap-y-2 sm:gap-y-3 mb-4 sm:mb-6 px-1">
          {CATEGORIES.map((category) => {
            const isActive = category === activeCategory;
            return (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`text-[13px] xs:text-sm sm:text-lg font-bold tracking-tight transition-colors ${
                  isActive ? 'text-gray-900' : 'text-gray-300 hover:text-gray-500'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        <div className="flex justify-between items-end mb-3 sm:mb-4 px-1">
          <div className="space-y-0.5 sm:space-y-1">
            <h3 className="text-[10px] sm:text-xs font-bold text-gray-400 tracking-widest uppercase">
              Our Lineup
            </h3>
            <h2 className="text-base sm:text-2xl font-bold text-gray-900 tracking-tight">
              {activeCategory}
            </h2>
          </div>

          <div className="flex gap-1.5 sm:gap-2 mb-1">
            <button
              onClick={() => scroll('left')}
              className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 active:scale-95 transition-all text-[10px] sm:text-xs shadow-sm"
              aria-label="Previous products"
            >
              &#9664;
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 active:scale-95 transition-all text-[10px] sm:text-xs shadow-sm"
              aria-label="Next products"
            >
              &#9654;
            </button>
          </div>
        </div>

        <hr className="border-t border-gray-100 w-full mb-6 sm:mb-10" />

        {categoryProducts.length > 0 ? (
          <div
            ref={scrollContainerRef}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
            className="flex gap-3 sm:gap-10 overflow-x-auto snap-x snap-mandatory pb-6 sm:pb-8 scroll-smooth"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch',
            }}
          >
            {categoryProducts.map((product) => {
              const grade = getGradeLabel(product);

              return (
                <div
                  key={product.slug}
                  className="w-[160px] xs:w-[190px] sm:w-[260px] h-[400px] xs:h-[460px] sm:h-[560px] flex-shrink-0 flex flex-col items-center snap-start group bg-white"
                >
                  {/* Product name — fixed height so 1 or 2 line names line up the same */}
                  <h4 className="w-full h-[36px] xs:h-[44px] sm:h-[56px] flex items-center justify-center text-[11px] xs:text-sm sm:text-xl font-extrabold text-gray-900 text-center leading-tight tracking-tight uppercase px-1">
                    {product.name}
                  </h4>

                  {/* Product image — fixed box, all bottles align the same size, clicking goes to product detail page */}
                  <Link
                    href={`/products/${product.slug}`}
                    aria-label={`View details for ${product.name}`}
                    className="w-[120px] h-[160px] xs:w-[150px] xs:h-[210px] sm:w-[200px] sm:h-[300px] flex items-center justify-center mt-2 sm:mt-4 mb-2 sm:mb-4 transition-transform duration-500 group-hover:scale-[1.04] cursor-pointer"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="max-h-full max-w-full object-contain"
                    />
                  </Link>

                  {/* Grade */}
                  <p className="h-[18px] xs:h-[20px] sm:h-[24px] text-[10px] xs:text-xs sm:text-sm font-semibold text-gray-700 mb-2 sm:mb-5 tracking-wide">
                    {grade}
                  </p>

                  {/* View Details button with gradient border */}
                  <Link
                    href={`/products/${product.slug}`}
                    className="relative w-full max-w-[140px] xs:max-w-[160px] sm:max-w-[190px] p-[1.5px] rounded-full transition-transform duration-300 active:scale-95 mt-auto"
                    style={{
                      background: 'linear-gradient(90deg, #d94f8c 0%, #6a5fd6 50%, #2fb6d9 100%)',
                    }}
                  >
                    <span className="flex items-center justify-between gap-1 sm:gap-2 pl-3 xs:pl-4 sm:pl-5 pr-1 sm:pr-1.5 py-1 sm:py-1.5 rounded-full bg-white w-full h-full">
                      <span className="text-[10px] xs:text-xs sm:text-sm font-bold text-gray-900 tracking-wide">
                        View Details
                      </span>
                      <span className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 bg-gray-900 rounded-full flex items-center justify-center text-white text-[10px] sm:text-xs font-bold transition-transform duration-300 group-hover:translate-x-0.5 shrink-0">
                        ➔
                      </span>
                    </span>
                  </Link>

                </div>
              );
            })}
          </div>
        ) : (
          <div className="py-10 sm:py-16 text-center text-gray-400 text-xs sm:text-sm">
            No products available in this category yet.
          </div>
        )}

      </div>
    </section>
  );
};

export default AxionPremiumSlider;