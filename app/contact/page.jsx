"use client";
import bg from "../../public/hero/pergola4.avif"; // slika koja ce da bude hero image
import FAQAccordion from "../_components/FAQAccordion";
import HeroPattern from "../_components/HerroPattern";
import ContactContent from "../_components/ui/ContactContent";
import FollowUsSection from "../_components/ui/FollowUsCGPT";

const GREEN = "#4cffb3";

const page = () => {
  return (
    <>
      <HeroPattern
        position="left"
        image={bg}
        heading={[
          { text: "Premium ", className: "font-panchang text-white" },
          {
            text: "doživljaj",
            className: "font-panchang",
            style: { color: GREEN },
          },
        ]}
      />

      <ContactContent />
      <FAQAccordion />
      <FollowUsSection />
    </>
  );
};

export default page;
