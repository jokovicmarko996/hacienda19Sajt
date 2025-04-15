"use client";
import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

const AboutHero = () => {
  const headingRefs = useRef([]);

  useGSAP(() => {
    // Animate each heading with GSAP
    headingRefs.current.forEach((ref, index) => {
      if (index === 2) {
        // Scramble text animation for the third heading
        gsap.fromTo(
          ref,
          { text: { value: "", scrambleText: true } }, // Start with empty text
          {
            text: { value: "Unikatnog Dizajna", scrambleText: true }, // Target text
            duration: 2, // Animation duration
            delay: index * 0.5, // Stagger animations
            ease: "power2.out",
          }
        );
      } else {
        // Standard fade-in animation for other headings
        gsap.fromTo(
          ref,
          { opacity: 0, y: 50 }, // Start hidden and below
          {
            opacity: 1,
            y: 0, // Move to visible and centered
            duration: 1,
            delay: index * 0.5, // Stagger animations
            ease: "power2.out",
          }
        );
      }
    });
  }, []);

  return (
    <section className="bg-black py-16">
      <div className="container mx-auto px-6 text-center">
        {/* First Heading */}
        <h1
          ref={(el) => (headingRefs.current[0] = el)}
          className="text-4xl md:text-6xl lg:text-8xl font-panchang text-green-400 "
        >
          Hacienda
        </h1>

        {/* Second Heading */}
        <h2
          ref={(el) => (headingRefs.current[1] = el)}
          className="text-5xl md:text-9xl font-corinthia text-white md:-mt-4"
        >
          Pergole
        </h2>

        {/* Third Heading */}
        <h3
          ref={(el) => (headingRefs.current[2] = el)}
          className="text-2xl md:text-4xl lg:text-6xl font-playfair text-white -mt-4"
        >
          Unikatnog Dizajna
        </h3>
      </div>
    </section>
  );
};

export default AboutHero;
