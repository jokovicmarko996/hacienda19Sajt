"use client";
// components/HandwritingText.js
import { motion } from "framer-motion";

const HandwritingText = () => {
  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 400 100"
        className="w-full max-w-lg"
      >
        <motion.path
          d="M10 80 Q 95 10, 180 80 T 350 80"
          fill="transparent"
          stroke="#1a202c"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          variants={pathVariants}
          initial="hidden"
          animate="visible"
        />
      </svg>
    </div>
  );
};

export default HandwritingText;
