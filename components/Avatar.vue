<template>
	<Dropdown position="left" content-calss="!top-10 !right-0 !w-[15rem] !p-1">
		<template #trigger>
			<img src="/icons/user.png" alt="User Avatar" class="w-8 h-8" />
		</template>
		<template #content="{ close }">
			<NuxtLink
				@click="close"
				to="#"
				class="z-50 block px-3 py-1 my-1 text-primary text-xs rounded-full bg-gradient-to-b from-gray-700 to-gray-900"
			>
				<img src="/icons/avatar.png" class="w-5 inline-block mr-1" alt="icon" />
				Trung tâm Tài khoản
			</NuxtLink>
			<NuxtLink
				v-for="item in menus"
				:key="item.label"
				:to="item.link"
				@click="close"
				class="z-50 block px-3 py-1 my-1 text-xs rounded-full bg-white/20 hover:bg-white/40"
			>
				<img :src="item.icon" class="w-5 h-5 inline-block mr-1" alt="icon" />
				{{ item.label }}
			</NuxtLink>
		</template>
	</Dropdown>
</template>

<script setup lang="ts">
	const menus = [
		{
			label: 'Trang cá nhân',
			link: '#',
			icon: '/icons/home.png',
		},
		{
			label: 'Nhiệm vụ',
			link: '#',
			icon: '/icons/arrow.png',
		},
		{
			label: 'Ví của bạn',
			link: '#',
			icon: '/icons/walet.png',
		},
		{
			label: 'lịch sử giao dịch',
			link: '#',
			icon: '/icons/chart.png',
		},
		{
			label: 'Thoát tài khoản',
			link: '#',
			icon: '/icons/logout.png',
		},
	];
</script>
