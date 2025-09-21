import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["images.unsplash.com"], // Add domains for external images
    formats: ["image/webp", "image/avif"],
  },
  // experimental: {
  //   optimizeCss: true,
  // },
  // Enable static export if needed
  // output: 'export',
  // trailingSlash: true,
};

export default nextConfig;
