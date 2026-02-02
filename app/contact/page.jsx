import FAQAccordion from "../_components/FAQAccordion";
import HeroPattern from "../_components/HerroPattern";
import ContactContent from "../_components/ui/ContactContent";
import FollowUsSection from "../_components/ui/FollowUsCGPT";

const GREEN = "#4cffb3";

export const metadata = {
  title: "Kontakt | Hacienda Premium Pergole",
  description:
    "Kontaktiraj Hacienda Premium Pergole za izradu i montažu drvenih premium pergola. Pošalji upit, zatraži ponudu i saznaj detalje o izradi.",
  keywords: [
    "kontakt",
    "ponuda pergola",
    "izrada pergola",
    "montaža pergola",
    "drvene premium pergole",
    "Hacienda Premium Pergole",
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Kontakt | Hacienda Premium Pergole",
    description:
      "Kontaktiraj nas za izradu i montažu drvenih premium pergola i zatraži ponudu.",
    url: "/contact",
    type: "website",
  },
};

const Page = () => {
  return (
    <>
      <HeroPattern
        position="left"
        image="/hero/pergola4.avif"
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

export default Page;
