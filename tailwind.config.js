/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: '#1E3A8A',
        lightBlue: '#60A5FA',
        accentBlue: '#2563EB',
        backgroundBlue: '#EFF6FF',
        textBlue: '#1E40AF',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-in': 'fade-in 1s ease-out',
      },
    },
  },
  plugins: [],
}