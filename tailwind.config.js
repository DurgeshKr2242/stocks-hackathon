module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",

  theme: {
    screens: {
      mobileL: "425px",
    },
    extend: {
      colors: {
        bgBlack: "#0D1117",
        bgBlackSec: "#161B22",
        bgWhiteSec: "#f0f1f2",
        bgyellow: "#FCDC60",
      },
    },
  },
  plugins: [],
};
