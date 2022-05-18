const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xxs: "280px",
        xs: "375px",
        ...defaultTheme.screens,
      },
    },
  },
  plugins: [],
};
