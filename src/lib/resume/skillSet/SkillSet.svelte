<script lang="ts">
	import { m } from '$lib/paraglide/messages';
	import Icon from '@iconify/svelte';
	import CodingSkills from './CodingSkills.svelte';
	import DesignSkills from './DesignSkills.svelte';
	import LanguageSkills from './LanguageSkills.svelte';
</script>

<div class="bg-base-300 rounded-box md:p-4 p-2">
	<div class="mb-8 flex w-min items-center gap-2 text-nowrap text-2xl font-bold sm:text-3xl">
		<Icon icon="hugeicons:ai-brain-04" class="text-base-content/80" />
		<div class="relative">
			<span class="bg-primary absolute bottom-0.5 left-0 z-0 h-2 w-full">&nbsp;</span>
			<h3 class="relative z-10">
				{m.skill_set()}
			</h3>
		</div>
	</div>

	<div class="grid gap-20">
		<LanguageSkills />
		<CodingSkills />
		<DesignSkills />
	</div>
</div>
