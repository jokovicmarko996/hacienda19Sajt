export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Marko P.",
      location: "Beograd",
      text: "Pergola je urađena tačno po dogovoru, kvalitet izrade je vrhunski. Tim je profesionalan, uredan i maksimalno korektan. Naš dvorišni prostor je potpuno dobio novu dimenziju.",
    },
    {
      name: "Jelena R.",
      location: "Novi Sad",
      text: "Od prve komunikacije do završne montaže – sve je proteklo savršeno. Dizajn pergole se savršeno uklopio uz kuću, a materijali deluju izuzetno kvalitetno.",
      highlight: true,
    },
    {
      name: "Milan S.",
      location: "Pančevo",
      text: "Rokovi su ispoštovani, cena je bila jasna bez skrivenih troškova, a krajnji rezultat čak i bolji nego što smo očekivali. Preporuka svima koji žele pouzdano rešenje.",
    },
  ];

  return (
    <section className="w-full bg-black px-6 py-24 md:px-12">
      <div className="mx-auto max-w-6xl">
        {/* Title */}
        <h2 className="text-center font-panchang text-3xl md:text-4xl lg:text-5xl text-[#4cffb3]">
          Iskustva naših klijenata
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-center text-sm md:text-base text-white/70">
          Zadovoljstvo klijenata je najbolja potvrda našeg kvaliteta i
          posvećenosti.
        </p>

        {/* Cards */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <TestimonialCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ name, location, text, highlight }) {
  return (
    <div
      className={`relative rounded-2xl border px-6 py-8 transition
        ${
          highlight
            ? "border-[#4cffb3]/60 bg-[#4cffb3]/5 shadow-[0_0_40px_-10px_#4cffb3]"
            : "border-white/15 bg-white/5"
        }`}
    >
      {/* Quote */}
      <div className="mb-4 text-2xl text-[#4cffb3]">“</div>

      <p className="text-sm text-white/80 leading-relaxed">{text}</p>

      {/* Author */}
      <div className="mt-6">
        <p className="text-sm font-semibold">{name}</p>
        <p className="text-xs text-white/50">{location}</p>
      </div>
    </div>
  );
}
