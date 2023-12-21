/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      blue: "#3391FF",
      white: "#ffffff",
      "black-10": "#262534",
      "black-100": "#263238",
      black: "#000000",
      gray:"#0000000A"
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    extend: {},
  },
  daisyui: {
    themes: [],
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
};
