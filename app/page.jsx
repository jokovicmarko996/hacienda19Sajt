import LandingPage from "./_components/LandingPage";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata = {
  title: "Hacienda Premium Pergole",
  description:
    "Izrada drvenih premium pergola za dvorišta, terase i ugostiteljske objekte. Premium dizajn, kvalitetni materijali i profesionalna montaža.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Hacienda Premium Pergole",
    description:
      "Izrada drvenih premium pergola za dvorišta, terase i ugostiteljske objekte.",
    url: "/",
    type: "website",
  },
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Hacienda Premium Pergole",
    url: baseUrl,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LandingPage />
    </>
  );
}
