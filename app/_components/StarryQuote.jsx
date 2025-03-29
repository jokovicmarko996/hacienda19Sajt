"use client";
import { useEffect, useRef } from "react";

export default function StarryQuote() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight / 2;

    const stars = Array.from({ length: 100 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2,
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

    drawStars();
  }, []);

  return (
    <div className="relative w-full h-[50vh] bg-black flex items-center justify-center text-white text-2xl text-center p-4">
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />
      <p className="relative z-10  md:text-4xl font-bodoni">
        “The only limit to our realization of tomorrow is our doubts of today.”
      </p>
    </div>
  );
}
