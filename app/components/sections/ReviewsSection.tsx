'use client';

import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';

interface Review {
  name: string;
  role: string;
  text: string;
}

interface ReviewsSectionProps {
  title: string;
  description: string;
  items: Review[];
}

export default function ReviewsSection({ title, description, items }: ReviewsSectionProps) {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % items.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <section id="reviews" ref={ref} className="py-24 relative overflow-hidden">
      {/* Modern Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-white to-primary/5" />
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at center, var(--primary-color) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          opacity: 0.05
        }} />
      </div>

      <div className="container relative mx-auto px-4">
        {/* Section Header */}
        <div className={`max-w-3xl mx-auto text-center mb-20 transform transition-all duration-1000 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-serif mb-6">{title}</h2>
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed">{description}</p>
        </div>

        {/* Reviews Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Reviews */}
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {items.map((review, index) => (
                  <div
                    key={review.name}
                    className="w-full flex-shrink-0 px-4"
                  >
                    <div className={`bg-white rounded-2xl p-8 md:p-12 shadow-xl transform transition-all duration-1000 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                      {/* Quote Icon */}
                      <div className="text-primary mb-6">
                        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.999v10h-9.999z" />
                        </svg>
                      </div>
                      
                      {/* Review Text */}
                      <p className="text-xl md:text-2xl text-gray-600 mb-8 italic">"{review.text}"</p>
                      
                      {/* Author */}
                      <div className="flex items-center">
                        <div>
                          <h4 className="text-lg font-medium text-gray-900">{review.name}</h4>
                          <p className="text-gray-500">{review.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {items.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeIndex ? 'bg-primary scale-125' : 'bg-primary/30'
                  }`}
                  aria-label={`Go to review ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/4 -left-16 w-32 h-32">
          <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        </div>
        <div className="absolute bottom-1/4 -right-16 w-48 h-48">
          <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-pulse animation-delay-1000" />
        </div>
      </div>
    </section>
  );
} 