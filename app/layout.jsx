import { Geist, Geist_Mono, JetBrains_Mono } from "next/font/google";
import FooterC from "./_components/FooterC";
import HeaderX from "./_components/Header";
import { Boldonse } from "next/font/google";
import "./globals.css";

export const metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ),
  title: {
    default: "Hacienda Premium Pergole",
    template: "%s | Hacienda Premium Pergole",
  },
  description: "Izrada drvenih premium pergola",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "Hacienda Premium Pergole",
    title: "Hacienda Premium Pergole",
    description: "Izrada drvenih premium pergola",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hacienda Premium Pergole",
    description: "Izrada drvenih premium pergola",
  },
};

const boldonse = Boldonse({
  subsets: ["latin"],
  weight: ["400"], // dodaj ako ima više težina
  variable: "--font-boldonse",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrainsMono",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="sr" className="overflow-x-hidden max-w-full">
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        className={`${jetbrainsMono.variable}  antialiased overflow-x-hidden max-w-full bg-black`}
      >
        <HeaderX />
        {children}
        <FooterC />
      </body>
    </html>
  );
}
