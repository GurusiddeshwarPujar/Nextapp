/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'firstaid-admin.onrender.com',
        port: '', 
        
        pathname: '/api/media/file/**',
      },
    ],
  },
 
};

module.exports = nextConfig;