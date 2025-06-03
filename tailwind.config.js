/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      screens: {
        md: { max: "700px" },
        lg: { min: "701px", max: "1024px" },
        xl: { min: "1025px", max: "1536px" },
        xxl: { min: "1537px" },
      },
    },
  },
  plugins: [],
};
