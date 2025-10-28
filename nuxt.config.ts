// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2025-10-24',
	devtools: { enabled: true },
	modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode', 'vue3-carousel-nuxt'],
	colorMode: {
		classSuffix: '',
	},
});
