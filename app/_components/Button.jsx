// "use client";

// import { motion } from "framer-motion";

// const GlassButton = ({ text, onClick }) => {
//   return (
//     <div className="relative group">
//       {/* Animated Border */}
//       <motion.div
//         className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-white"
//         initial={{ scaleX: 0, scaleY: 1 }}
//         whileHover={{ scaleX: 1, scaleY: 1 }}
//         transition={{
//           duration: 0.4,
//           ease: "easeInOut",
//         }}
//       />

//       {/* Button Content */}
//       <button
//         onClick={onClick}
//         className="relative px-6 py-3 text-white font-semibold bg-transparent backdrop-blur-lg bg-white/10 hover:bg-white/20 border border-white/30 rounded-lg shadow-lg transition-all duration-300"
//       >
//         {text}
//       </button>
//     </div>
//   );
// };

// export default GlassButton;

"use client";

import { motion } from "framer-motion";

const GlassButton = ({ text, onClick }) => {
  
  return (
    <div className="relative group w-max">
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
        className="relative px-6 py-3 text-white font-semibold bg-transparent backdrop-blur-lg bg-white/10 hover:bg-white/20 border border-white/30 rounded-lg shadow-lg transition-all duration-300"
      >
        {text}
      </button>
    </div>
  );
};

export default GlassButton;
