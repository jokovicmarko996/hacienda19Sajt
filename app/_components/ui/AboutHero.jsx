"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import bgImage from "../../../public/hero/pergola11.png";
import GlassButton from "../GlassButton"; // Adjust the import path as needed
import Link from "next/link";

const AboutHero = () => {
  const headingSectionRef = useRef(null);
  const heroImageRef = useRef(null);
  const glassButtonRef = useRef(null);

  const [showHero, setShowHero] = useState(false); // State to control Hero section visibility

  // Variants for heading animations
  const headingVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: index * 0.5,
        ease: "easeOut",
      },
    }),
  };

  // Variant for the hero image
  const heroImageVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: "easeOut",
      },
    },
  };

  // Variant for the glass buttons
  const glassButtonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
        delay: 0.1,
      },
    },
  };

  return (
    <>
      {/* Text Section */}
      {!showHero && (
        <motion.section
          ref={headingSectionRef}
          className="bg-black h-screen flex items-center justify-center"
          initial="hidden"
          animate="visible"
          onAnimationComplete={() => setShowHero(true)} // Show Hero section after animation
        >
          <div className="text-center">
            {/* First Heading */}
            <motion.h1
              className="text-4xl md:text-6xl lg:text-8xl font-panchang text-green-400"
              custom={0}
              variants={headingVariants}
            >
              Hacienda
            </motion.h1>

            {/* Second Heading */}
            <motion.h2
              className="text-5xl md:text-9xl font-corinthia text-white"
              custom={1}
              variants={headingVariants}
            >
              Pergole
            </motion.h2>

            {/* Third Heading */}
            <motion.h3
              className="text-2xl md:text-4xl lg:text-6xl font-playfair text-white"
              custom={2}
              variants={headingVariants}
            >
              Unikatnog Dizajna
            </motion.h3>
          </div>
        </motion.section>
      )}

      {/* Hero Image Section */}
      {showHero && (
        <motion.div
          ref={heroImageRef}
          className="flex flex-col min-h-screen opacity-0 relative"
          initial="hidden"
          animate="visible"
          variants={heroImageVariants}
        >
          <section className="relative flex-grow flex items-center justify-center h-screen">
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full">
              <Image
                src={bgImage}
                alt="Hero Image"
                layout="fill"
                objectFit="cover"
                priority
              />
            </div>

            {/* Buttons */}
            <motion.div
              ref={glassButtonRef}
              className="absolute bottom-[15%] md:bottom-[20%] left-[20%] md:left-0 w-full flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4"
              initial="hidden"
              animate="visible"
              variants={glassButtonVariants}
            >
              <Link href={`/contact`}>
                <GlassButton
                  text={"Kontakt"}
                  className="px-4 py-2 text-xs md:text-lg"
                />
              </Link>

              <Link href={`/products`}>
                <GlassButton
                  text={"Proizvodi"}
                  className="px-4 py-2 text-xs md:text-lg"
                />
              </Link>
            </motion.div>
          </section>
        </motion.div>
      )}
    </>
  );
};

export default AboutHero;
