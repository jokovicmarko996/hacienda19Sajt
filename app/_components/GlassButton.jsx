"use client";

import { motion } from "framer-motion";
import { TiLocationArrow } from "react-icons/ti";

const GlassButton = ({ text, onClick, children }) => {
  return (
    <div className="relative group w-max overflow-hidden">
      {/* Animated Border */}
      <motion.div
        className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-white"
        initial={{ scale: 0 }}
        whileHover={{
          scale: 1,
          borderColor: "rgba(255, 255, 255, 0.8)",
        }}
        transition={{
          duration: 0.75,
          ease: "easeInOut",
        }}
      />
      {/* Button */}
      <button
        onClick={onClick}
        className="relative font-panchang px-3 py-2 text-white font-semibold  backdrop-blur-lg bg-white/10 hover:bg-white/20 border border-white/30 shadow-lg transition-all duration-300 uppercase rounded-lg"
      >
        {text}
      </button>
    </div>
  );
};

export default GlassButton;

//  <Link
//    href={"/products"}
//    ref={hoverButtonRef}
//    onMouseMove={handleMouseMove}
//    onMouseEnter={handleMouseEnter}
//    onMouseLeave={handleMouseLeave}
//    className="absolute bottom-2 left-2 sm:bottom-5 sm:left-5 border-hsla flex w-fit cursor-pointer items-center gap-1 overflow-hidden rounded-full bg-black px-3 py-1 sm:px-4 sm:py-2 text-xs uppercase"
//  >
//    <div
//      className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
//      style={{
//        opacity: hoverOpacity,
//        background: `radial-gradient(100px circle at ${cursorPosition.x}px ${cursorPosition.y}px, #2ef55287, #f2f1f125)`,
//      }}
//    />
//    <TiLocationArrow className="relative z-20 text-white" />
//    <p className="relative z-20 text-white">Pogledaj</p>
//  </Link>;
