'use client';

import Image from 'next/image';
import { content } from '../../config/content';

interface ProductSectionProps {
  title: string;
  description: string;
  price: number;
  size?: string;
  benefit: string;
  image: string;
  isNew?: boolean;
  bestseller?: boolean;
  index: number;
}

export default function ProductSection({
  title,
  description,
  price,
  size,
  benefit,
  image,
  isNew,
  bestseller,
  index
}: ProductSectionProps) {
  const handleEmailClick = () => {
    window.location.href = `mailto:${content.contact.info.email}?subject=Product Inquiry: ${title}`;
  };

  return (
    <div className={`mb-32 last:mb-0 max-w-4xl mx-auto`}>
      {/* Image Section */}
      <div className="relative h-[500px] scale-image">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover hover-bright rounded-lg"
        />
        {isNew && (
          <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
            New
          </div>
        )}
        {bestseller && (
          <div className="absolute top-4 left-4 bg-rose-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            Bestseller
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className={`mt-8 slide-in-up stagger-${index + 3}`}>
        <div className="space-y-6 text-center">
          <div className="space-y-2">
            <h3 className="text-3xl font-serif">{title}</h3>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">{description}</p>
          <div className="flex justify-center">
            <div className="flex items-center text-gray-500">
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {benefit}
            </div>
          </div>
          <button 
            onClick={handleEmailClick}
            className="mt-8 bg-primary text-white px-8 py-3 rounded-full hover:bg-primary/90 transition-colors hover-glow"
          >
            Email Inquiry
          </button>
        </div>
      </div>
    </div>
  );
} 