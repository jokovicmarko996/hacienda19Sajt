"use client";

import HerroPattern from "../_components/Hero";
import bg from "../../public/hero/pergola11.png";
import AboutPageTextAnimation from "../_components/AboutPageTextAnimation";
import AboutContent from "../_components/ui/AboutContent";

const page = () => {
  return (
    <div>
      <HerroPattern image={bg} />

      <AboutContent />
    </div>
  );
};

export default page;
