/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./public/**/*.{html,js}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Poppins'],
      },
      fontSize: {
        xxs: ['10px', '14px'],
      },
      backgroundImage: {},
      colors: {
        'livescore-bg': '#111111',
        'livescore-border': '#222222',
        'livescore-item': '#181818',
        'livescore-item-hover': '#333333',
        'livescore-active': '#fe6c28',
      },
    },
  },
  plugins: [],
}
