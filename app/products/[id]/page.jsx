import { notFound } from "next/navigation";
import ProductClient from "@/app/_components/ProductClient";
import { getProductById } from "../../_data/products";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

function toAbsUrl(url) {
  if (!url) return undefined;
  if (url.startsWith("http://") || url.startsWith("https://")) return url;
  return `${siteUrl}${url.startsWith("/") ? "" : "/"}${url}`;
}

export async function generateMetadata({ params }) {
  const { id } = await params; // ✅ Next zahteva await
  const product = getProductById(id);

  if (!product) {
    return {
      title: "Proizvod nije pronađen | Hacienda Premium Pergole",
      alternates: { canonical: `/products/${id}` },
      robots: { index: false, follow: false },
    };
  }

  const title = `Pergola ${product.title}`;
  const description =
    product.seoDescription ||
    product.description?.slice(0, 160) ||
    `Premium drvena pergola ${product.title}. Pogledaj galeriju, specifikacije i zatraži ponudu.`;

  const image = product.images?.[0];

  return {
    title,
    description,
    alternates: { canonical: `/products/${id}` },
    robots: { index: true, follow: true },
    keywords: [
      "premium pergole",
      "drvene pergole",
      "pergole za terase",
      "pergole za dvorišta",
      "Hacienda Premium Pergole",
      product.title,
    ],
    openGraph: {
      title,
      description,
      url: `/products/${id}`,
      type: "website", // ✅ Next metadata ne podržava "product"
      images: image
        ? [
            {
              url: toAbsUrl(image),
              alt: `Pergola ${product.title} – Hacienda Premium Pergole`,
            },
          ]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: image ? [toAbsUrl(image)] : undefined,
    },
  };
}

export default async function ProductPage({ params }) {
  const { id } = await params; // ✅ Next zahteva await
  const product = getProductById(id);

  if (!product) notFound();

  const jsonLdBreadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Početna",
        item: `${siteUrl}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Proizvodi",
        item: `${siteUrl}/products`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: `Pergola ${product.title}`,
        item: `${siteUrl}/products/${id}`,
      },
    ],
  };

  const jsonLdProduct = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `Pergola ${product.title}`,
    description:
      product.seoDescription || product.description?.slice(0, 300) || undefined,
    image: (product.images || []).map(toAbsUrl).filter(Boolean),
    brand: { "@type": "Brand", name: "Hacienda Premium Pergole" },
    offers:
      typeof product.price === "string" || typeof product.price === "number"
        ? {
            "@type": "Offer",
            url: `${siteUrl}/products/${id}`,
            priceCurrency: "RSD",
            price: String(product.price).replace(/[^\d.,]/g, ""),
            availability: "https://schema.org/InStock",
          }
        : undefined,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumbs) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdProduct) }}
      />
      <ProductClient product={product} />
    </>
  );
}
