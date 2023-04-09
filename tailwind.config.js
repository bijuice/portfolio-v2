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
        secondary: {
          500: "#EAE7B1",
          400: "hsl(56.8,30%,80.6%)",
        },
        tertiary: "#A6BB8D",
        alternate: {
          500: "#61876E",
          400: "hsl(140.5,16.4%,55%)",
          300: "hsl(140.5,16.4%,65%)",
        },
      },
    },
  },
  plugins: [],
}
