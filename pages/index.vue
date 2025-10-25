<template>
	<div
		class="h-screen font-bold text-center text-2xl py-20 bg-white dark:bg-gray-800 dark:text-white"
	>
		<nuxt-link
			to="/job"
			class="px-4 py-2 shadow-md bg-primary border rounded-md"
		>
			Click me to see another layout!
		</nuxt-link>
	</div>
</template>

<script setup lang="ts">
	definePageMeta({
		layout: 'default',
	});
</script>
