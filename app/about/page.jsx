"use client";

import HerroPattern from "../_components/Hero";
import bg from "../../public/hero/pergola11.png";
import AboutPageTextAnimation from "../_components/AboutPageTextAnimation";
import AboutContent from "../_components/ui/AboutContent";
import AboutHero from "../_components/ui/AboutHero";

const page = () => {
  return (
    <div>
      {/* <HerroPattern image={bg} /> */}

      <AboutHero />

      <AboutContent />

      {/* uradi animacije */}
    </div>
  );
};

export default page;
