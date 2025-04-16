"use client";
import Image from "next/image";
import Link from "next/link";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
// const Testimonials = () => {
//   const testimonialsRef = useRef([]);

//   useEffect(() => {
//     // Animate each testimonial card when it enters the viewport
//     testimonialsRef.current.forEach((card, index) => {
//       gsap.fromTo(
//         card,
//         { opacity: 0, y: 30 }, // Reduced vertical offset for smoother animation on mobile
//         {
//           opacity: 1,
//           y: 0, // Move to visible and centered
//           duration: 0.8, // Shorter duration for faster animations on mobile
//           delay: index * 0.15, // Reduced stagger delay for better flow on mobile
//           ease: "power2.out",
//           scrollTrigger: {
//             trigger: card, // Trigger animation when the card enters the viewport
//             start: "top center", // when the top of the trigger hits the center of the viewport
//             end: "+=250", // end after scrolling 500px beyond the start
//             markers: { startColor: "green", endColor: "red", fontSize: "12px" },
//           },
//         }
//       );
//     });
//   }, []);

//   const testimonials = [
//     {
//       text: "Pergola je prelepa! Transformisala je naš spoljašnji prostor u prelepu i funkcionalnu oblast.",
//       author: "Andrea Pekić",
//     },
//     {
//       text: "Tim je bio profesionalan i isporučio je tačno ono što smo želeli. Toplo preporučujem Haciendu!",
//       author: "Stefan Paunović",
//     },
//     {
//       text: "Njihovi dizajni su jedinstveni, a kvalitet je vrhunski. Ne možemo biti srećniji sa rezultatima.",
//       author: "Petar Vuković",
//     },
//   ];

//   return (
//     <section className="bg-black py-16">
//       <div className="container mx-auto px-6 md:px-12">
//         {/* Section Title */}
//         <h2 className="text-3xl md:text-5xl font-panchang text-center text-white mb-12">
//           Šta ljudi kažu o nama
//         </h2>

//         {/* Reviews Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {testimonials.map((testimonial, index) => (
//             <div
//               key={index}
//               ref={(el) => (testimonialsRef.current[index] = el)}
//               className="bg-gray-800 p-6 rounded-lg shadow-lg"
//             >
//               <p className="text-lg text-gray-300 italic mb-4">
//                 "{testimonial.text}"
//               </p>
//               <h4 className="text-xl font-bold text-white">
//                 - {testimonial.author}
//               </h4>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };
// const StatsSection = ({ stats }) => {
//   const statsRefs = useRef([]);

//   useEffect(() => {
//     // Animate each stat number when the section enters the viewport
//     statsRefs.current.forEach((ref, index) => {
//       gsap.fromTo(
//         ref,
//         { innerText: 0 }, // Start from 0
//         {
//           innerText: ref.dataset.value, // Target value from data-value attribute
//           duration: 2, // Animation duration
//           ease: "power2.out",
//           snap: { innerText: 1 }, // Snap to whole numbers
//           onUpdate: function () {
//             ref.innerText = Math.floor(this.targets()[0].innerText); // Update the text content
//           },
//           scrollTrigger: {
//             trigger: ref, // Trigger animation when the card enters the viewport
//             start: "top center", // when the top of the trigger hits the center of the viewport
//             end: "+=250", // end after scrolling 500px beyond the start
//             markers: { startColor: "green", endColor: "red", fontSize: "12px" },
//           },
//         }
//       );
//     });
//   }, []);

//   return (
//     <section className="py-16">
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-center mb-8">
//         {stats.map((stat, index) => (
//           <div
//             key={index}
//             className="bg-transparent p-6 rounded-full shadow-lg border-4 border-green-400 flex flex-col items-center justify-center w-40 h-40 mx-auto"
//           >
//             {/* Animated Number */}
//             <h5
//               ref={(el) => (statsRefs.current[index] = el)}
//               data-value={stat.value}
//               className="text-3xl font-bold text-green-400"
//             >
//               0
//             </h5>
//             <p className="text-sm text-gray-300 text-center">{stat.label}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

const AboutContent = () => {
  const stats = [
    { value: 95, label: "Završenih Projekta" },
    { value: 150, label: "Zadovoljnih Klijenata" },
    { value: 8, label: "Godina iskustva" },
  ];

  const statsRefs = useRef([]);

  useGSAP(() => {
    // Animate each stat number when the section enters the viewport
    statsRefs.current.forEach((ref, index) => {
      gsap.fromTo(
        ref,
        { innerText: 0 }, // Start from 0
        {
          innerText: ref.dataset.value, // Target value from data-value attribute
          duration: 2, // Animation duration
          ease: "power2.out",
          snap: { innerText: 1 }, // Snap to whole numbers
          onUpdate: function () {
            ref.innerText = Math.floor(this.targets()[0].innerText); // Update the text content
          },
          scrollTrigger: {
            trigger: ref, // Trigger animation when the stat enters the viewport
            start: "top 80%", // Start animation when the top of the stat is 80% down the viewport
          },
        }
      );
    });
  }, []);

  const testimonialsSectionRef = useRef(null);
  const aboutSectionRef = useRef(null);

  return (
    <section>
      {/* About Section */}
      <section ref={aboutSectionRef} className="bg-black py-16">
        <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Row 1: Text Column */}
          <div className="space-y-6">
            <h2 className="text-2xl font-panchang text-white md:text-5xl">
              O nama
            </h2>
            <p className="text-xl text-gray-400 leading-relaxed font-bodoni">
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

          {/* Row 2: Full-Width Content */}
          <div className="col-span-1 md:col-span-2 bg-gray-800 p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-3xl font-panchang text-white mb-4">
              Naša misija
            </h3>
            <p className="text-lg text-gray-400 leading-relaxed">
              At Hacienda, we aim to bridge the gap between innovation and
              practicality. Our team is committed to delivering high-quality
              products and services that empower our customers to achieve their
              goals. Naša misija je da nastavimo da kreiramo kvalitetne,
              dugotrajne i dizajnerski usavršene pergole, prilagođene vašim
              potrebama i stilu prostora.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-center mb-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-transparent p-6 rounded-full shadow-lg border-4 border-green-400 flex flex-col items-center justify-center w-40 h-40 mx-auto"
            >
              {/* Animated Number */}
              {/* <h5
                ref={(el) => (statsRefs.current[index] = el)}
                data-value={stat.value}
                className="text-3xl font-bold text-green-400"
              >
                0
              </h5> */}
              <h5
                ref={(el) => (statsRefs.current[index] = el)}
                data-value={stat.value}
                className="text-3xl font-bold text-green-400"
              >
                {stat.value}
              </h5>
              <p className="text-sm text-gray-300 text-center">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-black py-16">
        <div className="container mx-auto px-6 md:px-12">
          {/* Section Title */}
          <h2 className="text-3xl md:text-5xl font-panchang text-center text-white mb-12">
            Šta ljudi kažu o nama
          </h2>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Review 1 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <p className="text-lg text-gray-300 italic mb-4">
                "Pergola je prelepa! Transformisala je naš spoljašnji prostor u
                prelepu i funkcionalnu oblast."
              </p>
              <h4 className="text-xl font-bold text-white">- Andrea Pekić</h4>
            </div>

            {/* Review 2 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <p className="text-lg text-gray-300 italic mb-4">
                "Tim je bio profesionalan i isporučio je tačno ono što smo
                želeli. Toplo preporučujem Haciendu!"
              </p>
              <h4 className="text-xl font-bold text-white">
                - Stefan Paunović
              </h4>
            </div>

            {/* Review 3 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <p className="text-lg text-gray-300 italic mb-4">
                "Njihovi dizajni su jedinstveni, a kvalitet je vrhunski. Ne
                možemo biti srećniji sa rezultatima."
              </p>
              <h4 className="text-xl font-bold text-white">- Petar Vuković</h4>
            </div>
          </div>
        </div>
      </section>

      <h1 className="flex justify-center text-4xl">
        Svaku sekciju animirati scroll reveal, stats animirati kada upadne u
        viewport, dodati accordion sa onim listama
      </h1>
    </section>
  );
};

export default AboutContent;
