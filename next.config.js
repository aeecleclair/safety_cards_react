/** @type {import('next').NextConfig} */

// Pour GitHub Pages, le site est déployé sous /safety_cards_react/
const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';
const basePath = isGitHubPages ? '/safety_cards_react' : '';

const nextConfig = {
  reactStrictMode: true,
  output: 'export', 
  images: {
    domains: [],
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: basePath,
  assetPrefix: basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
}

module.exports = nextConfig
