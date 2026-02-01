const ProductsIntro = ({ green = "#4cffb3" }) => {
  return (
    <section className="relative bg-black px-4 sm:px-6 lg:px-10 pt-10 sm:pt-12 pb-10 sm:pb-14">
      <div className="mx-auto w-full max-w-6xl">
        <div
          className="
            group relative overflow-hidden rounded-3xl
            border bg-black/60 p-5 sm:p-6
            transition-shadow duration-300
          "
          style={{ borderColor: `${green}66` }} // ~40% opacity
        >
          {/* subtle premium overlays */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-transparent" />
          <div
            className="pointer-events-none absolute -top-28 -left-28 h-64 w-64 rounded-full blur-3xl"
            style={{ backgroundColor: `${green}1a` }} // ~10%
          />
          <div
            className="pointer-events-none absolute -bottom-32 -right-32 h-72 w-72 rounded-full blur-3xl"
            style={{ backgroundColor: `${green}1a` }}
          />

          {/* inner ring + soft vignette */}
          <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/10" />
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(80% 60% at 50% 0%, rgba(76,255,179,0.10), transparent 60%)",
            }}
          />

          {/* FIXED: green glow on hover (uses group-hover) */}
          <div
            className="
              pointer-events-none absolute inset-0 rounded-3xl
              opacity-0 transition-opacity duration-300
              group-hover:opacity-100
            "
            style={{
              boxShadow: `0 0 40px -22px ${green}8c`, // glow
            }}
          />

          <div className="relative z-10 text-center">
            <h1
              className="font-panchang text-2xl sm:text-3xl"
              style={{
                color: green,
                textShadow: "0 0 22px rgba(76,255,179,0.22)",
              }}
            >
              Naši proizvodi
            </h1>

            <div
              className="mx-auto mt-4 h-px w-24 shadow-[0_0_22px_-12px_#4cffb3]"
              style={{ backgroundColor: `${green}99` }}
            />

            <p className="mx-auto mt-4 max-w-3xl text-white/70 font-serif text-base sm:text-lg leading-relaxed">
              Istraži kolekcije i modele za uređenje eksterijera. Klikni na
              proizvod za fotografije, opis i cenu, a porudžbinu možeš poslati
              preko kontakt stranice.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsIntro;
