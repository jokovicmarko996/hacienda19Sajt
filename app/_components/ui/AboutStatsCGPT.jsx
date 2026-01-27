// components/AboutStats.tsx
export default function AboutStats() {
  return (
    <section className="relative w-full bg-black px-6 py-20 md:px-12">
      <div className="mx-auto max-w-6xl">
        {/* Title */}
        <h2 className="font-panchang text-3xl md:text-4xl lg:text-5xl text-[#4cffb3] text-center">
          Priča o Haciendi
        </h2>

        <div className="relative mt-4 w-full max-w-3xl lg:max-w-4xl xl:max-w-5xl isolate lg:mx-auto lg:text-center">
          {/* frame */}
          <div className="pointer-events-none absolute inset-0 z-0 rounded-3xl border border-white/15 bg-white/5" />

          {/* green glow behind text */}
          <div className="pointer-events-none absolute -inset-6 z-0 rounded-3xl bg-gradient-to-r from-[#4cffb3]/35 via-[#4cffb3]/15 to-transparent blur-3xl" />

          <p className="relative z-10 px-5 py-5 md:px-8 md:py-7 text-sm md:text-base text-white/70 leading-relaxed">
            Hacienda je brend posvećen stvaranju funkcionalnih i estetskih
            spoljašnjih prostora u kojima se udobnost, kvalitet i dizajn
            susreću. Specijalizovani smo za izradu pergola po meri, prilagođenih
            vašem prostoru, potrebama i stilu života.
            <br />
            <br />
            Naš pristup zasniva se na pažljivom planiranju, vrhunskim
            materijalima i preciznoj izradi, kako bi svaki projekat bio
            dugotrajan, pouzdan i vizuelno upečatljiv. Od prve ideje do finalne
            montaže, klijentima pružamo potpunu podršku i rešenja koja
            unapređuju svakodnevni boravak na otvorenom.
            <br />
            <br />
            Verujemo da spoljašnji prostor treba da bude produžetak vašeg doma
            ili poslovnog ambijenta — mesto za opuštanje, druženje i uživanje, u
            potpunosti prilagođeno vašim željama.
          </p>
        </div>

        {/* Stats title */}
        <h3 className="mt-20 font-panchang text-3xl md:text-4xl text-[#4cffb3] text-center">
          Naša statistika
        </h3>

        {/* Cards */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <StatCard
            highlight
            title="50+ Završеnih projekata"
            text="Iza nas je više od 50 uspešno realizovanih projekata za privatne i poslovne prostore. Svaki projekat je rađen po meri, sa posebnom pažnjom na kvalitet i detalje."
          />

          <StatCard
            highlight
            title="70+ Zadovoljnih klijenata"
            text="Poverenje više od 70 klijenata potvrđuje našu posvećenost i pouzdanost. Dugoročni odnosi i preporuke su najbolji pokazatelj našeg rada."
          />

          <StatCard
            highlight
            title="7+ Godina iskustva"
            text="Više od sedam godina iskustva omogućilo nam je da usavršimo proces izrade i montaže pergola. Znanje i praksa koje smo stekli garantuju sigurna, funkcionalna i estetski vrhunska rešenja."
          />
        </div>
      </div>
    </section>
  );
}

function StatCard({ title, text, highlight = false }) {
  return (
    <div
      className={`relative rounded-2xl border px-6 py-8 transition lg:text-center
        ${
          highlight
            ? "border-[#4cffb3]/60 bg-[#4cffb3]/5 shadow-[0_0_40px_-10px_#4cffb3]"
            : "border-white/15 bg-white/5"
        }`}
    >
      <h4 className="mb-3 text-lg font-semibold">{title}</h4>
      <p className="text-sm text-white/70 leading-relaxed">{text}</p>
    </div>
  );
}
