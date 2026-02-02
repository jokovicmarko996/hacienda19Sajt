import Link from "next/link";

const ProductsIntro = ({ green = "#4cffb3" }) => {
  return (
    <section className="relative bg-black px-4 pt-10 pb-10 sm:px-6 sm:pt-12 sm:pb-14 lg:px-10">
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

          {/* green glow on hover (uses group-hover) */}
          <div
            className="
              pointer-events-none absolute inset-0 rounded-3xl
              opacity-0 transition-opacity duration-300
              group-hover:opacity-100
            "
            style={{
              boxShadow: `0 0 40px -22px ${green}8c`,
            }}
          />

          <div className="relative z-10 text-center">
            {/* H2 (HeroPattern should be the single H1 on /products page) */}
            <h2
              className="font-panchang text-2xl sm:text-3xl"
              style={{
                color: green,
                textShadow: "0 0 22px rgba(76,255,179,0.22)",
              }}
            >
              Premium pergole i rešenja za eksterijer
            </h2>

            <div
              className="mx-auto mt-4 h-px w-24 shadow-[0_0_22px_-12px_#4cffb3]"
              style={{ backgroundColor: `${green}99` }}
            />

            <p className="mx-auto mt-4 max-w-3xl font-serif text-base leading-relaxed text-white/70 sm:text-lg">
              Pregledaj naše modele <strong>drvenih premium pergola</strong> za
              dvorišta, terase i ugostiteljske objekte. Svaki proizvod ima
              galeriju fotografija, detaljan opis i ključne specifikacije, kako
              bi lakše izabrao rešenje koje odgovara prostoru i stilu.
            </p>

            <div className="mt-6 flex justify-center">
              <Link
                href="/contact"
                className="
                  inline-flex items-center justify-center gap-2
                  rounded-full px-7 py-3.5
                  font-panchang text-sm text-black sm:text-base
                  transition-all duration-200
                  hover:-translate-y-0.5 hover:brightness-110
                  active:translate-y-0 active:brightness-95
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-black
                "
                style={{
                  backgroundColor: green,
                  boxShadow: `0 16px 44px -22px ${green}cc`,
                }}
                aria-label="Zatraži ponudu za pergolu"
              >
                Zatraži ponudu
              
              
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsIntro;
