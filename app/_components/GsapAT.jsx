"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const GsapAnimatedText = ({ text, className }) => {
  const textRef = useRef(null);

  useEffect(() => {
    const letters = textRef.current.querySelectorAll(".animated-letter");

    const timeline = gsap.timeline({
      defaults: { duration: 0.5, ease: "power3.out" },
    });

    timeline.fromTo(
      letters,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, stagger: 0.1 }
    );

    return () => {
      timeline.kill(); // Cleanup GSAP timeline to prevent memory leaks
    };
  }, []);

  return (
    <div ref={textRef} className={`inline-flex overflow-hidden ${className}`}>
      {text.split("").map((letter, index) => (
        <span key={index} className="animated-letter inline-block">
          {letter === " " ? "\u00A0" : letter} {/* Handle spaces */}
        </span>
      ))}
    </div>
  );
};

export default GsapAnimatedText;

// import AnimatedText from "./AnimatedText";

// export default function HeroSection() {
//   return (
//     <section className="h-screen flex items-center justify-center bg-gray-900">
//       <AnimatedText
//         text="Welcome to Hacienda"
//         className="text-5xl font-bold text-white"
//       />
//     </section>
//   );
// }
