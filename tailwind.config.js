/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: '#181818',
        ink: '#f1f1f1',
        muted: '#969696',
        line: '#303030',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        container: '800px',
      },
    },
  },
  plugins: [],
}