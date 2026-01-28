"use client";

import AboutContent from "../_components/ui/AboutContent";
import AboutHero from "../_components/ui/AboutHero";
import AboutStats from "../_components/ui/AboutStatsCGPT";
import TestimonialsSection from "../_components/ui/AboutTestimonials";
import AboutValues from "../_components/ui/AboutValuesCGPT";
import FollowUsSection from "../_components/ui/FollowUsCGPT";

const page = () => {
  return (
    <div>
      {/* <HerroPattern image={bg} /> */}

      <AboutHero />

      <AboutStats />

      <AboutValues />
      {/* <AboutContent /> */}

      {/* <TestimonialsSection /> */}

      <FollowUsSection />

      {/* <MansoryLayoutNew /> */}

      {/* uradi animacije */}
    </div>
  );
};

export default page;
