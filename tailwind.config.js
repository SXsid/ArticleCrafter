/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-purple': 'rgba(190, 44, 206, 0.89)',
        'custom-white':'rgba(255,255,255,0.38)'
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'], 
      },
    },
  },
  plugins: [],
}

