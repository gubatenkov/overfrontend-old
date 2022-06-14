const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      primary: '#663399',
      light: '#F2F4F5',
      borderGrey: '#e4e7eb',
      transparent: 'rgba(0, 0, 0, 0)',
    },
    container: {
      center: true,
      screens: {
        DEFAULT: '1232px',
      },
      padding: {
        DEFAULT: '1rem',
      },
    },
    extend: {
      colors: {
        black: '#36395a',
      },
      fontFamily: {
        sans: ['San-Francisco', ...defaultTheme.fontFamily.sans],
        inter: ['Inter', ...defaultTheme.fontFamily.sans],
        // nunito: ['Nunito', ...defaultTheme.fontFamily.sans],
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#36395a',
            a: {
              color: '#3182ce',
              textDecoration: 'underline',
              '&:hover': {
                color: '#2c5282',
              },
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
  ],
}
