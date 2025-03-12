'use client';

import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import { content } from '../../config/content';

interface ProductSectionProps {
  title: string;
  description: string;
  benefit: string;
  image: string;
  isNew?: boolean;
  bestseller?: boolean;
  index: number;
}

export default function ProductSection({
  title,
  description,
  benefit,
  image,
  isNew,
  bestseller,
  index
}: ProductSectionProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleEmailClick = () => {
    window.location.href = `mailto:${content.contact.info.email}?subject=Product Inquiry: ${title}`;
  };

  return (
    <div ref={ref} className={`relative group ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex flex-col lg:flex-row items-center gap-12 mb-32 last:mb-0`}>
      {/* Image Container */}
      <div className="w-full lg:w-3/5 relative">
        <div className={`relative aspect-[4/3] transform transition-all duration-1000 ${inView ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-95'}`}>
          {/* Main Image */}
          <div className="relative h-full overflow-hidden rounded-2xl group-hover:shadow-2xl transition-shadow duration-500">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transform transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          {/* Badges */}
          <div className="absolute top-4 left-4 flex gap-2">
            {bestseller && (
              <div className="bg-rose-500 text-white px-4 py-2 rounded-full text-sm font-medium transform -rotate-2 shadow-lg">
                Bestseller
              </div>
            )}
            {isNew && (
              <div className="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium rotate-2 shadow-lg">
                New
              </div>
            )}
          </div>

          {/* Decorative Elements */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      </div>

      {/* Content Container */}
      <div className="w-full lg:w-2/5">
        <div className={`space-y-6 transform transition-all duration-1000 delay-200 ${inView ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
          {/* Title and Price */}
          <div>
            <h3 className="text-4xl font-serif mb-2">{title}</h3>
          </div>

          {/* Description */}
          <p className="text-gray-600 text-lg leading-relaxed">{description}</p>

          {/* Benefits */}
          <div className="bg-primary/5 rounded-xl p-4">
            <div className="flex items-center text-gray-700">
              <svg className="w-5 h-5 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-medium">{benefit}</span>
            </div>
          </div>

          {/* CTA Button */}
          <button 
            onClick={handleEmailClick}
            className="w-full bg-primary text-white px-8 py-4 rounded-xl hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-primary/30 active:scale-95"
          >
            <span className="flex items-center justify-center">
              <span>Inquire Now</span>
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
} 