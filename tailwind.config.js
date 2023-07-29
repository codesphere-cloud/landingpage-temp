/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html'],
  theme: {
    extend: {
      colors: {
        'custom-bg': '#110e27',
        'custom-card-bg': '#0f172a',
        'custom-border': '#1e293b',
        'custom-accent': '#814BF6',
        // custom accent 2-3 currently mainly used for blurry background accents
        'custom-accent-2': '#80caff',
        'custom-accent-3': '#4f46e5',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require("tailwindcss-inner-border"),
  ],
}
