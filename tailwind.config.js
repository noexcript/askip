/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customRose: '#FF66B2',  // Cor personalizada de rosa
      },
    },
  },
  plugins: [],
}