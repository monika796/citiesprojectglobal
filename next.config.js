/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['localhost'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'digitractive.com',
                port: '',
            },
        ],
    },
    experimental: {
        swcMinify: true,
    },
};

module.exports = nextConfig;
