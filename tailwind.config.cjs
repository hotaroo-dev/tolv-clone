/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        inset: 'inset 0 0 0 1px #0969da'
      }
    }
  },
  plugins: []
}
