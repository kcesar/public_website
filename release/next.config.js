/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    distDir: 'build',
    output: 'standalone',
    images: {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'kcesar.org',
              port: '',
            },
            {
              protocol: 'https',
              hostname: 'mptrswa.com',
              port: '',
            },
            {
              protocol: 'https',
              hostname: 'picsum.photos',
              port: '',
            }
          ],
    },
}

module.exports = nextConfig/** @type {import('next').NextConfig} */