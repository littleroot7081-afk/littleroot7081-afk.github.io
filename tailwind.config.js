/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FEFCF8',
          100: '#FDF6EE',
          200: '#FAF0E4',
          300: '#F5E6D3',
          400: '#E8C9A8',
          500: '#D4A87A',
        },
        terra: {
          50: '#FDF0EB',
          100: '#F9D6C8',
          200: '#F0A882',
          300: '#E8956D',
          400: '#D4724A',
          500: '#B5441B',
          600: '#8F3615',
          700: '#6B2810',
        },
        grove: {
          50: '#EEF4F0',
          100: '#D1E4D8',
          200: '#9DC4AD',
          300: '#6FA48A',
          400: '#4A7C5F',
          500: '#2D5A40',
          600: '#1A3D2A',
          700: '#0F2419',
        },
        espresso: {
          100: '#C4A882',
          200: '#9C7D5C',
          300: '#7B5A3A',
          400: '#5A3D22',
          500: '#2A1810',
        },
      },
      fontFamily: {
        heading: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body: ['"Outfit"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.2em',
      },
    },
  },
  plugins: [],
}
