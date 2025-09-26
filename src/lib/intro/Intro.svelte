<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';
	import Icon from '@iconify/svelte';
</script>

<div class="flex flex-col items-center gap-3">
	<div class="flex w-44 items-center justify-center rounded-3xl">
		<img
			src="{import.meta.env.VITE_SITE_ADDRESS}/images/profile.jpg"
			class="mask mask-squircle size-40 overflow-hidden rounded-3xl object-cover"
			alt={m.name()}
		/>
	</div>
	<div class="bg-base-300 text-base-content rounded-box grid w-full p-4">
		<span class="text-3xl font-black tracking-tighter">{m.name()}</span>
		<div class="text-base-content/60 mt-2 text-sm">
			<span>{m.job_value()}</span> @ <span>OpenAI</span>
		</div>
		<div class="divider my-2"></div>
		<div class="grid gap-2 text-sm">
			<div class="flex justify-between">
				<span class="text-base-content/90">{m.website()}</span>
				<a href="https://google.com" class="text-base-content/70">google.com</a>
			</div>
			<div class="flex justify-between">
				<span class="text-base-content/90">{m.email()}</span>
				<a href="mailto:hey@google.com" class="text-base-content/70">hey@google.com</a>
			</div>
			<div class="flex justify-between">
				<span class="text-base-content/90">{m.phone()}</span>
				<a href="tel:+817000000000" class="text-base-content/70">+81 70 0000 0000</a>
			</div>
			<div class="scrollbar-hide mt-4 flex items-center justify-start gap-2 overflow-x-scroll">
				<a href={'#'} title="LinkedIn">
					<Icon icon="hugeicons:linkedin-01" class="size-6" />
				</a>
				<a href={'#'} title="Github">
					<Icon icon="hugeicons:github" class="size-6" />
				</a>
				<a href={'#'} title="Telegram">
					<Icon icon="hugeicons:telegram" class="size-6" />
				</a>
				<a href={'#'} title="Whatsapp">
					<Icon icon="hugeicons:whatsapp" class="size-6" />
				</a>
				<a href={'#'} title="Instagram">
					<Icon icon="hugeicons:instagram" class="size-6" />
				</a>
				<a href={'#'} title="Facebook">
					<Icon icon="hugeicons:facebook-01" class="size-6" />
				</a>
				<a href={'#'} title="Pinterest">
					<Icon icon="hugeicons:pinterest" class="size-6" />
				</a>
				<a href={'#'} title="Dribbble">
					<Icon icon="hugeicons:dribbble" class="size-6" />
				</a>
			</div>
		</div>
	</div>
	<div class="w-full">
		<button class="btn btn-primary btn-outline flex w-full justify-between text-nowrap">
			<span class="">{m.download_resume()}</span>
			<Icon icon="hugeicons:download-01" class="size-6" />
		</button>
	</div>
</div>
