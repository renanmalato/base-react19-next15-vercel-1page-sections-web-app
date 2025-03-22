/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  devIndicators: {
    buildActivity: false,
    buildActivityPosition: "bottom-right",
  },
  experimental: {
    turbo: {
      devOverlay: false  // This should hide the Turbo overlay
    }
  }
}

module.exports = nextConfig
