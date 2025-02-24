import Image from "next/image";
// import pergolaHero from "../../public/hero/pergola1.png";
import pergolaHero from "../../public/hero/pergola1.png";
import AnimatedText from "./animatedText";
import { Caveat } from "next/font/google";
import GlassButton from "./Button";
import Features from "./Features";
import StarryQuote from "./StarryQuote";
import AnimatedHeading from "./AnimatedHeading";

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

        {/* <AnimatedText text="Hacienda" /> */}
        <div className="absolute inset-0 flex items-center justify-center">
          {/* <h1 className="text-4xl lg:text-8xl text-primary-50 mb-10 tracking-tight font-normal">
            Hacienda
          </h1> */}

          <AnimatedText
            text="Hacienda"
            // className="text-7xl lg:text-8xl font-caveat font-dancing-script"
            className="text-7xl lg:text-[154px] font-caveat"
            // style={{ fontFamily: caveat.style.fontFamily }}
          />
        </div>

        {/* <HandwritingText />  */}

        {/* Hero Content (Optional) */}
        {/* <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl font-bold">Welcome to My Website</h1>
          <p className="mt-4 text-lg">This is a full-screen hero section.</p>
        </div> */}
      </section>

      {/* Main Content */}

      <StarryQuote />

      {/* <AnimatedHeading /> */}

      {/* Footer */}
      {/* <footer className="bg-gray-800 text-white text-center py-4">
        <p>&copy; 2023 My Website. All rights reserved.</p>
      </footer> */}

      <Features />
    </div>
  );
}
