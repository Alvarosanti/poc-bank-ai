import flowbite from 'flowbite/plugin';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
    './node_modules/flowbite-react/**/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Saira"', '"Segoe UI"', 'system-ui', 'sans-serif'],
        body: ['"Source Sans 3"', '"Segoe UI"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [flowbite],
};
