/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // Ensure that these paths match the structure of your project
  theme: {
    extend: {
      colors: {
        customRose: "#FF66B2", // Custom rose color
      },
      fontFamily: {
        rubik: ["Rubik+Distressed", "sans-serif"], // Custom font with default sans-serif fallback
      },
      animation: {
        gradient: 'gradient 6s ease infinite alternate',  // Slow animation (10s duration)
      },
      keyframes: {
        gradient: {
          '0%': {
            backgroundPosition: '0% 0%',
          },
          '50%': {
            backgroundPosition: '100% 100%',
          },
          '100%': {
            backgroundPosition: '0% 0%',
          },
        },
      },
    },
  },
  plugins: [], // Empty for now, but you can add plugins here later
};
