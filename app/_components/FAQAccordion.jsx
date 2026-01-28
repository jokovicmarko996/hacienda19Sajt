"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiPlus, FiMinus } from "react-icons/fi";

const FAQAccordion = () => {
  const faqs = [
    {
      question: "Da li izrađujete proizvode po meri?",
      answer:
        "Da, svi naši proizvodi se izrađuju prema vašim željama i potrebama. Svaki projekat je unikatan i prilagođen prostoru i stilu koji želite da postignete.",
    },
    {
      question: "Koliko traje izrada nakon što poručim?",
      answer:
        "Vreme izrade zavisi od kompleksnosti projekta, ali u proseku traje od 2 do 4 nedelje. Tačnu procenu dobijate nakon konsultacija i definisanja svih detalja.",
    },
    {
      question: "Da li radite montažu?",
      answer:
        "Da, pored izrade nudimo i kompletnu montažu na lokaciji. Naš tim se brine da sve bude postavljeno precizno i sigurno.",
    },
    {
      question: "Koje materijale koristite?",
      answer:
        "Koristimo kvalitetno lamelirano drvo BSH i uzdužno nastavljano KVH, kao i suvo drvo iz vakuum sušare – smrču i beli bor. Svi materijali su pažljivo obrađeni i pripremljeni za dugotrajnu upotrebu na otvorenom.",
    },
    {
      question: "Da li radite i van mog grada?",
      answer:
        "Da, radimo isporuku i montažu širom Srbije, a moguće su i realizacije u regionu, u zavisnosti od projekta.",
    },
    {
      question: "Da li mogu da dobijem ponudu bez obaveze?",
      answer:
        "Naravno, slobodno nam pošaljite ideju, dimenzije ili fotografiju inspiracije, i mi ćemo vam poslati okvirnu ponudu.",
    },
    {
      question: "Kako se vrši plaćanje?",
      answer:
        "Plaćanje se vrši u dve faze – avans prilikom potvrde narudžbine, a ostatak po završetku radova ili montaže.",
    },
    {
      question: "Kako da održavam drvene površine?",
      answer:
        "Preporučujemo redovno čišćenje i povremeno premazivanje zaštitnim premazima, u zavisnosti od vremenskih uslova i izloženosti suncu i kiši. Dajemo i uputstvo za održavanje uz svaki proizvod.",
    },
  ];

  // (opciono) samo jedan otvoren u isto vreme:
  const [openIndex, setOpenIndex] = useState(null);

  const section = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.12, delayChildren: 0.06 },
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

  const list = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
  };

  const itemIn = {
    hidden: { opacity: 0, y: 14, scale: 0.99, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: { duration: 0.55, ease: "easeOut" },
    },
  };

  return (
    <section className="w-full bg-black px-4 sm:px-6 lg:px-10 py-14 sm:py-20">
      <motion.div
        className="mx-auto w-full max-w-6xl"
        variants={section}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        {/* Frame container */}
        <motion.div
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/60 px-5 py-12 sm:px-8 sm:py-14"
          variants={fadeUp}
        >
          {/* green glow */}
          <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-[#4cffb3]/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-40 -right-40 h-[28rem] w-[28rem] rounded-full bg-[#4cffb3]/10 blur-3xl" />

          <motion.h2
            className="relative z-10 text-center font-panchang text-3xl sm:text-4xl lg:text-5xl text-[#4cffb3]"
            variants={fadeUp}
          >
            Često postavljana pitanja
          </motion.h2>

          <motion.div
            className="relative z-10 mt-10 space-y-4 sm:space-y-5"
            variants={list}
          >
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onToggle={() =>
                  setOpenIndex((prev) => (prev === index ? null : index))
                }
                variants={itemIn}
              />
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

const AccordionItem = ({ question, answer, isOpen, onToggle, variants }) => {
  return (
    <motion.div
      layout
      variants={variants}
      className="
        rounded-2xl border border-[#4cffb3]/25
        bg-gradient-to-b from-[#4cffb3]/10 via-black/45 to-black/70
        shadow-[0_0_30px_-18px_rgba(76,255,179,0.6)]
        transition
        hover:border-[#4cffb3]/55
      "
      whileHover={{ y: -2, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
    >
      {/* Header */}
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-5 py-5 sm:px-6 sm:py-6 text-left"
        aria-expanded={isOpen}
      >
        <h3 className="font-panchang text-base sm:text-lg text-white">
          {question}
        </h3>

        <span
          className="
            shrink-0 grid h-10 w-10 place-items-center rounded-full
            border border-white/15 bg-black/40 text-[#4cffb3]
          "
          aria-hidden="true"
        >
          <AnimatePresence mode="wait" initial={false}>
            {isOpen ? (
              <motion.span
                key="minus"
                initial={{ rotate: -90, opacity: 0, scale: 0.8 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 90, opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.18, ease: "easeOut" }}
              >
                <FiMinus className="text-xl" />
              </motion.span>
            ) : (
              <motion.span
                key="plus"
                initial={{ rotate: 90, opacity: 0, scale: 0.8 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: -90, opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.18, ease: "easeOut" }}
              >
                <FiPlus className="text-xl" />
              </motion.span>
            )}
          </AnimatePresence>
        </span>
      </button>

      {/* Content */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 sm:px-6 sm:pb-6">
              <p className="font-montserrat text-sm sm:text-base text-white/70 leading-relaxed">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default FAQAccordion;
