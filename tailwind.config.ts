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
      screens: {
        'tablet': '1367px',
        'mobile': '450px'
      },
      backgroundImage: {
        "m-blue-green-gradient": "linear-gradient(90deg, #08FFB8 0%, #037ADE 42%, #1000E5 100%)",
      },
      colors: {
        //template's catalog colors
        'm-blue-dark': '#09022B',
        'm-green-light': '#07F6BA',
        //template's catalog colors
        't-dark-text': '#1E1E1E',
        't-blue-dark': '#0E0050',
        't-blue': '#1000E5',
        't-gray': '#BFC1CA',
        't-gray-text': '#B3B5BE',
        't-green': '#1EBF91',
        't-red': '#FF0A0A',
        't-pale': '#F6F5F8',
      },
      fontSize: {
        '3xs': '8px',
        'xxs': '10px',
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()]
};
export default config;
