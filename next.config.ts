import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true
  },
  async rewrites() {
    return [
      {
        source: '/images/blog/:path*',
        destination: 'https://raw.githubusercontent.com/frederic20021/empowerandlink/main/public/images/blog/:path*',
      },
    ];
  }
};

export default nextConfig;
