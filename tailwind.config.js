module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    fontFamily: {
      lato: ['lato', 'sans-serif'],
    },
    extend: {
      rotate: {
        30: '30deg',
        '-30': '-30deg',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
