/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    // GITHUB_TOKEN: process.env.GITHUB_TOKEN
  },
  transpilePackages: ['three']
}

module.exports = nextConfig
