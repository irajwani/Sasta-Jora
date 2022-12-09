module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: true, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        tablet: '960px',
        desktop: '1248px'
      },
      fontFamily: {
        primary: "'Montserrat', sans-serif",
        serif: 'PTSerif',
        roboto: "'Roboto', sans-serif"
      },
      colors: {
        black: '#120f07',
        maroon: '#7d0e2d',
        gold: '#f5dd05',
        white: '#ffffff',
        paper: 'rgb(255 255 255)',
        brown: '#A0522D'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'), require('@tailwindcss/forms'), require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp')
  ],
}
