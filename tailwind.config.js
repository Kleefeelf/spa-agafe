/*eslint-env node*/
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#261C0F',
        secondary: '#8C7C68',
        neutral: '#594F43',
        gray: '#201B1B',
        'gray-hover': '#393131',
        dark: '#0D0000',
        'light-gray': '#7A6868',
        light: '#FFFFFF',
      },
    },
  },
  plugins: [],
};
