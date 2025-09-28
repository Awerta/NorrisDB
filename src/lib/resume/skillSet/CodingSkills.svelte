<script lang="ts">
	import CircularProgress from '$lib/shared/circularProgress/CircularProgress.svelte';
	import { m } from '$lib/paraglide/messages.js';
	let { resume_skill_set_coding_skill } = $props();
</script>

{#snippet codingSkill(itemObject)}
	<div class="justify-betweeen flex flex-col items-center space-y-2">
		<CircularProgress progressValue={itemObject.percentage} />
		<span>{itemObject.skill_name}</span>
	</div>
{/snippet}

<div>
	<div class="w-min text-nowrap font-semibold">
		<h4>{m.coding_skills()}</h4>
	</div>
	<div class="mt-4 grid grid-cols-3 items-center justify-between gap-4 md:grid-cols-6">
		{#each resume_skill_set_coding_skill as item}
			{@render codingSkill(item)}
		{/each}
	</div>
</div>
