/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    imageSizes: [16, 32, 64, 128, 256, 512],
    deviceSizes: [640, 768, 1024, 1280, 1536],
  },

  async redirects() {
    const canonicalHost =
      process.env.NEXT_PUBLIC_SITE_CANONICAL_HOST || "pergole-hacienda.rs";
    const canonicalUrl =
      process.env.NEXT_PUBLIC_SITE_URL || "https://pergole-hacienda.rs";

    const aliasHosts = (process.env.NEXT_PUBLIC_SITE_ALIASES || "")
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean)
      .filter((h) => h !== canonicalHost);

    return aliasHosts.map((host) => ({
      source: "/:path*",
      has: [{ type: "host", value: host }],
      destination: `${canonicalUrl}/:path*`,
      permanent: true,
    }));
  },
};

export default nextConfig;
