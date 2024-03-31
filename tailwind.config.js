/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        myspace: {
          'blue-100': '#d5e8fb', // lightest blue
          'blue-200': '#b1d0f0', // left col blue
          'blue-300': '#6699cc', // right col blue + navbar
          'blue-500': '#003399', // darkest blue
          'blue-600': '#04369a', // dark link blue
          'blue-700': '#336699', // blue text inside col
          'blue-800': '#1548ae',

          'orange-100': '#ffcc99',
          'orange-200': '#ff6600',
          'orange-300': '#ff9933',

          'red-600': '#cc0000',

          'music': '#990033'
        },
        dark: '#151719',
        'dark-ish': '#111213',
        'myspace-light': '#e5e5e5',
      },
      width: {
        800: '800px',
      },
    },
  },
  plugins: [],
}

