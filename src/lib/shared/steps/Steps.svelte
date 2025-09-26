<script lang="ts">
	import type { StepsProps } from './Steps.types';

	let { progressValue = 0 }: StepsProps = $props();

	const progressValueArray = $derived(Array.from({ length: progressValue / 10 }, (_, i) => i + 1));
</script>

<div class="mt-2 flex items-center gap-x-1">
	{#each progressValueArray as item}
		<div
			class="bg-primary flex h-2.5 w-full flex-col justify-center overflow-hidden whitespace-nowrap text-center text-xs text-white transition duration-500"
			role="progressbar"
		></div>
	{/each}
	{#each Array.from({ length: 10 - progressValue / 10 }) as _, i}
		<div
			class="bg-primary/30 flex h-2.5 w-full flex-col justify-center overflow-hidden whitespace-nowrap text-center text-xs text-white transition duration-500"
			role="progressbar"
		></div>
	{/each}
	<div>
		<div class="w-10 text-end">
			<span class="text-sm">{progressValue}%</span>
		</div>
	</div>
</div>
