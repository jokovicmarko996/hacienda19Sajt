import Image from "next/image";
// import pergolaHero from "../../public/hero/pergola1.png";
import pergolaHero from "../../public/products/pergola1.png";
import AnimatedText from "./animatedText";
import { Caveat } from "next/font/google";
import GlassButton from "./GlassButton";
import Features from "./Features";
import StarryQuote from "./StarryQuote";
import AnimatedHeading from "./AnimatedHeading";
import GsapAnimatedText from "./GsapATB";
import Link from "next/link";
import AnimiraniNaslov from "./AnimiraniNaslov";
import { MdLocalPhone } from "react-icons/md";
import AnimatedHeadingGsap from "./AnimatedHeadingGsap";

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

        {/* Animated Heading & Button */}
        <GsapAnimatedText
          className="text-white font-extralight"
          // className="text-3xl  md:text-5xl lg:text-[154px] font-panchang text-white"
        />
      </section>

      <h1 className="text-2xl flex justify-center items-center text-white font-pachang font-normal mb-4">
        Podsetnik: Zvezdice da budu dinamicne i zvezda padalica da prolece na
        2-3 sekunde. Prevedy stery quotes sekciju
      </h1>

      <StarryQuote />

      <Features />
    </div>
  );
}
