/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        inset: 'inset 0 0 0 1px #0969da',
        cart: 'rgb(0 0 0 / 20%) 0px 0px 1px, rgb(0 0 0 / 20%) 0px 1px 2px',
        card: '0px 5px 10px 0px rgb(0 0 0 / 25%)'
      },
      aspectRatio: {
        '2/1': '2 / 1'
      }
    }
  },
  plugins: []
}
