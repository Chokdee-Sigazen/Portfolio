/*eslint-env node*/
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    
  ],
  theme: {
    extend: {backgroundSize: {
      'size-200': '200% 200%',
    },
    backgroundPosition: {
      'pos-0': '0% 0%',
      'pos-100': '100% 100%',
    }},
    
    fontFamily: {
      'sans': ['Helvetica', 'Arial', 'sans-serif'],
      'inter':[ 'Inter', 'sans-serif'],

    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}