import { products } from "./_data/products"; // <-- promeni putanju ako je kod tebe drugačije

export default function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const now = new Date();

  const staticRoutes = ["", "/products", "/about", "/contact"].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.8,
  }));

  const productRoutes = products
    .filter((p) => p?.id || p?.slug)
    .map((p) => {
      const segment = p.slug ?? p.id; // koristi slug ako postoji, inače id
      return {
        url: `${baseUrl}/products/${segment}`,
        lastModified: p.updatedAt ? new Date(p.updatedAt) : now,
        changeFrequency: "monthly",
        priority: 0.7,
      };
    });

  return [...staticRoutes, ...productRoutes];
}
