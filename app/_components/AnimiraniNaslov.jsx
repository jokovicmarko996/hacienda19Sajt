// // "use client";
// // import React, { useEffect, useRef } from "react";
// // import { gsap } from "gsap";
// // import { SplitText } from "gsap/SplitText";

// // gsap.registerPlugin(SplitText);

// // const AnimiraniNaslov = ({ text }) => {
// //   const textRef = useRef(null);
// //   const animationRef = useRef(null); // Reference to store the GSAP animation

// //   useEffect(() => {
// //     // Split the text into individual letters
// //     const split = new SplitText(textRef.current, { type: "chars" });

// //     // Animate each letter starting from the first and moving left
// //     animationRef.current = gsap.fromTo(
// //       split.chars,
// //       {
// //         opacity: 0,
// //         x: 50, // Start 50px to the right
// //       },
// //       {
// //         opacity: 1,
// //         x: 0, // Move to the original position
// //         duration: 1,
// //         ease: "power2.out",
// //         stagger: 0.1, // Delay between each letter
// //       }
// //     );

// //     // Cleanup SplitText and GSAP animation to avoid memory leaks
// //     return () => {
// //       if (animationRef.current) {
// //         animationRef.current.kill(); // Kill the GSAP animation
// //       }
// //       split.revert(); // Revert the SplitText changes
// //     };
// //   }, []);

// //   return (
// //     <h1
// //       ref={textRef}
// //       className="text-center text-7xl lg:text-[154px] font-caveat text-white"
// //     >
// //       {text}
// //     </h1>
// //   );
// // };

// // export default AnimiraniNaslov;

// "use client";
// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { SplitText } from "gsap/SplitText";

// gsap.registerPlugin(SplitText);

// const AnimiraniNaslov = ({ text }) => {
//   const textRef = useRef(null);
//   const animationRef = useRef(null); // Reference to store the GSAP animation

//   useEffect(() => {
//     // Split the text into individual letters
//     const split = new SplitText(textRef.current, { type: "chars" });

//     // Animate each letter with a "hold" effect
//     animationRef.current = gsap.fromTo(
//       split.chars,
//       {
//         opacity: 0,
//         x: 50, // Start 50px to the right
//       },
//       {
//         opacity: 1,
//         x: 0, // Move to the original position
//         duration: 0.8, // Duration for each letter animation
//         ease: "power2.out",
//         stagger: {
//           amount: 1.5, // Total time for the staggered animation
//           from: "start", // Start staggering from the first letter
//         },
//       }
//     );

//     // Cleanup SplitText and GSAP animation to avoid memory leaks
//     return () => {
//       if (animationRef.current) {
//         animationRef.current.kill(); // Kill the GSAP animation
//       }
//       split.revert(); // Revert the SplitText changes
//     };
//   }, []);

//   return (
//     <h1
//       ref={textRef}
//       className="text-center text-7xl lg:text-[154px] font-caveat text-white"
//     >
//       {text}
//     </h1>
//   );
// };

// export default AnimiraniNaslov;
