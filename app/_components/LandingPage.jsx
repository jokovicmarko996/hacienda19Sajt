import Image from "next/image";

import Features from "./Features";
import GsapAnimatedText from "./GsapATB";
import StarryQuote from "./StarryQuote";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative flex-grow flex items-center justify-center h-screen">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          {/* Portrait (phones / narrow screens) */}
          <Image
            src="/hero/pergola1.avif"
            alt="Premium drvena pergola na terasi"
            fill
            priority
            className="object-cover md:hidden"
            sizes="100vw"
          />

          {/* Landscape (desktop / wide screens) */}
          <Image
            src="/products/1/2.avif"
            alt="Premium drvena pergola na terasi"
            fill
            priority
            className="hidden object-cover md:block"
            sizes="100vw"
          />
        </div>

        {/* Animated Heading & Button */}
        <GsapAnimatedText className="text-black font-extralight" />
      </section>

      <StarryQuote />
      <Features />
    </div>
  );
}
