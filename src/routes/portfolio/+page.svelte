<script lang="ts">
	import Icon from '@iconify/svelte'; // Icon component
	import { onMount } from 'svelte'; // Lifecycle hook for client-side init
	import { m } from '$lib/paraglide/messages.js'; // localized messages (m) for multi-language text
	import _ from 'lodash'; // Utility library (capitalize used here)
	import '../../../node_modules/glightbox/dist/css/glightbox.min.css'; // Lightbox CSS
	import { blur } from 'svelte/transition'; // Page transition effect
	import { MetaTags } from 'svelte-meta-tags'; // For SEO meta tags
	import { getLocale } from '$lib/paraglide/runtime'; // get current locale

	// Current locale state (for links and localized strings)
	let currentLocale = $state(getLocale());

	let containerEl: HTMLDivElement | null = null; // Will hold the grid container DOM ref
	let mixer: any = null; // Will hold the MixItUp instance

	/* -------------------------
	   Type definitions
	-------------------------- */
	// Each work item structure
	interface WorkItem {
		id: number;
		category: 'video' | 'audio' | 'links' | 'image' | 'gallery' | 'content';
		title: string;
		img: string;
		link?: string;
		url?: string;
		html?: string;
		galleryImages?: string[];
	}

	/* -------------------------
	   Props / Data
	-------------------------- */
	// Portfolio items with different categories (sample data)
	let {
		items = [
			// Example: Video item with YouTube embed
			{
				id: 1,
				category: 'video',
				title: 'YouTube Video',
				img: `${import.meta.env.VITE_SITE_ADDRESS}/images/portfolio/1.jpeg`,
				link: 'https://www.youtube-nocookie.com/embed/Ga6RYejo6Hk'
			},
			// Example: Audio item
			{
				id: 2,
				category: 'audio',
				title: 'Audio Project',
				img: `${import.meta.env.VITE_SITE_ADDRESS}/images/portfolio/2.jpeg`,
				link: 'https://audio-samples.github.io/samples/mp3/blizzard_unconditional/sample-0.mp3'
			},
			// External link example
			{
				id: 3,
				category: 'links',
				title: 'Link Project',
				img: `${import.meta.env.VITE_SITE_ADDRESS}/images/portfolio/3.jpeg`,
				url: 'https://example.com'
			},
			// Simple image item
			{
				id: 4,
				category: 'image',
				title: 'Image Project',
				img: `${import.meta.env.VITE_SITE_ADDRESS}/images/portfolio/4.jpeg`
			},
			{
				id: 5,
				category: 'image',
				title: 'Image Project',
				img: `${import.meta.env.VITE_SITE_ADDRESS}/images/portfolio/5.jpeg`
			},
			{
				id: 6,
				category: 'image',
				title: 'Image Project',
				img: `${import.meta.env.VITE_SITE_ADDRESS}/images/portfolio/6.jpeg`
			},
			// HTML content inside lightbox
			{
				id: 7,
				category: 'content',
				title: 'Content Project',
				img: `${import.meta.env.VITE_SITE_ADDRESS}/images/portfolio/6.jpeg`,
				html: '# This is html content',
				link: 'https://contentlink.com'
			},
			// Local video file
			{
				id: 8,
				category: 'video',
				title: 'Video Project',
				img: `${import.meta.env.VITE_SITE_ADDRESS}/images/portfolio/7.jpeg`,
				link: 'https://examplefiles.org/files/video/mp4-example-video-download-640x480.mp4'
			},
			// Gallery item with multiple images
			{
				id: 9,
				category: 'gallery',
				title: 'Graphic Design',
				img: `${import.meta.env.VITE_SITE_ADDRESS}/images/portfolio/graphicDesign1.jpeg`,
				galleryImages: [
					`${import.meta.env.VITE_SITE_ADDRESS}/images/portfolio/graphicDesign1.jpeg`,
					`${import.meta.env.VITE_SITE_ADDRESS}/images/portfolio/graphicDesign2.jpeg`,
					`${import.meta.env.VITE_SITE_ADDRESS}/images/portfolio/graphicDesign3.jpeg`
				]
			},
			// Another gallery
			{
				id: 10,
				category: 'gallery',
				title: 'Architecture',
				img: `${import.meta.env.VITE_SITE_ADDRESS}/images/portfolio/arc4.jpeg`,
				galleryImages: [
					`${import.meta.env.VITE_SITE_ADDRESS}/images/portfolio/arc1.jpeg`,
					`${import.meta.env.VITE_SITE_ADDRESS}/images/portfolio/arc2.jpeg`,
					`${import.meta.env.VITE_SITE_ADDRESS}/images/portfolio/arc3.jpeg`,
					`${import.meta.env.VITE_SITE_ADDRESS}/images/portfolio/arc4.jpeg`
				]
			},
			// Long content example
			{
				id: 11,
				category: 'content',
				title: 'Content Project 2',
				img: `${import.meta.env.VITE_SITE_ADDRESS}/images/portfolio/2.jpeg`,
				html: '<p class="text-base-content"> ... long HTML content ... </p>',
				link: 'https://contentlink.com'
			}
		] as WorkItem[]
	} = $props(); // Items can also be passed as props

	// Category filters with icons
	const categories = [
		{ name: m.all(), slug: 'all', icon: 'hugeicons:check-list' },
		{ name: m.video(), slug: 'video', icon: 'hugeicons:video-01' },
		{ name: m.audio(), slug: 'audio', icon: 'hugeicons:music-note-03' },
		{ name: m.link(), slug: 'links', icon: 'hugeicons:link-03' },
		{ name: m.image(), slug: 'image', icon: 'hugeicons:image-01' },
		{ name: m.gallery(), slug: 'gallery', icon: 'hugeicons:album-02' },
		{ name: m.content(), slug: 'content', icon: 'hugeicons:content-writing' }
	];

	/* -------------------------
	   Lifecycle: onMount
	-------------------------- */
	onMount(async () => {
		// Dynamically import to avoid SSR errors
		const mixitup = (await import('mixitup')).default;
		const GLightbox = (await import('glightbox')).default;

		// Lightbox for different content types
		const lightboxVideo = GLightbox({ selector: '.videoPlayer' });
		const lightboxAudio = GLightbox({
			selector: '.audioPlayer',
			plyr: {
				// Plyr player config for audio/video
				css: 'https://cdn.plyr.io/3.5.6/plyr.css',
				js: 'https://cdn.plyr.io/3.5.6/plyr.js',
				config: {
					ratio: '16:9',
					youtube: { noCookie: true, rel: 0, showinfo: 0, iv_load_policy: 3 },
					vimeo: { byline: false, portrait: false, title: false, transparent: false }
				}
			}
		});
		const singleImage = GLightbox({ selector: '.singleImage', touchNavigation: true, loop: false });
		const contentShow = GLightbox({ selector: '.contentShow', touchNavigation: true, loop: false });

		// For each gallery item create its own lightbox instance
		items
			.filter((item) => item.category === 'gallery')
			.forEach((item) => {
				GLightbox({
					selector: `.galleryShow_${item.id}`,
					touchNavigation: true,
					loop: true
				});
			});

		// Init MixItUp filter system if container exists
		if (containerEl) {
			mixer = mixitup(containerEl, {
				selectors: { target: '.mix' }, // each .mix item is a filterable element
				animation: { duration: 300 }
			});
		}

		// Cleanup on destroy
		return () => {
			mixer?.destroy();
			mixer = null;
		};
	});

	/* -------------------------
	   Functions
	-------------------------- */
	// Trigger filtering by category slug
	function filter(catSlug: string) {
		if (!mixer) return;
		if (catSlug === 'all') {
			mixer.filter('all'); // show all items
		} else {
			mixer.filter(`.${catSlug}`); // show only selected category
		}
	}
</script>

<!-- -------------------------
	 Portfolio Section
-------------------------- -->
<div transition:blur class="bg-base-300 rounded-box p-2 md:p-4">
	<!-- Title -->
	<div class="relative mb-8 w-min text-nowrap text-2xl font-bold sm:text-3xl">
		<span class="bg-primary absolute bottom-0.5 left-0 z-0 h-2 w-full">&nbsp;</span>
		<h1 class="relative z-10">{m.portfolio()}</h1>
	</div>

	<!-- Category Filter Buttons -->
	<div class="mb-4 flex items-center gap-2">
		<div class="text-nowrap">{m.categories()}:</div>
		<div class="scrollbar-hide flex items-center gap-2 overflow-x-auto">
			{#each categories as cat}
				<button
					class="hover:bg-base-200 bg-base-100 rounded-box mr-2 flex cursor-pointer items-center gap-2 px-2 py-1"
					onclick={() => filter(cat.slug)}
				>
					<Icon icon={cat.icon} class="size-4" />
					<span class="text-nowrap">{_.capitalize(cat.name)}</span>
				</button>
			{/each}
		</div>
	</div>

	<!-- Items Grid -->
	<div class="grid gap-4 md:grid-cols-2" bind:this={containerEl}>
		{#each items as item (item.id)}
			<!-- Each portfolio card -->
			<div
				class="mix bg-base-100 group/item rounded-box relative w-full cursor-pointer p-2 text-center {item.category}"
				data-order={item.id}
			>
				<!-- Image wrapper -->
				<div class="rounded-box relative h-44 w-full overflow-hidden">
					<img
						class="block h-44 w-full object-cover transition-all duration-500 group-hover/item:scale-110"
						src={item.img}
						alt={item.title}
					/>
					<!-- Overlay -->
					<div
						class="absolute left-0 top-0 h-full w-full bg-black/50 transition-all duration-300 group-hover/item:bg-black/30"
					></div>

					<!-- Hover actions based on category -->
					<div class="absolute left-0 top-0 flex h-full w-full items-center justify-center">
						{#if item.category === 'video'}
							<!-- Video lightbox trigger -->
							<a
								href={item.link}
								class="videoPlayer btn btn-soft btn-xs hidden space-x-1 group-hover/item:flex"
							>
								<Icon icon="hugeicons:video-01" class="size-5" />
								<span>{m.watch_video()}</span>
							</a>
						{:else if item.category === 'audio'}
							<!-- Audio player -->
							<a
								href={item.img}
								class="btn audioPlayer btn-soft btn-xs hidden space-x-1 group-hover/item:flex"
								data-glightbox="title: {item.title}; description: .audioContentDesc-{item.id}; descPosition: bottom;"
							>
								<Icon icon="hugeicons:music-note-03" class="size-5" />
								{m.listen_audio()}
							</a>
							<div class="glightbox-desc audioContentDesc-{item.id}">
								<audio class="player" id="player" controls>
									<source class="player" src={item.link} type="audio/mp3" />
								</audio>
							</div>
						{:else if item.category === 'links'}
							<!-- External link -->
							<a
								href={item.url}
								target="_blank"
								class="btn btn-soft btn-xs hidden space-x-1 group-hover/item:flex"
							>
								<Icon icon="hugeicons:link-03" class="size-5" />
								{m.visit_link()}
							</a>
						{:else if item.category === 'image'}
							<!-- Single image lightbox -->
							<a
								href={item.img}
								class="singleImage btn btn-soft btn-xs hidden space-x-1 group-hover/item:flex"
							>
								<Icon icon="hugeicons:image-01" class="size-5" />
								<span>{m.view_image()}</span>
							</a>
						{:else if item.category === 'content'}
							<!-- HTML content lightbox -->
							<div>
								<a
									href={item.img}
									class="btn contentShow btn-soft btn-xs hidden space-x-1 group-hover/item:flex"
									data-glightbox="title: {item.title}; description: .contentDesc-{item.id}; descPosition: right;"
								>
									<Icon icon="hugeicons:content-writing" class="size-5" />
									{m.read_content()}
								</a>
								<div class="glightbox-desc contentDesc-{item.id}">
									{@html item.html}
								</div>
							</div>
						{:else if item.category === 'gallery'}
							<!-- Gallery with multiple images -->
							<div class="flex flex-col items-center space-y-2 group-hover/item:flex">
								<a href={item.link} target="_blank" class="btn btn-soft btn-xs space-x-1">
									<Icon icon="hugeicons:album-02" class="size-5" />
									{m.view_gallery()}
								</a>
								<div class="w-30 rounded-box flex overflow-hidden shadow-2xl shadow-black">
									{#each item.galleryImages as galleryImage}
										<img
											src={galleryImage}
											alt="My portfolio gallery {item.id}"
											class="galleryShow_{item.id} size-10"
										/>
									{/each}
								</div>
							</div>
						{/if}
					</div>
				</div>

				<!-- Category badge -->
				<div
					class="badge bg-base-100 badge-outline border-base-content text-base-content badge-xs absolute left-4 top-4"
				>
					{categories.find((cat) => cat.slug === item.category)?.name}
				</div>

				<!-- Item title -->
				<p class="mt-2 text-sm">{item.title}</p>
			</div>
		{/each}
	</div>
</div>

<!-- SEO Meta Tags -->
<MetaTags
	title={`${m.name()} - ${m.portfolio()}`}
	titleTemplate="%s"
	description={`${m.name()} . ${m.portfolio()}`}
	canonical="{import.meta.env.VITE_SITE_ADDRESS}/{currentLocale !== 'en'
		? `${currentLocale}/`
		: ''}portfolio"
	robots="all"
/>

<style>
	/* -------------------------
	   Lightbox custom styling
	-------------------------- */
	:global(.glightbox-clean .gslide-description) {
		background-color: var(--color-base-100) !important;
		max-height: 100vh !important;
		@media (max-width: 640px) {
			max-height: 40vh !important;
		}
		@media screen and (min-width: 640px) and (max-width: 768px) {
			max-height: 55vh !important;
		}
	}

	:global(.glightbox-clean .gslide-title) {
		color: var(--color-base-content) !important;
		font-weight: 700;
	}

	/* Optional: import Plyr CSS if needed */
	/* @import '$lib/../../../node_modules/plyr/dist/plyr.css'; */
</style>
