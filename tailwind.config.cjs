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
        }
      }
    },    
    themes: [
      {
        name: "cartoon",
        extend: {
          colors: {
            'header-fg': "#94a3b8",
            'header-bg': "#f8fafc",
            'footer-fgi': "#94a3b8",
            'footer-bg': "#f8fafc",
            'footer-fga': "#475569",
            'main-fg': "#f8fafc",
            "message-bg": "#e2e8f0",
            "message-fg": "#64748b",
            "tag-bg": "#e2e8f0",
            "tag-fg": "#64748b",
            "heading-fg": "#94a3b8",
            "search-icon-fg": "#94a3b8",
            "search-placeholder-fg": "#94a3b8",
            "search-selection-bg": "orange",
            "search-bg": "#cbd5e1",
            "search-focus-outline": "#94a3b8",
            "search-fg": "#475569",
            "spinner-fg":"#94a3b8",
            "spinner-bg":"#cbd5e1",
            "chip-fg":"#475569",

            "chip-bg":"#e2e8f0",
            "show-1":"violet",
            "show-2":"purple",    
            "show-3":"blue",
            "cast-1":"yellow",
            "cast-2":"orange",
            "cast-3":"red",         
            "back-icon": "#94a3b8",
            "back-2": "#94a3b8",     
            "season-1": "pink",
            "season-2": "#e2e8f0",
            "summary-1": "yellow",
            "summary-2": "orange",
            "summary-3": "#e2e8f0",
            "summary-4": "green",                                                        
            "summary-5": "brown",                                                        
          }
        }        
      }
    ]
  })],
}