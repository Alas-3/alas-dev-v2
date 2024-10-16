/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'cdn1.iconfinder.com',
      'images.credly.com',
      'cdn2.iconfinder.com',
      'cdn4.iconfinder.com',
      'm.media-amazon.com',
      'encrypted-tbn0.gstatic.com',
    ], // Add external domains here
  },
};

export default nextConfig;
