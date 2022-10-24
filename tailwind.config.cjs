/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.tsx"
  ],
  theme: { 
    fontSize:{
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
     '2xl': 32
    },
    colors:{
    'transparent' : 'transparent',
    'black':'#000',
    'white':'#fff',
    'gray-900': '#090909',
    'gray-800': '#202024',
    'gray-200': '#7C7C8A',
    'gray-100': '#E1E1E6',
    'cyan-500': '#61DAFB',
    'cyan-300': '#9BE1FB'
  },
    extend: {
     
      fontFamily:{
        sans:"Inter, sans-serif"
      }
    },
  },
  plugins: [],
}
