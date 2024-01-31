import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
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
        500: "#FF0000"
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
