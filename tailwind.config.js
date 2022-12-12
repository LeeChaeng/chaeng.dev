/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      mobile: "390px",
      tablet: "640px",
    },
    extend: {
      colors: {
        white: "#ffffff",
        text: "#425466",
        topColor: "#87C6D833",
        bottomColor: "#FE7B810D",
      },
    },
  },
  plugins: [],
};
