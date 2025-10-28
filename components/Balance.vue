<template>
	<Dropdown position="left" content-calss="!pt-[40px] !w-[120px] !-left-1 ">
		<template #trigger>
			<div
				class="bg-white p-1 h-[32px] w-24 rounded-full flex items-center justify-between"
			>
				<div class="flex items-center">
					<img src="/icons/coin.png" class="w-fit h-5" alt="coin" />
					<span class="font-semibold text-xs ml-1">1000</span>
				</div>
				<img
					src="/icons/plus.png"
					class="w-4 h-4 bg-primary p-1 rounded-full flex justify-center items-center"
					alt="plus"
				/>
			</div>
		</template>
		<template #content="{ close }">
			<button
				@click="close"
				class="z-50 flex items-center w-full px-2 py-1 my-1 text-xs rounded-full bg-white/20 hover:bg-white/40"
			>
				<img src="/icons/coin1.png" class="w-5 h-5 mr-1" alt="icon" />
				20.00
			</button>
			<button
				@click="close"
				class="z-50 flex items-center w-full px-2 py-1 my-1 text-xs rounded-full bg-white/20 hover:bg-white/40"
			>
				<img src="/icons/coin2.png" class="w-5 h-5 mr-1" alt="icon" />
				20.00
			</button>
			<button
				class="flex justify-center items-center text-xs py-2 m-auto"
				@click="close"
			>
				<img
					src="/icons/plus.png"
					class="w-4 h-4 bg-primary p-1 mr-1 rounded-full flex justify-center items-center"
					alt="plus"
				/>
				Nạp thêm
			</button>
		</template>
	</Dropdown>
</template>
