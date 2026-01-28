import Image from "next/image";
// import pergolaHero from "../../public/hero/pergola1.png";
import { Caveat } from "next/font/google";
// import pergolaHero from "../../public/products/pergola1.png";
import pergolaHero from "../../public/hero/pergola0.jpg";
import Features from "./Features";
import GsapAnimatedText from "./GsapATB";
import StarryQuote from "./StarryQuote";

const caveat = Caveat({ subsets: ["latin"] });

export default function LandingPage() {
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

      <StarryQuote />

      <Features />
    </div>
  );
}
