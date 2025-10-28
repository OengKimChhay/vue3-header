<template>
	<div class="container h-screen">
		<div class="py-20">
			<Carousel v-bind="config">
				<Slide v-for="item in data" :key="item.id">
					<div
						class="relative rounded-2xl border-t-4 border-primary overflow-hidden"
					>
						<img :src="item.url" alt="image" class="rounded-2xl w-full" />
						<img
							src="/icons/hot.png"
							alt="hot"
							class="absolute top-0 right-0 w-10"
						/>
						<div class="absolute bottom-0 left-0 right-0">
							<NuxtLink
								to="#"
								class="relative block rounded-2xl shadow-[inset_0px_3px_5px_0px_#4e4024] bg-primary px-2 py-1 text-center"
							>
								<p class="font-bold text-slate-600">{{ item.title }}</p>
								<p class="font-bold">{{ item.des }}</p>
								<img
									src="/icons/live.png"
									alt="live"
									class="w-16 absolute bottom-1 right-2"
								/>
							</NuxtLink>
						</div>
					</div>
				</Slide>

				<template #addons>
					<Navigation />
				</template>
			</Carousel>
		</div>
	</div>
</template>

<script setup lang="ts">
	definePageMeta({
		layout: 'default',
	});

	const data = Array.from({ length: 10 }, (_, index) => ({
		id: index + 1,
		title: 'Team A vs Team B',
		des: 'BLV Noname',
		url: '/icons/play-ball.jpg',
	}));

	const config = {
		autoplay: 3000,
		itemsToShow: 1,
		gap: 6,
		transition: 500,
		wrapAround: true,
		snapAlign: 'start',
		breakpointMode: 'carousel',
		breakpoints: {
			640: {
				itemsToShow: 2,
			},
			768: {
				itemsToShow: 3,
			},
			1000: {
				itemsToShow: 4,
			},
		},
	} as const;
</script>

<style lang="css">
	.carousel__next,
	.carousel__prev {
		background: rgba(0, 0, 0, 0.3);
		border-radius: 50%;
		width: 40px;
		height: 40px;
		color: white;
	}

	.carousel__next:hover,
	.carousel__prev:hover {
		color: #e5e5e5;
	}

	.carousel__next--disabled,
	.carousel__prev--disabled {
		opacity: 0.3;
	}
</style>
