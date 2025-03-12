'use client';

import { useState, useEffect, useRef } from 'react';

interface CountUpProps {
  end: number;
  duration?: number;
  suffix?: string;
}

export default function CountUp({ end, duration = 1000, suffix = '' }: CountUpProps) {
  // Initialize with 0 and use useEffect for hydration
  const [mounted, setMounted] = useState(false);
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const animationFrameId = useRef<number>();

  // Handle initial mount
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Reset count and start animation when element enters viewport
          setCount(0);
          startCounting();
        } else {
          // Cancel animation when element leaves viewport
          if (animationFrameId.current) {
            window.cancelAnimationFrame(animationFrameId.current);
          }
        }
      },
      { threshold: 0.1 }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
      if (animationFrameId.current) {
        window.cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [mounted]);

  const startCounting = () => {
    let startTimestamp: number | null = null;
    
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        animationFrameId.current = window.requestAnimationFrame(step);
      }
    };

    animationFrameId.current = window.requestAnimationFrame(step);
  };

  // Show 0 during server-side rendering and initial mount
  if (!mounted) {
    return <span ref={elementRef} className="font-serif">0{suffix}</span>;
  }

  return (
    <span ref={elementRef} className="font-serif">
      {count}{suffix}
    </span>
  );
} 