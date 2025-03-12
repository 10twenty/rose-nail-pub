'use client';

import Image from 'next/image';
import { content } from '../../config/content';

interface ProductCardProps {
  title: string;
  description: string;
  price: number;
  size: string;
  benefit: string;
  image: string;
  isNew?: boolean;
  bestseller?: boolean;
}

export default function ProductCard({
  title,
  description,
  price,
  size,
  benefit,
  image,
  isNew,
  bestseller
}: ProductCardProps) {
  const handleEmailClick = () => {
    window.location.href = `mailto:${content.contact.info.email}?subject=Product Inquiry: ${title}`;
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden service-card">
      <div className="relative h-64 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover service-image"
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
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold">{title}</h3>
          <span className="text-lg font-medium text-primary">HK${price}</span>
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="space-y-2">
          <div className="flex items-center text-sm text-gray-500">
            <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            Size: {size}
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {benefit}
          </div>
        </div>
        <button 
          onClick={handleEmailClick}
          className="mt-6 w-full bg-primary text-white px-4 py-2 rounded-full hover:bg-primary/90 transition-colors hover-glow"
        >
          Email Inquiry
        </button>
      </div>
    </div>
  );
} 