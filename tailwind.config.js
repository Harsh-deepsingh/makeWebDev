/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./packages/ui/**/*.{js,ts,jsx,tsx}",
    "./apps/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "theme-border": "#747474",
        "theme-bar": "#1B1B1B",
        "theme-button": "#343434",
      },
    },
  },
  plugins: [],
};
