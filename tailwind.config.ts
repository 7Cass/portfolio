import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize: {
        '10xl': '10rem',
        xxl: '11rem',
        '2xxl': '12rem',
        '3xxl': '13rem',
      },
      animation: {
        primary: 'primary 13s linear infinite',
        secondary: 'secondary 13s linear infinite',
      },
      keyframes: {
        primary: {
          from: {
            left: '0%',
          },
          to: {
            left: '-100%',
          },
        },
        secondary: {
          from: {
            left: '100%',
          },
          to: {
            left: '0%',
          },
        },
      },
    },
  },
  plugins: [require('tailwindcss-animation-delay')],
};
export default config;
