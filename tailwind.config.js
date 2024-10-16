/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'game-board': "url('/path/to/your/image.jpg')",
      },
    },
  },
  plugins: [],
}

