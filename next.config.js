/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', 
  images: {
    domains: [],
    unoptimized: true,
  },
  trailingSlash: true,
}

module.exports = nextConfig
