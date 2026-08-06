/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./about/**/*.html",
    "./contact/**/*.html",
    "./account/**/*.html",
    "./pet/**/*.html",
    "./js/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Poppins", "sans-serif"],
      },

      colors: {
        primary: "#4F7D5A",
        secondary: "#D8B46A",
        accent: "#A8C3A0",
        background: "#F8F6F2",
        surface: "#FFFFFF",
        text: "#2D2D2D",
        success: "#4CAF50",
        warning: "#D8B46A",
        error: "#D9534F",
        disabled: "#D6D6D6",
        divider: "#D6D6D6"
      },

      borderRadius: {
        card: "15px",
      },
    },
  },
  plugins: [],
};

