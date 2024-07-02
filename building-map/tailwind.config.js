/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: [
    "./index.html",
    "./src/*.{js,jsx}",
    "./src/routes/*.{js,jsx}",
    "./src/routes/**/*.{js,jsx}",
    "./src/routes/**/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
