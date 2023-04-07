/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md'],
  images: {
    domains: ['images.chaeng.dev'],
  },
};

module.exports = nextConfig;
