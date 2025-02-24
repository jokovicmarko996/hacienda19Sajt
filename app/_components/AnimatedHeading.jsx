// "use client";

// import { gsap } from "gsap";
// import { useEffect, useRef } from "react";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import clsx from "clsx";

// gsap.registerPlugin(ScrollTrigger);

// const AnimatedHeading = ({ title, containerClass }) => {
//   const containerRef = useRef(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const titleAnimation = gsap.timeline({
//         scrollTrigger: {
//           trigger: containerRef.current,
//           start: "100 bottom",
//           end: "center bottom",
//           toggleActions: "play none none reverse",
//         },
//       });

//       titleAnimation.to(
//         ".animated-word",
//         {
//           opacity: 1,
//           transform: "translate3d(0, 0, 0) rotateY(0deg) rotateX(0deg)",
//           ease: "power2.inOut",
//           stagger: 0.02,
//         },
//         0
//       );
//     }, containerRef);

//     return () => ctx.revert(); // Clean up on unmount
//   }, []);

//   return (
//     <div ref={containerRef} className={clsx("animated-title", containerClass)}>
//       {title.split("<br />").map((line, index) => (
//         <div
//           key={index}
//           className="flex-center max-w-full flex-wrap gap-2 px-10 md:gap-3"
//         >
//           {line.split(" ").map((word, idx) => (
//             <span
//               key={idx}
//               className="animated-word"
//               dangerouslySetInnerHTML={{ __html: word }}
//             />
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default AnimatedHeading;

"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const AnimatedHeading = ({ title }) => {
  const headingRef = useRef(null);

  useEffect(() => {
    const words = gsap.utils.toArray(".word"); // Select all words

    gsap.fromTo(
      words,
      { x: 100, opacity: 0 }, // Start position (off-screen right)
      {
        x: 0, // Move to normal position
        opacity: 1,
        duration: 1,
        stagger: 0.2, // Delays between each word
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <h1
      ref={headingRef}
      className="text-4xl md:text-6xl font-bold text-white flex flex-col gap-2 overflow-hidden font-amagro "
    >
      {title.split(" ").map((word, index) => (
        <span key={index} className="word block">
          {word}
        </span>
      ))}
    </h1>
  );
};

export default AnimatedHeading;

// "use client";

// import { useEffect, useRef } from "react";
// import gsap from "gsap";

// const AnimatedHeading = ({ title }) => {
//   const headingRef = useRef(null);

//   useEffect(() => {
//     const words = gsap.utils.toArray(".word");

//     gsap.fromTo(
//       words,
//       { x: 100, opacity: 0, y: 0 }, // Start position (off-screen right or left)
//       {
//         x: 0,
//         y: 0,
//         opacity: 1,
//         duration: 1,
//         stagger: 0.2,
//         ease: "power3.out",
//         // Media query effect for small screens
//         scrollTrigger: {
//           trigger: headingRef.current,
//           start: "top 80%",
//           end: "top 20%",
//         },
//       }
//     );

//     // Diagonal animation on smaller screens (Mobile and below)
//     const isSmallScreen = window.innerWidth <= 768;
//     if (isSmallScreen) {
//       gsap.fromTo(
//         words,
//         { x: -100, y: -100, opacity: 0 }, // Start from top-left off-screen
//         {
//           x: 100,
//           y: 100, // Move to bottom-right
//           opacity: 1,
//           duration: 1.5,
//           stagger: 0.3,
//           ease: "power3.out",
//         }
//       );
//     }
//   }, []);

//   return (
//     <h1
//       ref={headingRef}
//       className="text-4xl md:text-6xl font-bold text-white flex flex-col gap-2 overflow-hidden"
//     >
//       {title.split(" ").map((word, index) => (
//         <span key={index} className="word block">
//           {word}
//         </span>
//       ))}
//     </h1>
//   );
// };

// export default AnimatedHeading;
