<script lang="ts">
	import { m } from '$lib/paraglide/messages';
	import Icon from '@iconify/svelte';

	let { resume_service } = $props();
</script>

{#snippet serviceItem(itemObject)}
	<div class="grid gap-4">
		<div class="flex items-center justify-start space-x-2">
			<Icon icon={itemObject.icon} class="size-7" />
			<span class="font-bold">{itemObject.title}</span>
		</div>
		<p class="text-base-content/70 text-sm">
			{itemObject.description}
		</p>
	</div>
{/snippet}
<div class="bg-base-300 rounded-box p-2 md:p-4">
	<div class="mb-8 flex w-min items-center gap-2 text-nowrap text-2xl font-bold sm:text-3xl">
		<Icon icon="hugeicons:power-service" class="text-base-content/80" />
		<div class="relative">
			<span class="bg-primary absolute bottom-0.5 left-0 z-0 h-2 w-full">&nbsp;</span>
			<h3 class="relative z-10">
				{m.my_services()}
			</h3>
		</div>
	</div>
	<div
		class="mt-4 grid grid-cols-1 items-start justify-between gap-8 md:grid-cols-2 lg:grid-cols-3"
	>
		{#each resume_service as item}
			{@render serviceItem(item)}
		{/each}
	</div>
</div>
