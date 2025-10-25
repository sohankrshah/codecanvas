import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   allowedDevOrigins: ['192.168.100.5'],
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: false,
      },
      {
        source: '/about',
        destination: '/#about',
        permanent: false,
      },
      {
        source: '/projects',
        destination: '/#project',
        permanent: false,
      },
      {
        source: '/contact',
        destination: '/#contact',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;