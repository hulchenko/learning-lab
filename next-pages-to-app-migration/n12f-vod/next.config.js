/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'placecage.lucidinternets.com', pathname: '/**' }
    ]
  },
}

export default nextConfig;