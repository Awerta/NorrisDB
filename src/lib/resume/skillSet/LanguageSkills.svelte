<script lang="ts">
	import { m } from '$lib/paraglide/messages';
	import Icon from '@iconify/svelte';
</script>

<div>
	<div class="w-min text-nowrap font-semibold">
		<h4>{m.language_skills()}</h4>
	</div>
	<div class="mt-4 grid grid-cols-1 items-center justify-between gap-4 md:grid-cols-2">
		<div class="justify-betweeen flex items-center space-x-2 relative">
			<span class="badge absolute -right-2 badge-xs -top-3">Native</span>
			<span class="flex w-40 items-center gap-1 lg:w-36">
				<Icon icon="twemoji:flag-united-states" />
				{m.english()}
			</span>
			<progress class="progress progress-primary w-full" value="100" max="100"></progress>
		</div>
		<div class="justify-betweeen flex items-center space-x-2 relative">
			<span class="badge absolute -right-2 badge-xs -top-3">Upper-Intermediate</span>
			<span class="flex w-40 items-center gap-1 lg:w-36">
				<Icon icon="twemoji:flag-japan" /> {m.japanese()}</span
			>
			<progress class="progress progress-primary w-full" value="60" max="100"></progress>
		</div>
		<div class="justify-betweeen flex items-center space-x-2 relative">
			<span class="badge absolute -right-2 badge-xs -top-3">Beginner</span>
			<span class="flex w-40 items-center gap-1 lg:w-36">
				<Icon icon="twemoji:flag-france" /> {m.french()}</span
			>
			<progress class="progress progress-primary w-full" value="30" max="100"></progress>
		</div>
		<div class="justify-betweeen flex items-center space-x-2 relative">
			<span class="badge absolute -right-2 badge-xs -top-3">Intermediate</span>
			<span class="flex w-40 items-center gap-1 lg:w-36">
				<Icon icon="twemoji:flag-germany" /> {m.german()}</span
			>
			<progress class="progress progress-primary w-full" value="50" max="100"></progress>
		</div>
	</div>
</div>
