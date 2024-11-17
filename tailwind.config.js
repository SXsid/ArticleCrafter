/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-purple': '#B794F4',
        'custom-white':'#FED7E2',
        'card-background-color':'rgba(0,0,0,0.13)',
        'gradient-start': '#B794F4',
        'gradient-end': '#FED7E2',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'], 
      },
      
      backgroundImage: {
        'gradient-text': 'linear-gradient(90deg, #B794F4, #FED7E2)',
      },
    },
  },
  plugins: [
  ]
}

