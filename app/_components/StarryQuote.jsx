"use client";
import { useEffect, useRef } from "react";

export default function StarryQuote() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight / 2;

    // Generate static stars
    const stars = Array.from({ length: 100 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2,
      originalRadius: Math.random() * 2, // Store the original radius for glowing effect
    }));

    // Function to draw static stars
    function drawStars() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "white";
      stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
      });
    }

    // Function to make random stars glow
    function glowStars() {
      // Select 5 random stars to glow
      const glowingStars = stars.sort(() => 0.5 - Math.random()).slice(0, 15);

      glowingStars.forEach((star) => {
        // Animate the star's radius to create a glowing effect
        star.radius += 0.1;
        if (star.radius > star.originalRadius + 1) {
          star.radius = star.originalRadius; // Reset to original radius
        }
      });

      drawStars();
    }

    // Draw static stars initially
    drawStars();

    // Add glowing effect every 100ms
    const glowInterval = setInterval(glowStars, 100);

    // Cleanup intervals on component unmount
    return () => {
      clearInterval(glowInterval);
    };
  }, []);

  return (
    <div className="relative w-full h-[50vh] bg-black flex items-center justify-center text-white text-2xl text-center p-4">
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />
      <p className="relative z-10 text-2xl md:text-4xl font-panchang font-normal text-white text-center leading-loose">
        “Sumnja uništi više snova nego neuspeh.”
      </p>
    </div>
  );
}
