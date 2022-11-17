/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#BDEB00",
        secondary: {
          100: "#1E1F25",
          900: "#131517",
        },
      },
    },
  },
  plugins: [require("@headlessui/tailwindcss")],
};
