<script lang="ts">
	import { m } from '$lib/paraglide/messages.js'; // localized messages (m) for multi-language text
	import { blur } from 'svelte/transition'; // Svelte transition for blur effect on page load/unload
	import Icon from '@iconify/svelte'; // Icon component from Iconify for displaying vector icons
	import { MetaTags } from 'svelte-meta-tags'; // SEO meta tags
	import { getLocale } from '$lib/paraglide/runtime'; // get current locale

	// Current locale state (for links and localized strings)
	let currentLocale = $state(getLocale());

	let { data } = $props();
</script>

<!-- Page container with blur transition -->
<div transition:blur class="bg-base-300 rounded-box p-4">
	<!-- Page heading with underline effect -->
	<div class="relative mb-8 w-min text-nowrap text-2xl font-bold sm:text-3xl">
		<!-- Colored underline behind the heading text -->
		<span class="bg-primary absolute bottom-0.5 left-0 z-0 h-2 w-full">&nbsp;</span>
		<!-- Actual heading text, layered above underline -->
		<h1 class="relative z-10">{m.contact_me()}</h1>
	</div>

	<div class="grid gap-8">
		<!-- Embedded Google Map showing physical location -->
		<div>
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13070.549827477826!2d135.74985580998535!3d35.015779487274905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6001087b148e5f1d%3A0x1f8b7a1904610955!2sKyoto%20Gyoen%20National%20Garden!5e0!3m2!1sen!2sjp!4v1758290843767!5m2!1sen!2sjp"
				class="rounded-box h-64 w-full"
				style="border:0;"
				loading="lazy"
				referrerpolicy="no-referrer-when-downgrade"
				title="My address on Google Map"
			></iframe>
		</div>

		<!-- Contact information section -->
		<div class="grid gap-4">
			<span class="text-2xl font-semibold">{m.get_in_touch()}</span>

			<!-- Contact items laid out in 3 columns on medium+ screens -->
			<div class="grid gap-4 md:grid-cols-3">
				<!-- Email info -->
				<div class="flex flex-col gap-2">
					<div class="flex items-center gap-2">
						<Icon icon="hugeicons:mail-01" class="size-5" />
						<span class="font-bold">{m.email()}</span>
					</div>
					<a class="text-primary text-sm" href="mailto:{data.email}">{data.email}</a>
				</div>

				<!-- Phone info -->
				<div class="flex flex-col gap-2">
					<div class="flex items-center gap-2">
						<Icon icon="hugeicons:call-02" class="size-5" />
						<span class="font-bold">{m.phone()}</span>
					</div>
					<a class="text-primary text-sm" href="tel:{data.phone}">{data.phone}</a>
				</div>

				<!-- Physical address info -->
				<div class="flex flex-col gap-2">
					<div class="flex items-center gap-2">
						<Icon icon="hugeicons:location-09" class="size-5" />
						<span class="font-bold">{m.address()}</span>
					</div>
					<a
						class="text-primary text-sm"
						href="https://maps.app.goo.gl/c88jD1rKsDxk16Wy5"
						target="_blank"
					>
						{data.translation.address}
					</a>
				</div>
			</div>
		</div>

		<!-- Contact form section -->
		<div class="grid gap-4">
			<span class="text-2xl font-semibold">{m.contact_form()}</span>

			<!-- Simple form inputs (no backend handling here) -->
			<div class="grid gap-4">
				<fieldset class="fieldset">
					<input type="text" placeholder={m.full_name()} class="input w-full max-w-xs" />
					<input type="email" placeholder={m.email_address()} class="input w-full max-w-xs" />
					<textarea class="textarea w-full" placeholder={m.your_message()}></textarea>
					<button class="btn btn-primary rounded-box w-min text-nowrap">
						{m.send_message()}
					</button>
				</fieldset>
			</div>
		</div>
	</div>
</div>

<!-- SEO meta tags for this page -->
<MetaTags
	title={`${m.name()} - ${m.contact()}`}
	titleTemplate="%s"
	description={`${m.name()} . ${m.contact()}`}
	canonical="{import.meta.env.VITE_SITE_ADDRESS}/{currentLocale !== 'en'
		? `${currentLocale}/`
		: ''}contact"
	robots="all"
/>
