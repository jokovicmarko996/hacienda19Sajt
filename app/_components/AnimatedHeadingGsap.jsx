"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP); // register the hook to avoid React version discrepancies

const AnimatedHeadingGsap = () => {
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(".loading_letter", {
      yPercent: 100, // Start below the viewport
      duration: 2,
      stagger: {
        each: 0.1, // Delay between each letter
        from: "center", // Start animation from the center letters
      },
      ease: "expo.out", // Smooth easing
    }).to(
      ".loading_letter",
      {
        yPercent: -100, // Move above the viewport
        duration: 1,
        stagger: {
          each: 0.1,
          from: "center",
        },
        ease: "expo.inOut",
      },
      "+=2" // Wait 2 seconds before starting the second animation
    );
  }, []);

  return (
    <div className="flex justify-center items-center space-x-1">
      {["H", "a", "c", "i", "e", "n", "d", "a"].map((letter, index) => (
        <span
          key={index}
          className="loading_letter font-panchang text-4xl sm:text-6xl text-white"
        >
          {letter}
        </span>
      ))}
    </div>
  );
};

export default AnimatedHeadingGsap;
