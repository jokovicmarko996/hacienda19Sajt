"use client";

import React from "react";
import { motion } from "framer-motion";

const GREEN = "#4cffb3";

const ProductsContent = () => {
  const sectionVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
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

  const cardsWrap = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.08 } },
  };

  const card = {
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
    <section className="w-full bg-black px-6 py-24">
      <motion.div
        className="mx-auto w-full max-w-7xl 2xl:max-w-screen-2xl"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        <motion.div
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/60 px-6 py-16 sm:px-10"
          variants={fadeUp}
        >
          {/* Subtle background glow */}
          <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-[#4cffb3]/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-40 -right-40 h-[28rem] w-[28rem] rounded-full bg-[#4cffb3]/10 blur-3xl" />

          {/* Premium overlay */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-transparent" />

          {/* Heading */}
          <motion.h2
            className="relative z-10 mb-14 text-center font-panchang text-3xl sm:text-4xl lg:text-5xl"
            style={{ color: GREEN }}
            variants={fadeUp}
          >
            Zašto naše pergole
          </motion.h2>

          {/* Two Columns */}
          <motion.div
            className="relative z-10 grid grid-cols-1 gap-8 md:grid-cols-2"
            variants={cardsWrap}
          >
            {/* Column 1 */}
            <motion.div
              variants={card}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="rounded-2xl border border-[#4cffb3]/40 bg-white/5 p-6 sm:p-8 transition hover:border-[#4cffb3]/70"
            >
              <p className="font-montserrat text-base sm:text-lg lg:text-xl leading-relaxed text-white/80">
                Naše pergole su pažljivo dizajnirane kako bi spojile
                funkcionalnost i estetiku. Svaka pergola izrađena je od
                visokokvalitetnih materijala, pružajući dugotrajnost i otpornost
                na vremenske uslove. Bez obzira na veličinu ili stil vašeg
                prostora, naše pergole su prilagodljive vašim potrebama.
              </p>
            </motion.div>

            {/* Column 2 */}
            <motion.div
              variants={card}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="rounded-2xl border border-[#4cffb3]/40 bg-white/5 p-6 sm:p-8 transition hover:border-[#4cffb3]/70"
            >
              <p className="font-montserrat text-base sm:text-lg lg:text-xl leading-relaxed text-white/80">
                Nudimo širok spektar pergola, uključujući klasične, moderne i
                rustične dizajne. Naš cilj je da vaš eksterijer pretvorimo u
                prostor za uživanje i opuštanje, bilo da se radi o vašem
                dvorištu, terasi ili poslovnom prostoru. Sa našim pergolama,
                svaki trenutak na otvorenom postaje poseban.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ProductsContent;
