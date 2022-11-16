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
          "header-1": "rgb(148 163 184)",
          "header-2": "rgb(51 65 85)",
          "footer-1": "rgb(100 116 139)",
          "footer-2": "rgb(51 65 85)",
          "footer-3": "rgb(202 138 4)",
          "main-1": "rgb(203 213 225)",
          "message-1": "rgb(148 163 184)",
          "message-2": "rgb(71 85 105)",
          "tag-1": "rgb(250 204 21)",
          "tag-2": "rgb(133 77 14)",
          "heading-1": "rgb(71 85 105)",
          "icon-1": "rgb(51 65 85)",
          "search-1": "rgb(148 163 184)",
          "search-2": "rgb(253 224 71)",
          "search-3": "rgb(241 245 249)",
          "search-4": "#94a3b8",
          "chip-1":"rgb(241 245 249)",
          "chip-2":"rgb(148 163 184)",
          "show-1":"rgb(71 85 105)",
          "show-2":"rgb(148 163 184)",
          "show-3":"rgb(148 163 184)",
          "cast-1":"rgb(71 85 105)",
          "cast-2":"rgb(148 163 184)",
          "cast-3":"rgb(148 163 184)",
          "back-1": "rgb(100 116 139)",
          "back-2": "rgb(71 85 105)",
          "season-1": "rgb(148 163 184)",
          "season-2": "rgb(71 85 105)",
          "summary-1": "rgb(71 85 105)",
          "summary-2": "rgb(148 163 184)",
          "summary-3": "rgb(226 232 240)",
          "summary-4": "rgb(51 65 85)",
          "summary-5": "rgb(148 163 184)",
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
            'main-1': "orange",
            "message-1": "yellow",
            "message-2": "red",         
            "tag-1": "pink",
            "tag-2": "white",        
            "heading-1": "white",
            "icon-1": "red",
            "search-1": "pink",
            "search-2": "orange",
            "search-3": "indigo",
            "search-4": "yellow",      
            "chip-1":"orange",
            "chip-2":"green",
            "show-1":"violet",
            "show-2":"purple",    
            "show-3":"blue",
            "cast-1":"yellow",
            "cast-2":"orange",
            "cast-3":"red",         
            "back-1": "blue",
            "back-2": "green",     
            "season-1": "pink",
            "season-2": "red",
            "summary-1": "yellow",
            "summary-2": "orange",
            "summary-3": "red",
            "summary-4": "green",                                                        
            "summary-5": "brown",                                                        
          }
        }        
      }
    ]
  })],
}