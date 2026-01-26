import Image from "next/image";

export default function HeroPattern({ image, heading = "" }) {
  const words = String(heading).trim().split(/\s+/);

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src={image}
        alt="Hero Image"
        fill
        priority
        className="object-cover"
      />

      {/* Text – bottom right */}
      <div className="absolute bottom-40 right-8 md:bottom-12 md:right-12 z-10 text-right">
        <h1 className="font-panchang font-semibold text-white leading-tight text-4xl sm:text-4xl md:text-5xl lg:text-7xl">
          {words.map((word, i) => (
            <span key={i} className="block">
              {word}
            </span>
          ))}
        </h1>
      </div>
    </section>
  );
}
