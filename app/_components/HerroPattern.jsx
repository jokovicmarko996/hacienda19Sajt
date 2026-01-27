import Image from "next/image";

export default function HeroPattern({ image, heading = "" }) {
  // heading može biti:
  // 1) string: "Ekskluzivni ambijent"
  // 2) array: [{ text: "Ekskluzivni", className: "text-green-400 font-bodoni" }, ...]
  const tokens = Array.isArray(heading)
    ? heading
    : String(heading)
        .trim()
        .split(/\s+/)
        .filter(Boolean)
        .map((w) => ({ text: w }));

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <Image
        src={image}
        alt="Hero Image"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      <div className="absolute bottom-40 right-8 md:bottom-12 md:right-12 z-10 text-right">
        <h1 className="font-panchang font-semibold text-white text-4xl sm:text-4xl md:text-5xl lg:text-7xl leading-tight">
          {tokens.map((t, i) => (
            <span key={i} className={`block ${t.className ?? ""}`}>
              {t.text}
            </span>
          ))}
        </h1>
      </div>
    </section>
  );
}
