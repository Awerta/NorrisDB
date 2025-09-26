<script lang="ts">
	// Reusable components
	import Breadcrumbs from '$lib/shared/breadcrumbs/Breadcrumbs.svelte';

	import Icon from '@iconify/svelte'; // Icon library
	import { MetaTags } from 'svelte-meta-tags'; // SEO meta tags
	import { m } from '$lib/paraglide/messages'; // localized messages (m) for multi-language text
	import { blur } from 'svelte/transition'; // Page transitions
	import { getLocale } from '$lib/paraglide/runtime'; // get current locale
	import _ from 'lodash'; // Utility library (capitalize used here)
	import { format } from 'date-fns';

	// Receiving data from the route loader
	let { data } = $props();

	// Reactive current locale state for links and localization
	let currentLocale = $state(getLocale());

	// Share page functionality using Web Share API
	async function sharePage() {
		try {
			await navigator.share({
				title: document.title,
				text: 'Check out this page!',
				url: window.location.href
			});
		} catch (error) {
			// Do nothing if sharing fails
			// console.error('Error sharing:', error);
		}
	}
</script>

<div transition:blur class="bg-base-300 rounded-box p-4">
	<!-- Page Header / Blog Link -->
	<div class="relative mb-8 w-min text-nowrap text-3xl font-bold">
		<!-- Decorative underline -->
		<span class="bg-primary absolute bottom-0.5 left-0 z-0 h-2 w-full">&nbsp;</span>
		<!-- Link to main blog page -->
		<a href={currentLocale !== 'en' ? `/${currentLocale}/blog` : '/blog'} class="relative z-10">
			{m.blog()}
		</a>
	</div>

	<!-- Breadcrumb navigation for current post -->
	<Breadcrumbs breadcrumbTitle={data.postData.title} />

	<!-- Blog Content Section -->
	<div transition:blur class="flex flex-col space-y-4 overflow-x-hidden">
		<!-- Featured image -->
		<div class="rounded-box h-44 w-full overflow-hidden">
			<img
				class="h-44 w-full object-cover"
				src="{import.meta.env.VITE_SITE_ADDRESS}/images/portfolio/3.jpeg"
				alt="Hello World 3!"
			/>
		</div>

		<!-- Post metadata: author, date, category -->
		<div
			class="flex flex-col items-start justify-between space-y-2 text-sm md:flex-row md:items-center"
		>
			<!-- Author info -->
			<div class="flex items-center space-x-1">
				<Icon icon="hugeicons:quill-write-01" class="size-4" />
				{@html m.written_by({ name: m.name(), link: '#' })}
			</div>

			<!-- Date and category -->
			<div class="flex items-center space-x-1">
				<Icon icon="hugeicons:calendar-04" class="size-4" />
				<span class="text-secondary-content/70 text-xs">
					{format(data.postData.created_at, 'yyyy-MMM-dd')}
				</span>
				{@html m.posted_in({
					category: _.capitalize(data.postData.category),
					link: `${import.meta.env.VITE_SITE_ADDRESS}${currentLocale !== 'en' ? `/${currentLocale}` : ''}/blog/category/${data.postData.category}`
				})}
			</div>
		</div>

		<!-- Post title -->
		<h1 class="text-2xl font-bold">{data.postData.title}</h1>

		<!-- Post content (HTML) -->
		{@html data.postData.content}
	</div>

	<div class="divider"></div>

	<!-- Tags and Share Section -->
	<div
		class="flex flex-col items-start justify-between space-y-4 md:flex-row md:items-center md:space-y-0"
	>
		<!-- Tags -->
		<div class="flex items-center space-x-2">
			<span>{m.tags()}:</span>
			<a href={'#'} class="btn btn-outline btn-accent btn-xs rounded-box">News</a>
			<a href={'#'} class="btn btn-outline btn-accent btn-xs rounded-box">Diary</a>
		</div>

		<!-- Share button -->
		<div class="flex items-center space-x-2">
			<button onclick={sharePage} class="tooltip cursor-pointer" data-tip={m.share()}>
				<Icon icon="hugeicons:share-08" class="size-5" />
			</button>
		</div>
	</div>

	<!-- Comment Box -->
	<div class="mt-4 grid gap-4">
		<div class="w-full">
			<fieldset class="fieldset">
				<textarea class="textarea h-24 w-full" placeholder={`${m.write_comment()}...`}></textarea>
			</fieldset>
			<div class="flex justify-end">
				<button class="btn btn-primary btn-sm rounded-box mt-2 cursor-not-allowed">
					{m.post_comment()}
				</button>
			</div>
		</div>

		<div class="divider"></div>

		<!-- Comment List Header -->
		<div class="flex items-center justify-between">
			<h5>
				{m.comments()}
				<span class="badge badge-xs badge-secondary">9</span>
			</h5>
			<div class="flex items-center space-x-1">
				<Icon icon="hugeicons:sorting-01" class="size-5" />
				<select class="select select-sm rounded-box w-min max-w-xs">
					<option selected>{m.most_recent()}</option>
					<option>{m.most_popular()}</option>
					<option>{m.oldest()}</option>
					<option>{m.newest()}</option>
				</select>
			</div>
		</div>

		<!-- Comment Items -->
		<div class="grid gap-8">
			<div class="mt-4 flex space-x-4">
				<!-- Commenter avatar -->
				<div class="avatar">
					<div class="rounded-box h-min w-12">
						<img src="{import.meta.env.VITE_SITE_ADDRESS}/images/profile.jpg" alt="user avatar" />
					</div>
				</div>

				<!-- Comment content -->
				<div>
					<div class="flex items-center space-x-2">
						<span class="font-bold">John Doe</span>
						<span class="text-secondary-content/70 text-xs">2025/09/13</span>
					</div>
					<p class="text-base-content/80 mt-2 max-w-lg italic">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					</p>

					<!-- Comment actions: like, dislike, reply -->
					<div
						class="text-secondary-content/40 mt-2 flex items-center justify-start space-x-8 text-sm"
					>
						<div class="flex items-center space-x-4">
							<a href={'#'}><Icon icon="hugeicons:thumbs-up" class="text-secondary size-5" /></a>
							<a href={'#'}><Icon icon="hugeicons:thumbs-down" class="size-5" /></a>
						</div>
						<button class="btn btn-ghost btn-xs rounded-box flex items-center">
							<Icon icon="hugeicons:arrow-turn-forward" /> <span>{m.reply()}</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<!-- SEO Meta Tags -->
<MetaTags
	title={`${data.postData.title} - ${m.name()}`}
	titleTemplate="%s"
	description={`${data.postData.title} - ${m.name()}`}
	canonical="{import.meta.env.VITE_SITE_ADDRESS}/{currentLocale !== 'en'
		? `/${currentLocale}/blog`
		: '/blog'}/{data.postData.slug}"
	robots="all"
/>
