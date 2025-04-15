import { Caveat } from "next/font/google";
import Image from "next/image";
import AnimatedBottomHeading from "./AnimatedBottomHeading";

// ovaj moze da se koristi kao maketa za druge stranice

const caveat = Caveat({ subsets: ["latin"] });

export default function HerroPattern({ image, children }) {
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
            src={image} // Replace with your image path
            alt="Hero Image"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center"></div>

        <AnimatedBottomHeading />
      </section>

      {/* <ImageSlider /> */}

      {/* <ImageStack /> */}

      {/* <CoverflowSlider /> */}

      {/* Main Content */}

    </div>
  );
}
