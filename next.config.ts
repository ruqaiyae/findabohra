import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    optimizePackageImports: ["react-icons"],
  },
  images: {
    formats: ["image/webp", "image/avif"],
  },
};

export default nextConfig;
