<script>
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import '@splidejs/svelte-splide/css';
	import { m } from '$lib/paraglide/messages';
	import Icon from '@iconify/svelte';
</script>

<div class="bg-base-300 rounded-box p-2 md:p-4">
	<div class="mb-8 flex w-min items-center gap-2 text-nowrap text-2xl font-bold sm:text-3xl">
		<Icon icon="hugeicons:user-multiple" class="text-base-content/80" />
		<div class="relative">
			<span class="bg-primary absolute bottom-0.5 left-0 z-0 h-2 w-full">&nbsp;</span>
			<h3 class="relative z-10">
				{m.my_clients()}
			</h3>
		</div>
	</div>
	<div class="mt-4 grid items-center justify-center gap-4">
		<Splide
			options={{
				autoplay: true,
				rewind: true,
				type: 'loop',
				perPage: 3,
				perMove: 1,
				pagination: false,
				breakpoints: {
					640: {
						perPage: 1
					},
					768: {
						perPage: 3
					}
				}
			}}
			aria-label="My Clients"
			class="overflow-hidden"
		>
			<SplideSlide>
				<div class="flex flex-col items-center justify-center space-y-4">
					<div class="w-24 grayscale transition-all duration-300 hover:grayscale-0">
						<img src="{import.meta.env.VITE_SITE_ADDRESS}/images/clients/Google.png" alt="Google" />
					</div>
					<div>
						<span>Google</span>
					</div>
				</div>
			</SplideSlide>
			<SplideSlide>
				<div class="flex flex-col items-center justify-center space-y-4">
					<div class="w-24 grayscale transition-all duration-300 hover:grayscale-0">
						<img src="{import.meta.env.VITE_SITE_ADDRESS}/images/clients/AWS.png" alt="AWS" />
					</div>
					<div>
						<span>AWS</span>
					</div>
				</div>
			</SplideSlide>
			<SplideSlide>
				<div class="flex flex-col items-center justify-center space-y-4">
					<div class="w-24 grayscale transition-all duration-300 hover:grayscale-0">
						<img src="{import.meta.env.VITE_SITE_ADDRESS}/images/clients/Apple.png" alt="Apple" />
					</div>
					<div>
						<span>Apple</span>
					</div>
				</div>
			</SplideSlide>
			<SplideSlide>
				<div class="flex flex-col items-center justify-center space-y-4">
					<div class="w-24 grayscale transition-all duration-300 hover:grayscale-0">
						<img
							src="{import.meta.env.VITE_SITE_ADDRESS}/images/clients/Facebook.png"
							alt="Facebook"
						/>
					</div>
					<div>
						<span>Facebook</span>
					</div>
				</div>
			</SplideSlide>
			<SplideSlide>
				<div class="flex flex-col items-center justify-center space-y-4">
					<div class="w-24 grayscale transition-all duration-300 hover:grayscale-0">
						<img
							src="{import.meta.env.VITE_SITE_ADDRESS}/images/clients/Firefox.png"
							alt="Firefox"
						/>
					</div>
					<div>
						<span>Firefox</span>
					</div>
				</div>
			</SplideSlide>
		</Splide>
	</div>
</div>
