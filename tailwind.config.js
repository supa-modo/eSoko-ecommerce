/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "brand-primary": "#2C3E50",
        "brand-secondary": "#3498DB",
      },
    },
  },
  plugins: [],
};
