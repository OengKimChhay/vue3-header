<template>
	<nav
		class="w-full xl:pl-[200px] py-2 bg-primary flex items-center xl:justify-center justify-end"
	>
		<!-- Desktop Menu -->
		<div class="hidden xl:flex items-center justify-center">
			<ul class="flex">
				<li v-for="item in primaryMenus" :key="item.label">
					<Dropdown v-if="item?.submenu && item.submenu.length > 0">
						<template #trigger="{ isOpen }">
							<NuxtLink
								class="hover:bg-gradient-to-b hover:from-gray-700 hover:to-gray-900 hover:text-primary hover:rounded-full px-3.5 mx-2 py-1.5 transition-colors duration-300 text-sm uppercase font-semibold"
								:class="{
									'bg-gradient-to-b from-gray-700 to-gray-900 text-primary rounded-full':
										isOpen,
								}"
							>
								{{ item.label }}
							</NuxtLink>
						</template>
						<template #content="{ close }">
							<NuxtLink
								v-for="subItem in item.submenu"
								:key="subItem.label"
								:to="subItem.link"
								@click="close"
								class="z-50 block px-3 py-1 my-1 text-xs rounded-full bg-white/20 hover:bg-white/40"
							>
								<img
									:src="subItem.icon"
									class="w-5 inline-block mr-1"
									alt="icon"
								/>
								{{ subItem.label }}
							</NuxtLink>
						</template>
					</Dropdown>
					<NuxtLink
						v-else
						:to="item.link"
						class="hover:bg-gradient-to-b hover:from-gray-700 hover:to-gray-900 hover:text-white hover:rounded-full px-3.5 py-1.5 transition-colors duration-300 text-sm uppercase font-semibold"
					>
						{{ item.label }}
					</NuxtLink>
				</li>
			</ul>
			<Account />
		</div>

		<!-- Mobile Menu -->
		<div class="xl:hidden flex items-center justify-end">
			<Account />
			<button
				@click="toggleMobileMenu"
				class="text-white p-2 focus:outline-none"
				aria-label="Toggle menu"
			>
				<svg
					class="w-6 h-6"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						v-if="!isMobileMenuOpen"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h16M4 18h16"
					/>
					<path
						v-else
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M6 18L18 6M6 6l12 12"
					/>
				</svg>
			</button>
			<Transition
				enter-active-class="transition ease-out duration-200"
				enter-from-class="opacity-0 -translate-y-2"
				enter-to-class="opacity-100 translate-y-0"
				leave-active-class="transition ease-in duration-150"
				leave-from-class="opacity-100 translate-y-0"
				leave-to-class="opacity-0 -translate-y-2"
			>
				<div
					v-if="isMobileMenuOpen"
					class="xl:hidden fixed inset-0 z-50 bg-gray-900 overflow-y-auto"
				>
					<div
						class="flex items-center justify-between px-4 py-2 border-b border-gray-800"
					>
						<div class="text-white font-bold text-lg">MENU</div>

						<div class="flex items-center">
							<Language />
							<button
								@click="toggleMobileMenu"
								class="text-white p-2 focus:outline-none"
								aria-label="Close menu"
							>
								<svg
									class="w-6 h-6"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							</button>
						</div>
					</div>

					<ul>
						<li
							v-for="item in primaryMenus"
							:key="item.label"
							class="border-b border-gray-800 last:border-b-0"
						>
							<div v-if="item?.submenu && item.submenu.length > 0">
								<button
									@click="toggleSubmenu(item.label)"
									class="w-full text-left px-5 py-3 text-white hover:bg-gray-800 transition-colors flex items-center justify-between uppercase text-base font-semibold"
								>
									{{ item.label }}
									<svg
										class="w-5 h-5 transition-transform"
										:class="{ 'rotate-180': openSubmenu === item.label }"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M19 9l-7 7-7-7"
										/>
									</svg>
								</button>

								<Transition
									enter-active-class="transition ease-out duration-200"
									enter-from-class="opacity-0 max-h-0"
									enter-to-class="opacity-100 max-h-[500px]"
									leave-active-class="transition ease-in duration-150"
									leave-from-class="opacity-100 max-h-[500px]"
									leave-to-class="opacity-0 max-h-0"
								>
									<div
										v-if="openSubmenu === item.label"
										class="bg-gray-800/50 overflow-hidden"
									>
										<NuxtLink
											v-for="subItem in item.submenu"
											:key="subItem.label"
											:to="subItem.link"
											@click="closeMobileMenu"
											class="flex items-center px-8 py-3.5 text-gray-300 hover:bg-gray-700 hover:text-white transition-colors text-sm"
										>
											<img
												:src="subItem.icon"
												class="w-6 h-6 mr-3"
												alt="icon"
											/>
											{{ subItem.label }}
										</NuxtLink>
									</div>
								</Transition>
							</div>

							<NuxtLink
								v-else
								:to="item.link"
								@click="closeMobileMenu"
								class="block px-5 py-3 text-white hover:bg-gray-800 transition-colors uppercase text-base font-semibold"
							>
								{{ item.label }}
							</NuxtLink>
						</li>
					</ul>

					<div class="border-t border-gray-800 py-4">
						<h3
							class="px-6 py-2 text-gray-400 text-xs uppercase font-semibold tracking-wider"
						>
							Quick Links
						</h3>
						<ul class="space-y-1">
							<li v-for="item in secondaryMenus" :key="item.label">
								<NuxtLink
									:to="item.link"
									@click="closeMobileMenu"
									class="flex items-center px-6 py-3 text-primary hover:bg-gray-800 transition-colors"
								>
									<img
										:src="item.icon"
										:alt="item.label"
										class="w-5 h-5 mr-3"
									/>
									<span class="text-sm capitalize font-semibold">
										{{ item.label }}
									</span>
								</NuxtLink>
							</li>
						</ul>
					</div>
				</div>
			</Transition>
		</div>
	</nav>
</template>

<script setup lang="ts">
	import { primaryMenus, secondaryMenus } from '@/enums/Menu';
	import Account from './Account.vue';

	const isMobileMenuOpen = ref(false);
	const openSubmenu = ref<string | null>(null);

	const toggleMobileMenu = () => {
		isMobileMenuOpen.value = !isMobileMenuOpen.value;
		if (!isMobileMenuOpen.value) {
			openSubmenu.value = null;
		}
	};

	const closeMobileMenu = () => {
		isMobileMenuOpen.value = false;
		openSubmenu.value = null;
	};

	const toggleSubmenu = (label: string) => {
		openSubmenu.value = openSubmenu.value === label ? null : label;
	};
</script>
