"use client";
import { useEffect, useRef } from "react";

export default function StarryQuote() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // keep canvas in sync with container/viewport
    const setSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = Math.floor(window.innerHeight * 0.7);
    };

    setSize();

    // Generate static stars
    const stars = Array.from({ length: 120 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2,
      originalRadius: Math.random() * 2,
    }));

    function drawStars() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "white";
      stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
      });
    }

    function glowStars() {
      const glowingStars = stars.sort(() => 0.5 - Math.random()).slice(0, 15);

      glowingStars.forEach((star) => {
        star.radius += 0.1;
        if (star.radius > star.originalRadius + 1) {
          star.radius = star.originalRadius;
        }
      });

      drawStars();
    }

    drawStars();
    const glowInterval = setInterval(glowStars, 100);

    window.addEventListener("resize", setSize);

    return () => {
      clearInterval(glowInterval);
      window.removeEventListener("resize", setSize);
    };
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-black px-4 sm:px-6 lg:px-10 text-center text-white min-h-[55vh] sm:min-h-[60vh] md:min-h-[70vh] flex items-center justify-center">
      {/* Canvas background */}
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />

      {/* Subtle overlay for readability */}
      <div className="pointer-events-none absolute inset-0 bg-black/45" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-sm sm:max-w-xl md:max-w-3xl lg:max-w-4xl px-2">
        <h1 className="font-panchang leading-tight text-white text-3xl sm:text-4xl md:text-6xl">
          Mesto gde
        </h1>

        <h1 className="font-panchang leading-tight text-[#4cffb3] text-3xl sm:text-4xl md:text-6xl">
          spoljašnji prostor
        </h1>

        <h1 className="font-panchang leading-tight text-white text-3xl sm:text-4xl md:text-6xl">
          postaje
        </h1>

        <h1 className="font-panchang font-semibold leading-tight text-white text-4xl sm:text-5xl md:text-7xl">
          dom
        </h1>

        {/* Accent underline */}
        <div className="mx-auto mt-5 sm:mt-6 h-[2px] w-16 sm:w-20 md:w-24 bg-[#4cffb3]" />
      </div>

      {/* Decorative glow */}
      <div className="pointer-events-none absolute bottom-[-4rem] left-1/2 h-48 w-48 sm:h-56 sm:w-56 md:h-64 md:w-64 -translate-x-1/2 rounded-full bg-[#4cffb3]/20 blur-3xl" />
    </section>
  );
}
