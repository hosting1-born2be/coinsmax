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
  watchOptions:
    process.env.NODE_ENV === 'development'
      ? {
          pollIntervalMs: 500,
        }
      : undefined,
};

export default nextConfig;
