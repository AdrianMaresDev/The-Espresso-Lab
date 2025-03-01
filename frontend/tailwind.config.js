/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        caramel: "#AD8330",
        cream: "#E8E7E3",
        darkBrown: "#39310C",
        cinnamon: "#6F2112",
        forest: "#1F3A28"
      },
      fontFamily: {
        josefinSans: ["Josefin Sans", "sans-serif"]
      }
    },
  },
  plugins: [],
}

