/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0ea5a4", // teal-ish
        accent: "#7c3aed", // purple
        neutral: "#111827" // slate/near-black
      },
    },
  },
  plugins: [],
}
