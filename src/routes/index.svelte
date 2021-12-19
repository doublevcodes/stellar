<script lang="ts">
	import Header from '$lib/components/home/Header.svelte';
	import Earth from '$lib/components/home/Earth.svelte';
</script>

<main class="h-screen text-white bg-black">
	<Header />
	<div class="grid grid-cols-1 lg:grid-cols-2 grid-rows-2 lg:grid-rows-1 p-3 h-[95%]">
		<article class="flex flex-col justify-center mx-auto">
			<h1
				class="p-3 pl-0 duration-500 hover:bg-white hover:text-black hover:p-4 hover:mb-3 text-9xl"
			>
				Stellar
			</h1>
			<p>
				Stellar is an interactive way of exploring our solar system. It provides
				information on planets and the Sun in a fun and easy to use way.<br />
			</p>
		</article>
		<section class="relative h-[95%]">
			<Earth />
		</section>
	</div>
</main>
