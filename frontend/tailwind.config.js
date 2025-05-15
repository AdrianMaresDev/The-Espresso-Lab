/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FFF6EE",
        beige: "#B4A79E",
        darkGrey: "#2A2A2A",
        lavender: "#F4DEF8",
        lavenderHover: "#9827A6"
      },
      fontFamily: {
        spartan: ["League Spartan", "sans-serif"]
      }
    },
  },
  plugins: [],
}

