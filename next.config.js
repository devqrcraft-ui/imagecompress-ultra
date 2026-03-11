/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000,
  },
  experimental: {
    optimizeCss: true,
  },
};
module.exports = nextConfig;
