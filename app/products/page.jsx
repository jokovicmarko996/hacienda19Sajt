"use client";
import HerroPattern from "../_components/Hero";
import MansoryLayout from "../_components/MansoryLayout";
import bg from "../../public/hero/pergola5.png"; // slika koja ce da bude hero image
import MansoryLayoutImproved from "../_components/MansoryLayoutImproved";

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
    <div className="overflow-x-hidden max-w-full">
      {/* TO DO => HERO SECTION =>  */}
      <HerroPattern image={bg} />



      <section>
        {/* animirani text  */}
        Svaka pergola koju kreiramo je unikatna, prilagođena vašim željama i
        potrebama prostora.
      </section>

      {/* <MansoryLayoutImproved images={images} /> */}
      {/* <HerroPattern image={"/public/hero/pergola1.png"} /> */}
      {/* <HerroPattern image={bg} /> */}
      {/* TO DO => animacija texta od dole kao u onom GSAP tutorijalu => text: "savrsenstvo u svakom detalju" */}
      <MansoryLayout />
    </div>
  );
};

export default page;
