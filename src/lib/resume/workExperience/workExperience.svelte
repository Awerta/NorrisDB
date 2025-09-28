<script>
	import { m } from '$lib/paraglide/messages';
	import Icon from '@iconify/svelte';
	let { resume_work_experience } = $props();
</script>

{#snippet experienceItem(itemObject)}
	<div class="flex flex-col gap-1">
		<span class="text-base-content/70">{itemObject.company}</span>
		<span>{itemObject.position}</span>
		<p class="text-base-content/70 text-sm">
			{itemObject.description}
		</p>
		<span
			class="text-base-content/70 border-neutral/50 rounded-box w-min text-nowrap border px-2 py-0.5 text-xs"
		>
			{itemObject.start_year} - {itemObject.end_year}
		</span>
	</div>
{/snippet}

<div class="bg-base-300 rounded-box p-2 md:p-4">
	<div class="mb-8 flex w-min items-center gap-2 text-nowrap text-2xl font-bold sm:text-3xl">
		<Icon icon="hugeicons:permanent-job" class="text-base-content/80" />
		<div class="relative">
			<span class="bg-primary absolute bottom-0.5 left-0 z-0 h-2 w-full">&nbsp;</span>
			<h3 class="relative z-10">
				{m.work_experience()}
			</h3>
		</div>
	</div>
	<div class="grid gap-8">
		{#each resume_work_experience as item}
			{@render experienceItem(item)}
		{/each}
	</div>
</div>
