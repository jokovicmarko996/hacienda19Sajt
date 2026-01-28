"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "/about/pergola1.png",
  "/about/pergola2.png",
  "/about/pergola3.png",
  "/about/pergola4.png",
  "/about/pergola5.png",
  "/about/pergola6.png",
  "/about/pergola7.png",

];

const ImageStack = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="relative w-80 h-96">
        {images.map((img, index) => {
          const position = (index - current + images.length) % images.length;
          const isCenter = position === 0;

          return (
            <AnimatePresence key={img} custom={position}>
              <motion.img
                key={img}
                src={img}
                custom={position}
                initial="enter"
                animate="center"
                exit="exit"
                variants={variants}
                transition={{ duration: 0.9, ease: "easeInOut" }}
                className={`absolute w-full h-full object-cover rounded-2xl shadow-lg ${
                  isCenter ? "z-50" : `z-${10 - position}`
                } ${!isCenter ? "scale-90 blur-sm" : ""}`}
              />
            </AnimatePresence>
          );
        })}
      </div>
    </div>
  );
};

export default ImageStack;

