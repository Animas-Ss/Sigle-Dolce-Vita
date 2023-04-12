/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#e30052",
        dorado: "hsl(45,87%,50%)",
        secundary: "#EAEAFC",
        footer: "#2e3e5c"
      },
      boxShadow: {
        fondo: "-8px -8px 25px rgba(255, 255, 255, 1), 8px 8px 25px rgba(0, 0, 0, 0.25), inset 3px 3px 10px rgba(0, 0, 0, 0.1), inset -1px -1px 15px rgba(255, 255, 255, 1)"
      },
      fontFamily: {
        ephesis: 'Ephesis, cursive',
        Akronim: 'Akronim, cursive',
        Bangers: 'Bangers, cursive',
        BebasNeue: 'Bebas Neue, cursive',
        DancingScript: 'Dancing Script, cursive',
        Fasthand: 'Fasthand, cursive',
        KaushanScript: 'Kaushan Script, cursive',
        Roboto: 'Roboto'
      },
      backgroundImage: {
        fondo: "url('fondo.jpg')"
      }
    },
  },
plugins: [],
}