/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/main.jsx",
    "./src/routes/*.{js,jsx}",
    "./src/routes/**/*.{js,jsx}",
    "./src/routes/**/**/*.{js,jsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
