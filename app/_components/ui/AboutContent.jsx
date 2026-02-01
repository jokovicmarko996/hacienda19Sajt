"use client";
import { motion, animate, useInView, useMotionValue } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Testimonials = () => {
  const testimonials = [
    {
      text: "Pergola je prelepa! Transformisala je naš spoljašnji prostor u prelepu i funkcionalnu oblast.",
      author: "Andrea Pekić",
    },
    {
      text: "Tim je bio profesionalan i isporučio je tačno ono što smo želeli. Toplo preporučujem Haciendu!",
      author: "Stefan Paunović",
    },
    {
      text: "Njihovi dizajni su jedinstveni, a kvalitet je vrhunski. Ne možemo biti srećniji sa rezultatima.",
      author: "Petar Vuković",
    },
  ];

  return (
    <section className="bg-black py-16">
      <div className="container mx-auto px-6 md:px-12">
        {/* Section Title */}
        <h2 className="text-3xl md:text-5xl font-panchang text-center text-white mb-12">
          Šta ljudi kažu o nama?
        </h2>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
            >
              <p className="text-lg text-gray-300 italic mb-4">
                "{testimonial.text}"
              </p>
              <h4 className="text-xl font-bold text-white">
                - {testimonial.author}
              </h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

import { useEffect, useRef, useState } from "react";


const StatNumber = ({ value, duration = 2, className = "" }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });

  const motionValue = useMotionValue(0);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    // subscribe to value changes
    const unsub = motionValue.on("change", (latest) => {
      setDisplay(Math.floor(latest));
    });

    return () => unsub();
  }, [motionValue]);

  useEffect(() => {
    if (!inView) return;

    const controls = animate(motionValue, value, {
      duration,
      ease: "easeOut",
    });

    return () => controls.stop();
  }, [inView, motionValue, value, duration]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
};

const StatsSection = () => {
  const stats = [
    { value: 55, label: "Završenih Projekta" },
    { value: 75, label: "Zadovoljnih Klijenata" },
    { value: 7, label: "Godina iskustva" },
  ];

  return (
    <section className="py-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-center mb-8">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="bg-transparent p-6 rounded-full shadow-lg border-4 border-green-400 flex flex-col items-center justify-center w-40 h-40 mx-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.6,
              delay: index * 0.2,
              ease: "easeOut",
            }}
            viewport={{ once: true, amount: 0.4 }}
          >
            <h5 className="text-3xl font-bold text-green-400">
              <StatNumber value={stat.value} duration={2} />
            </h5>

            <p className="text-sm text-gray-300 text-center font-panchang font-normal capitalize">
              {stat.label.split(" ").map((word, i) => (
                <span key={i} className="block">
                  {word}
                </span>
              ))}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};


const AboutContent = () => {
  return (
    <section>
      {/* About Section */}
      <section className="bg-black py-16">
        <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Row 1: Text Column */}
          <div className="">
            <h2 className="font-panchang text-white text-2xl  md:text-5xl mb-4">
              O nama
            </h2>
            <p className="text-xl text-gray-400 leading-relaxed font-bodoni mb-4">
              U Haciendi, pergole nisu samo konstrukcije – one su srce vašeg
              eksterijera, prostor gde se funkcionalnost, estetika i udobnost
              spajaju u savršen sklad.
            </p>
            <Link href="/products">
              <button className="px-4 py-2 bg-green-600 text-gray-400 font-semibold rounded-lg shadow-lg hover:bg-green-600 transition-all duration-300">
                Pogledaj više
              </button>
            </Link>
          </div>

          {/* Row 1: Image Column */}
          <div className="relative">
            <Image
              src="/removedbackground/pergolaModal2.png"
              alt="About Us"
              className="rounded-lg shadow-lg w-full h-auto"
              width={300}
              height={300}
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Testimonials Section */}
      <Testimonials />
    </section>
  );
};

export default AboutContent;
