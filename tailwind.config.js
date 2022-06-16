/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'dm': ["DM Sans", "sans-serif"], 
    },
    extend: {
      colors: { 
      },
    },
    container: { 
      screens: {
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "1132px", 
      },
    },
  },
  plugins: [],
};
