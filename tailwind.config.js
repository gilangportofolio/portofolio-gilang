/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Halant', 'serif'],
        'heading': ['"Noto Serif Ottoman Siyaq"', 'serif'],
      },
      fontSize: {
        'h1': '1.382rem',  // 22.08px
        'h2': '1.295rem',  // 20.8px
        'h3': '1.214rem',  // 19.36px
        'h4': '1.138rem',  // 18.24px
        'h5': '1.067rem',  // 17.12px
        'small': '0.937rem' // 15.04px
      },
    },
  },
  plugins: [],
}

