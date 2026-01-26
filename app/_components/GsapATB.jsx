"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import GlassButton from "./GlassButton";
import Link from "next/link";
import PropTypes from "prop-types";
import { useRouter } from "next/navigation";

const TransparentButton = ({ text, href, className }) => {
  const router = useRouter();

  const handleClick = () => {
    if (href) {
      router.push(href); // Navigacija na zadati URL
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`px-4 py-2 bg-white text-black font-panchang font-semibold uppercase rounded-lg border border-black hover:bg-white/10 hover:text-white hover:border-white transition-all duration-300 ${className}`}
    >
      {text}
    </button>
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
        delay: 0.3 + "Hacienda".length * 0.1, // Dugmad se prikazuju 0.2s nakon završetka animacije teksta
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
          className="px-4 py-2 text-sm md:text-lg font-bold font-panchang"
        />
      </motion.div>
    </div>
  );
};

export default GsapAnimatedTextButton;
