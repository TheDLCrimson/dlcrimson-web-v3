/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      domains: ['pbs.twimg.com'], // Add external domain for next/image
    },
  };
  
  export default nextConfig;
  