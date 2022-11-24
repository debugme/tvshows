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
          "fgc-1": "rgb(253 224 71)",
          "fgc-2": "rgb(250 204 21)",
          "fgc-3": "rgb(202 138 4)",
          "fgc-4": "rgb(133 77 14)",
          "bgc-1": "rgb(241 245 249)",
          "bgc-2": "rgb(226 232 240)",
          "bgc-3": "rgb(203 213 225)",
          "bgc-4": "rgb(148 163 184)",
          "bgc-5": "rgb(100 116 139)",
          "bgc-6": "rgb(71 85 105)",
          "bgc-7": "rgb(51 65 85)",
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