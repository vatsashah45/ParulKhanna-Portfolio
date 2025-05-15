import type { Config } from 'tailwindcss';

const config: Config = {
  //darkMode: 'class', // ✅ critical line!
  darkMode: ['class', '.themed-body'], // apply dark mode class to body
  content: [
    './src/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#6366f1',
          dark: '#818cf8',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
