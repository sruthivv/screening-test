/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.vue',
    './client/layouts/**/*.vue',
    './layouts/**/*.vue',
    './client/layouts/**/*.vue',
    './themes/**/*.vue',
    './client/themes/**/*.vue'
    // './plugins/**/*.{js,ts}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans]
      }
    },
    fontSize: {
      xxs: '.7rem'
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio')
  ],
}

