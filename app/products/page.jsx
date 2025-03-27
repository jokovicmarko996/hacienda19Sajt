"use client";
import HerroPattern from "../_components/Hero";
import MansoryLayout from "../_components/MansoryLayout";
import bg from "../../public/hero/pergola3.png"; // slika koja ce da bude hero image

// bento grid iz tailwinda
const page = () => {
  return (
    <div className="overflow-x-hidden max-w-full">
      {/* TO DO => HERO SECTION =>  */}
      Products page
      {/* <HerroPattern image={"/public/hero/pergola1.png"} /> */}
      {/* <HerroPattern image={bg} /> */}
      {/* TO DO => animacija texta od dole kao u onom GSAP tutorijalu => text: "savrsenstvo u svakom detalju" */}
      <MansoryLayout />
    </div>
  );
};

export default page;
