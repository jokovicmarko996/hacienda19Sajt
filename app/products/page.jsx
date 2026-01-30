"use client";

import HeroPattern from "../_components/HerroPattern";
import MansoryLayout from "../_components/MansoryLayout";
import FollowUsSection from "../_components/ui/FollowUsCGPT";
import ProductsContent from "../_components/ui/ProductsContent";

const GREEN = "#4cffb3";

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

      <MansoryLayout />
      <ProductsContent />
      <FollowUsSection />
    </div>
  );
};

export default Page;
