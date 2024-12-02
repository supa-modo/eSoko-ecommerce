/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "brand-primary": "rgba(255,115,92,255)",
        "brand-secondary": "#3498DB",
      },
    },
  },
  plugins: [],
};
