require('dotenv').config();

const colors = require('tailwindcss/colors');

const enablePurge = process.env.ENABLE_PURGE || false;

module.exports = {
  purge: {
    enabled: enablePurge,
    content: [
      './src/**/*.html',
      './src/**/*.scss'
    ]
  },
  darkMode: 'class',
  theme: {
    extend: {},
    colors: {
      ...colors,
      primary: '#11c1ab',
      secondary: '#00D1C4',
      tertiary: '#FFB730',
      danger: '#ff3048',
      white: '#fff',
      grey: {
        DEFAULT: '#f4f5f6',
        dark: '#eceff1',
      },
      disabled: '#d2d2d2',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
