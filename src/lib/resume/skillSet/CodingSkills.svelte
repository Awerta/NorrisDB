<script>
	import CircularProgress from '$lib/shared/circularProgress/CircularProgress.svelte';
	import { m } from '$lib/paraglide/messages.js';
</script>

<div>
	<div class="w-min text-nowrap font-semibold">
		<h4>{m.coding_skills()}</h4>
	</div>
	<div class="mt-4 grid grid-cols-3 items-center justify-between gap-4 md:grid-cols-6">
		<div class="justify-betweeen flex flex-col items-center space-y-2">
			<CircularProgress progressValue={95} />
			<span>HTML5</span>
		</div>
		<div class="justify-betweeen flex flex-col items-center space-y-2">
			<CircularProgress progressValue={90} />
			<span>CSS</span>
		</div>
		<div class="justify-betweeen flex flex-col items-center space-y-2">
			<CircularProgress progressValue={70} />
			<span>JavaScript</span>
		</div>

		<div class="justify-betweeen flex flex-col items-center space-y-2">
			<CircularProgress progressValue={75} />
			<span>SvelteKit</span>
		</div>
		<div class="justify-betweeen flex flex-col items-center space-y-2">
			<CircularProgress progressValue={80} />
			<span>RestAPI</span>
		</div>
		<div class="justify-betweeen flex flex-col items-center space-y-2">
			<CircularProgress progressValue={65} />
			<span>GraphQL</span>
		</div>
	</div>
</div>
