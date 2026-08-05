import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef4ff",
          100: "#d9e6ff",
          200: "#b3ccff",
          300: "#80abff",
          400: "#4d82ff",
          500: "#2b5cf0",
          600: "#1e46c9",
          700: "#1a389e",
          800: "#182f7d",
          900: "#172a66",
        },
      },
    },
  },
  plugins: [],
};

export default config;
