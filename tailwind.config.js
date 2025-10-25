/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: [
		'./components/**/*.{js,vue,ts}',
		'./layouts/**/*.vue',
		'./pages/**/*.vue',
		'./plugins/**/*.{js,ts}',
		'./nuxt.config.{js,ts}',
		'./app.vue',
	],
	theme: {
		extend: {
			colors: {
				primary: '#e4b764',
			},
		},
	},
	plugins: [],
};
