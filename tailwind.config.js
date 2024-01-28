/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: 'red',
        secondaryColor: '#dc143c',
        white: '#FFFFFF',
        mediumGray: '#DDDDDD',
        newBlack: '#15161D',
      },
      fontFamily: {
        default: ['Open Sans', 'sans-serif'],
        secondary: ['Montserrat', 'sans-serif'],
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      sizes: {
        xsmall: '8rem',
        small: '1.6rem',
        medium: '2.4rem',
        large: '3.2rem',
        xlarge: '4.0rem',
        xxlarge: '4.8rem',
        huge: '5.6rem',
        xhuge: '6.4rem',
      },
      spacings: {
        xsmall: '8rem',
        small: '1.6rem',
        medium: '2.4rem',
        large: '3.2rem',
        xlarge: '4.0rem',
        xxlarge: '4.8rem',
        huge: '5.6rem',
        xhuge: '6.4rem',
      },
    },
  },
  plugins: [],
};
