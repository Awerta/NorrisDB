<script lang="ts">
	import Icon from '@iconify/svelte'; // Icon library
	import { MetaTags } from 'svelte-meta-tags'; // SEO meta tags
	import { blur } from 'svelte/transition'; // Page transition
	import { m } from '$lib/paraglide/messages.js'; // localized messages (m) for multi-language text

	let { data } = $props();
</script>

<!-- Reusable snippet for key-value information -->
{#snippet textInfo(subject: string, value: string)}
	<div>
		<span class="text-primary">{subject}:</span>
		<span>{value}</span>
	</div>
{/snippet}

<div transition:blur>
	<!-- Main container -->
	<div class="bg-base-300 rounded-box p-2 md:p-4">
		<!-- Page title -->
		<div class="relative mb-8 w-min text-nowrap text-2xl font-bold sm:text-3xl">
			<!-- Decorative underline -->
			<span class="bg-primary absolute bottom-0.5 left-0 z-0 h-2 w-full">&nbsp;</span>
			<h1 class="relative z-10">{m.about_me()}</h1>
		</div>

		<div class="grid gap-8">
			<!-- Introduction text -->
			<div class="flex flex-col gap-1">
				{@html data.translation.short_bio}
			</div>

			<!-- Personal information grid -->
			<div class="grid grid-cols-1 gap-2 text-sm md:grid-cols-2 lg:grid-cols-3">
				{@render textInfo(m.age(), `${data.age}`)}
				{@render textInfo(m.job(), `${data.latestJob.position}`)}
				{@render textInfo(m.freelance(), `${data.freelance ? m.available() : m.unavailable()}`)}
				{@render textInfo(m.citizenship(), `${data.translation.citizenship}`)}
				{@render textInfo(m.residence(), `${data.translation.residence}`)}
				{@render textInfo(m.email(), `${data.email}`)}
			</div>

			<!-- Download resume button (mobile only) -->
			<button
				class="btn btn-primary btn-outline rounded-box flex w-full justify-between text-nowrap lg:hidden"
			>
				<span>{m.download_resume()}</span>
				<Icon icon="hugeicons:download-01" class="size-6" />
			</button>

			<!-- Statistics section -->
			<div class="stats bg-base-100 flex flex-col shadow md:flex-row">
				<!-- Total visits -->
				<div class="stat">
					<div class="stat-figure text-primary">
						<Icon icon="hugeicons:eye" class="size-10" />
					</div>
					<div class="stat-title">{m.total_visits()}</div>
					<div class="stat-value text-primary">25.6K</div>
					<div class="stat-desc">{m.total_visits_value({ number: '25' })}</div>
				</div>

				<!-- Page views -->
				<div class="stat">
					<div class="stat-figure text-secondary">
						<Icon icon="hugeicons:bounce-right" class="size-10" />
					</div>
					<div class="stat-title">{m.page_views()}</div>
					<div class="stat-value text-secondary">2.6M</div>
					<div class="stat-desc">{m.page_views_value({ number: '17' })}</div>
				</div>

				<!-- User satisfaction -->
				<div class="stat">
					<div class="stat-figure text-secondary">
						<div class="avatar avatar-online">
							<div class="w-16 rounded-full">
								<img src="{import.meta.env.VITE_SITE_ADDRESS}/images/profile.jpg" alt={m.name()} />
							</div>
						</div>
					</div>
					<div class="stat-value">96%</div>
					<div class="stat-title">{m.user_satisfaction()}</div>
					<div class="stat-desc text-secondary">{m.user_satisfaction_value({ number: '7' })}</div>
				</div>
			</div>
		</div>
	</div>
</div>

<!-- SEO Meta Tags -->
<MetaTags
	title={`${m.name()} - ${m.job_value()}`}
	titleTemplate="%s"
	description={`${m.name()} . ${m.about_me_text()}`}
	canonical={import.meta.env.VITE_SITE_ADDRESS}
	robots="all"
	openGraph={{
		url: `${import.meta.env.VITE_SITE_ADDRESS}`,
		title: `${m.name()} - ${m.job_value()}`,
		description: `${m.name()} . ${m.about_me_text()}`,
		images: [
			{
				url: `${import.meta.env.VITE_SITE_ADDRESS}/images/profile.jpg`,
				width: 1000,
				height: 666,
				alt: `${m.name()} - ${m.job_value()}`
			}
		],
		siteName: m.name()
	}}
/>
