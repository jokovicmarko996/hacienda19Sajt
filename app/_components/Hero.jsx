import { Caveat } from "next/font/google";
import Image from "next/image";
import AnimatedText from "./animatedText";
import ImageStack from "./ImageStack";
import AnimatedBottomHeading from "./AnimatedBottomHeading";

// ovaj moze da se koristi kao maketa za druge stranice

const caveat = Caveat({ subsets: ["latin"] });

export default function HerroPattern({ image }) {
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
        <div className="absolute inset-0 flex items-center justify-center">
          {/* <h1 className="text-4xl lg:text-8xl text-primary-50 mb-10 tracking-tight font-normal">
            Hacienda
          </h1> */}

          {/* <AnimatedText
            text="Hacienda"
            // className="text-7xl lg:text-8xl font-caveat font-dancing-script"
            className="text-7xl lg:text-8xl font-caveat"
            // style={{ fontFamily: caveat.style.fontFamily }}
          /> */}
        </div>
        {/* <div>
          <AnimatedBottomHeading text={"PRECIZNOST U SVAKOM DETALJU"} />
        </div> */}
        {/* Hero Content (Optional) */}

        {/* <div className="absolute bottom-0 left-0 right-0 flex flex-col justify-between items-center bg-transparent p-6">
          <h2 className="text-white text-5xl font-bold font-caveat self-end ">
            Preciznost
          </h2>
          <h2 className="text-white text-5xl font-bold font-caveat self-center ">
            u svakom
          </h2>
          <h2 className="text-white text-5xl font-bold font-caveat self-end ">
            Detalju
          </h2>
        </div> */}

        <AnimatedBottomHeading />
      </section>

      

      {/* <ImageSlider /> */}

      <ImageStack />

      {/* Main Content */}
      <main className="flex-grow p-8">
        <h2 className="text-2xl font-bold">Main Content</h2>
        <p className="mt-4">This is the main content of the page.</p>
      </main>
    </div>
  );
}
