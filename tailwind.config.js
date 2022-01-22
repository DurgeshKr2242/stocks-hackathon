module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",

  theme: {
    screens: {},
    extend: {
      colors: {
        bgblack: "#0D1117",
        bgBlackSec: "#141921",
        bgWhiteSec: "#f0f1f2",
        bgyellow: "#FCDC60",
      },
    },
  },
  plugins: [],
};
