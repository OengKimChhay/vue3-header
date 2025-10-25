<template>
	<div class="relative" ref="dropdownRef">
		<button
			@click="toggleDropdown"
			:class="buttonClass"
			class="relative block z-20"
		>
			<slot name="trigger" :isOpen="isOpen">
				{{ label }}
			</slot>
		</button>

		<div class="inset-0" />
		<Transition
			enter-active-class="transition ease-out duration-200"
			enter-from-class="opacity-0 translate-y-1"
			enter-to-class="opacity-100 translate-y-0"
			leave-active-class="transition ease-in duration-150"
			leave-from-class="opacity-100 translate-y-0"
			leave-to-class="opacity-0 translate-y-1"
		>
			<div
				v-if="isOpen"
				:class="[
					contentCalss,
					'absolute px-1 bg-white/50 backdrop-blur-md z-10 w-full pt-[35px] -top-1.5 rounded-[15px]',
				]"
			>
				<slot name="content" :close="closeDropdown" />
			</div>
		</Transition>
	</div>
</template>

<script setup>
	const props = defineProps({
		label: {
			type: String,
			default: '',
		},
		buttonClass: {
			type: String,
			default: '',
		},
		contentCalss: {
			type: String,
			default: '',
		},
	});

	const isOpen = ref(false);
	const dropdownRef = ref(null);

	const toggleDropdown = () => (isOpen.value = !isOpen.value);
	const closeDropdown = () => (isOpen.value = false);

	const handleClickOutside = (event) => {
		if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
			closeDropdown();
		}
	};

	onMounted(() => {
		document.addEventListener('click', handleClickOutside);
	});

	onUnmounted(() => {
		document.removeEventListener('click', handleClickOutside);
	});
</script>
