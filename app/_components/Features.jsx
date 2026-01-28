"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";

import Image from "next/image";
import Link from "next/link";

import pergola2 from "../../public/products/pergola6.png";
import pergola3 from "../../public/products/pergola7.png";
import pergola1 from "../../public/products/pergola9.png";
import pergola5 from "../../public/products/pergola10.png";
import pergola4 from "../../public/products/pergola2.png";

const GREEN = "#4cffb3";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeInOut",
      staggerChildren: 0.3,
    },
  },
};

const textVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const iconVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
  move: {
    x: 100,
    y: 100,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

export const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      ref={itemRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

// ✅ Animacija JE SAMO ovde (BentoCard)
export const BentoCard = ({ src, title, description }) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hoverOpacity, setHoverOpacity] = useState(0);
  const hoverButtonRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!hoverButtonRef.current) return;
    const rect = hoverButtonRef.current.getBoundingClientRect();

    setCursorPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => setHoverOpacity(1);
  const handleMouseLeave = () => setHoverOpacity(0);

  const bentoCardVariants = {
    hidden: { opacity: 0, y: 18, scale: 0.985, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: { duration: 0.65, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className="relative size-full"
      variants={bentoCardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
    >
      <Link href="/products" className="group block size-full">
        <Image
          src={src}
          alt={typeof title === "string" ? title : "Product"}
          fill
          className="absolute left-0 top-0 size-full object-cover object-center"
        />

        {/* consistent readability layer (matches other sections vibe) */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-black/10 to-black/70" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-transparent" />

        {/* subtle green accents */}
        <div className="pointer-events-none absolute -top-20 -left-20 h-56 w-56 rounded-full bg-[#4cffb3]/12 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-[#4cffb3]/10 blur-3xl" />

        {/* subtle "sheen" sweep on hover */}
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute -inset-8 opacity-0"
          style={{
            background:
              "linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.1) 45%, transparent 60%)",
          }}
          whileHover={{ opacity: 1, x: 40 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />

        <div className="relative z-10 flex size-full flex-col justify-between p-5 text-white">
          {/* title pill */}
          <h1
            className="
              absolute top-2 left-2
              rounded-xl border border-white/15 bg-black/55
              px-3 py-1
              text-lg font-panchang font-semibold text-[#4cffb3]
              shadow-[0_0_26px_-18px_rgba(76,255,179,0.55)]
              backdrop-blur
            "
          >
            {title}
          </h1>

          {/* (optional) description - currently unused, leaving as-is */}
          {/* <p className="mt-auto text-sm text-white/70">{description}</p> */}

          {/* CTA (improved) */}
          <div
            ref={hoverButtonRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="
              absolute bottom-2 right-2 sm:bottom-5 sm:right-5
              flex w-fit cursor-pointer items-center gap-2 overflow-hidden rounded-full
              border border-white/15 bg-black/45
              px-3.5 py-1.5 sm:px-5 sm:py-2.5
              text-sm uppercase text-white
              backdrop-blur
              transition
              hover:border-[#4cffb3]/60 hover:bg-black/55 hover:shadow-[0_0_26px_-12px_rgba(76,255,179,0.75)]
              active:scale-[0.98]
              focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4cffb3]/80 focus-visible:ring-offset-2 focus-visible:ring-offset-black
            "
          >
            <div
              className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
              style={{
                opacity: hoverOpacity,
                background: `radial-gradient(120px circle at ${cursorPosition.x}px ${cursorPosition.y}px, rgba(76,255,179,0.38), rgba(0,0,0,0))`,
              }}
            />

            <TiLocationArrow className="relative z-20 text-[#4cffb3] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            <p className="relative z-20 font-panchang tracking-wide text-white/95">
              Pogledaj
            </p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

const Features = () => (
  <section className="relative w-full overflow-hidden bg-black pb-10">
    {/* background glows like other sections */}
    <div className="pointer-events-none absolute -top-40 -left-40 h-[28rem] w-[28rem] rounded-full bg-[#4cffb3]/10 blur-3xl" />
    <div className="pointer-events-none absolute -bottom-56 -right-56 h-[34rem] w-[34rem] rounded-full bg-[#4cffb3]/10 blur-3xl" />

    <div className="container relative mx-auto overflow-hidden px-3 md:px-10">
      <div className="px-5 py-6">{/* ...existing code... */}</div>

      <BentoTilt className="relative mb-7 h-96 w-full overflow-hidden rounded-3xl border border-white/10 md:h-[65vh]">
        <BentoCard
          src="/products/pergola9.png"
          title={<>Pergola 1</>}
          description="A cross-platform metagame app, turning your activities across Web2 and Web3 games into a rewarding adventure."
        />
      </BentoTilt>

      <div className="grid h-[135vh] w-full grid-cols-2 grid-rows-3 gap-7">
        <BentoTilt className="bento-tilt_1 row-span-1 rounded-3xl border border-white/10 md:col-span-1 md:row-span-2">
          <BentoCard
            src="/products/pergola6.png"
            title={<>Pergola 2</>}
            description="An anime and gaming-inspired NFT collection - the IP primed for expansion."
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 row-span-1 ms-32 rounded-3xl border border-white/10 md:col-span-1 md:ms-0">
          <BentoCard
            src="/products/pergola7.png"
            title={<>Pergola 3</>}
            description="A gamified social hub, adding a new dimension of play to social interaction for Web3 communities."
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 me-14 rounded-3xl border border-white/10 md:col-span-1 md:me-0">
          <BentoCard
            src="/products/pergola2.png"
            title={<>Pergola 4</>}
            description="A cross-world AI Agent - elevating your gameplay to be more fun and productive."
          />
        </BentoTilt>

        {/* "Pogledaj sve proizvode" card */}
        <BentoTilt className="bento-tilt_2 rounded-3xl border border-white/10">
          <Link
            href={"/products"}
            className="group relative flex size-full flex-col justify-between overflow-hidden rounded-3xl bg-black/60 p-4"
          >
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/6 via-transparent to-transparent" />
            <div className="pointer-events-none absolute -top-20 -left-20 h-72 w-72 rounded-full bg-[#4cffb3]/14 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-[#4cffb3]/10 blur-3xl" />

            {/* responsive font (improved for mobile + bigger on desktop) */}
            <motion.h1
              className="
                relative z-10 max-w-72 font-panchang
                text-[1.3rem] leading-[1.15]
                sm:text-[1.9rem]
                md:text-[2.25rem]
                lg:text-[2.7rem]
                xl:text-[3rem]
              "
              style={{ color: GREEN }}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Pogledaj sve proizvode
            </motion.h1>

            {/* arrow ONLY (no button) */}
            <div className="relative z-10 m-5 self-end">
              <TiLocationArrow
                className="
                  text-[#4cffb3]
                  transition-transform duration-300
                  group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:rotate-6
                  drop-shadow-[0_0_18px_rgba(76,255,179,0.35)]
                  scale-[2.8] sm:scale-[4] md:scale-[4.6]
                "
              />
            </div>
          </Link>
        </BentoTilt>

        <BentoTilt className="bento-tilt_2 rounded-3xl border border-white/10">
          <BentoCard
            src="/products/pergola10.png"
            title={<>Pergola 5</>}
            description="A cross-world AI Agent - elevating your gameplay to be more fun and productive."
          />
        </BentoTilt>
      </div>
    </div>
  </section>
);

export default Features;
