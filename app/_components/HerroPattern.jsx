"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroPattern({
  image,
  imageAlt = "Drvena pergola – Hacienda Premium Pergole",
  decorativeImage = true,
  heading = "",
  position = "right", // "left" | "right"
  className = "",
}) {
  const tokens = Array.isArray(heading)
    ? heading
    : String(heading)
        .trim()
        .split(/\s+/)
        .filter(Boolean)
        .map((w) => ({ text: w }));

  const isLeft = position === "left";

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
  };

  const word = {
    hidden: { opacity: 0, y: 18, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      className={`relative min-h-screen w-full overflow-hidden bg-black ${className}`}
    >
      <Image
        src={image}
        alt={decorativeImage ? "" : imageAlt}
        aria-hidden={decorativeImage ? true : undefined}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      <div className="pointer-events-none absolute inset-0 bg-black/20" />
      <div className="pointer-events-none absolute -top-40 -left-40 h-[28rem] w-[28rem] rounded-full bg-[#4cffb3]/12 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-56 -right-56 h-[34rem] w-[34rem] rounded-full bg-[#4cffb3]/10 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-transparent" />

      <div
        className={[
          "absolute bottom-40 z-10 md:bottom-12",
          isLeft
            ? "left-8 md:left-12 text-left"
            : "right-8 md:right-12 text-right",
        ].join(" ")}
      >
        <motion.h1
          className="font-panchang font-semibold text-4xl leading-tight sm:text-4xl md:text-5xl lg:text-7xl"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {tokens.map((t, i) => (
            <motion.span
              key={i}
              variants={word}
              className={`block drop-shadow-[0_2px_16px_rgba(0,0,0,0.55)] ${
                t.className ?? ""
              }`}
              style={t.style}
            >
              {t.text}
            </motion.span>
          ))}
        </motion.h1>
      </div>
    </section>
  );
}
