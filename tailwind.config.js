/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "lyria-primary": "#6F4E37", // Coffee brown
        "lyria-secondary": "#C4A484", // Latte cream
        "lyria-accent": "#3E2723", // Dark coffee
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        serif: ["var(--font-lora)"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
