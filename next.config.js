/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  devIndicators: {
    position: 'bottom-right',
    enabled: false
  },
  experimental: {
    turbo: {
      devOverlay: false
    }
  }
}

module.exports = nextConfig
