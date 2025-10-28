const plugin = require('tailwindcss/plugin');

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
		container: {
			center: true,
			padding: '15px',
		},
	},
	plugins: [
		plugin(function (key) {
			key.addComponents({
				'.container': {
					maxWidth: '100%',
					'@screen sm': {
						maxWidth: '640px',
					},
					'@screen md': {
						maxWidth: '768px',
					},
					'@screen lg': {
						maxWidth: '1024px',
						paddingLeft: '1.5rem',
						paddingRight: '1.5rem',
					},
					'@screen xl': {
						maxWidth: '1280px',
						paddingLeft: '1.5rem',
						paddingRight: '1.5rem',
					},
					'@screen 2xl': {
						maxWidth: '1280px',
						paddingLeft: '1.5rem',
						paddingRight: '1.5rem',
					},
				},
			});
		}),
	],
};
