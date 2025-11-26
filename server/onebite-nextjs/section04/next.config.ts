import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: false,
  images: {
    domains: ['localhost', 'shopping-phinf.pstatic.net'],
  },
  logging: {
    fetches: {
      fullUrl: true,
    }
  }
};

export default nextConfig;
