<script lang="ts">
	import type { CircularProgressProps } from './CircularProgress.types';
	let { progressValue = 0 }: CircularProgressProps = $props();
</script>

<div class="relative size-24">
	<svg class="size-full -rotate-90" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
		<!-- Background Circle -->
		<circle
			cx="18"
			cy="18"
			r="16"
			fill="none"
			class="text-primary/30 stroke-current"
			stroke-width="2"
		></circle>
		<!-- Progress Circle -->
		<circle
			cx="18"
			cy="18"
			r="16"
			fill="none"
			class="text-primary stroke-current"
			stroke-width="2"
			stroke-dasharray="100"
			stroke-dashoffset={100 - progressValue}
			stroke-linecap="round"
		></circle>
	</svg>

	<!-- Percentage Text -->
	<div class="absolute start-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
		<span class="text-primary text-center text-xl">{progressValue}%</span>
	</div>
</div>
