"use client";

import { useEffect, useState, useRef } from "react";

interface CounterProps {
  value: string; // Accepts "400+" or "600+"
  duration?: number;
}

export default function Counter({ value, duration = 2000 }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isVisible = useIsVisible(ref);

  // Parse the number (400) and the suffix (+)
  const numericValue = parseInt(value.replace(/\D/g, ""), 10); // Extracts 400
  const suffix = value.replace(/[0-9]/g, ""); // Extracts "+"

  useEffect(() => {
    if (!isVisible) return; // Only animate when seen

    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing function (easeOutExpo) for smooth landing
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      setCount(Math.floor(easeProgress * numericValue));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [isVisible, numericValue, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  );
}

// Helper Hook for Visibility
function useIsVisible(ref: React.RefObject<HTMLElement>) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIntersecting(true);
        observer.disconnect(); // Run once
      }
    });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);

  return isIntersecting;
}