"use client";

import { useEffect, useState, useRef } from "react";

interface CounterProps {
  value: string;
  duration?: number;
}

export default function Counter({ value, duration = 2000 }: CounterProps) {
  const [count, setCount] = useState(0);
  // Ref remains the same
  const ref = useRef<HTMLSpanElement>(null);
  const isVisible = useIsVisible(ref);

  const numericValue = parseInt(value.replace(/\D/g, ""), 10);
  const suffix = value.replace(/[0-9]/g, "");

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
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

// --- THE FIX IS HERE ---
// We changed the type to 'React.RefObject<HTMLElement | null>'
// This tells TypeScript: "It's okay if this ref is null initially, and it's okay if it's a specific element like a Span."
function useIsVisible(ref: React.RefObject<HTMLElement | null>) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIntersecting(true);
        observer.disconnect();
      }
    });

    if (ref.current) observer.observe(ref.current);
    
    return () => observer.disconnect();
  }, [ref]);

  return isIntersecting;
}