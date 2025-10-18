/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './libs/**/*.{ts,html}',
    './apps/**/*.{ts,html}',
    './.storybook/**/*.{ts,html,scss}'
  ],
  theme: { extend: {} },
  plugins: [],
};
