import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: 'export',
  /* config options here */
  images: {
    unoptimized: true, // Disable Next.js Image Optimization
    domains: [
      "imgs.search.brave.com",
      "upload.wikimedia.org",
      "res.cloudinary.com",
      "images.unsplash.com",
    ], // ✅ allow external host
  },

  devIndicators: false,
};

export default nextConfig;
