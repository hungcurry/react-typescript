/*@type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3e0df0',
        'primary-hover': '#5328ee',
        'primary-active': '#3a04fa'
      },
      container: {
        center: true,
        padding: '12px',
        screens: {
          DEFAULT: '1024px'
        }
      },
      spacing: {
        '12': '12px',
        '40': '40px',
        '180': '180px'
      },
      borderRadius: {
        '40': '40px'
      }
    },
  },
  plugins: [],
}

