const { fontFamily } = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#4ade80",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in": "fade-in 1s ease-in-out",
      },
      fontFamily: {
        panchang: ["Panchang", "sans-serif"], // Add Panchang to Tailwind
        amagro: ["Amagro", ...fontFamily.sans], // Add your custom font
        bodoni: ['"Bodoni Moda"', "serif"],
        marker: ["Permanent Marker", "cursive"], // Add Permanent Marker
        "dancing-script": ["Dancing Script", "cursive"],
        caveat: ["Caveat", "cursive"],
        zentry: ["zentry", "sans-serif"],
        general: ["general", "sans-serif"],
        "circular-web": ["circular-web", "sans-serif"],
        "robert-medium": ["robert-medium", "sans-serif"],
        "robert-regular": ["robert-regular", "sans-serif"],
      },
      // keyframes: {
      //   fadeGreenToWhite: {
      //     "0%": { color: "#22c55e" }, // Green-500
      //     "100%": { color: "#ffffff" }, // White
      //   },
      // },
      // animation: {
      //   fadeGreenToWhite: "fadeGreenToWhite 1.5s ease-out forwards",
      // },
    },
  },
  plugins: [],
};
