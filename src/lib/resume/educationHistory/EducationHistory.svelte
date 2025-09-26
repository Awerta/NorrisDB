<script>
	import { m } from '$lib/paraglide/messages.js';
	import Icon from '@iconify/svelte';
</script>

<div class="bg-base-300 rounded-box md:p-4 p-2">
	<div class="mb-8 flex w-min items-center gap-2 text-nowrap text-2xl sm:text-3xl font-bold">
		<Icon icon="hugeicons:student" class="text-base-content/80" />
		<div class="relative">
			<span class="bg-primary absolute bottom-0.5 left-0 z-0 h-2 w-full">&nbsp;</span>
			<h3 class="relative z-10">
				{m.education_history()}
			</h3>
		</div>
	</div>

	<div class="grid gap-8">
		<div class="flex flex-col gap-1">
			<span class="text-base-content/70">{m.education_1_institution()}</span>
			<span>{m.education_1()}</span>
			<p class="text-base-content/70 text-sm">
				{m.education_1_description()}
			</p>

			<span
				class="text-base-content/70 border-neutral/50 w-min text-nowrap rounded-box border px-2 py-0.5 text-xs"
			>
				2018 - 2020
			</span>
		</div>
		<div class="flex flex-col gap-1">
			<span class="text-base-content/70">{m.education_2_institution()}</span>
			<span>{m.education_2()}</span>
			<p class="text-base-content/70 text-sm">
				{m.education_2_description()}
			</p>
			<span
				class="text-base-content/70 border-neutral/50 w-min text-nowrap rounded-box border px-2 py-0.5 text-xs"
			>
				2016 - 2018
			</span>
		</div>
	</div>
</div>
