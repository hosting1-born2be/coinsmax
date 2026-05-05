import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'coinsmax-cms.vercel.app',
      },
    ],
  },
};

export default nextConfig;
