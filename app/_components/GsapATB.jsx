"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import GlassButton from "./GlassButton";
import Link from "next/link";
import PropTypes from "prop-types";
import { useRouter } from "next/navigation";

const GREEN = "#4cffb3";

export const TransparentButton = ({ text, href, className = "" }) => {
  const router = useRouter();

  const handleClick = () => {
    if (href) router.push(href);
  };

  return (
    <div className="group relative w-max overflow-hidden rounded-lg">
      {/* subtle green glow */}
      <div className="pointer-events-none absolute -inset-10 opacity-0 blur-3xl transition duration-300 group-hover:opacity-100 bg-[#4cffb3]/10" />

      {/* Animated Border */}
      <motion.div
        className="absolute inset-0 rounded-lg border border-white/15"
        initial={false}
        whileHover={{
          borderColor: "rgba(76, 255, 179, 0.7)",
        }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      />

      <button
        type="button"
        onClick={handleClick}
        className={`
          relative font-panchang
          px-4 py-2 uppercase
          rounded-lg
          border border-white/15 bg-black/25 backdrop-blur
          text-white
          shadow-[0_0_30px_-22px_rgba(76,255,179,0.30)]
          transition-all duration-300
          hover:bg-black/45 hover:shadow-[0_0_26px_-10px_rgba(76,255,179,0.55)]
          active:scale-[0.98]
          focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4cffb3]/80 focus-visible:ring-offset-2 focus-visible:ring-offset-black
          ${className}
        `}
      >
        <span className="text-white/95">{text}</span>
        <span className="sr-only">Go to {text}</span>
      </button>
    </div>
  );
};

TransparentButton.propTypes = {
  text: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  className: PropTypes.string,
};

TransparentButton.defaultProps = {
  className: "",
};

const GsapAnimatedTextButton = ({ className }) => {
  const container = useRef();
  const buttonRef = useRef(); // Reference for the button

  // Variants for the heading animation
  const headingVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.1,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  };

  // Variants for the button animation
  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.3 + "Hacienda".length * 0.1,
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="absolute bottom-[20%] md:bottom-[10%] flex flex-col items-center justify-center p-0 m-0">
      {/* Animated Heading */}
      <div
        ref={container}
        className={`inline-flex font-panchang font-normal m-0 p-0 overflow-hidden ${className}`}
      >
        <h1 className="heading text-center text-[3rem] md:text-[6rem] text-white">
          {"Hacienda".split("").map((letter, index) => (
            <motion.span
              key={index}
              className="loading_letter"
              custom={index}
              initial="hidden"
              animate="visible"
              variants={headingVariants}
            >
              {letter}
            </motion.span>
          ))}
        </h1>
      </div>

      {/* Animated Buttons */}
      <motion.div
        ref={buttonRef}
        className="flex items-center justify-center space-x-4 mt-4"
        initial="hidden"
        animate="visible"
        variants={buttonVariants}
      >
        <Link href={`/contact`}>
          <GlassButton
            text={"Kontakt"}
            className="px-4 py-2 text-sm md:text-lg font-bold"
          />
        </Link>

        <TransparentButton
          text="Proizvodi"
          href="/products"
          className="px-4 py-2 text-sm md:text-lg font-bold"
        />
      </motion.div>
    </div>
  );
};

export default GsapAnimatedTextButton;