'use client';

import { useEffect, useRef, useState } from 'react';

interface BannerEffectsProps {
  effect: 'parallax' | 'kenburns' | 'glitch' | 'ripple';
  children: React.ReactNode;
}

export default function BannerEffects({ effect, children }: BannerEffectsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (effect === 'parallax') {
      const handleMouseMove = (e: MouseEvent) => {
        if (!containerRef.current) return;
        const { left, top, width, height } = containerRef.current.getBoundingClientRect();
        const x = (e.clientX - left) / width;
        const y = (e.clientY - top) / height;
        setMousePosition({ x, y });
      };

      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }
  }, [effect]);

  const getEffectStyles = () => {
    switch (effect) {
      case 'parallax':
        return {
          transform: `translate(${(mousePosition.x - 0.5) * 20}px, ${(mousePosition.y - 0.5) * 20}px)`,
          transition: 'transform 0.2s ease-out'
        };
      case 'kenburns':
        return { animation: 'kenburns 20s ease infinite' };
      case 'glitch':
        return { animation: 'glitch 2s ease infinite' };
      case 'ripple':
        return { animation: 'ripple 3s ease-in-out infinite' };
      default:
        return {};
    }
  };

  return (
    <div ref={containerRef} className={`banner-effect ${effect}`} style={getEffectStyles()}>
      {children}
      <style jsx>{`
        .banner-effect {
          width: 100%;
          height: 100%;
          overflow: hidden;
          position: relative;
        }

        @keyframes kenburns {
          0% {
            transform: scale(1) translate(0, 0);
          }
          50% {
            transform: scale(1.1) translate(-1%, -1%);
          }
          100% {
            transform: scale(1) translate(0, 0);
          }
        }

        @keyframes glitch {
          0% {
            transform: translate(0);
            filter: hue-rotate(0deg);
          }
          10% {
            transform: translate(-5px, -5px);
            filter: hue-rotate(90deg);
          }
          20% {
            transform: translate(5px, 5px);
            filter: hue-rotate(-90deg);
          }
          30% {
            transform: translate(0);
            filter: hue-rotate(0deg);
          }
        }

        @keyframes ripple {
          0% {
            transform: scale(1);
            filter: brightness(1);
          }
          50% {
            transform: scale(1.05);
            filter: brightness(1.1);
          }
          100% {
            transform: scale(1);
            filter: brightness(1);
          }
        }

        .glitch::before,
        .glitch::after {
          content: '';
          position: absolute;
          inset: 0;
          background: inherit;
          opacity: 0.5;
          mix-blend-mode: hard-light;
        }

        .glitch::before {
          animation: glitch-offset 2s infinite linear alternate-reverse;
          clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
          transform: translate(-5px);
        }

        .glitch::after {
          animation: glitch-offset 2s infinite linear alternate;
          clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
          transform: translate(5px);
        }

        @keyframes glitch-offset {
          0% {
            transform: translate(0);
          }
          20% {
            transform: translate(-3px);
          }
          40% {
            transform: translate(3px);
          }
          60% {
            transform: translate(-3px);
          }
          80% {
            transform: translate(3px);
          }
          100% {
            transform: translate(0);
          }
        }
      `}</style>
    </div>
  );
} 