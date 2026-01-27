import React from "react";

const ProductsContent = () => {
  return (
    <section className="w-full bg-black px-6 py-24">
      <div className="mx-auto w-full max-w-7xl 2xl:max-w-screen-2xl">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/60 px-6 py-16 sm:px-10">
          {/* Subtle background glow */}
          <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-[#4cffb3]/10 blur-3xl" />

          {/* Heading */}
          <h2 className="relative z-10 mb-14 text-center font-panchang text-3xl sm:text-4xl lg:text-5xl text-[#4cffb3]">
            Naši proizvodi
          </h2>

          {/* Two Columns */}
          <div className="relative z-10 grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Column 1 */}
            <div className="rounded-2xl border border-[#4cffb3]/40 bg-white/5 p-6 sm:p-8 transition hover:border-[#4cffb3]/70">
              <p className="font-montserrat text-base sm:text-lg lg:text-xl leading-relaxed text-white/80">
                Naše pergole su pažljivo dizajnirane kako bi spojile
                funkcionalnost i estetiku. Svaka pergola izrađena je od
                visokokvalitetnih materijala, pružajući dugotrajnost i otpornost
                na vremenske uslove. Bez obzira na veličinu ili stil vašeg
                prostora, naše pergole su prilagodljive vašim potrebama.
              </p>
            </div>

            {/* Column 2 */}
            <div className="rounded-2xl border border-[#4cffb3]/40 bg-white/5 p-6 sm:p-8 transition hover:border-[#4cffb3]/70">
              <p className="font-montserrat text-base sm:text-lg lg:text-xl leading-relaxed text-white/80">
                Nudimo širok spektar pergola, uključujući klasične, moderne i
                rustične dizajne. Naš cilj je da vaš eksterijer pretvorimo u
                prostor za uživanje i opuštanje, bilo da se radi o vašem
                dvorištu, terasi ili poslovnom prostoru. Sa našim pergolama,
                svaki trenutak na otvorenom postaje poseban.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsContent;
