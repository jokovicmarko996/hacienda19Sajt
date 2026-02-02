import HeroPattern from "../_components/HerroPattern";
import MansoryLayout from "../_components/MansoryLayout";
import ProductsIntro from "../_components/ProductsIntro";
import FollowUsSection from "../_components/ui/FollowUsCGPT";
import ProductsContent from "../_components/ui/ProductsContent";

const GREEN = "#4cffb3";
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata = {
  title: "Proizvodi | Hacienda Premium Pergole",
  description:
    "Pregled kolekcija i modela za eksterijer i premium ambijent. Pogledaj galeriju i detalje svakog proizvoda.",
  keywords: [
    "proizvodi",
    "pergole",
    "premium pergole",
    "drvene pergole",
    "pergole za terase",
    "pergole za dvorišta",
    "Hacienda Premium Pergole",
  ],
  alternates: {
    canonical: "/products",
  },
  openGraph: {
    title: "Proizvodi | Hacienda Premium Pergole",
    description:
      "Pregled kolekcija i modela za eksterijer i premium ambijent. Pogledaj detalje svakog proizvoda.",
    url: "/products",
    type: "website",
  },
};

const Page = () => {
  const jsonLdBreadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Početna",
        item: `${baseUrl}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Proizvodi",
        item: `${baseUrl}/products`,
      },
    ],
  };

  const jsonLdCollectionPage = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Proizvodi | Hacienda Premium Pergole",
    url: `${baseUrl}/products`,
    description:
      "Pregled kolekcija i modela za eksterijer i premium ambijent. Pogledaj galeriju i detalje svakog proizvoda.",
  };

  return (
    <div className="max-w-full overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumbs) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdCollectionPage),
        }}
      />

      <HeroPattern
        image="/hero/pergola3.avif"
        decorativeImage={true}
        heading={[
          { text: "Ekskluzivni", className: "font-panchang text-white" },
          {
            text: "ambijent",
            className: "font-panchang",
            style: { color: GREEN },
          },
        ]}
      />

      <ProductsIntro green={GREEN} />
      <MansoryLayout />
      <ProductsContent />
      <FollowUsSection />
    </div>
  );
};

export default Page;
