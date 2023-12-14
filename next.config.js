/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["page.tsx", "page.ts", "page.jsx", "page.js"],
  compiler: {
    styledComponents: true
  },
  images: {
    domains: ['cryptospro.com.br', 'www.shareicon.net']
  },
}

module.exports = nextConfig
