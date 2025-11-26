import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: false,
  images: {
    domains: ['localhost', 'shopping-phinf.pstatic.net'],
  },
};

export default nextConfig;
