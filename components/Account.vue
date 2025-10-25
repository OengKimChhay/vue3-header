<template>
	<div
		class="bg-gradient-to-b from-gray-700 to-black flex gap-3 rounded-full p-1 justify-between"
	>
		<Balance />
		<button class="relative">
			<img src="/icons/bell.png" class="w-4" alt="bell" />
			<span
				class="absolute top-1 -right-1 transform translate-x-1/4 -translate-y-1/4 px-1 py-0.5 text-[10px] font-bold leading-none text-red-100 bg-red-600 rounded-full"
			>
				10
			</span>
		</button>
		<button class="relative">
			<img src="/icons/mail.png" class="w-4" alt="mail" />
			<span
				class="absolute top-1 -right-1 transform translate-x-1/4 -translate-y-1/4 px-1 py-0.5 text-[10px] font-bold leading-none text-red-100 bg-red-600 rounded-full"
			>
				2
			</span>
		</button>
		<button>
			<img src="/icons/calendar.png" class="w-4" alt="calendar" />
		</button>
		<Avatar />
	</div>
</template>
