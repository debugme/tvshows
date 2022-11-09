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
        sans: ["Nunito Sans", "sans-serif"]
      },
      gridTemplateColumns: {
        home: "repeat(auto-fit, minmax(18rem, max-content))"
      }
    }
  },
  plugins: [],
}