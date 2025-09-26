<script lang="ts">
	import ThemesPopup from './ThemesPopup.svelte';
	import LanguagesPopup from './LanguagesPopup.svelte';
	import menuItems from '$lib/layout/menuItems';

	import Icon from '@iconify/svelte';
	import { getLocale } from '$lib/paraglide/runtime';
	import { onMount } from 'svelte';
	import { themeChange } from 'theme-change';
	import _ from 'lodash';
	let currentLocale = $state(getLocale());

	import { page } from '$app/state';

	let selectedMenuItem = $derived(
		(page.status === 404 ? '404' : (page.route.id ?? '')).replace('/', '').toLowerCase()
	);

	// NOTE: the element that is using one of the theme attributes must be in the DOM on mount
	onMount(() => {
		themeChange(false);
		// 👆 false parameter is required for svelte
	});
</script>

{#snippet menu(item)}
	<li>
		<a
			href="{currentLocale !== 'en' ? `/${currentLocale}` : ''}/{item.slug}"
			class="tooltip relative"
			class:text-primary={selectedMenuItem === item.slug}
			data-tip={item.name}
		>
			<Icon icon={item.icon} class="size-6" />
			<span class:hidden={selectedMenuItem !== item.slug} class="absolute left-0 top-0 flex size-1">
				<span
					class="bg-primary/90 absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"
				></span>
				<span class="bg-primary relative inline-flex size-1 rounded-full"></span>
			</span>
		</a>
	</li>
{/snippet}
<ul
	class="menu menu-horizontal bg-base-200 border-primary/20 shadow-primary/80 rounded-box fixed bottom-0 z-50 flex w-full items-center justify-between rounded-b-none border shadow-2xl lg:hidden"
>
	{#each menuItems as item}
		{@render menu(item)}
	{/each}
	<li>
		<!-- Open the modal using ID.showModal() method -->
		<button class="cursor-pointer" onclick={Settings.showModal()}>
			<Icon icon="hugeicons:more-vertical-circle-01" class="size-6" />
		</button>
	</li>
</ul>

<dialog id="Settings" class="modal modal-bottom sm:modal-middle">
	<div class="modal-box">
		<form method="dialog">
			<button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
				<Icon icon="hugeicons:multiplication-sign" class="size-6" />
			</button>
		</form>
		<div
			class="flex flex-col items-start justify-start gap-4 md:flex-col lg:flex-row lg:gap-3 xl:gap-4"
		>
			<button class="flex cursor-pointer items-center gap-2" onclick={themes.showModal()}>
				<Icon icon="hugeicons:paint-brush-03" class="size-6" />
				<span>Themes</span>
			</button>
			<button class="flex cursor-pointer items-center gap-2" onclick={languages.showModal()}>
				<Icon icon="hugeicons:language-square" class="size-6" />
				<span>Language</span>
			</button>
		</div>
	</div>
	<form method="dialog" class="modal-backdrop">
		<button>close</button>
	</form>
</dialog>

<LanguagesPopup />
<ThemesPopup />
