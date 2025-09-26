<script lang="ts">
	// Reusable components
	import BlogPostCard from '$lib/blog/BlogPostCard.svelte';

	import { m } from '$lib/paraglide/messages'; // localized messages (m) for multi-language text
	import { MetaTags } from 'svelte-meta-tags'; // SEO meta tags
	import { getLocale } from '$lib/paraglide/runtime'; // get current locale
	import { blur } from 'svelte/transition'; // page load transition

	// Data provided from the route loader
	let { data } = $props();

	// Reactive current locale state for links and localization
	let currentLocale = $state(getLocale());
</script>

<div transition:blur class="bg-base-300 rounded-box p-4">
	<!-- Page Title Section -->
	<div class="relative mb-8 w-min text-nowrap text-2xl font-bold sm:text-3xl">
		<!-- Decorative underline for title -->
		<span class="bg-primary absolute bottom-0.5 left-0 z-0 h-2 w-full">&nbsp;</span>
		<!-- Page title (localized) -->
		<h1 class="relative z-10">{m.blog()}</h1>
	</div>

	<!-- Blog Cards Grid -->
	<div class="grid gap-4">
		{#each data.allPostsData as blogPost}
			<!-- Each blog post card rendered dynamically -->
			<BlogPostCard
				id={blogPost.id}
				title={blogPost.title}
				slug={blogPost.slug}
				image={blogPost.image}
				category={blogPost.category}
				excerpt={blogPost.excerpt}
				createdAt={blogPost.created_at}
				langCode={blogPost.lang_code}
			/>
		{/each}
	</div>
</div>

<!-- SEO Meta Tags -->
<MetaTags
	title={`${m.blog()} - ${m.name()}`}
	titleTemplate="%s"
	description={`${m.blog()}: ${m.category()} - ${m.name()}`}
	canonical="{import.meta.env.VITE_SITE_ADDRESS}/{currentLocale !== 'en'
		? `/${currentLocale}/blog`
		: '/blog'}"
	robots="all"
/>
