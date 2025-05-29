/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}", // React project ke liye required paths
    ],
    theme: {
      extend: {
        colors: {
          primary: "#0D6EFD", // blue
          secondary: "#000000", // black
          accent: "#ffffff", // white
        },
        fontFamily: {
          sans: ["Inter", "sans-serif"],
        },
      },
    },
    
    plugins: [],
  };
  