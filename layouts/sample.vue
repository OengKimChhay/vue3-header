<template>
	<header class="sticky top-0 z-50 bg-white shadow-sm">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
			<div
				class="flex items-center justify-between h-24 border-2 border-gray-300 rounded-full px-6 lg:px-10 bg-white shadow-md"
			>
				<div class="flex-shrink-0">
					<img src="/logo.png" alt="logo" class="w-16 h-16" />
				</div>

				<nav
					class="hidden lg:flex items-center space-x-8 xl:space-x-12 flex-1 justify-center"
				>
					<NuxtLink
						v-for="item in menuItems"
						:key="item.id"
						:to="item.path"
						class="relative text-gray-700 font-medium text-base hover:text-blue-600 transition-colors duration-200 pb-1"
						:class="{ '!text-blue-600 !font-semibold': isActive(item.path) }"
					>
						{{ item.label }}
						<span
							v-if="isActive(item.path)"
							class="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full"
						/>
					</NuxtLink>
				</nav>

				<div
					class="hidden lg:flex items-center space-x-3 pl-8 border-l-2 border-gray-300"
				>
					<span class="text-gray-700 font-medium text-sm">游兴</span>
				</div>

				<div class="flex lg:hidden items-center space-x-4">
					<button
						@click="toggleMobileMenu"
						class="flex flex-col space-y-1.5 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
						aria-label="Toggle menu"
					>
						<span
							class="block w-6 h-0.5 bg-gray-700 rounded transition-all duration-300"
							:class="{ 'rotate-45 translate-y-2': isMobileMenuOpen }"
						/>
						<span
							class="block w-6 h-0.5 bg-gray-700 rounded transition-all duration-300"
							:class="{ 'opacity-0': isMobileMenuOpen }"
						/>
						<span
							class="block w-6 h-0.5 bg-gray-700 rounded transition-all duration-300"
							:class="{ '-rotate-45 -translate-y-2': isMobileMenuOpen }"
						/>
					</button>
				</div>
			</div>

			<Transition
				enter-active-class="transition duration-200 ease-out"
				enter-from-class="opacity-0 -translate-y-2"
				enter-to-class="opacity-100 translate-y-0"
				leave-active-class="transition duration-150 ease-in"
				leave-from-class="opacity-100 translate-y-0"
				leave-to-class="opacity-0 -translate-y-2"
			>
				<nav
					v-if="isMobileMenuOpen"
					class="lg:hidden mt-4 bg-white border-2 border-gray-200 rounded-3xl shadow-lg overflow-hidden"
				>
					<NuxtLink
						v-for="item in menuItems"
						:key="item.id"
						:to="item.path"
						@click="closeMobileMenu"
						class="block px-6 py-4 text-gray-700 font-medium border-b border-gray-100 last:border-b-0 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
						:class="{
							'bg-blue-50 !text-blue-600 !font-semibold': isActive(item.path),
						}"
					>
						{{ item.label }}
					</NuxtLink>
				</nav>
			</Transition>
		</div>

		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-6">
			<button
				class="group relative bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold px-8 py-3.5 rounded-full text-base shadow-lg shadow-blue-500/40 hover:shadow-xl hover:shadow-blue-500/50 hover:-translate-y-1 active:translate-y-0 transition-all duration-300 ease-out overflow-hidden"
			>
				<span class="relative z-10">Create Candidate</span>
				<div
					class="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
				/>
			</button>
		</div>
	</header>
	<slot />
</template>

<script setup lang="ts">
	interface MenuItem {
		id: number;
		label: string;
		path: string;
	}

	const route = useRoute();
	const isMobileMenuOpen = ref(false);

	const menuItems: MenuItem[] = [
		{ id: 1, label: 'Home', path: '/job' },
		{ id: 2, label: 'View CV', path: '#' },
		{ id: 3, label: 'Hiring Job', path: '#' },
		{ id: 4, label: 'Dashboard', path: '#' },
		{ id: 5, label: 'Settings', path: '#' },
	];

	const isActive = (path: string) => {
		return route.path === path;
	};

	const toggleMobileMenu = () => {
		isMobileMenuOpen.value = !isMobileMenuOpen.value;
	};

	const closeMobileMenu = () => {
		isMobileMenuOpen.value = false;
	};

	watch(
		() => route.path,
		() => {
			isMobileMenuOpen.value = false;
		}
	);
</script>
