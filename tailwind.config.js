/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      'mobileLandscape': { 'raw': '(max-height: 400px) and (orientation: landscape)' },
      '-md': { 'raw': '(max-width: 700px)' },
    },

    extend: {
      fontFamily: {
        body: ['Archivo', 'sans-serif'],
        'magicalGameFont': ['magicalGameFont', 'sans-serif']
      },
      fontWeight: {
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
      },
      colors: {
        textGray: '#9d9d9e'
      },
    },
  },
  plugins: [],
}
