/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./about/**/*.html",
    "./contact/**/*.html",
    "./account/**/*.html",
    "./pets/**/*.html",
    "./js/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Poppins", "sans-serif"],
      },

      boxShadow: {
        input: "inset 0 2px 4px rgba(0, 0, 0, 0.15)",
        card: "0 8px 24px rgba(0, 0, 0, 0.08)",
        cardHover: "0 12px 32px rgba(0, 0, 0, 0.25)",
      },

      colors: {
        primary: "#466F50",
        primaryHover: "#32553B",
        secondary: "#D8B46A",
        accent: "#A8C3A0",
        background: "#F8F6F2",
        hero: "#D5CBC5",
        surface: "#FFFFFF",
        text: "#2D2D2D",
        success: "#4CAF50",
        successBg: "#EAF7EC",
        warning: "#665000",
        warningBg: "#FFF7E6",
        danger: "#D9534F",
        dangerBg: "#FCECEC",
        dangerHover: "#AF423E",
        disabled: "#D6D6D6",
        divider: "#D6D6D6",
        ageBg: "#E8F3EC",
        male: "#2D5BD1",
        maleBg: "#E6F0FF",
        size: "#665000",
        sizeBg: "#FFF3D6",
        female: "#7A3485",
        femaleBg: "#F2D6FF"
      },

      borderRadius: {
        card: "15px",
      },
    },
  },
  plugins: [],
};

