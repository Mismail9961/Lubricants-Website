"use client";
import React, { useState } from "react";
import { Product } from "../../data/products";
import BannerDropSection from "../../components/BannerDropSection";
import { Footer } from "../../components/Footer";
import Header from "../../components/Header";
import BannerSection from "../../components/BannerSection";
import AxionLegacy from "../../components/AxionLegacySection";
import AxionCommitment from "../../components/AxionCommitmentSection";
import AixonValuesSection from "../../components/AixonValuesSection";
import NewsEventsSection from "../../components/NewsEventsSection";
import AxionProductGroup from "../../components/AxionProductGroup";
import AxionProductSlider from "../../components/AxionProductSlider";

type Tab = "recommendations" | "instructions" | "specifications";

export default function ProductDetailClient({ product }: { product: Product }) {
  const [activeTab, setActiveTab] = useState<Tab>("specifications");

  const gradeHeadline =
    product.gradeLabel ||
    product.typicalProperties?.["SAE Grade"] ||
    product.name.match(/\d+W-\d+/)?.[0] ||
    product.standards ||
    product.name;

  const tabs: { key: Tab; label: string; content: string | undefined }[] = [
    {
      key: "recommendations",
      label: "Usage Recommendations",
      content: product.usageRecommendations,
    },
    {
      key: "instructions",
      label: "Usage Instructions",
      content: product.usageInstructions,
    },
    {
      key: "specifications",
      label: "Specifications",
      content: product.specifications,
    },
  ];

  const activeContent = tabs.find((t) => t.key === activeTab)?.content;
  const showTestTable = activeTab === "specifications" && !!product.testSpecifications?.length;
  const showSimpleTable = activeTab === "specifications" && !product.testSpecifications?.length && !!product.typicalProperties;

  return (
    <div className="w-full">
      <Header />
      <BannerDropSection />
      <div className="min-h-screen w-full bg-white text-gray-800 font-sans">
        {/* Full-width section, tight padding at 320px growing up through breakpoints */}
        <div className="w-full px-3 xs:px-4 sm:px-8 md:px-12 lg:px-20 pb-12">
          {/* Breadcrumb */}
          <div className="border-b border-gray-200 py-3 sm:py-4">
            <span className="text-[11px] xs:text-xs sm:text-sm font-semibold text-gray-500 break-words">
              PROTECT Lubricants - Our Product - {product.name}
            </span>
          </div>

          {/* Headline + download */}
          <div className="flex flex-col xs:flex-row xs:justify-between xs:items-center gap-2 xs:gap-3 border-b border-gray-200 py-4 sm:py-5">
            <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-extrabold text-gray-900 m-0 leading-tight break-words">
              {gradeHeadline}
            </h1>
            <button className="self-start xs:self-auto border border-red-200 text-gray-900 bg-white rounded-full px-3 sm:px-5 py-1.5 sm:py-2.5 text-[11px] xs:text-xs sm:text-sm font-semibold whitespace-nowrap hover:border-red-300 transition-colors">
              Download PROTECT Profile
            </button>
          </div>

          {/* Name + type */}
          <div className="flex flex-col xs:flex-row xs:justify-between xs:items-center gap-1 xs:gap-2 border-b border-gray-200 py-3 sm:py-4">
            <span className="text-sm xs:text-base sm:text-lg md:text-xl font-medium text-gray-700 break-words">
              {product.name}
            </span>
            <span className="text-xs xs:text-sm sm:text-base text-gray-700">
              Multigrade Oil
            </span>
          </div>

          {/* Image + details */}
          <div className="flex flex-col md:flex-row gap-5 sm:gap-6 md:gap-10 lg:gap-16 py-6 sm:py-8">
            <div className="flex-none w-full md:w-auto flex justify-center md:justify-start">
              <img
                src={product.image}
                alt={product.name}
                className="w-full max-w-[140px] xs:max-w-[170px] sm:max-w-[220px] md:max-w-[260px] h-auto object-contain"
              />
            </div>

            <div className="flex-1 min-w-0">
              <p className="text-xs xs:text-sm sm:text-base md:text-lg leading-relaxed text-gray-800 mt-0">
                {product.tagline}
              </p>

              {(product.standards || product.compatibleBrands) && (
                <>
                  <h3 className="text-xs xs:text-sm sm:text-base font-bold text-gray-900 mt-5 sm:mt-6 mb-2">
                    Specifications
                  </h3>
                  {product.standards && (
                    <p className="text-[11px] xs:text-xs sm:text-sm text-gray-800 my-1">
                      Standards: {product.standards}
                    </p>
                  )}
                  {product.compatibleBrands &&
                    product.compatibleBrands.length > 0 && (
                      <>
                        <p className="text-[11px] xs:text-xs sm:text-sm text-gray-800 my-1">
                          Compatible brands:{" "}
                          {product.compatibleBrandsCategory ||
                            "Multiple vehicle applications"}
                        </p>
                        <p className="text-[10px] xs:text-[11px] sm:text-xs text-gray-500 my-1 break-words">
                          {product.compatibleBrands.join(", ")}
                        </p>
                      </>
                    )}
                </>
              )}

              {product.keyBenefits && product.keyBenefits.length > 0 && (
                <>
                  <h3 className="text-xs xs:text-sm sm:text-base font-bold text-gray-900 mt-5 sm:mt-6 mb-2">
                    Key Benefits
                  </h3>
                  <ul className="list-none p-0 m-0">
                    {product.keyBenefits.map((b) => (
                      <li
                        key={b}
                        className="text-[11px] xs:text-xs sm:text-sm text-gray-800 py-1 sm:py-1.5 flex items-start gap-2"
                      >
                        <span className="text-gray-500 flex-none">↗</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {product.generalCharacteristics &&
                product.generalCharacteristics.length > 0 && (
                  <>
                    <h3 className="text-xs xs:text-sm sm:text-base font-bold text-gray-900 mt-5 sm:mt-6 mb-2">
                      General Characteristics
                    </h3>
                    <ul className="list-none p-0 m-0">
                      {product.generalCharacteristics.map((c, i) => (
                        <li
                          key={i}
                          className="text-[11px] xs:text-xs sm:text-sm text-gray-800 py-1 sm:py-1.5 flex items-start gap-2"
                        >
                          <span className="text-gray-500 flex-none">↗</span>
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}

              {product.availableFormats &&
                product.availableFormats.length > 0 && (
                  <>
                    <h3 className="text-xs xs:text-sm sm:text-base font-bold text-gray-900 mt-5 sm:mt-6 mb-2">
                      Available Formats
                    </h3>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2.5">
                      {product.availableFormats.map((f) => (
                        <span
                          key={f}
                          className="border border-gray-300 rounded-md px-2.5 xs:px-3 sm:px-4 py-1 sm:py-2 text-[11px] xs:text-xs sm:text-sm bg-gray-50 text-gray-900"
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                  </>
                )}
            </div>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap gap-3 xs:gap-4 sm:gap-6 pt-2">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`bg-transparent border-none py-2 text-[11px] xs:text-xs sm:text-sm cursor-pointer whitespace-nowrap ${
                  activeTab === tab.key
                    ? "text-gray-900 font-bold"
                    : "text-gray-400 font-medium"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div className="border-b border-gray-200 mb-4 sm:mb-5" />

          <div className="pb-6">
            {/* Detailed lab test-report table (matches reference design) */}
            {showTestTable && (
              <div className="w-full overflow-x-auto -mx-3 xs:mx-0 px-3 xs:px-0">
                <table className="w-full border-collapse min-w-[480px]">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="text-left py-2 sm:py-2.5 px-2 sm:px-3 text-[10px] xs:text-[11px] sm:text-xs font-semibold text-gray-600 uppercase tracking-wide">
                        Test Description
                      </th>
                      <th className="text-left py-2 sm:py-2.5 px-2 sm:px-3 text-[10px] xs:text-[11px] sm:text-xs font-semibold text-gray-600 uppercase tracking-wide">
                        Method
                      </th>
                      <th className="text-left py-2 sm:py-2.5 px-2 sm:px-3 text-[10px] xs:text-[11px] sm:text-xs font-semibold text-gray-600 uppercase tracking-wide">
                        Unit
                      </th>
                      <th className="text-left py-2 sm:py-2.5 px-2 sm:px-3 text-[10px] xs:text-[11px] sm:text-xs font-semibold text-gray-600 uppercase tracking-wide">
                        Value
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {product.testSpecifications!.map((row, i) => (
                      <tr key={i} className="border-b border-gray-100">
                        <td className="py-2 sm:py-2.5 px-2 sm:px-3 text-[11px] xs:text-xs sm:text-sm font-medium text-orange-800 align-top">
                          {row.test}
                        </td>
                        <td className="py-2 sm:py-2.5 px-2 sm:px-3 text-[11px] xs:text-xs sm:text-sm text-gray-700 align-top">
                          {row.method}
                        </td>
                        <td className="py-2 sm:py-2.5 px-2 sm:px-3 text-[11px] xs:text-xs sm:text-sm text-gray-700 align-top">
                          {row.unit}
                        </td>
                        <td className="py-2 sm:py-2.5 px-2 sm:px-3 text-[11px] xs:text-xs sm:text-sm font-semibold text-blue-600 align-top">
                          {row.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Simple key/value typical-properties table fallback for products without a test report */}
            {showSimpleTable && (
              <div className="w-full overflow-x-auto">
                <table className="w-full border-collapse min-w-[280px]">
                  <tbody>
                    {Object.entries(product.typicalProperties!).map(
                      ([key, value]) => (
                        <tr key={key} className="border-b border-gray-200">
                          <td className="py-2 sm:py-2.5 pr-2 font-semibold text-[11px] xs:text-xs sm:text-sm text-gray-700 w-1/2 align-top">
                            {key}
                          </td>
                          <td className="py-2 sm:py-2.5 text-[11px] xs:text-xs sm:text-sm text-gray-800 align-top">
                            {String(value)}
                          </td>
                        </tr>
                      ),
                    )}
                  </tbody>
                </table>
              </div>
            )}

            {/* Plain text tab content for Recommendations / Instructions / fallback Specifications note */}
            {!showTestTable && !showSimpleTable && (
              activeContent ? (
                <p className="text-[11px] xs:text-xs sm:text-sm md:text-base leading-relaxed text-gray-800">
                  {activeContent}
                </p>
              ) : (
                <p className="text-[11px] xs:text-xs sm:text-sm text-gray-400 italic">
                  No {tabs.find((t) => t.key === activeTab)?.label.toLowerCase()}{" "}
                  provided for this product.
                </p>
              )
            )}

            {/* Show the plain specifications note above the test table too, if present */}
            {activeTab === "specifications" && activeContent && (showTestTable || showSimpleTable) && (
              <p className="text-[11px] xs:text-xs sm:text-sm text-gray-500 italic mt-3">
                {activeContent}
              </p>
            )}
          </div>
        </div>
      </div>
      <BannerSection />
      <AxionProductSlider />
      <NewsEventsSection />
      <Footer />
    </div>
  );
}