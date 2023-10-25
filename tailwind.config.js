/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        jost: ["Jost", "sans-serif"],
        robotoSlab: ["Roboto Slab", "serif"],
        satoshi: ["Satoshi", "sans-serif"],
        notoSans: ["Noto Sans", "sans-serif"],
        lato: ["Lato", "sans-serif"],
      },
      screens: {
        xl: "1536px",
        lg: "1025px",
        md: "768px",
      },
    },
  },
  plugins: [],
};
