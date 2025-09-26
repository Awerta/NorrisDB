<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';
	import Steps from '$lib/shared/steps/Steps.svelte';
</script>

<div>
	<div class="font-semibold w-min text-nowrap">
		<h4>{m.design_skills()}</h4>
	</div>

	<div class="grid items-center justify-between grid-cols-1 md:grid-cols-2 gap-4 mt-4">
		<div>
			<span class="w-28">{m.web_design()}</span>
			<Steps progressValue={80} />
		</div>
		<div>
			<span class="w-28">{m.graphic_design()}</span>
			<Steps progressValue={60} />
		</div>
		<div>
			<span class="w-28">{m.ui_ux_design()}</span>
			<Steps progressValue={90} />
		</div>
		<div>
			<span class="w-28">{m.responsive_design()}</span>
			<Steps progressValue={100} />
		</div>
		<div>
			<span class="w-28">{m.wireframing_and_prototyping()}</span>
			<Steps progressValue={90} />
		</div>
		<div>
			<span class="w-28">{m.web_accessibility()}</span>
			<Steps progressValue={80} />
		</div>
	</div>
</div>
