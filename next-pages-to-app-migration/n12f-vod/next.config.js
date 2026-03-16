/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'placecage.lucidinternets.com', pathname: '/**' }
    ]
  },
}

module.exports = nextConfig