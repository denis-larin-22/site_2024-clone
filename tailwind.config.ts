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
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        // text
        't-dark-text': '#1E1E1E',
        //template's colors
        't-blue-dark': '#0E0050',
        't-blue': '#1000E5',
        't-gray': '#BFC1CA',
        't-green': '#1EBF91',
        't-red': '#FF0A0A'

      },
    },
  },
  darkMode: "class",
  plugins: [nextui()]
};
export default config;
