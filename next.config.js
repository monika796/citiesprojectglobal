/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["localhost", "digitractive.com" , 'raw.githubusercontent.com'], // Trusted domains for images
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io", // Allow images from Sanity CDN
        port: "", // Optional, leave empty for default port
      },
    ],
  },
};

module.exports = nextConfig;
