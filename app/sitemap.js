import { products } from "./_data/products";

export default function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const now = new Date();

  // ✅ ovde navodiš prioritetne proizvode (id ili slug)
  const priorityProducts = new Set(["1", "2", "4", "5", "7", "8"]); // npr. /products/1 /products/2 /products/12

  const staticRoutes = ["", "/products", "/about", "/contact"].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "" ? 1.0 : 0.8,
  }));

  const productRoutes = (products || [])
    .filter((p) => p?.id || p?.slug)
    .map((p) => {
      const segment = String(p.slug ?? p.id);
      const isPriority = priorityProducts.has(segment);

      return {
        url: `${baseUrl}/products/${segment}`,
        lastModified: p.updatedAt ? new Date(p.updatedAt) : now,
        changeFrequency: "monthly",
        priority: isPriority ? 1.0 : 0.9, // ✅ prioritetni veći
      };
    });

  return [...staticRoutes, ...productRoutes];
}
