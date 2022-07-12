/**
 * @type {import('next').NextConfig}
 */
 const nextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: '/documentation',
        destination: '/documentation/getting-started',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig