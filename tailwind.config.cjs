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
          'header-1': "rgb(148 163 184)",
          'header-2': "rgb(51 65 85)",
          'footer-1': "rgb(100 116 139)",
          'footer-2': "rgb(51 65 85)",
          'footer-3': "rgb(202 138 4)",
        }
      }
    },    
    themes: [
      {
        name: "cartoon",
        extend: {
          colors: {
            'header-1': "red",
            'header-2': "green",

            'footer-1': "red",
            'footer-2': "green",
            'footer-3': "blue",
          }
        }        
      }
    ]
  })],
}