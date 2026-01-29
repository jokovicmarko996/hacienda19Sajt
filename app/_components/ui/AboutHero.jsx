"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import bgImage from "../../../public/hero/pergola2.avif";
import GlassButton from "../GlassButton";
import { TransparentButton } from "../GsapATB";

const GREEN = "#4cffb3";

const AboutHero = () => {
  const headingSectionRef = useRef(null);
  const heroImageRef = useRef(null);
  const glassButtonRef = useRef(null);

  const [showHero, setShowHero] = useState(false);

  // Longer intro duration + allows extra "hold" before switching to hero image
  const INTRO_HOLD_MS = 650; // increase/decrease to taste

  // Intro overlay
  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1.25, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.65, ease: "easeInOut" },
    },
  };

  // Headings (glass-y, blur-in) with slower stagger
  const headingVariants = {
    hidden: { opacity: 0, y: 26, filter: "blur(8px)" },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.95,
        delay: 0.35 + i * 0.28,
        ease: "easeOut",
      },
    }),
  };

  // Hero image fade-in
  const heroImageVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1.2, ease: "easeOut" },
    },
  };

  // Buttons entrance
  const glassButtonVariants = {
    hidden: { opacity: 0, y: 18, filter: "blur(6px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.45, ease: "easeOut", delay: 0.15 },
    },
  };

  // Delay switching to the hero section for a nicer/longer intro
  const handleIntroComplete = () => {
    window.setTimeout(() => setShowHero(true), INTRO_HOLD_MS);
  };

  return (
    <>
      {/* Intro Text Section */}
      {!showHero && (
        <motion.section
          ref={headingSectionRef}
          className="relative bg-black h-screen flex items-center justify-center overflow-hidden"
          initial="hidden"
          animate="visible"
          variants={overlayVariants}
          onAnimationComplete={handleIntroComplete}
        >
          {/* green glows */}
          <div className="pointer-events-none absolute -top-48 -left-48 h-[32rem] w-[32rem] rounded-full bg-[#4cffb3]/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-56 -right-56 h-[36rem] w-[36rem] rounded-full bg-[#4cffb3]/10 blur-3xl" />

          {/* subtle glass wash */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-transparent" />

          <div className="relative text-center px-4">
            <motion.h1
              className="font-panchang text-[2.6rem] leading-none sm:text-5xl md:text-6xl lg:text-7xl"
              style={{
                color: GREEN,
                textShadow: "0 0 28px rgba(76, 255, 179, 0.20)",
              }}
              custom={0}
              variants={headingVariants}
            >
              Hacienda
            </motion.h1>

            <motion.h2
              className="mt-1 font-corinthia text-[3.2rem] leading-none sm:text-6xl md:text-8xl lg:text-9xl text-white"
              custom={1}
              variants={headingVariants}
            >
              Pergole
            </motion.h2>

            <motion.h3
              className="mt-3 font-playfair text-base sm:text-xl md:text-3xl lg:text-4xl text-white/90"
              custom={2}
              variants={headingVariants}
            >
              Unikatnog Dizajna
            </motion.h3>

            {/* underline accent (later + slower) */}
            <motion.div
              className="mx-auto mt-6 h-px w-24 bg-[#4cffb3]/60"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 1.35 }}
              style={{ transformOrigin: "center" }}
            />
          </div>
        </motion.section>
      )}

      {/* Hero Image Section */}
      {showHero && (
        <motion.div
          ref={heroImageRef}
          className="flex flex-col min-h-screen opacity-0 relative"
          initial="hidden"
          animate="visible"
          variants={heroImageVariants}
        >
          <section className="relative flex-grow flex items-center justify-center h-screen">
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full">
              <Image
                src={bgImage}
                alt="Hero Image"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* readability/glass overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/60" />

            {/* Buttons */}
            <motion.div
              ref={glassButtonRef}
              className="absolute bottom-[15%] md:bottom-[20%] left-0 w-full flex flex-col md:flex-row justify-center items-center gap-4 px-4"
              initial="hidden"
              animate="visible"
              variants={glassButtonVariants}
            >
              <Link href="/contact">
                <GlassButton
                  text={"Kontakt"}
                  className="px-4 py-2 text-xs md:text-lg"
                />
              </Link>

              <TransparentButton
                text="Proizvodi"
                href="/products"
                className="px-4 py-2 text-sm md:text-lg font-bold"
              />
            </motion.div>
          </section>
        </motion.div>
      )}
    </>
  );
};

export default AboutHero;
