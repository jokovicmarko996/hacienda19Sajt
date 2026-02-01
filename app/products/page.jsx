import HeroPattern from "../_components/HerroPattern";
import MansoryLayout from "../_components/MansoryLayout";
import ProductsIntro from "../_components/ProductsIntro";
import FollowUsSection from "../_components/ui/FollowUsCGPT";
import ProductsContent from "../_components/ui/ProductsContent";

const GREEN = "#4cffb3";

export const metadata = {
  title: "Proizvodi | Hacienda Premium Pergole",
  description:
    "Pregled kolekcija i modela za eksterijer i premium ambijent. Pogledaj galeriju i detalje svakog proizvoda.",
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

// bento grid iz tailwinda
const Page = () => {
  return (
    <div className="max-w-full overflow-x-hidden">
      {/* HERO SECTION */}
      <HeroPattern
        image="/hero/pergola3.avif"
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
