/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3C6255",
        secondary: "#EAE7B1",
        tertiary: "#A6BB8D",
        alternate: "#61876E",
      },
    },
  },
  plugins: [],
}
