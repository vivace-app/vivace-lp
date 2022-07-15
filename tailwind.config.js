/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#34bcd4',
          secondary: '#fcf9fb',
          accent: '#EEAF3A',
          neutral: '#ace0f9',
          'base-100': '#d4ebf5',
          info: '#3ABFF8',
          success: '#36D399',
          warning: '#FBBD23',
          error: '#F87272',
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
}
