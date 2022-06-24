/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      dm: ["DM Sans", "sans-serif"],
    },
    extend: {
      colors: {
        "brand-dark": "#444444",
        "brand-brown": "#AA8453",
        "brand-brown-light": "#9A7545",
        "brand-dark-blue": "#353653",
        "brand-gray-light": "#F3F3F3",
        "brand-gray-dark-300": "#666666",
        "brand-pink": "#F2305F",
        "brand-pink-dark": "#D02A52",
        "brand-gray": "#FAFAFA",
        "brand-gray-50": "#EEEEEE",
        "brand-gray-100": "#F8F7FA",
        "brand-gray-light-100": "#F9F9F9",
        "brand-gray-light-200": "#DDDDDD",
        "brand-gray-light-700": "#D9D9D9",
        "brand-gray-light-800": "#F8F8F8",
        "brand-gray-light-900": "#999999",
      },
      boxShadow: {
        "brand-xl": "0 4px 30px 0 rgba(0,0,0, 0.25)",
      },
      height: {
        228: "228px",
      },
      width: {
        295: "295px",
      },
    },
    container: {
      screens: {
        lg: "1024px",
        xl: "1240px",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("tailwindcss-labeled-groups")(["child"]),
  ],
};
