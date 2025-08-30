"use client";

import { useEffect, useRef, useState } from "react";

interface InfiniteSliderProps {
  children: React.ReactNode;
  speedOnHover?: number;
  gap?: number;
}

export function InfiniteSlider({
  children,
  speedOnHover = 20,
  gap = 24,
}: InfiniteSliderProps) {
  const [isHovered, setIsHovered] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [sliderWidth, setSliderWidth] = useState(0);

  useEffect(() => {
    if (sliderRef.current) {
      setSliderWidth(sliderRef.current.scrollWidth);
    }
  }, [children]);

  const speed = isHovered ? speedOnHover : 20;

  return (
    <div
      className="relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        ref={sliderRef}
        className="flex animate-scroll"
        style={{
          gap: `${gap}px`,
          animationDuration: `${speed}s`,
        }}
      >
        {children}
        {children} {/* Duplicate children for seamless loop */}
      </div>
    </div>
  );
}
