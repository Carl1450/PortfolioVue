/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary:'#2D336B',
        secondary:'#A9B5DF',
      },
    },
  },
  darkMode:'class',
  mode:'jit',
  plugins: [
    function({addUtilities,theme}){
      const newUtilities = {
        '.stroke-text':{
          '--tw-text-opacity':'1',
          '-webkit-text-stroke-width':'1.4px',
          '-webkit-text-fill-color':'transparent',
          '-webkit-text-stroke-color':theme('colors.secondary'),
        },
        '.text-stroke-primary':{
          '-webkit-text-stroke-color':theme('colors.primary'),
        },
        '.dark .text-stroke-secondary':{
          '-webkit-text-stroke-color':theme('colors.secondary'),
        }
      };
      addUtilities(newUtilities,['responsive','dark']);
    }
  ],
}

