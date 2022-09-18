const { Icons } = require('tailwindcss-plugin-icons')

module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
	theme: {
		extend: {},
	},
	plugins: [
    Icons({
      carbon: {
        icons: ['apple']
      }
    }),
  ],
}
