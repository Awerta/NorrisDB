<script lang="ts">
	import Icon from '@iconify/svelte';
	import { setLocale, getLocale } from '$lib/paraglide/runtime';
	import { m } from '$lib/paraglide/messages';

	let currentLocale = $state(getLocale());
	let { breadcrumbTitle = '' } = $props();
</script>

<div class="breadcrumbs text-sm">
	<ul>
		<li>
			<a href="{currentLocale !== 'en' ? `/${currentLocale}` : ''}/">
				<Icon icon="hugeicons:home-01" class="size-4" />
				{m.home()}
			</a>
		</li>
		<li>
			<a href="{currentLocale !== 'en' ? `/${currentLocale}` : ''}/blog">
				<Icon icon="hugeicons:libraries" class="size-4" />

				{m.blog()}
			</a>
		</li>
		<li>
			<span class=" inline-flex items-center gap-2">
				<Icon icon="hugeicons:book-open-01" class="size-4" />
				{breadcrumbTitle}
			</span>
		</li>
	</ul>
</div>
