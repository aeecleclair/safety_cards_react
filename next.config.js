/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  output: 'export', 
  images: {
    domains: [],
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: '',
  assetPrefix: '',
  env: {
    NEXT_PUBLIC_BASE_PATH: '',
  },
}

module.exports = nextConfig
