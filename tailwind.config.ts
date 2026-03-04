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
        "ph-off-white": "#F5F2EC",
        "ph-light-beige": "#D9D2C6",
        "ph-mid-tan": "#CBB9A4",
        "ph-muted-brown": "#A48D78",
        "ph-deep-brown": "#82614A",
        "ph-dark": "#1A1410",
      },
      fontFamily: {
        heading: ["'Fredoka One'", "sans-serif"],
        body: ["'Poppins'", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
