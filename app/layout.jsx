import { Geist, Geist_Mono, JetBrains_Mono } from "next/font/google";
import FooterC from "./_components/FooterC";
import HeaderX from "./_components/Header";
import { Boldonse } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://pergole-hacienda.rs"
  ),
  alternates: {
    canonical: "/",
  },
  title: {
    default: "Hacienda Premium Pergole",
    template: "%s | Hacienda Premium Pergole",
  },
  description: "Izrada drvenih premium pergola",

  // NOTE: do NOT use metadata.verification.google when you need multiple tokens.
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
  keywords: [
    "premium pergole",
    "drvene pergole",
    "pergole za terase",
    "pergole za dvorišta",
    "Hacienda Premium Pergole",
  ],
};

const boldonse = Boldonse({
  subsets: ["latin"],
  weight: ["400"],
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
    <html lang="sr-RS" className="overflow-x-hidden max-w-full">
      <head>
        {/* Google Search Console verification (multiple tokens supported) */}
        <meta
          name="google-site-verification"
          content="bERIiFBYisv6KTiQc_Oo_ptwNnmY450Gj40zg8h0x-U"
        />
        <meta
          name="google-site-verification"
          content="uekgb_w9lzZzol3zKJxzQc2z7ULbKFsD6e3Dex7Xa-c"
        />
      </head>

      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        className={`${jetbrainsMono.variable}  antialiased overflow-x-hidden max-w-full bg-black`}
      >
        <header role="banner">
          <HeaderX />
        </header>

        <main id="main">{children}</main>
        <FooterC />

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
