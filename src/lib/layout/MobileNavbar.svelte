<script lang="ts">
	import Intro from '$lib/intro/Intro.svelte';
	import { m } from '$lib/paraglide/messages';
	import { getLocale } from '$lib/paraglide/runtime';
	import Icon from '@iconify/svelte';
	let currentLocale = $state(getLocale());
</script>

<div class="navbar bg-base-100 flex items-center justify-between shadow-sm lg:hidden">
	<a href="{currentLocale !== 'en' ? `/${currentLocale}` : ''}/" class="flex items-center gap-2">
		<img src="{import.meta.env.VITE_SITE_ADDRESS}/images/profile.jpg" class="mask mask-squircle size-10" alt={m.name()} />
		<span class="text-xl">{m.name()}</span>
	</a>
	<div>
		<!-- Open the modal using ID.showModal() method -->
		<button class="cursor-pointer" onclick={cv_modal.showModal()}>
			<Icon icon="hugeicons:code" class="inline-block size-8 animate-pulse" />
		</button>
		<dialog id="cv_modal" class="modal modal-bottom sm:modal-middle">
			<div class="modal-box p-2">
				<form method="dialog">
					<button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
						<Icon icon="hugeicons:multiplication-sign" class="size-6" />
					</button>
				</form>
				<Intro />
			</div>
			<form method="dialog" class="modal-backdrop">
				<button>close</button>
			</form>
		</dialog>
	</div>
</div>
