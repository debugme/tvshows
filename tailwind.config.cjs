/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"]
      },
      gridTemplateColumns: {
        home: "repeat(auto-fit, 320px)",
        cast: "repeat(auto-fill, 210px)",
        season: "repeat(auto-fill, 210px)",
        message: "2fr 1fr",
        info: "repeat(1fr, 6)"
      }
    }
  },
  plugins: [],
}