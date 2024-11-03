/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./layout/**/*.liquid', './sections/**/*.liquid', './snippets/**/*.liquid', './templates/**/*.liquid'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['{{ settings.primary_font.family }}', 'sans-serif'],
        secondary: ['{{ settings.secondary_font.family }}', 'serif'],
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
};

