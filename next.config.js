/** @type {import('next').NextConfig} */
const repo = 'ly'
const assetPrefix = `/${repo}/`
const basePath = `/${repo}`
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

module.exports = {
  nextConfig,
  assetPrefix: assetPrefix,
  basePath: basePath,
}
