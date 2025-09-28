<script lang="ts">
	import { m } from '$lib/paraglide/messages';
	import Icon from '@iconify/svelte';

	let { resume_skill_set_language } = $props();
</script>

{#snippet languageSkill(itemObject)}
	<div class="justify-betweeen relative flex items-center space-x-2">
		<span class="badge badge-xs absolute -right-2 -top-3">{itemObject.badge}</span>
		<span class="flex w-40 items-center gap-1 lg:w-36">
			<Icon icon={itemObject.icon} />
			{itemObject.skill_name}
		</span>
		<progress class="progress progress-primary w-full" value={itemObject.percentage} max="100"
		></progress>
	</div>
{/snippet}
<div>
	<div class="w-min text-nowrap font-semibold">
		<h4>{m.language_skills()}</h4>
	</div>
	<div class="mt-4 grid grid-cols-1 items-center justify-between gap-4 md:grid-cols-2">
		{#each resume_skill_set_language as item}
			{@render languageSkill(item)}
		{/each}
	</div>
</div>
