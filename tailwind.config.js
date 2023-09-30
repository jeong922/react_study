/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
        blink: {
          '0%, 100%': {
            borderRight: '3px solid rgb(229, 229, 229)',
          },
          '50%': {
            borderRight: '3px solid transparent',
          },
        },
        blinkB: {
          '0%, 100%': {
            borderRight: '3px solid black',
          },
          '50%': {
            borderRight: '3px solid transparent',
          },
        },
      },
      animation: {
        blink: 'blink 1.2s infinite',
        blinkB: 'blinkB 1.2s infinite',
      },
    },
  },
  plugins: [],
};
