"use client";

import { motion } from "framer-motion";

const GREEN = "#4cffb3";

const GlassButton = ({ text, onClick, className = "" }) => {
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
        transition={{
          duration: 0.35,
          ease: "easeOut",
        }}
      />

      {/* Button */}
      <button
        onClick={onClick}
        className={`
          relative font-panchang
          px-3 py-2 uppercase
          rounded-lg
          border border-white/15 bg-black/40 backdrop-blur
          text-white
          shadow-[0_0_30px_-22px_rgba(76,255,179,0.35)]
          transition-all duration-300
          hover:bg-black/55 hover:shadow-[0_0_26px_-10px_rgba(76,255,179,0.55)]
          active:scale-[0.98]
          focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4cffb3]/80 focus-visible:ring-offset-2 focus-visible:ring-offset-black
          ${className}
        `}
      >
        <span className="text-[#4cffb3] font-semibold">{text}</span>
      </button>
    </div>
  );
};

export default GlassButton;
