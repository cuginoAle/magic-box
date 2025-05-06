import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: false,
  images: {
    domains: ['images.unsplash.com', 'plus.unsplash.com'],
  },
};

export default nextConfig;
