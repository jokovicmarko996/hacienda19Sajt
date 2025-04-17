"use client";
import React from "react";
import Contact from "../_components/Contact";
import StarsCanvas from "../_components/canvas/Stars";
import HerroPattern from "../_components/Hero";
import bg from "../../public/products/pergola5.png"; // slika koja ce da bude hero image
import ContactContent from "../_components/ui/ContactContent";
import FAQAccordion from "../_components/FAQAccordion";
import SocialMediaLinks from "../_components/SocialMediaLinks";

const page = () => {
  return (
    <>
      <HerroPattern image={bg} />
      {/* <Contact /> */}
      <FAQAccordion />
      <ContactContent />
      <SocialMediaLinks />
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
