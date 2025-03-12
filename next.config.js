/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
    unoptimized: true,
  },
  // Suppress specific hydration warnings
  reactStrictMode: true,
  compiler: {
    // Suppress hydration warnings for browser extension attributes
    ignoreBrowserWarnings: true,
  }
}

module.exports = nextConfig 