"use client";
import React, { useEffect, useState, useRef, CSSProperties } from "react";

const ASSETS = {
  background: "https://axionlubricants.com/assets/LandingHerBg-vVSY4-_O.webp",
  product: "/headprod.png",
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
    <section className="relative w-full h-[100svh] min-h-[700px] pt-9 overflow-hidden bg-[#020d09] select-none font-sans antialiased">
      <style jsx global>{`
        @keyframes luxuryFloat {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(0.3deg); }
        }
        @keyframes premiumGlow {
          0%, 100% { opacity: 0.25; transform: scale(1) translate(0px, 0px); }
          50% { opacity: 0.45; transform: scale(1.1) translate(8px, -4px); }
        }
        .animate-luxury-float {
          animation: luxuryFloat 6s cubic-bezier(0.45, 0, 0.55, 1) infinite;
        }
        .animate-premium-glow {
          animation: premiumGlow 8s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-luxury-float, .animate-premium-glow { animation: none !important; }
        }
      `}</style>

      {/* Layer 1: Background Track */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105 transition-all duration-[1200ms] ease-out"
        style={{ 
          backgroundImage: `url('${ASSETS.background}')`,
          opacity: mounted ? 0.95 : 0,
          transform: !reduceMotion.current 
            ? `scale(1.05) translate3d(${mousePos.x * 8}px, ${mousePos.y * 4}px, 0)` 
            : "scale(1.05)"
        }}
      />

      {/* Layer 2: Atmospheric Lighting Vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#020d09] via-transparent to-[#020d09]/40 z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#020d09]/70 via-transparent to-[#020d09]/30 hidden md:block z-10" />

      {/* Layer 3: Main Ambient Backlight Glow */}
      <div 
        className="animate-premium-glow absolute top-[15%] right-[5%] w-[55vw] h-[55vw] max-w-[650px] rounded-full bg-gradient-to-br from-[#0A4D34]/35 via-[#D4AF37]/15 to-transparent blur-[90px] md:blur-[130px] pointer-events-none z-10 mix-blend-screen"
        style={{
          transform: !reduceMotion.current
            ? `translate3d(${mousePos.x * 20}px, ${mousePos.y * 20}px, 0)`
            : "none"
        }}
      />

      {/* Main Layout Container */}
      <div className="relative w-full h-full max-w-[1512px] mx-auto px-6 sm:px-10 md:px-16 flex flex-col md:flex-row justify-between items-end pb-10 md:pb-20 z-20">
        
        {/* Left Side: Car Placement */}
        <div
          className="absolute md:relative left-1/2 md:left-[-4%] -translate-x-1/2 md:translate-x-0 bottom-[36%] md:bottom-[-2%] w-[96%] sm:w-[85%] md:w-[60vw] max-w-[500px] md:max-w-[940px] transition-all duration-[1200ms] cubic-bezier(0.16, 1, 0.3, 1) z-20 pointer-events-none"
          style={getTransitionStyles(350, "60px")}
        >
          <div
            style={{
              transform: !reduceMotion.current 
                ? `translate3d(${mousePos.x * -14}px, ${mousePos.y * -6}px, 0)` 
                : "none",
            }}
          >
            <img
              src={ASSETS.car}
              alt="PRIME Performance Racing Team"
              className="w-full h-auto object-contain drop-shadow-[0_35px_50px_rgba(0,0,0,0.85)] brightness-[1.03]"
            />
          </div>
        </div>

        {/* Right Side Stack: Premium Product & Typography */}
        <div className="w-full md:w-[38%] flex flex-col items-start md:items-end justify-end h-full md:h-auto mt-16 md:mt-0">
          
          {/* Floating Product Architecture - Imposing Luxury Scale */}
          <div
            className="absolute md:relative left-1/2 md:left-auto -translate-x-1/2 md:translate-x-0 top-[4%] md:top-auto md:mb-4 w-[62%] sm:w-[52%] md:w-[125%] max-w-[260px] md:max-w-[420px] transition-all duration-[1200ms] cubic-bezier(0.16, 1, 0.3, 1) z-20"
            style={getTransitionStyles(550, "40px")}
          >
            <div
              className="animate-luxury-float relative group"
              style={{
                transform: !reduceMotion.current 
                  ? `translate3d(${mousePos.x * 26}px, ${mousePos.y * 18}px, 0)` 
                  : "none",
              }}
            >
              {/* Contextual Product Rim Lighting Glow */}
              <div className="absolute inset-0 bg-[#D4AF37]/15 rounded-full filter blur-3xl opacity-60 scale-90 pointer-events-none mix-blend-screen transition-transform duration-700 group-hover:scale-105" />
              
              <img
                src={ASSETS.product}
                alt="PRIME PX-1 Fluid Vessel"
                className="relative w-full h-auto object-contain transition-all duration-500 filter brightness-[1.02] contrast-[1.04] drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)] z-10"
              />

              {/* Anchored Contact Floor Shadow Matrix */}
              <div 
                className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[85%] h-[22px] bg-black/80 rounded-[50%] blur-[16px] mix-blend-multiply transition-all duration-[1200ms]"
                style={{
                  transform: !reduceMotion.current
                    ? `scale(${1 - Math.abs(mousePos.y) * 0.15}) translate3d(${mousePos.x * -6}px, 0, 0)`
                    : "none"
                }}
              />
            </div>
          </div>

          {/* Luxury Typography Block */}
          <div 
            className="w-full flex flex-col items-start transition-all duration-[1200ms] cubic-bezier(0.16, 1, 0.3, 1) mt-auto md:mt-0 z-30"
            style={getTransitionStyles(750, "30px")}
          >
            {/* Fine Eyebrow Tag Accent */}
            <div className="flex items-center gap-2 mb-4 tracking-[0.35em] text-[10px] uppercase font-bold text-[#E5C158] mix-blend-plus-lighter backdrop-blur-[2px] bg-white/5 py-1 px-2.5 rounded-full border border-white/10">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E5C158] animate-pulse" />
              Hyper-Velocity Synthesis
            </div>

            <h1
              className="text-white font-black tracking-tighter text-left uppercase whitespace-nowrap"
              style={{ 
                fontSize: "clamp(52px, 11vw, 92px)", 
                lineHeight: 0.85,
                letterSpacing: "-0.04em"
              }}
            >
              <span className="font-light text-white/40 tracking-wider block text-[0.62em] mb-1.5">PRIME</span>
              PX-1<span className="text-[#D4AF37] font-extrabold text-[0.85em] mx-0.5">.</span>0W-16
            </h1>
            
            <p
              className="text-white/70 text-left font-light leading-relaxed mt-6 max-w-[32ch] sm:max-w-[40ch] md:max-w-[32ch] border-l-2 border-[#D4AF37]/40 pl-4 text-sm sm:text-base backdrop-blur-[1px]"
              style={{ fontSize: "clamp(13px, 2.3vw, 14.5px)" }}
            >
              Formulated with signature low-drag molecular structures for extreme thermal stability, seamless power conversion, and absolute track-proven core engineering.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}