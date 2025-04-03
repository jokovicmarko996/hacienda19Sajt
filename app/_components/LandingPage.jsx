import Image from "next/image";
// import pergolaHero from "../../public/hero/pergola1.png";
import pergolaHero from "../../public/products/pergola9.png";
import AnimatedText from "./animatedText";
import { Caveat } from "next/font/google";
import GlassButton from "./Button";
import Features from "./Features";
import StarryQuote from "./StarryQuote";
import AnimatedHeading from "./AnimatedHeading";
import GsapAnimatedText from "./GsapAT";
import Link from "next/link";
import AnimiraniNaslov from "./AnimiraniNaslov";
import { MdLocalPhone } from "react-icons/md";

const caveat = Caveat({ subsets: ["latin"] });

export default function HeroC() {
  return (
    <div
      className="flex flex-col min-h-screen"
      // style={{ fontFamily: caveat.style.fontFamily }}
    >
      {/* Hero Section */}
      <section className="relative flex-grow flex items-center justify-center h-screen">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={pergolaHero} // Replace with your image path
            alt="Hero Pergola Image"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
        {/* Animated Heading */}
        <div className="absolute bottom-[15%] flex flex-col items-center justify-center">
          {/* <AnimatedText
            text="Hacienda"
            // className="text-7xl lg:text-8xl font-caveat font-dancing-script"
            className="text-7xl lg:text-[154px] font-caveat text-white"
            // style={{ fontFamily: caveat.style.fontFamily }}
          /> */}
          {/* <GsapAnimatedText
            text="Hacienda"
            className="text-7xl lg:text-[154px] font-caveat text-white"
          /> */}
          <GsapAnimatedText
            text="Hacienda"
            morphText="Dobrodošli na našu stranicu"
            className="text-7xl lg:text-[154px] font-caveat text-white"
            // className="text-3xl  md:text-5xl lg:text-[154px] font-panchang text-white"
          />

          {/* <AnimiraniNaslov text="Hacienda" /> */}
          <div clasname="items-center justify-center">
            <Link href={`/contact`}>
              <GlassButton
                text={"Kontakt"}
                className="text-xl lg:text-3xl   text-white"
              ></GlassButton>
            </Link>
          </div>
        </div>
        {/* TODO: add button to the right side of the screen */}
        {/* treba srediti pozicioniranje ovog dugmeta i animiranje nakon sto se naslov zavrsi => pogledaj TAILWIND HERO SECTION */}
        {/* <div className="absolute bottom-28 right-6 rounded-full flex items-center justify-center  md:bottom-28 md:right-1/4 "> */}
      </section>

      <StarryQuote />

      <Features />
    </div>
  );
}
