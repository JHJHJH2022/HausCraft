/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {},

  themes: [],
  daisyui: {
    themes: ["forest"],
  },
  plugins: [require("daisyui")],
};
