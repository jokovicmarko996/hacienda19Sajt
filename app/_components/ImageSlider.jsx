"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "https://via.placeholder.com/300x200/FF6347/FFFFFF?text=Image+1",
  "https://via.placeholder.com/300x200/1E90FF/FFFFFF?text=Image+2",
  "https://via.placeholder.com/300x200/32CD32/FFFFFF?text=Image+3",
];

export default function ImageSlider() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for right, -1 for left

  const nextSlide = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

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
      x: direction > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="relative w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl aspect-video overflow-hidden rounded-2xl shadow-lg">
        <AnimatePresence custom={direction}>
          <motion.img
            key={current}
            src={images[current]}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5 }}
            className="absolute w-full h-full object-cover"
          />
        </AnimatePresence>
      </div>
      <div className="flex mt-4 space-x-4">
        <button
          onClick={prevSlide}
          className="px-4 py-2 bg-blue-500 text-white rounded-xl shadow hover:bg-blue-600"
        >
          Previous
        </button>
        <button
          onClick={nextSlide}
          className="px-4 py-2 bg-green-500 text-white rounded-xl shadow hover:bg-green-600"
        >
          Next
        </button>
      </div>
    </div>
  );
}
