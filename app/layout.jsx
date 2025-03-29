import { Geist, Geist_Mono, JetBrains_Mono } from "next/font/google";
import FooterC from "./_components/FooterC";
import HeaderX from "./_components/Header";
import "./globals.css";

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

export const metadata = {
  title: "Hacienda Premium Pergole",
  description: "Izrada drvenih premium pergola",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="overflow-x-hidden max-w-full">
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
