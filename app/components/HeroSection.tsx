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
    <section className="relative w-full h-[100svh] min-h-[600px] overflow-hidden bg-[#020d09] select-none font-sans antialiased">
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

      {/* ================= MOBILE LAYOUT (Matching Reference) ================= */}
      <div className="relative w-full h-full flex flex-col pt-40 justify-between md:hidden z-20">
        
        {/* Layer Stack: Product + Car */}
        <div className="relative w-full flex-1 flex flex-col justify-start items-center overflow-hidden">
          
          {/* Top Product - Massive Can sizing taking up ~65% of screen height */}
          <div
            className="relative w-[92%] max-w-[380px] pt-2 z-10 transition-all duration-1000"
            style={getTransitionStyles(200, "10px")}
          >
            <img
              src={ASSETS.product}
              alt="AXION Product Can"
              className="w-full h-[58vh] max-h-[460px] object-contain object-top drop-shadow-2xl"
            />
          </div>

          {/* Overlapping Porsche Car - Attached right below product center */}
          <div
            className="absolute top-[32vh] sm:top-[35vh] w-[115%] left-1/2 -translate-x-1/2 z-20 transition-all duration-1000"
            style={getTransitionStyles(400, "20px")}
          >
            <img
              src={ASSETS.car}
              alt="AXION Porsche"
              className="w-full h-auto object-contain drop-shadow-[0_20px_25px_rgba(0,0,0,0.9)]"
            />
          </div>
        </div>

        {/* Bottom Text Content Area */}
        <div
          className="relative w-full px-6 pb-8 pt-2 z-30 flex flex-col items-start text-left bg-gradient-to-t from-black via-black/90 to-transparent"
          style={getTransitionStyles(600, "10px")}
        >
          <h1 className="text-white text-2xl sm:text-3xl font-black tracking-wide leading-none uppercase">
            AX-0
          </h1>
          <h2 className="text-white text-2xl sm:text-3xl font-black tracking-wide leading-tight uppercase mb-2">
            0W-8
          </h2>
          <p className="text-white/80 text-xs sm:text-sm font-normal leading-relaxed max-w-[36ch]">
            Ultra-low viscosity for top fuel savings, smooth cold starts, and strong wear protection. Made for next-gen high-efficiency engines.
          </p>
        </div>

      </div>
    </section>
  );
}