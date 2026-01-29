/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    imageSizes: [16, 32, 64, 128, 256, 512],
    deviceSizes: [640, 768, 1024, 1280, 1536],
  },
};

export default nextConfig;
