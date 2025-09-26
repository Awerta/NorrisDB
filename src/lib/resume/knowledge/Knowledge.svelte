<script>
	import { m } from '$lib/paraglide/messages.js';
	import Icon from '@iconify/svelte';
</script>

<div class="bg-base-300 rounded-box md:p-4 p-2">
	<div class="mb-8 flex w-min items-center gap-2 text-nowrap text-2xl font-bold sm:text-3xl">
		<Icon icon="hugeicons:brain-02" class="text-base-content/80" />
		<div class="relative">
			<span class="bg-primary absolute bottom-0.5 left-0 z-0 h-2 w-full">&nbsp;</span>
			<h3 class="relative z-10">
				{m.knowledge()}
			</h3>
		</div>
	</div>

	<div class="mt-4 grid items-center justify-between gap-4 md:grid-cols-2">
		<div class="flex items-center justify-start space-x-2">
			<Icon icon="hugeicons:checkmark-badge-03" class="text-primary size-6" />

			<span>{m.responsive_web_design()}</span>
		</div>
		<div class="flex items-center justify-start space-x-2">
			<Icon icon="hugeicons:checkmark-badge-03" class="text-primary size-6" />
			<span>{m.ui_ux_best_practices()}</span>
		</div>
		<div class="flex items-center justify-start space-x-2">
			<Icon icon="hugeicons:checkmark-badge-03" class="text-primary size-6" />
			<span>{m.cross_browser_compatibility()}</span>
		</div>
		<div class="flex items-center justify-start space-x-2">
			<Icon icon="hugeicons:checkmark-badge-03" class="text-primary size-6" />
			<span>{m.performance_optimization()}</span>
		</div>
		<div class="flex items-center justify-start space-x-2">
			<Icon icon="hugeicons:checkmark-badge-03" class="text-primary size-6" />
			<span>{m.accessibility_standards_wcag()}</span>
		</div>
		<div class="flex items-center justify-start space-x-2">
			<Icon icon="hugeicons:checkmark-badge-03" class="text-primary size-6" />
			<span>{m.javascript_frameworks()}</span>
		</div>
		<div class="flex items-center justify-start space-x-2">
			<Icon icon="hugeicons:checkmark-badge-03" class="text-primary size-6" />
			<span>{m.progressive_web_apps()}</span>
		</div>
		<div class="flex items-center justify-start space-x-2">
			<Icon icon="hugeicons:checkmark-badge-03" class="text-primary size-6" />
			<span>{m.version_control_git()}</span>
		</div>
		<div class="flex items-center justify-start space-x-2">
			<Icon icon="hugeicons:checkmark-badge-03" class="text-primary size-6" />
			<span>{m.api_integration()}</span>
		</div>
		<div class="flex items-center justify-start space-x-2">
			<Icon icon="hugeicons:checkmark-badge-03" class="text-primary size-6" />
			<span>{m.testing_and_debugging_tools()}</span>
		</div>
	</div>
</div>
