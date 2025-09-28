<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';
	import Icon from '@iconify/svelte';
	let { resume_knowledge } = $props();
</script>

{#snippet knowledgeItem(itemText)}
	<div class="flex items-center justify-start space-x-2">
		<Icon icon="hugeicons:checkmark-badge-03" class="text-primary size-6" />

		<span>{itemText}</span>
	</div>
{/snippet}
<div class="bg-base-300 rounded-box p-2 md:p-4">
	<div class="mb-8 flex w-min items-center gap-2 text-nowrap text-2xl font-bold sm:text-3xl">
		<Icon icon="hugeicons:brain-02" class="text-base-content/80" />
		<div class="relative">
			<span class="bg-primary absolute bottom-0.5 left-0 z-0 h-2 w-full">&nbsp;</span>
			<h3 class="relative z-10">
				{m.knowledge()}
			</h3>
		</div>
	</div>

	<div class="mt-4 grid items-center justify-between gap-4 md:grid-cols-2">
		{#each resume_knowledge as item}
			{@render knowledgeItem(item.content)}
		{/each}
	</div>
</div>
