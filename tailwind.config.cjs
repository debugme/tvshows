/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [require('tailwindcss-themer')({
    defaultTheme: {
      extend: {
        fontFamily: {
          sans: ["Poppins", "sans-serif"]
        },
        gridTemplateColumns: {
          home: "repeat(auto-fit, 320px)",
          cast: "repeat(auto-fill, 210px)",
          season: "repeat(auto-fill, 210px)"
        },
        colors: {
          "fgc-1": "#fde047",     // yellow-300 
          "fgc-2": "#facc15",     // yellow-400 
          "fgc-3": "#ca8a04",     // yellow-600 
          "fgc-4": "#854d0e",     // yellow-800 
          "bgc-1": "#f8fafc",     // slate-50 
          "bgc-2": "#e2e8f0",     // slate-200 
          "bgc-3": "#cbd5e1",     // slate-300 
          "bgc-4": "#94a3b8",     // slate-400 
          "bgc-5": "#64748b",     // slate-500 
          "bgc-6": "#475569",     // slate-600 
          "bgc-7": "#334155",     // slate-700 
        },
        spacing: {
          "infoCardWidth": "210px",
          "infoCardHeight": "295px",
        }
      }
    },
    themes: [
      {
        name: "twilight",
        extend: {
          colors: {
            /* Overide options from the default theme in here */
          }
        }
      }
    ]
  })],
}