import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Next.js 16 requires an explicit allowlist of optimization qualities.
    qualities: [25, 50, 65, 75, 85, 90, 100],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
