'use client';

import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // 1. Handle mouse movement (Desktop)
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    // 2. Handle touch movement (Mobile)
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        setPosition({ x: touch.clientX, y: touch.clientY });
        if (!isVisible) setIsVisible(true);
      }
    };

    // Hide when mouse leaves or touch ends
    const handleMouseLeave = () => setIsVisible(false);
    const handleTouchEnd = () => setIsVisible(false);

    // Desktop listeners
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Mobile listeners
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchstart', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchstart', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[9999]"
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        marginLeft: '-16px', // Centers the 32px outer circle on the touch/pointer point
        marginTop: '-16px',
        willChange: 'transform',
        transition: 'transform 0.08s cubic-bezier(0.25, 1, 0.5, 1)',
      }}
    >
      {/* Outer Circle */}
      <div className="flex h-8 w-8 items-center justify-center rounded-full border border-black/40 dark:border-white/40">
        {/* Inner Red Dot */}
        <div className="h-2 w-2 rounded-full bg-red-600" />
      </div>
    </div>
  );
}