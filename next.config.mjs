/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      { source: '/havelock', destination: '/havelock/index.html' },
      { source: '/havelock/employee', destination: '/havelock/employee/index.html' },
    ];
  },
};

export default nextConfig;
