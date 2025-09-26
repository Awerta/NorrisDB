<script lang="ts">
	import { getLocale } from '$lib/paraglide/runtime';
	import { onMount } from 'svelte';
	import { themeChange } from 'theme-change';
	import _ from 'lodash';
	import Icon from '@iconify/svelte';
	import menuItems from '$lib/layout/menuItems';
	let currentLocale = $state(getLocale());
	import { page } from '$app/state';
	import LanguagesDropdownMenu from './LanguagesDropdownMenu.svelte';

	let selectedMenuItem = $derived(
		(page.status === 404 ? '404' : (page.route.id ?? '')).replace('/', '').toLowerCase()
	);

	onMount(() => {
		themeChange(false);
		// 👆 false parameter is required for svelte
	});
</script>

{#snippet menu(item)}
	<a
		href="{currentLocale !== 'en' ? `/${currentLocale}` : ''}/{item.slug}"
		class="relative flex w-full cursor-pointer flex-col items-center justify-center space-y-1 transition-all duration-500"
		class:text-primary={selectedMenuItem === item.slug}
	>
		<Icon icon={item.icon} class="size-8" />
		<span class="text-sm">{item.name}</span>

		<span class:hidden={selectedMenuItem !== item.slug} class="absolute left-0 top-0 flex size-1">
			<span
				class="bg-primary/90 absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"
			></span>
			<span class="bg-primary relative inline-flex size-1 rounded-full"></span>
		</span>
	</a>
{/snippet}
<div
	class="bg-base-100 rounded-box hidden flex-col items-center justify-center gap-2 p-2 md:col-span-3 md:flex-row lg:col-span-1 lg:flex lg:flex-col"
>
	<div
		class="mx-auto flex flex-row items-center justify-between gap-2 md:flex-col lg:flex-row lg:gap-3 xl:gap-4"
	>
		<!-- Theme changer button with simple icon -->
		<!-- <button class="flex cursor-pointer items-center gap-2" onclick={themes.showModal()}>
			<Icon icon="hugeicons:paint-brush-03" class="size-6" />
		</button> -->

		<button
			onclick={themes.showModal()}
			aria-label="themeChangerDesktop"
			class="bg-base-300 group-hover:border-base-content/20 border-base-content/10 rounded-box grid shrink-0 cursor-pointer grid-cols-2 gap-1 border p-1 transition-colors"
		>
			<span class="bg-base-content size-1.5 rounded-full"></span>
			<span class="bg-primary size-1.5 rounded-full"></span>
			<span class="bg-secondary size-1.5 rounded-full"></span>
			<span class="bg-accent size-1.5 rounded-full"></span>
		</button>
		<LanguagesDropdownMenu />
	</div>
	<div
		class="bg-base-200 rounded-box flex h-full w-full flex-col items-center justify-between space-y-2 px-1 py-2 tracking-tighter md:flex-row md:space-y-0 lg:flex-col lg:space-y-2"
	>
		{#each menuItems as item}
			{@render menu(item)}
		{/each}
	</div>
</div>
