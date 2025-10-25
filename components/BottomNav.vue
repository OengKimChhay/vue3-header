<template>
	<nav
		class="xl:pl-[200px] flex items-center xl:justify-center justify-end gap-7 pr-1 bg-black text-primary py-2"
	>
		<ul class="hidden xl:flex gap-9">
			<li v-for="item in secondaryMenus" :key="item.label">
				<nuxt-link
					:to="item.link"
					class="flex justify-center items-center text-xs capitalize font-semibold"
				>
					<img :src="item.icon" :alt="item.label" class="inline w-4 h-4 mr-1" />
					{{ item.label }}
				</nuxt-link>
			</li>
		</ul>
		<Language class="hidden xl:block" />
		<div class="xl:hidden">
			<ul class="flex gap-4">
				<li>
					<nuxt-link to="#">
						<img src="/icons/ball1.png" class="w-6 h-6" alt="icon" />
					</nuxt-link>
				</li>
				<li>
					<nuxt-link to="#">
						<img src="/icons/ball3.png" class="w-6 h-6" alt="icon" />
					</nuxt-link>
				</li>
				<li>
					<nuxt-link to="#">
						<img src="/icons/game.png" class="w-6 h-6" alt="icon" />
					</nuxt-link>
				</li>
			</ul>
		</div>
		<ToggleTheme />
	</nav>
</template>

<script lang="ts" setup>
	import { secondaryMenus } from '~/enums/Menu';
</script>
