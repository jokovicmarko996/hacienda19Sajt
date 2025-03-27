"use client";

import HerroPattern from "../_components/Hero";
import bg from "../../public/hero/pergola3.png";
import AboutPageTextAnimation from "../_components/AboutPageTextAnimation";

const page = () => {
  return (
    <div>
      <HerroPattern image={bg} />

      {/* <AboutPageTextAnimation /> */}

      {/* TO DO => KAO U ZENTRY-U SLIKA KOJA SE RASIRI NA EKRAN I IZNAD NJE NEKI TEXT => ISPOD NEKE ANIMACIJE  */}
    </div>
  );
};

export default page;
