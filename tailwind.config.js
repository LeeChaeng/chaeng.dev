/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      tablet: "640px",
    },
    extend: {
      colors: {
        white: "#ffffff",
        title: "#0A2540",
        text: "#425466",
        topColor: "#87C6D833",
        bottomColor: "#FE7B810D",
        accent: "#635BFF",
      },
    },
  },
  plugins: [],
};
