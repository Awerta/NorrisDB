<script lang="ts">
	import { setLocale } from '$lib/paraglide/runtime';
	import Icon from '@iconify/svelte';
</script>

<div class="dropdown dropdown-right dropdown-start">
	<button tabindex="0" aria-label="languageSwitcherDesktop" class="cursor-pointer pt-1.5">
		<Icon icon="hugeicons:language-square" class="size-7" />
	</button>
	<ul tabindex="-1" class="dropdown-content menu bg-base-100 rounded-box z-1 w-min p-2 shadow-sm">
		<li>
			<button onclick={() => setLocale('en')}>
				<Icon icon="twemoji:flag-united-states" class="size-4" /> English
			</button>
		</li>
		<li>
			<button onclick={() => setLocale('es')}>
				<Icon icon="twemoji:flag-spain" class="size-4" /> Spanish
			</button>
		</li>
		<li>
			<button onclick={() => setLocale('jp')}>
				<Icon icon="twemoji:flag-japan" class="size-4" /> Japanese
			</button>
		</li>
		<li>
			<button onclick={() => setLocale('de')}>
				<Icon icon="twemoji:flag-germany" class="size-4" />
				German
			</button>
		</li>
		<li>
			<button onclick={() => setLocale('fr')}>
				<Icon icon="twemoji:flag-france" class="size-4" /> French
			</button>
		</li>
	</ul>
</div>
