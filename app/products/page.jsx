"use client";
import bg from "../../public/hero/pergola3.avif"; // slika koja ce da bude hero image
import HeroPattern from "../_components/HerroPattern";
import MansoryLayout from "../_components/MansoryLayout";
import FollowUsSection from "../_components/ui/FollowUsCGPT";
import ProductsContent from "../_components/ui/ProductsContent";

const GREEN = "#4cffb3";

// bento grid iz tailwinda
const page = () => {
  return (
    <div className="max-w-full overflow-x-hidden">
      {/* HERO SECTION */}
      <HeroPattern
        image={bg}
        heading={[
          { text: "Ekskluzivni", className: "font-panchang text-white" },
          {
            text: "ambijent",
            className: "font-panchang",
            style: { color: GREEN },
          },
        ]}
      />

      {/* <MansoryLayoutImproved images={images} /> */}
      <MansoryLayout />
      <ProductsContent />
      <FollowUsSection />
    </div>
  );
};

export default page;
