"use client";
import React from "react";
import Contact from "../_components/Contact";
import StarsCanvas from "../_components/canvas/Stars";
import HerroPattern from "../_components/Hero";
import bg from "../../public/products/pergola1.png"; // slika koja ce da bude hero image

const page = () => {
  return (
    <>
      <HerroPattern image={bg} />
      <Contact />
    </>
  );
  // return (
  //   <div className="relative z-0">
  //     <Contact />
  //     <StarsCanvas />
  //   </div>
  // );
};

export default page;
