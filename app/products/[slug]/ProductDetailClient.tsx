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

  // Function to filter out lab references and test dates dynamically from data fields
  const sanitizeContent = (text: string | undefined) => {
    if (!text) return text;
    // Regex targets strings matching variations of "Lab Ref:... Test Date:..."
    return text.replace(/Lab Ref:\s*\S+(?:\s*—\s*Test Date:\s*\d{1,2}\.\d{1,2}\.\d{4})?/gi, "").trim();
  };

  const tabs: { key: Tab; label: string; content: string | undefined }[] = [
    {
      key: "recommendations",
      label: "Usage Recommendations",
      content: sanitizeContent(product.usageRecommendations),
    },
    {
      key: "instructions",
      label: "Usage Instructions",
      content: sanitizeContent(product.usageInstructions),
    },
    {
      key: "specifications",
      label: "Specifications",
      content: sanitizeContent(product.specifications),
    },
  ];

  const activeContent = tabs.find((t) => t.key === activeTab)?.content;
  const showTestTable = activeTab === "specifications" && !!product.testSpecifications?.length;
  const showSimpleTable = activeTab === "specifications" && !product.testSpecifications?.length && !!product.typicalProperties;

  return (
    <div className="w-full overflow-x-hidden">
      <Header />
      <BannerDropSection />
      <div className="min-h-screen w-full bg-white text-gray-800 font-sans">
        {/* Root padding tuned specifically for 320px viewports (iPhone 5s) up to desktop */}
        <div className="w-full px-2 xs:px-4 sm:px-8 md:px-12 lg:px-20 pb-12">
          
          {/* Breadcrumb */}
          <div className="border-b border-gray-200 py-3 sm:py-4">
            <span className="text-[10px] xs:text-xs sm:text-sm font-semibold text-gray-500 break-words block tracking-wide">
              PROTECT Lubricants - Our Product - {product.name}
            </span>
          </div>

          {/* Headline + download button (stacked on 320px, inline at xs breakpoint) */}
          <div className="flex flex-col xs:flex-row xs:justify-between xs:items-center gap-3 border-b border-gray-200 py-4 sm:py-5">
            <h1 className="text-lg xs:text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-extrabold text-gray-900 m-0 leading-tight break-words">
              {gradeHeadline}
            </h1>
            <button className="w-full xs:w-auto text-center border border-red-200 text-gray-900 bg-white rounded-full px-3 sm:px-5 py-2 sm:py-2.5 text-[10px] xs:text-xs sm:text-sm font-semibold hover:border-red-300 transition-colors">
              Download PROTECT Profile
            </button>
          </div>

          {/* Name + type (stacked on 320px, inline at xs breakpoint) */}
          <div className="flex flex-col xs:flex-row xs:justify-between xs:items-start xs:items-center gap-1 border-b border-gray-200 py-3 sm:py-4">
            <span className="text-sm xs:text-base sm:text-lg md:text-xl font-medium text-gray-700 break-words">
              {product.name}
            </span>
            <span className="text-[11px] xs:text-sm sm:text-base text-gray-500 font-medium">
              Multigrade Oil
            </span>
          </div>

          {/* Image + details wrapper */}
          <div className="flex flex-col md:flex-row gap-5 sm:gap-6 md:gap-10 lg:gap-16 py-6 sm:py-8">
            
            {/* Image container: responsive max widths for 320px layout */}
            <div className="flex-none w-full md:w-auto flex justify-center md:justify-start">
              <img
                src={product.image}
                alt={product.name}
                className="w-full max-w-[120px] xs:max-w-[170px] sm:max-w-[220px] md:max-w-[260px] h-auto object-contain"
              />
            </div>

            <div className="flex-1 min-w-0">
              <p className="text-[11px] xs:text-sm sm:text-base md:text-lg leading-relaxed text-gray-800 mt-0">
                {product.tagline}
              </p>

              {(product.standards || product.compatibleBrands) && (
                <>
                  <h3 className="text-xs xs:text-sm sm:text-base font-bold text-gray-900 mt-5 sm:mt-6 mb-2">
                    Specifications
                  </h3>
                  {product.standards && (
                    <p className="text-[10px] xs:text-xs sm:text-sm text-gray-800 my-1 leading-normal">
                      <strong>Standards:</strong> {product.standards}
                    </p>
                  )}
                  {product.compatibleBrands &&
                    product.compatibleBrands.length > 0 && (
                      <>
                        <p className="text-[10px] xs:text-xs sm:text-sm text-gray-800 my-1 leading-normal">
                          <strong>Compatible brands:</strong>{" "}
                          {product.compatibleBrandsCategory ||
                            "Multiple vehicle applications"}
                        </p>
                        <p className="text-[9px] xs:text-[11px] sm:text-xs text-gray-500 my-1 break-words leading-normal">
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
                        className="text-[10px] xs:text-xs sm:text-sm text-gray-800 py-1 flex items-start gap-2 leading-normal"
                      >
                        <span className="text-gray-400 flex-none select-none">↗</span>
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
                          className="text-[10px] xs:text-xs sm:text-sm text-gray-800 py-1 flex items-start gap-2 leading-normal"
                        >
                          <span className="text-gray-400 flex-none select-none">↗</span>
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
                          className="border border-gray-300 rounded-md px-2 py-1 text-[10px] xs:text-xs sm:text-sm bg-gray-50 text-gray-900 font-medium"
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                  </>
                )}

              {/* Packaging Material Option Notice */}
              <div className="mt-5 p-3 bg-gray-50 border border-gray-200 rounded-lg flex items-start gap-2.5">
                <span className="text-xs xs:text-sm sm:text-base text-blue-600 mt-0.5 select-none">ℹ</span>
                <div className="min-w-0">
                  <h4 className="text-[11px] xs:text-xs sm:text-sm font-bold text-gray-900 m-0">
                    Packaging Option Notice
                  </h4>
                  <p className="text-[10px] xs:text-xs sm:text-sm text-gray-600 mt-1 mb-0 leading-relaxed">
                    This product is available in premium <span className="font-semibold text-gray-900">Steel Cans</span> as well as durable <span className="font-semibold text-gray-900">Plastic Cans</span> depending on the selected size.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Tabs header wrapper (scrollable on 320px if options crowd the viewport) */}
          <div className="w-full overflow-x-auto -mx-2 px-2 xs:mx-0 xs:px-0 scrollbar-none">
            <div className="flex gap-4 sm:gap-6 pt-2 border-b border-gray-200 min-w-max xs:min-w-0">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`bg-transparent border-b-2 border-transparent py-2.5 text-[10px] xs:text-xs sm:text-sm cursor-pointer whitespace-nowrap transition-all outline-none ${
                    activeTab === tab.key
                      ? "text-gray-900 font-bold border-gray-900"
                      : "text-gray-400 font-medium"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="py-4">
            {/* Detailed lab test-report table */}
            {showTestTable && (
              <div className="w-full overflow-x-auto border border-gray-100 rounded-md">
                <table className="w-full border-collapse min-w-[440px]">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="text-left py-2 px-2 text-[9px] xs:text-[11px] font-semibold text-gray-500 uppercase tracking-wider">
                        Test Description
                      </th>
                      <th className="text-left py-2 px-2 text-[9px] xs:text-[11px] font-semibold text-gray-500 uppercase tracking-wider">
                        Method
                      </th>
                      <th className="text-left py-2 px-2 text-[9px] xs:text-[11px] font-semibold text-gray-500 uppercase tracking-wider">
                        Unit
                      </th>
                      <th className="text-left py-2 px-2 text-[9px] xs:text-[11px] font-semibold text-gray-500 uppercase tracking-wider">
                        Value
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {product.testSpecifications!.map((row, i) => (
                      <tr key={i} className="border-b border-gray-100 last:border-0 hover:bg-gray-50/50">
                        <td className="py-2 px-2 text-[10px] xs:text-xs sm:text-sm font-medium text-orange-800 align-top">
                          {row.test}
                        </td>
                        <td className="py-2 px-2 text-[10px] xs:text-xs sm:text-sm text-gray-600 align-top">
                          {row.method}
                        </td>
                        <td className="py-2 px-2 text-[10px] xs:text-xs sm:text-sm text-gray-600 align-top">
                          {row.unit}
                        </td>
                        <td className="py-2 px-2 text-[10px] xs:text-xs sm:text-sm font-semibold text-blue-600 align-top">
                          {row.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Simple key/value properties table fallback */}
            {showSimpleTable && (
              <div className="w-full border border-gray-100 rounded-md overflow-hidden">
                <table className="w-full border-collapse">
                  <tbody>
                    {Object.entries(product.typicalProperties!).map(
                      ([key, value]) => (
                        <tr key={key} className="border-b border-gray-100 last:border-0 hover:bg-gray-50/50">
                          <td className="py-2 px-3 font-semibold text-[10px] xs:text-xs sm:text-sm text-gray-600 w-1/2 align-top bg-gray-50/50">
                            {key}
                          </td>
                          <td className="py-2 px-3 text-[10px] xs:text-xs sm:text-sm text-gray-800 align-top font-medium">
                            {String(value)}
                          </td>
                        </tr>
                      ),
                    )}
                  </tbody>
                </table>
              </div>
            )}

            {/* Plain text tab content fallback */}
            {!showTestTable && !showSimpleTable && (
              activeContent ? (
                <p className="text-[11px] xs:text-xs sm:text-sm md:text-base leading-relaxed text-gray-700 m-0">
                  {activeContent}
                </p>
              ) : (
                <p className="text-[10px] xs:text-xs sm:text-sm text-gray-400 italic m-0">
                  No {tabs.find((t) => t.key === activeTab)?.label.toLowerCase()} provided for this product.
                </p>
              )
            )}

            {/* Plain specifications sanitized content block display */}
            {activeTab === "specifications" && activeContent && (showTestTable || showSimpleTable) && (
              <p className="text-[10px] xs:text-xs sm:text-sm text-gray-400 italic mt-3 mb-0">
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