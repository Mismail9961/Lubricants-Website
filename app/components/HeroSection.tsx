"use client";
import React, { useEffect, useState, useRef, CSSProperties } from "react";

const ASSETS = {
  background: "https://axionlubricants.com/assets/LandingHerBg-vVSY4-_O.webp",
  product: "/P1.png",
  car: "/car.png",
};

export default function PrimeHeroPremium() {
  const [mounted, setMounted] = useState<boolean>(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const reduceMotion = useRef<boolean>(false);

  useEffect(() => {
    reduceMotion.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setMounted(true);
  }, []);

  useEffect(() => {
    if (reduceMotion.current) return;
    let frameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      frameId = requestAnimationFrame(() => {
        setMousePos({
          x: e.clientX / window.innerWidth - 0.5,
          y: e.clientY / window.innerHeight - 0.5,
        });
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(frameId);
    };
  }, []);

  const getTransitionStyles = (delayMs: number, translateOffset: string = "40px"): CSSProperties => ({
    transitionDelay: `${delayMs}ms`,
    transform: mounted
      ? "translate3d(0, 0, 0)"
      : `translate3d(0, ${translateOffset}, 0)`,
    opacity: mounted ? 1 : 0,
  });

  return (
    <section className="relative w-full h-[100svh] min-h-[560px] overflow-hidden bg-[#020d09] select-none font-sans antialiased">
      {/* Background Track */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105 transition-all duration-[1200ms] ease-out"
        style={{
          backgroundImage: `url('${ASSETS.background}')`,
          opacity: mounted ? 0.95 : 0,
        }}
      />

      {/* Vignette Gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#020d09] via-transparent to-[#020d09]/30 z-10" />

      {/* ================= DESKTOP LAYOUT (Unchanged) ================= */}
      <div className="relative w-full h-full max-w-[1512px] mx-auto px-4 sm:px-10 md:px-16 hidden md:flex flex-row justify-between items-end pb-16 z-20">
        <div className="relative md:left-[-4%] md:translate-x-0 bottom-[-2%] md:w-[58vw] md:max-w-[940px] z-30 pointer-events-none">
          <img src={ASSETS.car} alt="Car" className="w-full h-auto object-contain brightness-[1.03]" />
        </div>
        <div className="w-[42%] flex flex-col items-start justify-end h-auto z-20">
          <div className="relative mb-8 w-[85%] max-w-[420px] z-20">
            <img src={ASSETS.product} alt="Product" className="w-full h-auto object-contain" />
          </div>
          <div className="w-full flex flex-col items-start z-40 text-left">
            <h1 className="text-white font-black tracking-tighter uppercase" style={{ fontSize: "clamp(32px, 8.5vw, 92px)", lineHeight: 0.85 }}>
              PROTECT THE CORE
            </h1>
            <p className="text-white/70 font-light mt-6 max-w-[32ch] border-l-2 border-[#D4AF37]/40 pl-4 text-base">
              Formulated with signature low-drag molecular structures for extreme thermal stability.
            </p>
          </div>
        </div>
      </div>

      {/* ================= MOBILE LAYOUT (Premium) ================= */}
      <div className="relative w-full h-full flex flex-col md:hidden z-20">

        {/* Visual Stage: Product + Car */}
        <div className="relative w-full flex-1 min-h-0 flex flex-col items-center pt-[84px] pb-2">

          {/* Eyebrow / Category Label */}
          <div
            className="flex items-center gap-2.5 mb-2 px-6 transition-all duration-1000"
            style={getTransitionStyles(100, "8px")}
          >
            <span className="h-px w-6 bg-[#E5C158]/50" />
            <span className="text-[#E5C158] text-[9px] font-semibold tracking-[0.3em] uppercase whitespace-nowrap">
              Synthetic Motor Oil
            </span>
            <span className="h-px w-6 bg-[#E5C158]/50" />
          </div>

          {/* Product Can */}
          <div
            className="relative flex-1 min-h-0 w-[70%] max-w-[280px] z-10 transition-all duration-1000"
            style={getTransitionStyles(250, "12px")}
          >
            <img
              src={ASSETS.product}
              alt="AXION Product Can"
              className="w-full h-full max-h-[320px] object-contain object-top drop-shadow-[0_25px_45px_rgba(0,0,0,0.55)]"
            />
          </div>

          {/* Overlapping Porsche Car */}
          <div
            className="absolute bottom-0 w-[128%] left-1/2 -translate-x-1/2 z-20 transition-all duration-1000"
            style={getTransitionStyles(450, "24px")}
          >
            <img
              src={ASSETS.car}
              alt="AXION Porsche"
              className="w-full h-auto object-contain drop-shadow-[0_24px_30px_rgba(0,0,0,0.85)]"
            />
          </div>
        </div>

        {/* Text Panel */}
        <div
          className="relative w-full px-6 pb-[calc(env(safe-area-inset-bottom)+1.25rem)] pt-6 z-30 flex flex-col items-start text-left bg-gradient-to-t from-black via-black/95 to-transparent"
          style={getTransitionStyles(600, "10px")}
        >
          <div className="flex items-end gap-2.5">
            <h1 className="text-white text-[34px] font-black tracking-tight leading-[0.85] uppercase">
              AX-0
            </h1>
            <span className="text-[#E5C158] text-[15px] font-bold tracking-wide uppercase pb-0.5">
              0W-8
            </span>
          </div>

          <div className="mt-2.5 border-l-2 border-[#E5C158]/40 pl-3">
            <p className="text-white/70 text-[12px] font-normal leading-snug max-w-[42ch]">
              Ultra-low viscosity for maximum fuel economy, effortless cold starts, and lasting wear protection — engineered for next-gen engines.
            </p>
          </div>

          {/* Spec Chips */}
          <div className="flex flex-wrap gap-1.5 mt-3">
            {["Full Synthetic", "API SP", "Fuel Saving"].map((spec) => (
              <span
                key={spec}
                className="text-white/60 text-[9px] font-medium tracking-[0.1em] uppercase border border-white/15 rounded-full px-2.5 py-1"
              >
                {spec}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex items-stretch gap-2.5 mt-4 w-full">
            <a
              href="#products"
              className="flex-1 text-center bg-[#E5C158] text-[#04170F] text-[12px] font-bold tracking-[0.08em] uppercase rounded-full py-3 active:scale-[0.98] transition-transform"
            >
              Explore Range
            </a>
            <a
              href="#contact"
              className="flex items-center justify-center text-white/85 text-[12px] font-semibold tracking-[0.08em] uppercase border border-white/25 rounded-full py-3 px-5 active:scale-[0.98] transition-transform"
            >
              Contact
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}