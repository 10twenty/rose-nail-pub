import { content } from '../../../config/content';
import { NextResponse } from 'next/server';

export async function GET() {
  // Get initials from company name
  const initials = content.companyName
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- Background Circle -->
  <circle cx="16" cy="16" r="16" fill="${content.theme.primaryColor}"/>
  
  <!-- Letters -->
  <text x="16" y="22" font-family="serif" font-size="18" font-weight="600" fill="#FFFFFF" text-anchor="middle">
    ${initials}
  </text>
</svg>`;



  return new NextResponse(svg, {
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 'public, max-age=31536000, immutable'
    }
  });
} 