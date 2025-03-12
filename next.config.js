/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Suppress specific hydration warnings
  reactStrictMode: true,
}

module.exports = nextConfig 