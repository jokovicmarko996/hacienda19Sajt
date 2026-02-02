import AboutHero from "../_components/ui/AboutHero";
import AboutStats from "../_components/ui/AboutStatsCGPT";
import AboutValues from "../_components/ui/AboutValuesCGPT";
import FollowUsSection from "../_components/ui/FollowUsCGPT";

export const metadata = {
  title: "O nama | Hacienda Premium Pergole",
  description:
    "Saznaj više o Hacienda Premium Pergole: izrada drvenih pergola, kvalitetni materijali, precizna izrada i profesionalna montaža. Pogledaj naše vrednosti i pristup radu.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "O nama | Hacienda Premium Pergole",
    description:
      "Saznaj više o Hacienda Premium Pergole: izrada drvenih pergola, kvalitetni materijali i profesionalna montaža.",
    url: "/about",
    type: "website",
  },
};

const Page = () => {
  return (
    <div>
      <AboutHero />
      <AboutStats />
      <AboutValues />
      <FollowUsSection />
    </div>
  );
};

export default Page;
