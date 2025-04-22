"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import Image from "next/image";
import bgImage from "../../../public/hero/pergola11.png";
import { useGSAP } from "@gsap/react";
import GlassButton from "../GlassButton"; // Adjust the import path as needed
import Link from "next/link";

gsap.registerPlugin(TextPlugin);

const AboutHero = () => {
  const headingRefs = useRef([]);
  const heroImageRef = useRef(null);
  const glassButtonRef = useRef(null);
  const headingSectionRef = useRef(null);

  useGSAP(() => {
    // Create a GSAP timeline
    const timeline = gsap.timeline();

    // Animate each heading
    headingRefs.current.forEach((ref, index) => {
      if (index === 2) {
        // Scramble text animation for the third heading with reduced delay
        timeline.fromTo(
          ref,
          { text: { value: "", scrambleText: true } }, // Start with empty text
          {
            text: { value: "Unikatnog Dizajna", scrambleText: true }, // Target text
            duration: 1.5, // Animation duration
            delay: 0.2, // Reduced delay for the third heading
            ease: "power2.out",
          }
        );
      } else {
        // Standard fade-in animation for other headings
        timeline.fromTo(
          ref,
          { opacity: 0, y: 50 }, // Start hidden and below
          {
            opacity: 1,
            y: 0, // Move to visible and centered
            duration: 1,
            delay: index * 0.5, // Stagger animations
            ease: "power2.out",
          },
          "<" // Start this animation at the same time as the previous one
        );
      }
    });

    // Hide the heading section
    timeline.to(
      headingSectionRef.current,
      {
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        onComplete: () => {
          headingSectionRef.current.style.display = "none"; // Hide the heading section
        },
      },
      "+=0.3" // Add a delay of 0.3 seconds after the last heading animation
    );

    // Reveal the Hero Image section
    timeline.to(heroImageRef.current, {
      opacity: 1,
      duration: 1.5,
      ease: "power2.out",
    });

    // // Animate Glass Buttons
    // timeline.fromTo(
    //   ".glass-button", // Target buttons with this class
    //   { opacity: 0, y: 20 }, // Start hidden and slightly below
    //   {
    //     opacity: 1,
    //     y: 0, // Move to visible and centered
    //     duration: 0.8,
    //     ease: "power2.out",
    //   },
    //   "+=0.3" // Add a delay of 0.3 seconds after the hero image is revealed
    // );
    // Animate Glass Buttons
    timeline.fromTo(
      glassButtonRef.current, // Target the buttons container
      { opacity: 0, y: 20 }, // Start hidden and slightly below
      {
        opacity: 1,
        y: 0, // Move to visible and centered
        duration: 0.4,
        ease: "power2.out",
      },
      "+=0.1" // Add a delay of 0.3 seconds after the hero image is revealed
    );
  }, []);

  return (
    <>
      {/* Text Section */}
      <section
        ref={headingSectionRef}
        className="bg-black h-screen flex items-center justify-center"
      >
        <div className="text-center">
          {/* First Heading */}
          <h1
            ref={(el) => (headingRefs.current[0] = el)}
            className="text-4xl md:text-6xl lg:text-8xl font-panchang text-green-400"
          >
            Hacienda
          </h1>

          {/* Second Heading */}
          <h2
            ref={(el) => (headingRefs.current[1] = el)}
            className="text-5xl md:text-9xl font-corinthia text-white "
          >
            Pergole
          </h2>

          {/* Third Heading */}
          <h3
            ref={(el) => (headingRefs.current[2] = el)}
            className="text-2xl md:text-4xl lg:text-6xl font-playfair text-white "
          >
            Unikatnog Dizajna
          </h3>
        </div>
      </section>

      {/* Hero Image Section */}
      <div
        ref={heroImageRef}
        className="flex flex-col min-h-screen opacity-0 relative" // Added relative for positioning
      >
        <section className="relative flex-grow flex items-center justify-center h-screen">
          {/* Background Image */}
          <div className="absolute inset-0 w-full h-full">
            <Image
              src={bgImage} // Replace with your image path
              alt="Hero Image"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>

          {/* Buttons */}
          <div
            ref={glassButtonRef}
            className="absolute bottom-[15%] md:bottom-[20%] left-[20%] md:left-0 w-full flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4"
          >
            <Link href={`/contact`}>
              <GlassButton
                text={"Kontakt"}
                className="px-4 py-2 text-xs md:text-lg "
              />
            </Link>

            <Link href={`/products`}>
              <GlassButton
                text={"Proizvodi"}
                className="px-4 py-2 text-xs md:text-lg "
              />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutHero;
