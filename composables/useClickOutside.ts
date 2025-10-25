import { onMounted, onUnmounted } from 'vue';

export function useClickOutside(
	toggleRef: Ref<HTMLElement | null>,
	menuRef: Ref<HTMLElement | null>,
	close: () => void
) {
	const handleClick = (e: MouseEvent) => {
		const target = e.target as Node;
		if (
			menuRef.value &&
			toggleRef.value &&
			!menuRef.value.contains(target) &&
			!toggleRef.value.contains(target)
		) {
			close();
		}
	};

	onMounted(() => document.addEventListener('click', handleClick));
	onUnmounted(() => document.removeEventListener('click', handleClick));
}
