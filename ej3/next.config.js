/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: '**.hearstapps.com',
            },
          ],
    }
}

module.exports = nextConfig
