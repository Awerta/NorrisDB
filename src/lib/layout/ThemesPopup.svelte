<script lang="ts">
	import Icon from '@iconify/svelte';
	import { onMount } from 'svelte';
	import { themeChange } from 'theme-change';

	let selectedTheme: string | null = null;
	onMount(() => {
		// initialize theme-change
		themeChange(false);

		// highlight the currently saved theme
		selectedTheme = localStorage.getItem('theme') ?? 'nord';
		highlight(selectedTheme);
	});

	function highlight(theme: string | null) {
		// remove class from all labels
		document
			.querySelectorAll('#themes .fieldset label > div[id*="theme-"]')
			.forEach((el) => el.classList.add('hidden'));

		// add class to the newly selected label
		if (theme) {
			const label = document.querySelector<HTMLLabelElement>(
				`#themes .fieldset label div[id="theme-${theme}"]`
			);
			label?.classList.remove('hidden');
		}
	}

	function handleChange(event: Event) {
		const input = event.target as HTMLInputElement;
		if (input.name === 'theme-radios') {
			selectedTheme = input.value;
			highlight(selectedTheme);
		}
	}

	const themes = [
		'nord',
		'dark',
		'dim',
		'dracula',
		'night',
		'sunset',
		'halloween',
		'forest',
		'luxury',
		'abyss',
		'coffee',
		'synthwave',
		'business',
		'aqua',
		'black',
		'light',
		'autumn',
		'corporate',
		'bumblebee',
		'emerald',
		'garden',
		'lofi',
		'fantasy',
		'cmyk',
		'lemonade',
		'acid',
		'winter',
		'caramellatte',
		'silk',
		'valentine',
		'retro',
		'cupcake',
		'cyberpunk',
		'wireframe',
		'pastel'
	];
</script>

<dialog id="themes" class="modal modal-bottom sm:modal-middle">
	<div class="modal-box md:min-w-2xl lg:min-w-4xl scrollbar-hide">
		<form method="dialog">
			<button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
				<Icon icon="hugeicons:multiplication-sign" class="size-6" />
			</button>
		</form>
		<span>&nbsp;</span>
		<fieldset
			onchange={handleChange}
			class="fieldset grid grid-cols-2 gap-2 md:grid-cols-4 lg:grid-cols-5"
		>
			{#each themes as theme}
				{@render colorPalette(theme)}
			{/each}
		</fieldset>
	</div>
	<form method="dialog" class="modal-backdrop">
		<button>close</button>
	</form>
</dialog>

{#snippet colorPalette(theme: string)}
	<input
		type="radio"
		id="theme-{theme}"
		data-toggle-theme={theme}
		value={theme}
		name="theme-radios"
		class="peer hidden"
	/>
	<label for="theme-{theme}" class="relative block cursor-pointer">
		<div data-set-theme={theme} id="theme-icon-{theme}" class="absolute right-0.5 top-0.5 hidden">
			<Icon icon="hugeicons:paint-bucket" class="size-5" />
		</div>
		<div
			class="border-base-content/20 hover:border-base-content/40 rounded-box overflow-hidden border outline-2 outline-offset-2 outline-transparent"
			data-act-class="outline-base-content!"
			data-set-theme="light"
		>
			<div class="bg-base-100 text-base-content w-full cursor-pointer font-sans" data-theme={theme}>
				<div class="grid grid-cols-5 grid-rows-3">
					<div class="bg-base-200 col-start-1 row-span-2 row-start-1"></div>
					<div class="bg-base-300 col-start-1 row-start-3"></div>
					<div
						class="bg-base-100 col-span-4 col-start-2 row-span-3 row-start-1 flex flex-col gap-1 p-2"
					>
						<div class="font-bold">{theme}</div>
						<div class="flex flex-wrap gap-1">
							<div
								class="bg-primary rounded-box flex aspect-square w-5 items-center justify-center lg:w-6"
							>
								<div class="text-primary-content text-sm font-bold">A</div>
							</div>
							<div
								class="bg-secondary rounded-box flex aspect-square w-5 items-center justify-center lg:w-6"
							>
								<div class="text-secondary-content text-sm font-bold">A</div>
							</div>
							<div
								class="bg-accent rounded-box flex aspect-square w-5 items-center justify-center lg:w-6"
							>
								<div class="text-accent-content text-sm font-bold">A</div>
							</div>
							<div
								class="bg-neutral rounded-box flex aspect-square w-5 items-center justify-center lg:w-6"
							>
								<div class="text-neutral-content text-sm font-bold">A</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</label>
{/snippet}
