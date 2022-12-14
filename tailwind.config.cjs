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
        icons: ['apple', 'menu', 'close', 'forward-5', 'close-filled', 'close-outline', 'humidity', 'cut', 'home', 'settings', 'next-outline', 'previous-outline', 'arrow-up']
      }
    }),
  ],
}
