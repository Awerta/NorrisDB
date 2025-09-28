<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';
	import Steps from '$lib/shared/steps/Steps.svelte';
	let { resume_skill_set_design_skill } = $props();
</script>

{#snippet designSkill(itemObject)}
	<div>
		<span class="w-28">{itemObject.skill_name}</span>
		<Steps progressValue={itemObject.percentage} />
	</div>
{/snippet}

<div>
	<div class="w-min text-nowrap font-semibold">
		<h4>{m.design_skills()}</h4>
	</div>

	<div class="mt-4 grid grid-cols-1 items-center justify-between gap-4 md:grid-cols-2">
		{#each resume_skill_set_design_skill as item}
			{@render designSkill(item)}
		{/each}
	</div>
</div>
