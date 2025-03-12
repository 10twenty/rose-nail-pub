'use client';

import { useEffect } from 'react';

export default function ScrollAnimation() {
  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach(entry => {
        // Add in-view class when element enters viewport
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        } else {
          // Remove in-view class when element leaves viewport
          entry.target.classList.remove('in-view');
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '-50px', // Slightly delayed trigger for better effect
      threshold: 0.1
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all animated elements
    const animatedElements = document.querySelectorAll(
      '.parallax-scroll, .slide-in-left, .slide-in-right, .slide-in-up, .slide-in-down, .scale-fade, .rotate-in, .stagger-item, .scale-image'
    );

    animatedElements.forEach(element => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return null;
} 