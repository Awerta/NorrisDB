<script lang="ts">
	import { blur } from 'svelte/transition';
	import { setLocale, getLocale } from '$lib/paraglide/runtime';
	import { m } from '$lib/paraglide/messages';
	import { format } from 'date-fns';
	import { enUS, es, ja, fr, de } from 'date-fns/locale';

	let currentLocale = $state(getLocale());
	let {
		id = 1,
		image = '',
		title = '',
		category = '',
		createdAt = '',
		excerpt = '',
		slug = '',
		langCode = ''
	} = $props();
	// Map language codes to date-fns locales
	const localeMap = {
		en: enUS,
		jp: ja,
		es,
		fr,
		de
	};

	// Pick the correct locale or fallback to English
	const dateLocale = localeMap[langCode as keyof typeof localeMap] ?? enUS;
</script>

<div
	transition:blur
	class="bg-base-200 group/blogPost rounded-box grid gap-4 overflow-hidden p-4 md:grid-cols-2"
>
	<div class="rounded-box relative overflow-hidden">
		<img
			class="object-cover transition-all duration-500 group-hover/blogPost:scale-110"
			src={image}
			alt={title}
		/>
		<div class="absolute left-0 top-0 size-full bg-black/50"></div>
		<div
			class="bg-base-100 rounded-box absolute bottom-4 left-4 flex flex-col items-center justify-center px-4"
		>
			<span class="text-lg font-bold">{format(new Date(createdAt), 'dd')}</span>
			<span class="text-sm">
				{format(new Date(createdAt), 'MMM', { locale: dateLocale }).toUpperCase()}
			</span>
		</div>
	</div>
	<div class="flex h-full flex-col space-y-2">
		<div class="flex flex-col space-y-2">
			<h3 class="cursor-pointer text-xl font-bold">
				<a href="{currentLocale !== 'en' ? `/${currentLocale}` : ''}/blog/{slug}">{title}</a>
			</h3>
			<a
				class="badge badge-sm badge-dash badge-secondary cursor-pointer"
				href="{currentLocale !== 'en' ? `/${currentLocale}` : ''}/blog/category/{category}"
				>{category}</a
			>
			<p class="text-sm">
				{@html excerpt}
			</p>
		</div>
		<div class="flex h-full items-end justify-end">
			<a
				class="btn btn-link btn-sm"
				href="{currentLocale !== 'en' ? `/${currentLocale}` : ''}/blog/{slug}"
			>
				{m.read_more()}
			</a>
		</div>
	</div>
</div>
