<script>
	import { m } from '$lib/paraglide/messages.js';
	const stacks = [
		{
			fileName: 'HTML5',
			title: 'HTML5'
		},
		{
			fileName: 'CSS3',
			title: 'CSS3'
		},
		{
			fileName: 'UNJS',
			title: 'UNJS'
		},
		{
			fileName: 'SvelteJS',
			title: 'SvelteJS'
		},
		{
			fileName: 'TailwindCSS',
			title: 'TailwindCSS'
		},
		{
			fileName: 'ViteJS',
			title: 'ViteJS'
		},
		{
			fileName: 'TypeScript',
			title: 'TypeScript'
		},
		{
			fileName: 'GraphQL',
			title: 'GraphQL'
		},
		{
			fileName: 'Prisma',
			title: 'Prisma'
		},
		{
			fileName: 'Storybook',
			title: 'Storybook'
		},
		{
			fileName: 'BunJS',
			title: 'BunJS'
		},
		{
			fileName: 'JSON',
			title: 'JSON'
		},
		{
			fileName: 'Jira',
			title: 'Jira'
		}
	];
</script>

{#snippet singleStack(item)}
	<div class="tooltip" data-tip={item.title}>
		<div class="bg-base-content/20 mask mask-squircle flex size-10 items-center justify-center p-1">
			<img src="{import.meta.env.VITE_SITE_ADDRESS}/images/stacks/{item.fileName}.png" alt={item.title} class="w-7" />
		</div>
	</div>
{/snippet}

<div class="bg-base-300 rounded-box flex w-full items-center justify-start space-x-4 p-3">
	<span class="text-nowrap">{m.stack()}</span>
	<div
		class="scrollbar-hide flex items-center space-x-2 overflow-y-hidden overflow-x-scroll lg:overflow-visible"
	>
		{#each stacks as item}
			{@render singleStack(item)}
		{/each}
	</div>
</div>
