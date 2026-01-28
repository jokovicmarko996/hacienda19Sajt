"use client";

import { motion } from "framer-motion";

const GREEN = "#4cffb3";

export default function ValuesSection() {
  const sectionVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.12, delayChildren: 0.05 },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 18, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const cardsWrapVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1, delayChildren: 0.08 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 16, scale: 0.985, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="relative w-full bg-black px-6 py-24 md:px-12">
      <motion.div
        className="mx-auto max-w-6xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={sectionVariants}
      >
        {/* Title */}
        <motion.h2
          className="mb-14 text-center font-panchang text-3xl md:text-4xl lg:text-5xl"
          style={{ color: GREEN }}
          variants={fadeUp}
        >
          Vrednosti koje <br className="hidden sm:block" />
          negujemo u Haciendi
        </motion.h2>

        {/* Cards */}
        <motion.div
          className="grid gap-6 sm:grid-cols-2"
          variants={cardsWrapVariants}
        >
          <ValueCard
            variants={cardVariants}
            title="Kvalitetni materijali"
            text="Radimo isključivo sa proverenim i dugotrajnim materijalima koji garantuju otpornost na vremenske uslove i dug vek trajanja."
          />

          <ValueCard
            variants={cardVariants}
            title="Posvećenost klijentima"
            text="Od prve ideje do završne montaže, stojimo vam na raspolaganju sa savetima i podrškom, jer verujemo da je zadovoljstvo klijenta naša najbolja preporuka."
          />

          <ValueCard
            variants={cardVariants}
            title="Pouzdana realizacija"
            text="Poštujemo dogovorene rokove i obezbeđujemo profesionalnu montažu, bez komplikacija i skrivenih troškova."
          />

          <ValueCard
            variants={cardVariants}
            title="Funkcionalan i moderan dizajn"
            text="Naše pergole kombinuju savremenu estetiku sa praktičnim rešenjima, stvarajući prostor koji je podjednako lep i funkcionalan."
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

function ValueCard({ title, text, variants }) {
  return (
    <motion.div
      variants={variants}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="
        relative rounded-2xl border border-white/15
        bg-gradient-to-b from-[#4cffb3]/20 via-black/40 to-black/70
        px-6 py-8 transition
        hover:border-[#4cffb3]/60
        hover:from-[#4cffb3]/30 hover:via-black/35 hover:to-black/70
      "
    >
      {/* subtle inner highlight like other sections */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b from-white/6 via-transparent to-transparent" />

      <h3
        className="relative mb-2 text-lg font-panchang"
        style={{ color: GREEN }}
      >
        {title}
      </h3>

      <p className="relative text-sm text-white/70 leading-relaxed">{text}</p>
    </motion.div>
  );
}
