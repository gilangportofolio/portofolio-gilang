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
      transitionProperty: {
        'colors': 'color',
      },
      transitionDuration: {
        '500': '500ms',
      },
      animation: {
        'text-color': 'textColor 9s infinite',
      },
      keyframes: {
        textColor: {
          '0%, 33%': { color: '#3B82F6' },  // blue-500
          '34%, 66%': { color: '#10B981' }, // green-500
          '67%, 100%': { color: '#F59E0B' } // orange-500
        }
      }
    },
  },
  plugins: [],
}

