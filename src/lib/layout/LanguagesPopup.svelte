<script lang="ts">
	import { setLocale, getLocale } from '$lib/paraglide/runtime';
	import Icon from '@iconify/svelte';
</script>

<dialog id="languages" class="modal modal-bottom sm:modal-middle">
	<div class="modal-box">
		<form method="dialog">
			<button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
				<Icon icon="hugeicons:multiplication-sign" class="size-6" />
			</button>
		</form>
		<span>&nbsp;</span>
		<div class="grid grid-cols-2 gap-4">
			<button
				onclick={() => setLocale('en')}
				class="rounded-box border-base-content/20 flex items-center gap-2 border p-2"
			>
				<Icon icon="twemoji:flag-united-states" class="size-10" /> English
			</button>
			<button
				onclick={() => setLocale('es')}
				class="rounded-box border-base-content/20 flex items-center gap-2 border p-2"
			>
				<Icon icon="twemoji:flag-spain" class="size-10" /> español
			</button>
			<button
				onclick={() => setLocale('de')}
				class="rounded-box border-base-content/20 flex items-center gap-2 border p-2"
			>
				<Icon icon="twemoji:flag-germany" class="size-10" /> Deutsch
			</button>
			<button
				onclick={() => setLocale('fr')}
				class="rounded-box border-base-content/20 flex items-center gap-2 border p-2"
			>
				<Icon icon="twemoji:flag-france" class="size-10" /> français
			</button>
			<button
				onclick={() => setLocale('jp')}
				class="rounded-box border-base-content/20 flex items-center gap-2 border p-2"
			>
				<Icon icon="twemoji:flag-japan" class="size-10" /> 日本語
			</button>
		</div>
	</div>
	<form method="dialog" class="modal-backdrop">
		<button>close</button>
	</form>
</dialog>
