'use client';

import { content } from '../../config/content';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 animate-fade-in">
      <div className="container mx-auto px-4">
        <p className="text-center">© {new Date().getFullYear()} {content.footer.copyright}</p>
      </div>
    </footer>
  );
} 