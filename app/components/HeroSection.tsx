"use client";
import React, { useEffect, useState, useRef, CSSProperties } from "react";

const ASSETS = {
  background: "https://axionlubricants.com/assets/LandingHerBg-vVSY4-_O.webp",
  logo: "https://axionlubricants.com/Images/HeroLogo.webp",
  product: "https://axionlubricants.com/Images/HeroProduct.webp",
  car: "https://axionlubricants.com/Images/HeroCar.webp",
};

export default function AxionHeroPremium() {
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
        // Safe normalized coordinates (-0.5 to 0.5)
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

  // Fixed implicit 'any' types by strictly typing parameters and return type
  const getTransitionStyles = (delayMs: number, translateOffset: string = "40px"): CSSProperties => ({
    transitionDelay: `${delayMs}ms`,
    transform: mounted 
      ? "translate3d(0, 0, 0)" 
      : `translate3d(0, ${translateOffset}, 0)`,
    opacity: mounted ? 1 : 0,
  });

  return (
    <section className="relative w-full h-[100svh] min-h-[700px] overflow-hidden bg-[#03060a] select-none font-sans antialiased">
      <style jsx global>{`
        @keyframes luxuryFloat {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(0.5deg); }
        }
        @keyframes premiumGlow {
          0%, 100% { opacity: 0.25; transform: scale(1) translate(0px, 0px); }
          50% { opacity: 0.45; transform: scale(1.15) translate(10px, -5px); }
        }
        .animate-luxury-float {
          animation: luxuryFloat 7s cubic-bezier(0.45, 0, 0.55, 1) infinite;
        }
        .animate-premium-glow {
          animation: premiumGlow 8s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-luxury-float, .animate-premium-glow { animation: none !important; }
        }
      `}</style>

      {/* Layer 1: Realistic Parallax Ground/Track Background */}
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

      {/* Layer 2: Premium Studio Lighting Mask Gradients */}
      {/* Deep bottom vignette mirroring high-end automotive ads */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#03060a] via-transparent to-[#03060a]/40 z-10" />
      {/* Left side shadows for flawless typography contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#03060a]/60 via-transparent to-[#03060a]/20 hidden md:block z-10" />

      {/* Layer 3: Interactive Premium Backlighting (Anamorphic Aura) */}
      <div 
        className="animate-premium-glow absolute top-[20%] right-[10%] w-[50vw] h-[50vw] max-w-[600px] rounded-full bg-gradient-to-br from-pink-500/20 via-rose-600/10 to-transparent blur-[80px] md:blur-[120px] pointer-events-none z-10 mix-blend-screen"
        style={{
          transform: !reduceMotion.current
            ? `translate3d(${mousePos.x * 25}px, ${mousePos.y * 25}px, 0)`
            : "none"
        }}
      />

      {/* Layer 4: Deep Shadow Background Logo (Desktop Only) */}
      <div
        className="hidden md:block absolute top-[12%] left-[3%] w-[45vw] max-w-[780px] transition-all duration-[1500ms] cubic-bezier(0.16, 1, 0.3, 1) pointer-events-none z-0"
        style={{
          ...getTransitionStyles(150, "-30px"),
          transform: mounted 
            ? `translate3d(${mousePos.x * -20}px, ${mousePos.y * -10}px, 0)` 
            : "translate3d(-60px, 0, 0)"
        }}
      >
        <img
          src={ASSETS.logo}
          alt=""
          className="w-full h-auto object-contain opacity-[0.22] invert brightness-200 contrast-125 mix-blend-overlay selection:bg-transparent"
        />
      </div>

      {/* Main Layout Container */}
      <div className="relative w-full h-full max-w-[1512px] mx-auto px-6 sm:px-10 md:px-16 flex flex-col md:flex-row justify-between items-end pb-10 md:pb-20 z-20">
        
        {/* Left Side: Realistic Supercar Placement */}
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
              alt="Axion Performance Racing Car"
              className="w-full h-auto object-contain drop-shadow-[0_35px_50px_rgba(0,0,0,0.85)] brightness-[1.03]"
            />
          </div>
        </div>

        {/* Right Side Stack: Premium Product & Monospace Typography */}
        <div className="w-full md:w-[35%] flex flex-col items-start md:items-end justify-end h-full md:h-auto mt-16 md:mt-0">
          
          {/* Floating Premium Product Can */}
          <div
            className="absolute md:relative left-1/2 md:left-auto -translate-x-1/2 md:translate-x-0 top-[6%] md:top-auto md:mb-12 w-[48%] sm:w-[38%] md:w-full max-w-[210px] md:max-w-[290px] transition-all duration-[1200ms] cubic-bezier(0.16, 1, 0.3, 1) z-10"
            style={getTransitionStyles(550, "40px")}
          >
            <div
              className="animate-luxury-float"
              style={{
                transform: !reduceMotion.current 
                  ? `translate3d(${mousePos.x * 22}px, ${mousePos.y * 14}px, 0)` 
                  : "none",
              }}
            >
              <img
                src={ASSETS.product}
                alt="Axion AX-0 Bottle"
                className="w-full h-auto object-contain drop-shadow-[0_40px_60px_rgba(0,0,0,0.9)] filter brightness-[1.02]"
              />
            </div>
          </div>

          {/* Luxury Typography Block */}
          <div 
            className="w-full flex flex-col items-start transition-all duration-[1200ms] cubic-bezier(0.16, 1, 0.3, 1) mt-auto md:mt-0 z-30"
            style={getTransitionStyles(750, "30px")}
          >
            {/* Fine Eyebrow Tag Accent */}
            <div className="flex items-center gap-2 mb-3 tracking-[0.35em] text-[10px] uppercase font-semibold text-rose-500/90 mix-blend-plus-lighter">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
              Next-Gen Formulation
            </div>

            <h1
              className="text-white font-black tracking-tighter text-left uppercase whitespace-nowrap"
              style={{ 
                fontSize: "clamp(54px, 12vw, 96px)", 
                lineHeight: 0.85,
                letterSpacing: "-0.04em"
              }}
            >
              <span className="font-extralight text-white/50 tracking-wide block text-[0.65em] mb-1">AXION</span>
              AX-0 <span className="text-rose-600 font-extrabold text-[0.85em]">.</span> 0W-8
            </h1>
            
            <p
              className="text-white/70 text-left font-light leading-relaxed mt-5 max-w-[32ch] sm:max-w-[40ch] md:max-w-[32ch] border-l border-white/10 pl-4"
              style={{ fontSize: "clamp(13px, 2.5vw, 14px)" }}
            >
              Engineered with ultra-low viscosity matrices for elite fuel savings, instantaneous cold starts, and absolute surface wear defense.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}