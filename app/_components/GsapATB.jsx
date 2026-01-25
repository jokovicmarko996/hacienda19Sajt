"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import GlassButton from "./GlassButton";
import Link from "next/link";
import PropTypes from "prop-types";
import { useRouter } from "next/navigation";

const TransparentButton = ({ text, href, className }) => {
  const router = useRouter();

  const handleClick = () => {
    if (href) {
      router.push(href); // Navigacija na zadati URL
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`px-4 py-2 bg-white text-black font-panchang font-semibold uppercase rounded-lg border border-black hover:bg-white/10 hover:text-white hover:border-white transition-all duration-300 ${className}`}
    >
      {text}
    </button>
  );
};

TransparentButton.propTypes = {
  text: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  className: PropTypes.string,
};

TransparentButton.defaultProps = {
  className: "",
};

const GsapAnimatedTextButton = ({ className }) => {
  const container = useRef();
  const buttonRef = useRef(); // Reference for the button
  let tl = gsap.timeline();

  useGSAP(
    () => {
      // Animate each letter with GSAP
      // reveal each letter with a staggered effect
      tl.from(".loading_letter", {
        opacity: 0,
        y: 100,
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out",
      }).fromTo(
        buttonRef.current,
        { opacity: 0, scale: 0.8 }, // Start hidden and slightly smaller
        { opacity: 1, scale: 1, duration: 0.6, ease: "power2.out" }, // Fade in and scale up
        "-=0.2" // Speed up of 0.2 seconds after the heading animation is completed
      );
    },
    [],
    { scope: container }
  );

  return (
    <div className="absolute bottom-[20%]  md:bottom-[10%] flex flex-col items-center justify-center p-0 m-0">
      <div
        ref={container}
        // className="flex justify-center items-center h-screen w-screen bg-[#0c0b0b] font-panchang m-0 p-0 overflow-hidden"
        className={`inline-flex font-panchang font-normal m-0 p-0 overflow-hidden ${className}`}
      >
        <h1 className="heading text-center text-[3rem] md:text-[6rem] text-white   ">
          <span className="loading_letter  ">H</span>
          <span className="loading_letter ">a</span>
          <span className="loading_letter ">c</span>
          <span className="loading_letter ">i</span>
          <span className="loading_letter ">e</span>
          <span className="loading_letter ">n</span>
          <span className="loading_letter ">d</span>
          <span className="loading_letter ">a</span>
        </h1>
      </div>

      {/* animated button  */}
      <div
        ref={buttonRef}
        className="flex items-center justify-center space-x-4 mt-4"
      >
        <Link href={`/contact`}>
          <GlassButton
            text={"Kontakt"}
            className="px-4 py-2 text-sm md:text-lg font-bold"
          />
        </Link>
        <TransparentButton
          text="Proizvodi"
          href="/products"
          className="px-4 py-2 text-sm md:text-lg font-bold font-panchang"
        />
      </div>
    </div>
  );
};

export default GsapAnimatedTextButton;

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

// PRIMER => GSAP & WEBFLOW
// source  -> https://www.youtube.com/live/7qRek2GLbB8
// let tl = gsap.timeline();

// tl.from(".loading_letter", {
//   yPercent: 100,
//   duration: 2,
//   stagger: {
//     each: 0.1,
//     from: "center",
//   },
//   ease: "expo.out",
// })
//   .to(
//     ".loading_letter",
//     {
//       yPercent: -100,
//       duration: 1,
//       stagger: {
//         each: 0.1,
//         from: "center",
//       },
//       ease: "expo.inOut",
//     },
//     "+=2"
//   )
//   .from(".gallery-img-wrapper", {
//     yPercent: 250,
//     duration: 2,
//     stagger: {
//       amount: 0.05,
//       from: "center",
//     },
//     ease: "power4.out",
//   })
//   .from(
//     ".gallery-img",
//     {
//       scale: 2.2,
//       duration: 2,
//       stagger: {
//         amount: 0.05,
//         from: "center",
//       },
//       ease: "power4.out",
//     },
//     "<"
//   );
//
// PRIMER => GSAP & WEBFLOW (KRAJ)

// const GSAPReactLearning = () => {
//   const container = useRef();
//   let tl = gsap.timeline();

//   useGSAP(
//     () => {
//       // gsap.to(box.current, { x: 360 }); //automatically reverted

//       // Animate each letter with GSAP
//       // reveal each letter with a staggered effect
//       gsap.from(".loading_letter", {
//         opacity: 0,
//         y: 100,
//         stagger: 0.1,
//         duration: 1.5,
//         ease: "power2.out",
//       });
//     },
//     [],
//     { scope: container }
//   );

//   return (
//     <div
//       ref={container}
//       className="flex justify-center items-center h-screen w-screen bg-[#0c0b0b] font-panchang m-0 p-0 overflow-hidden"
//     >
//       <h1 className="heading text-center text-white scale-y-110  leading-loose font-bold ">
//         <span className="loading_letter leading-loose text-[10rem] scale-y-110 ">
//           H
//         </span>
//         <span className="loading_letter leading-loose text-[10rem] scale-y-110">
//           a
//         </span>
//         <span className="loading_letter leading-loose text-[10rem] scale-y-110">
//           c
//         </span>
//         <span className="loading_letter leading-loose text-[10rem] scale-y-110">
//           i
//         </span>
//         <span className="loading_letter leading-loose text-[10rem] scale-y-110">
//           e
//         </span>
//         <span className="loading_letter leading-loose text-[10rem] scale-y-110">
//           n
//         </span>
//         <span className="loading_letter leading-loose text-[10rem] scale-y-110">
//           d
//         </span>
//         <span className="loading_letter leading-loose text-[10rem] scale-y-110">
//           a
//         </span>
//         <span className="loading_letter leading-loose text-[10rem] scale-y-110">
//           a
//         </span>
//       </h1>
//     </div>
//   );
// };

// export default GSAPReactLearning;
