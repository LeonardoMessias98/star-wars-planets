/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["page.tsx", "page.ts", "page.jsx", "page.js"],
  compiler: {
    styledComponents: true
  },
  images: {
    domains: ['cryptospro.com.br', 'cdn-icons-png.flaticon.com']
  },
}

module.exports = nextConfig
