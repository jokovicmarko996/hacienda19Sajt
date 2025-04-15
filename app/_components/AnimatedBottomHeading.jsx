// import React from "react";
// import { motion } from "framer-motion";

// const headingVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: (i) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       delay: i * 0.5,
//       duration: 1,
//       ease: "easeInOut",
//     },
//   }),
// };

// const AnimatedBottomHeading = () => {
//   const headings = ["Preciznost", "u svakom", "detalju."];

//   return (
//     <div className="absolute bottom-0 left-0 right-0 flex flex-col justify-between items-center bg-transparent p-6">
//       {headings.map((text, index) => (
//         <motion.h2
//           key={index}
//           className={`text-white font-bold font-caveat ${
//             index % 2 === 0 ? "self-end" : "self-center md:self-end"
//           } text-6xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[109px]`}
//           custom={index}
//           initial="hidden"
//           animate="visible"
//           variants={headingVariants}
//         >
//           {text}
//         </motion.h2>
//       ))}
//     </div>
//   );
// };

// export default AnimatedBottomHeading;

import React from "react";
import { motion } from "framer-motion";

const headingVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.5,
      duration: 1,
      ease: "easeInOut",
    },
  }),
};

const AnimatedBottomHeading = () => {
  const headings = ["Preciznost", "u svakom", "detalju."];

  return (
    <div className="absolute bottom-0 left-0 right-0 flex flex-col justify-between items-center bg-transparent p-6">
      {headings.map((text, index) => (
        // <motion.h2
        //   key={index}
        //   className={`text-white font-extrabold font-caveat ${
        //     index % 2 === 0 ? "self-end" : "self-center md:self-end"
        //   } text-6xl lg:text-7xl xl:text-8xl ${
        //     index % 2 === 0 ? "lg:mr-20 xl:mr-40" : "lg:mr-20 xl:mr-50"
        //   }`}
        <motion.h2
          key={index}
          className={`text-white font-bold font-caveat ${
          // className={`text-white  font-panchang text-lg ${
            index % 2 === 0 ? "self-end" : "self-center sm:self-end"
          } text-6xl lg:text-7xl xl:text-8xl ${
            index % 2 === 0
              ? "sm:mr-10 md:mr-15 lg:mr-20 xl:mr-40"
              : "sm:mr-25 md:mr-15 lg:mr-20 xl:mr-50"
          }`}
          custom={index}
          initial="hidden"
          animate="visible"
          variants={headingVariants}
        >
          {text}
        </motion.h2>
      ))}
    </div>
  );
};

export default AnimatedBottomHeading;
