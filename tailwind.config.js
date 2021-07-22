// const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  plugins: [],
  purge: {
    content: ['./templates/**/*.twig', './src/**/*.js'],
    options: {
      safelist: [""],
    },
  },
  theme: {
    extend: {
    },
  },
  variants: {},
};
