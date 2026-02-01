import AboutHero from "../_components/ui/AboutHero";
import AboutStats from "../_components/ui/AboutStatsCGPT";
import AboutValues from "../_components/ui/AboutValuesCGPT";
import FollowUsSection from "../_components/ui/FollowUsCGPT";

const page = () => {
  return (
    <div>
      <AboutHero />

      <AboutStats />

      <AboutValues />

      <FollowUsSection />
    </div>
  );
};

export default page;
