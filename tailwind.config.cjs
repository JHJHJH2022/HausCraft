/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FE000B",
        secondary: "rgba(0, 0, 0,0.8)",
      },
    },
  },
  plugins: [],
};
