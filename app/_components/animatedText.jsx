// components/AnimatedText.js
"use client";
import { motion } from "framer-motion";

const AnimatedText = ({ text, className }) => {
  // Variants for each letter
  const letterAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className={`inline-flex overflow-hidden ${className}`}
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.1, // Delay between each letter
          },
        },
      }}
    >
      {text.split("").map((letter, index) => (
        <motion.span
          key={index}
          variants={letterAnimation}
          className="inline-block"
        >
          {letter === " " ? "\u00A0" : letter} {/* Handle spaces */}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedText;
