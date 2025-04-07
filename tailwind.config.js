/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx,jsx}"],
  theme: {
    extend: {
      colors:{
        text:"#010514",
        "text-highlight-1":"#00CBB8",
        "text-highlight-2":"#F48C06",
        title:"#2F327D",
        background:"#fff",
        "background-highlight-1":"#49BBBD",
        "background-highlight-2":"#252641",
        "background-highlight-3":"#29B9E7",
        icon:"#fff",
        "white-03":"rgba(255,255,255,0.3)"
      }
    },
  },
  plugins: [],
}

