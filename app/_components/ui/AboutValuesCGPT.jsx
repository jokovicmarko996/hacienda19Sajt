export default function ValuesSection() {
  return (
    <section className="relative w-full bg-black px-6 py-24 md:px-12">
      <div className="mx-auto max-w-6xl">
        {/* Title */}
        <h2 className="mb-14 text-center font-panchang text-3xl md:text-4xl lg:text-5xl text-[#4cffb3]">
          Vrednosti koje <br className="hidden sm:block" />
          negujemo u Haciendi
        </h2>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2">
          <ValueCard
            icon="🌲"
            title="Kvalitetni materijali"
            text="Radimo isključivo sa proverenim i dugotrajnim materijalima koji garantuju otpornost na vremenske uslove i dug vek trajanja."
          />

          <ValueCard
            icon="🤝"
            title="Posvećenost klijentima"
            text="Od prve ideje do završne montaže, stojimo vam na raspolaganju sa savetima i podrškom, jer verujemo da je zadovoljstvo klijenta naša najbolja preporuka."
          />

          <ValueCard
            icon="🛠️"
            title="Pouzdana realizacija"
            text="Poštujemo dogovorene rokove i obezbeđujemo profesionalnu montažu, bez komplikacija i skrivenih troškova."
          />

          <ValueCard
            icon="🏡"
            title="Funkcionalan i moderan dizajn"
            text="Naše pergole kombinuju savremenu estetiku sa praktičnim rešenjima, stvarajući prostor koji je podjednako lep i funkcionalan."
          />
        </div>
      </div>
    </section>
  );
}

function ValueCard({ icon, title, text }) {
  return (
    <div
      className="
        relative rounded-2xl border border-white/15
        bg-gradient-to-b from-[#4cffb3]/20 via-black/40 to-black/70
        px-6 py-8 transition
        hover:border-[#4cffb3]/60
        hover:from-[#4cffb3]/30 hover:via-black/35 hover:to-black/70
      "
    >
      {/* <div className="mb-4 text-xl">{icon}</div> */}

      <h3 className="mb-2 text-lg text-[#4cffb3] font-panchang">{title}</h3>

      <p className="text-sm text-white/70 leading-relaxed">{text}</p>
    </div>
  );
}
