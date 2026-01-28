"use client";
import bg from "../../public/hero/pergola5.png"; // slika koja ce da bude hero image
import HeroPattern from "../_components/HerroPattern";
import MansoryLayout from "../_components/MansoryLayout";
import ProductsContent from "../_components/ui/ProductsContent";

const GREEN = "#4cffb3";

const images = [
  { src: "/hero/pergola1.png", aspectRatio: "0.8" },
  { src: "/hero/pergola2.png", aspectRatio: "1.22" },
  { src: "/hero/pergola3.png", aspectRatio: "1.08" },
  { src: "/hero/pergola4.png", aspectRatio: "1.02" },
  { src: "/hero/pergola5.png", aspectRatio: "0.71" },
  { src: "/hero/pergola6.png", aspectRatio: "1.6" },
  { src: "/hero/pergola1.png", aspectRatio: "0.72" },
  { src: "/hero/pergola2.png", aspectRatio: "1.31" },
  { src: "/hero/pergola3.png", aspectRatio: "1.17" },
  { src: "/hero/pergola4.png", aspectRatio: "1.44" },
  { src: "/hero/pergola5.png", aspectRatio: "0.61" },
  { src: "/hero/pergola6.png", aspectRatio: "1.57" },
];

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

      <ProductsContent />

      {/* <MansoryLayoutImproved images={images} /> */}
      <MansoryLayout />
    </div>
  );
};

export default page;
