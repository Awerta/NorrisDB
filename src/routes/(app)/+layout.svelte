<script lang="ts">
	import '../../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import SideMenu from '$lib/layout/SideMenu.svelte';
	import Intro from '$lib/intro/Intro.svelte';
	import MyStack from '$lib/myStack/MyStack.svelte';
	import Icon from '@iconify/svelte';
	import { m } from '$lib/paraglide/messages.js';
	import BottomMobileMenu from '$lib/layout/BottomMobileMenu.svelte';
	import MobileNavbar from '$lib/layout/MobileNavbar.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<MobileNavbar />

<div class="bg-base-100 text-base-content lg:py-8">
	<div class="bg-base-200 card mx-auto flex max-w-7xl items-center justify-center p-2">
		<div
			class="mx-auto grid h-full w-full grid-cols-1 md:grid-cols-3 md:gap-2 lg:grid-cols-12 lg:gap-3"
		>
			<SideMenu />
			<div class="col-span-3 hidden lg:block">
				<!-- Introduction Card -->
				<Intro />
			</div>
			<div
				class="text-base-content relative col-span-2 flex flex-col justify-between gap-4 md:col-span-3 lg:col-span-8"
			>
				<div class="scrollbar-hide flex flex-col gap-4 overflow-y-scroll lg:max-h-96">
					{@render children?.()}
				</div>

				<!-- My stack Section -->
				<MyStack />
			</div>
		</div>
	</div>

	<!-- Copyright Text -->
	<div class="text-base-content/70 mb-14 flex justify-center py-2 text-center text-xs lg:mb-0">
		{@html m.copyright_text({ name: m.name() })}
	</div>
</div>
<BottomMobileMenu />
