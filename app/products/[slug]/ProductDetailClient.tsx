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

  const sanitizeContent = (text: string | undefined) => {
    if (!text) return text;
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
    <div className="w-full overflow-x-hidden antialiased bg-white">
      <Header />
      <BannerDropSection />
      
      {/* Outer wrapper converted to clean white */}
      <div className="min-h-screen w-full bg-white text-gray-800 font-sans">
        
        {/* Responsive padding container */}
        <div className="w-full max-w-7xl mx-auto px-3 xs:px-4 sm:px-8 md:px-12 lg:px-16 pb-16 pt-2 bg-white">
          
          {/* Breadcrumb - Clean look against white */}
          <div className="py-2.5 sm:py-4">
            <span className="text-[10px] xs:text-xs font-semibold text-gray-400 break-words block tracking-wider uppercase">
              PROTECT Lubricants <span className="mx-1 text-gray-300">/</span> Our Product <span className="mx-1 text-gray-300">/</span> <span className="text-gray-600">{product.name}</span>
            </span>
          </div>

          {/* Main Info Box */}
          <div className="bg-white p-2 xs:p-4 sm:p-6 transition-all">
            
            {/* Headline + download button */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 border-b border-gray-200 pb-5 sm:pb-6">
              <div className="space-y-1 max-w-2xl">
                <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 tracking-tight leading-tight break-words">
                  {gradeHeadline}
                </h1>
                <div className="flex items-center gap-2 pt-0.5">
                  <span className="text-xs xs:text-sm font-medium text-gray-500 break-words">
                    {product.name}
                  </span>
                  <span className="h-3 w-px bg-gray-300"></span>
                  <span className="text-[11px] xs:text-xs bg-red-50 text-red-700 px-2 py-0.5 rounded font-semibold tracking-wide uppercase">
                    Multigrade Oil
                  </span>
                </div>
              </div>
              
              <button className="w-full md:w-auto flex-none text-center bg-white border border-gray-300 hover:border-gray-400 text-gray-800 rounded-lg px-4 py-2.5 text-xs sm:text-sm font-bold shadow-2xs transition-all active:scale-[0.98]">
                Download Profile
              </button>
            </div>

            {/* Media Showcase & Attributes core layout split */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 pt-6 sm:pt-8">
              
              {/* Left Column: Container for single or dual product images */}
              <div className="lg:col-span-5 xl:col-span-4 flex flex-col justify-start items-center">
                {product.stellcanimage || product.plasticcanimage ? (
                  <div className="w-full bg-white border border-gray-200 rounded-xl p-3 xs:p-4 sm:p-6 flex flex-row justify-center items-end gap-3 xs:gap-4 sm:gap-6">
                    {product.stellcanimage && (
                      <div className="flex-1 flex flex-col items-center gap-2 max-w-[130px]">
                        <div className="h-36 xs:h-44 sm:h-52 w-full flex items-end justify-center">
                          <img
                            src={product.stellcanimage}
                            alt={`${product.name} - Steel Can`}
                            className="max-h-full max-w-full w-auto object-contain drop-shadow-xs hover:scale-[1.03] transition-transform duration-300"
                          />
                        </div>
                        <span className="text-[9px] xs:text-[10px] font-bold text-gray-600 bg-white border border-gray-200 px-2 py-0.5 rounded-full shadow-2xs uppercase tracking-wider text-center w-full truncate">
                          Steel Can
                        </span>
                      </div>
                    )}
                    {product.plasticcanimage && (
                      <div className="flex-1 flex flex-col items-center gap-2 max-w-[130px]">
                        <div className="h-36 xs:h-44 sm:h-52 w-full flex items-end justify-center">
                          <img
                            src={product.plasticcanimage}
                            alt={`${product.name} - Plastic Can`}
                            className="max-h-full max-w-full w-auto object-contain drop-shadow-xs hover:scale-[1.03] transition-transform duration-300"
                          />
                        </div>
                        <span className="text-[9px] xs:text-[10px] font-bold text-gray-600 bg-white border border-gray-200 px-2 py-0.5 rounded-full shadow-2xs uppercase tracking-wider text-center w-full truncate">
                          Plastic Can
                        </span>
                      </div>
                    )}
                  </div>
                ) : (
                  product.image && (
                    <div className="w-full bg-white border border-gray-200 rounded-xl p-6 flex justify-center items-center h-48 xs:h-56 sm:h-64">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="max-h-full max-w-[140px] xs:max-w-[180px] sm:max-w-[220px] h-auto object-contain drop-shadow-xs"
                      />
                    </div>
                  )
                )}
              </div>

              {/* Right Column: Information text layout blocks */}
              <div className="lg:col-span-7 xl:col-span-8 space-y-5 sm:space-y-6 min-w-0">
                <div>
                  <p className="text-xs xs:text-sm sm:text-base md:text-[15px] leading-relaxed font-normal text-gray-600 mt-0">
                    {product.tagline}
                  </p>
                </div>

                {/* Compatibility Standards Context Block */}
                {(product.standards || product.compatibleBrands) && (
                  <div className="bg-white rounded-lg p-3 xs:p-4 border border-gray-200">
                    <h3 className="text-xs sm:text-sm font-bold text-gray-900 mb-2 uppercase tracking-wider">
                      Specifications & Compliance
                    </h3>
                    {product.standards && (
                      <p className="text-[11px] xs:text-xs sm:text-sm text-gray-700 my-1 leading-normal">
                        <strong className="text-gray-900 font-semibold">Standards:</strong> {product.standards}
                      </p>
                    )}
                    {product.compatibleBrands && product.compatibleBrands.length > 0 && (
                      <div className="mt-2 pt-2 border-t border-gray-200">
                        <p className="text-[11px] xs:text-xs sm:text-sm text-gray-700 my-0.5 font-medium">
                          <strong>Compatible Brands:</strong>{" "}
                          <span className="text-gray-600 font-normal">
                            {product.compatibleBrandsCategory || "Multiple vehicle applications"}
                          </span>
                        </p>
                        <p className="text-[10px] xs:text-xs text-gray-500 my-0.5 break-words leading-relaxed bg-white border border-gray-200 p-2 rounded mt-1.5 font-mono">
                          {product.compatibleBrands.join(", ")}
                        </p>
                      </div>
                    )}
                  </div>
                )}

                {/* Benefits Matrix Layout */}
                {product.keyBenefits && product.keyBenefits.length > 0 && (
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-gray-900 mb-2 uppercase tracking-wider">
                      Key Performance Benefits
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 p-0 m-0">
                      {product.keyBenefits.map((b) => (
                        <li
                          key={b}
                          className="text-[11px] xs:text-xs sm:text-sm text-gray-700 flex items-start gap-2 leading-snug bg-white p-1.5 px-2 rounded border border-gray-200"
                        >
                          <span className="text-emerald-600 font-bold flex-none select-none">✓</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* General Characteristics List */}
                {product.generalCharacteristics && product.generalCharacteristics.length > 0 && (
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-gray-900 mb-2 uppercase tracking-wider">
                      General Characteristics
                    </h3>
                    <ul className="space-y-1 p-0 m-0">
                      {product.generalCharacteristics.map((c, i) => (
                        <li
                          key={i}
                          className="text-[11px] xs:text-xs sm:text-sm text-gray-700 flex items-start gap-2 leading-relaxed"
                        >
                          <span className="text-red-500 flex-none select-none mt-0.5">▪</span>
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Available Format Badges */}
                {product.availableFormats && product.availableFormats.length > 0 && (
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-gray-900 mb-2 uppercase tracking-wider">
                      Available Formats
                    </h3>
                    <div className="flex flex-wrap gap-1.5">
                      {product.availableFormats.map((f) => (
                        <span
                          key={f}
                          className="border border-gray-200 rounded bg-white text-gray-800 font-semibold px-2.5 py-1 text-[10px] xs:text-xs tracking-wide shadow-3xs"
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Packaging Option Alert Frame */}
                {(product.stellcanimage || product.plasticcanimage) && (
                  <div className="p-3 bg-white border border-gray-200 rounded-lg flex items-start gap-2.5 shadow-3xs">
                    <span className="text-xs xs:text-sm sm:text-base text-gray-600 mt-0.5 select-none font-bold">ℹ</span>
                    <div className="min-w-0">
                      <h4 className="text-[11px] xs:text-xs sm:text-sm font-bold text-gray-900 m-0">
                        Packaging Option Notice
                      </h4>
                      <p className="text-[10px] xs:text-xs sm:text-sm text-gray-600 mt-0.5 mb-0 leading-relaxed">
                        {product.stellcanimage && product.plasticcanimage ? (
                          <>
                            This formula is distributed across premium <span className="font-semibold text-gray-900">Steel Cans</span> as well as protective <span className="font-semibold text-gray-900">Plastic Cans</span> depending on global trade sizes.
                          </>
                        ) : product.stellcanimage ? (
                          <>
                            This specific product is supplied exclusively in specialized premium <span className="font-semibold text-gray-900">Steel Cans</span>.
                          </>
                        ) : (
                          <>
                            This product is supplied exclusively in standard durable <span className="font-semibold text-gray-900">Plastic Cans</span>.
                          </>
                        )}
                      </p>
                    </div>
                  </div>
                )}

              </div>
            </div>

            {/* Bottom Tab System Block */}
            <div className="mt-8 sm:mt-10 pt-4 border-t border-gray-200">
              
              {/* Tab Navigation strip */}
              <div className="w-full overflow-x-auto -mx-4 px-4 xs:mx-0 xs:px-0 scrollbar-none border-b border-gray-200">
                <div className="flex gap-4 sm:gap-6 min-w-max">
                  {tabs.map((tab) => (
                    <button
                      key={tab.key}
                      onClick={() => setActiveTab(tab.key)}
                      className={`bg-transparent border-b-2 py-2.5 px-1 text-xs sm:text-sm font-bold cursor-pointer whitespace-nowrap transition-all outline-none -mb-px ${
                        activeTab === tab.key
                          ? "text-red-600 border-red-600 scale-[1.02]"
                          : "text-gray-400 border-transparent hover:text-gray-600"
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tab Body Contents Area */}
              <div className="py-5 bg-white">
                {/* Test Spec Table variant */}
                {showTestTable && (
                  <div className="w-full overflow-x-auto border border-gray-200 rounded-lg shadow-3xs bg-white">
                    <table className="w-full border-collapse text-left min-w-[440px] bg-white">
                      <thead>
                        <tr className="bg-white border-b border-gray-200">
                          <th className="py-2.5 px-3 text-[10px] xs:text-xs font-bold text-gray-600 uppercase tracking-wider w-2/5">
                            Test Description
                          </th>
                          <th className="py-2.5 px-3 text-[10px] xs:text-xs font-bold text-gray-600 uppercase tracking-wider w-1/5">
                            Method
                          </th>
                          <th className="py-2.5 px-3 text-[10px] xs:text-xs font-bold text-gray-600 uppercase tracking-wider w-1/5">
                            Unit
                          </th>
                          <th className="py-2.5 px-3 text-[10px] xs:text-xs font-bold text-gray-600 uppercase tracking-wider w-1/5 text-right">
                            Value
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 bg-white">
                        {product.testSpecifications!.map((row, i) => (
                          <tr key={i} className="hover:bg-gray-50/40 transition-colors">
                            <td className="py-2.5 px-3 text-xs sm:text-sm font-semibold text-gray-900 align-middle bg-white">
                              {row.test}
                            </td>
                            <td className="py-2.5 px-3 text-xs sm:text-sm text-gray-600 align-middle font-mono bg-white">
                              {row.method}
                            </td>
                            <td className="py-2.5 px-3 text-xs sm:text-sm text-gray-500 align-middle bg-white">
                              {row.unit || "—"}
                            </td>
                            <td className="py-2.5 px-3 text-xs sm:text-sm font-bold text-blue-700 align-middle text-right font-mono bg-white">
                              {row.value}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {/* Simple Properties fallback item matrix list grid */}
                {showSimpleTable && (
                  <div className="w-full border border-gray-200 rounded-lg overflow-hidden shadow-3xs divide-y divide-gray-200 bg-white">
                    {Object.entries(product.typicalProperties!).map(([key, value]) => (
                      <div key={key} className="flex flex-col xs:flex-row xs:items-center hover:bg-gray-50/40 transition-colors bg-white">
                        <div className="p-3 font-semibold text-xs sm:text-sm text-gray-600 xs:w-1/2 bg-white">
                          {key}
                        </div>
                        <div className="p-3 text-xs sm:text-sm text-gray-900 font-bold xs:w-1/2 font-mono bg-white">
                          {String(value)}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Plain Text Description Render content */}
                {!showTestTable && !showSimpleTable && (
                  activeContent ? (
                    <div className="bg-white border border-gray-200 p-4 rounded-xl">
                      <p className="text-xs xs:text-sm leading-relaxed text-gray-700 m-0 whitespace-pre-line">
                        {activeContent}
                      </p>
                    </div>
                  ) : (
                    <div className="text-center py-6 border border-dashed border-gray-200 rounded-xl bg-white">
                      <p className="text-xs sm:text-sm text-gray-400 italic m-0">
                        No additional details available under "{tabs.find((t) => t.key === activeTab)?.label}".
                      </p>
                    </div>
                  )
                )}

                {/* Technical report content sanitized text element display */}
                {activeTab === "specifications" && activeContent && (showTestTable || showSimpleTable) && (
                  <div className="mt-3 bg-white p-2.5 rounded border border-gray-200 shadow-3xs">
                    <p className="text-[10px] xs:text-xs text-gray-500 italic m-0 leading-normal">
                      {activeContent}
                    </p>
                  </div>
                )}
              </div>

            </div>

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