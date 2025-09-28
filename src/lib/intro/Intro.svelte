<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';
	import Icon from '@iconify/svelte';
	let {
		introData = {
			email: '',
			website: '',
			phone: '',
			latestJob: { company: '', position: '' },
			resumeFile: { file_url: '' },
			socialLinks: [{ icon: '', platform_name: '', url: '' }]
		}
	} = $props();
</script>

{#snippet socialMediaIconButton(itemObject)}
	<a href={itemObject.url} title={itemObject.platform_name}>
		<Icon icon={itemObject.icon} class="size-6" />
	</a>
{/snippet}
<div class="flex flex-col items-center gap-3">
	<div class="flex w-44 items-center justify-center rounded-3xl">
		<img
			src="{import.meta.env.VITE_SITE_ADDRESS}/images/profile.jpg"
			class="mask mask-squircle size-40 overflow-hidden rounded-3xl object-cover"
			alt={m.name()}
		/>
	</div>
	<div class="bg-base-300 text-base-content rounded-box grid w-full p-4">
		<span class="text-3xl font-black tracking-tighter">{m.name()}</span>
		<div class="text-base-content/60 mt-2 text-sm">
			<span>{introData.latestJob.position}</span> @ <span>{introData.latestJob.company}</span>
		</div>
		<div class="divider my-2"></div>
		<div class="grid gap-2 text-sm">
			<div class="flex justify-between">
				<span class="text-base-content/90">{m.website()}</span>
				<a href={introData.website} class="text-base-content/70">
					{introData.website.replace('https://', '')}
				</a>
			</div>
			<div class="flex justify-between">
				<span class="text-base-content/90">{m.email()}</span>
				<a href="mailto:{introData.email}" class="text-base-content/70">{introData.email}</a>
			</div>
			<div class="flex justify-between">
				<span class="text-base-content/90">{m.phone()}</span>
				<a href="tel:{introData.phone}" class="text-base-content/70">{introData.phone}</a>
			</div>
			<div class="scrollbar-hide mt-4 flex items-center justify-start gap-2 overflow-x-scroll">
				{#each introData.socialLinks as item}
					{@render socialMediaIconButton(item)}
				{/each}
			</div>
		</div>
	</div>
	<div class="w-full">
		<a
			href={introData.resumeFile.file_url}
			target="_blank"
			class="btn btn-primary btn-outline flex w-full justify-between text-nowrap"
		>
			<span class="">{m.download_resume()}</span>
			<Icon icon="hugeicons:download-01" class="size-6" />
		</a>
	</div>
</div>
