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
          "header-fg": "rgb(148 163 184)",
          "header-bg": "rgb(51 65 85)",
          "header-avatar": "rgb(202 138 4)",
          "footer-fgi": "rgb(100 116 139)",
          "footer-bg": "rgb(51 65 85)",
          "footer-fga": "rgb(202 138 4)",
          "main-fg": "rgb(203 213 225)",
          "message-bg": "rgb(148 163 184)",
          "message-fg": "rgb(71 85 105)",
          "tag-bg": "rgb(250 204 21)",
          "tag-fg": "rgb(133 77 14)",
          "heading-fg": "rgb(71 85 105)",
          "search-icon-fg": "rgb(51 65 85)",
          "search-placeholder-fg": "rgb(148 163 184)",
          "search-selection-bg": "rgb(253 224 71)",
          "search-bg": "rgb(241 245 249)",
          "search-focus-outline": "#94a3b8",
          "search-fg": "rgb(71 85 105)",
          "spinner-fg":"rgb(51 65 85)",
          "spinner-bg":"rgb(241 245 249)",
          "chip-fg":"rgb(241 245 249)",
          "chip-bg":"rgb(148 163 184)",
          "show-1":"rgb(71 85 105)",
          "show-2":"rgb(148 163 184)",
          "show-3":"rgb(148 163 184)",
          "cast-1":"rgb(71 85 105)",
          "cast-2":"rgb(148 163 184)",
          "cast-3":"rgb(148 163 184)",
          "back-icon": "rgb(100 116 139)",
          "back-2": "rgb(71 85 105)",
          "season-1": "rgb(148 163 184)",
          "season-2": "rgb(71 85 105)",
          "summary-1": "rgb(71 85 105)",
          "summary-2": "rgb(148 163 184)",
          "summary-3": "rgb(226 232 240)",
          "summary-4": "rgb(51 65 85)",
          "summary-5": "rgb(148 163 184)",
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