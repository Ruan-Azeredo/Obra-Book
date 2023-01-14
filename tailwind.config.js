/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#080911',
        mainColor: '#3d54ba',
        darkGray: '#3d3d4e',
        lightGray: '#4f4756',
        green: '#4EBA3D',
        red: '#E54F6D'
      },
    },
  },
  plugins: [],
}
