<template>
	<label for="theme-toggle" class="flex items-center cursor-pointer">
		<div class="relative">
			<input
				type="checkbox"
				id="theme-toggle"
				class="sr-only"
				:checked="isDarkMode"
				@change="toggleTheme"
			/>
			<div
				class="block w-12 h-7 rounded-full bg-gradient-to-b from-gray-700 to-black border-primary border"
			></div>
			<div
				class="dot absolute left-1 top-1 bg-white dark:bg-gray-300 border-primary border w-5 h-5 rounded-full transition-transform duration-300 transform"
				:class="{ 'translate-x-full': isDarkMode }"
			>
				<div class="flex items-center justify-center w-full h-full">
					<template v-if="!isDarkMode">
						<svg
							class="h-4 w-4 text-yellow-500"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M12 3v1m0 16v1m9-9h1M3 12H2m15.325-4.275l-.707-.707M6.364 17.636l-.707.707M17.636 6.364l.707-.707M6.364 6.364l-.707-.707"
							/>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M12 11a3 3 0 100 6 3 3 0 000-6z"
							/>
						</svg>
					</template>
					<template v-else>
						<svg
							class="h-4 w-4 text-indigo-500"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
							/>
						</svg>
					</template>
				</div>
			</div>
		</div>
	</label>
</template>

<script setup>
	const colorMode = useColorMode();

	const isDarkMode = computed(() => colorMode.value === 'dark');

	const toggleTheme = () => {
		colorMode.preference = isDarkMode.value ? 'light' : 'dark';
	};
</script>
