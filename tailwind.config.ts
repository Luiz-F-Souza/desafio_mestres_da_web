import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      height:{
        110: "27.5rem"
      },
      width:{
        160: "40rem"
      }
    },
    colors:{
      black:{
        900: "#000000"
      },
      gray:{
        300: "#D1D1D6",
        500: "#84848D",
      },
      white:{
        500:"#FFFFFF"
      },
      red:{
        400: "#FC0001",
        500: "#FF0000",
        700: "#6B0C0D"
      },
      orange:{
        400: "#E39602",
        500: "#D88B02"
      },
    }
  },
  plugins: [],
};
export default config;
