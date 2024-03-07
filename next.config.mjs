/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  env: {
    APP_SERVER_URL: process.env.APP_SERVER_URL,
  },
}

export default nextConfig
