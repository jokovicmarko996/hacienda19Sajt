"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";

import Image from "next/image";
import Link from "next/link";


import pergola2 from "../../public/products/pergola6.png";
import pergola3 from "../../public/products/pergola7.png";
import pergola1 from "../../public/products/pergola9.png";
import pergola5 from "../../public/products/pergola10.png";
import pergola4 from "../../public/products/pergola2.png";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeInOut",
      staggerChildren: 0.3,
    },
  },
};

const textVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const iconVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
  move: {
    x: 100,
    y: 100,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

export const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      ref={itemRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

// export const BentoCard = ({ src, title, description, isComingSoon }) => {
export const BentoCard = ({ src, title, description }) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hoverOpacity, setHoverOpacity] = useState(0);
  const hoverButtonRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!hoverButtonRef.current) return;
    const rect = hoverButtonRef.current.getBoundingClientRect();

    setCursorPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => setHoverOpacity(1);
  const handleMouseLeave = () => setHoverOpacity(0);

  return (
    <Link href="/products" className="relative size-full">
      <Image
        src={src}
        alt={title}
        fill
        className="absolute left-0 top-0 size-full object-cover object-center"
      />
      <div className=" relative z-10 flex size-full flex-col justify-between p-5 text-white">
        {/* TO DO => NAZIV PERGOLE */}
        {/* <div>
<h1 className="font-extrabold text-3xl md:text-4xl font-amagro">
{title}
</h1>
</div> */}
        {/* <h1 className="absolute top-2 left-2 text-white text-lg sm:text-xl font-panchang bg-black/50 px-3 py-1 rounded-md">
          {title}
        </h1> */}

        <h1 className="absolute top-2 left-2 bg-white/80 text-black  font-semibold text-lg sm:text-xl px-2 py-1 rounded-md shadow-md font-panchang">
          {title}
        </h1>

        <Link
          href={"/products"}
          ref={hoverButtonRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="absolute bottom-2 right-2 sm:bottom-5 sm:right-5 border-hsla flex w-fit cursor-pointer items-center gap-1 overflow-hidden rounded-full bg-black px-3 py-1 sm:px-4 sm:py-2 text-xs uppercase"
          // className="absolute bottom-2 left-2 sm:bottom-5 sm:left-5 flex w-fit cursor-pointer items-center gap-1 overflow-hidden rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1 sm:px-4 sm:py-2 text-xs uppercase shadow-lg transition-all duration-300"
        >
          <div
            className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
            style={{
              opacity: hoverOpacity,
              background: `radial-gradient(100px circle at ${cursorPosition.x}px ${cursorPosition.y}px, #2ef55287, #f2f1f125)`,
            }}
          />
          <TiLocationArrow className="relative z-20 text-white" />

          <p className="relative z-20 text-white font-amagro sm:font-panchang">
            Pogledaj
          </p>
        </Link>

        {/* Dugme u donjem desnom uglu */}
        {/* <button className="absolute bottom-2 right-2 flex items-center gap-2 px-3 py-1 bg-black text-white text-xs font-amagro sm:font-amagro uppercase rounded-full shadow-md w-fit items-center hover:bg-gray-800 transition-all duration-300">
          <TiLocationArrow className="text-white" />
          <span>Detalji</span>
        </button> */}

        {/* <Link
          href={"/products"}
          ref={hoverButtonRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="absolute bottom-5 left-5 sm:bottom-3 sm:left-3 border-hsla flex w-fit cursor-pointer items-center gap-1 overflow-hidden rounded-full bg-black px-4 py-2 sm:px-3 sm:py-1 text-xs uppercase text-white/20"
        >
         
          <div
            className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
            style={{
              opacity: hoverOpacity,
              background: `radial-gradient(100px circle at ${cursorPosition.x}px ${cursorPosition.y}px, #2ef55287, #f2f1f125)`,
            }}
          />
          <TiLocationArrow className="relative z-20 text-white" />
          <p className="relative z-20 text-white">Pogledaj</p>
        </Link> */}
      </div>
    </Link>
  );
};

const Features = () => (
  <section className="bg-black pb-6 max-w-full">
    <div className="container mx-auto px-3 md:px-10 overflow-hidden">
      <div className="px-5 py-6">
        {/* <h1>
          OBRISI POSLE - ISTO DODAJ NEKI TEXT - POVECAJ FONT SAMO UZ NEKI OPIS
        </h1>
        <p className="font-circular-web text-lg text-blue-50">
          Into the Metagame Layer
        </p>
        <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
          Immerse yourself in a rich and ever-expanding universe where a vibrant
          array of products converge into an interconnected overlay experience
          on your world.
        </p> */}
        {/* <AnimatedHeading title="Welcome to the Future of the Pergola Creation" /> */}
      </div>

      <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
        <BentoCard
          src="/products/pergola9.png"
          // src={pergola1}
          title={
            <>
              {/* svoj naziv */}
              Pergola 1
            </>
          }
          description="A cross-platform metagame app, turning your activities across Web2 and Web3 games into a rewarding adventure."
          // isComingSoon
        />
      </BentoTilt>

      <div className="grid h-[135vh] max-w-full grid-cols-2 grid-rows-3 gap-7">
        <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
          <BentoCard
            // src={pergola2}
            src="/products/pergola6.png"
            title={
              <>
                {/* svoj naziv */}
                Pergola 2
              </>
            }
            description="An anime and gaming-inspired NFT collection - the IP primed for expansion."
            // isComingSoon
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
          <BentoCard
            // src={pergola3}
            src="/products/pergola7.png"
            title={<>Pergola 3</>}
            description="A gamified social hub, adding a new dimension of play to social interaction for Web3 communities."
            // isComingSoon
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
          <BentoCard
            src="/products/pergola2.png"
            // src={pergola4}
            title={
              <>
                {/* svoj naziv */}
                Pergola 4
              </>
            }
            description="A cross-world AI Agent - elevating your gameplay to be more fun and productive."
            // isComingSoon
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_2">
          {/* <Link
            href={"/products"}
            className="flex size-full flex-col justify-between bg-gradient-to-b from-green-400 to-white p-3"
          > */}
          <Link
            href={"/products"}
            className="flex size-full flex-col justify-between bg-green-400  p-3 hover:text-white"
          >
            <motion.h1
              className="bento-title text-2xl  max-w-64 text-black "
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1, ease: "easeOut" }}
              whileHover={{
                scale: 1.05,
                backgroundColor: "gradient-to-b from-green-400 to-white",
                // boxShadow: "0px 5px 15px rgba(0,0,0,0.2)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              {/* M<b>o</b>re co<b>m</b>ing s<b>o</b>on. */}
              Pogledaj sve proizvode
            </motion.h1>

            <TiLocationArrow className="m-5 scale-[3] sm:scale-[5] self-end text-black " />
          </Link>

          {/* <motion.div
            className="flex size-full flex-col justify-between bg-green-400 p-5"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h1
              className="bento-title max-w-64 text-black"
              variants={textVariants}
            >
              M<b>o</b>re co<b>m</b>ing s<b>o</b>on.
            </motion.h1>
            <motion.div variants={iconVariants}>
              <TiLocationArrow className="m-5 scale-[5] self-end text-black" />
            </motion.div>
          </motion.div> */}
        </BentoTilt>

        <BentoTilt className="bento-tilt_2">
          {/* <Image
            src={pergola5}
            alt="pergola stara gradja"
            fill
            className="size-full object-cover object-center"
          /> */}

          <BentoCard
            src="products/pergola10.png"
            // src={pergola5}
            title={
              <>
                {/* svoj naziv */}
                Pergola 5
              </>
            }
            description="A cross-world AI Agent - elevating your gameplay to be more fun and productive."
            // isComingSoon
          />
        </BentoTilt>
      </div>
    </div>
  </section>
);

export default Features;
