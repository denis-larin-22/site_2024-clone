import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '10px',
        screens: {
          '2xl': '1208px'
        },
      },
      backgroundImage: {
        "t-blue-green-gradient": "linear-gradient(270deg, rgba(8,255,184,1) 50%, rgba(11,45,226,1) 100%)",
      },
      colors: {
        // text
        't-dark-text': '#1E1E1E',
        //template's colors
        't-blue-dark': '#0E0050',
        't-blue': '#1000E5',
        't-gray': '#BFC1CA',
        't-gray-text': '#B3B5BE',
        't-green': '#1EBF91',
        't-red': '#FF0A0A',
        't-pale': '#F6F5F8',
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()]
};
export default config;
