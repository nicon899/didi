<script lang="ts">
	import { page } from "$app/stores";
	let state = false;

	const setState = (newState: boolean) => {
		state = newState;
	};
</script>

<header>
	<nav class="bg-black w-full md:static">
		<div class="items-center max-w-screen-xl md:flex">
			<div class="flex items-center justify-between md:py-1 md:block" >
				<a sveltekit:prefetch href="/" 					
					class="mx-5 text-blue-600 font-bold text-xl italic"
					>Wassersp<div class="inline underline decoration-wavy">r<p class="inline text-orange-600 absolute top-0 text-sm">i</p>&nbsp;&nbsp;&nbsp;&nbsp;</div>ngen</a
				>
				<div class="md:hidden">
					<button
						class="text-gray-400 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
						on:click={() => setState(!state)}
					>
						{#if state}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-6 w-6"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									fillRule="evenodd"
									d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
									clipRule="evenodd"
								/>
							</svg>
						{:else}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M4 8h16M4 16h16"
								/>
							</svg>
						{/if}
					</button>
				</div>
			</div>
			<div
				class={`flex-1 justify-self-center pl-5 pb-3 md:block md:pb-0 md:mt-0 ${
					state ? "block" : "hidden"
				}`}
			>
				<ul class="space-y-8 md:flex md:space-x-6 md:space-y-0">
					<li class="text-gray-400 hover:text-indigo-600">
						<a
							on:click={() => setState(false)}
							sveltekit:prefetch
							href="/dives">Sprünge</a
						>
					</li>
					<li class="text-gray-400 hover:text-indigo-600">
						<a
							on:click={() => setState(false)}
							sveltekit:prefetch
							href="/dictionary"
							>Wörterbuch 🇩🇪🇬🇧🇺🇦
						</a>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</header>
