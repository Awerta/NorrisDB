<script lang="ts">
	import { m } from '$lib/paraglide/messages';
	import Icon from '@iconify/svelte';
</script>

<div class="bg-base-300 rounded-box md:p-4 p-2">
	<div class="mb-8 flex w-min items-center gap-2 text-nowrap text-2xl font-bold sm:text-3xl">
		<Icon icon="hugeicons:power-service" class="text-base-content/80" />
		<div class="relative">
			<span class="bg-primary absolute bottom-0.5 left-0 z-0 h-2 w-full">&nbsp;</span>
			<h3 class="relative z-10">
				{m.my_services()}
			</h3>
		</div>
	</div>
	<div
		class="mt-4 grid grid-cols-1 items-start justify-between gap-8 md:grid-cols-2 lg:grid-cols-3"
	>
		<div class="grid gap-4">
			<div class="flex items-center justify-start space-x-2">
				<Icon icon="material-icon-theme:html" class="size-7" />
				<span class="font-bold">{m.front_end_title()}</span>
			</div>
			<p class="text-base-content/70 text-sm">
				{m.front_end_description()}
			</p>
		</div>
		<div class="grid gap-4">
			<div class="flex items-center justify-start space-x-2">
				<Icon icon="material-icon-theme:figma" class="size-7" />
				<span class="font-bold">{m.ui_ux_title()}</span>
			</div>
			<p class="text-base-content/70 text-sm">
				{m.ui_ux_description()}
			</p>
		</div>
		<div class="grid gap-4">
			<div class="flex items-center justify-start space-x-2">
				<Icon icon="devicon:ionic" class="size-7" />
				<span class="font-bold">{m.mobile_app_title()}</span>
			</div>
			<p class="text-base-content/70 text-sm">
				{m.mobile_app_description()}
			</p>
		</div>
		<div class="grid gap-4">
			<div class="flex items-center justify-start space-x-4">
				<Icon icon="logos:chrome" class="size-7" />
				<span class="font-bold">{m.web_performance_title()}</span>
			</div>
			<p class="text-base-content/70 text-sm">
				{m.web_performance_description()}
			</p>
		</div>
		<div class="grid gap-4">
			<div class="flex items-center justify-start space-x-2">
				<Icon icon="logos:adobe-after-effects" class="size-7" />
				<span class="font-bold">{m.graphic_motion_title()}</span>
			</div>
			<p class="text-base-content/70 text-sm">
				{m.graphic_motion_description()}
			</p>
		</div>
		<div class="grid gap-4">
			<div class="flex items-center justify-start space-x-2">
				<Icon icon="logos:google-search-console" class="size-7" />
				<span class="font-bold">{m.seo_digital_marketing_title()}</span>
			</div>
			<p class="text-base-content/70 text-sm">
				{m.seo_digital_marketing_description()}
			</p>
		</div>
	</div>
</div>
