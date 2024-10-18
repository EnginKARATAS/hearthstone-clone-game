/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        belwebold: ['Belwebold', 'sans-serif'],  
      },
      backgroundImage: {
        'game-board': "url('/path/to/your/image.jpg')",
      },
    },
  },
  plugins: [],
}

