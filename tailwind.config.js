/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          500: "#0ABD90",
          400: "#2ED9A9",
          200: "#A4F6D7",
        }
      }
    },
  },
  plugins: [],
}

