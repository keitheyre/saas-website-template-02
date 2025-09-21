import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["images.unsplash.com"], // Add domains for external images
    formats: ["image/webp", "image/avif"],
    unoptimized: true, // Required for static export
  },
  // experimental: {
  //   optimizeCss: true,
  // },
  // Enable static export for Firebase Hosting
  output: 'export',
  trailingSlash: true,
};

export default nextConfig;
