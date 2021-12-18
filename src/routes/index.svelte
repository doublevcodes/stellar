<script lang="ts">
	import Header from '$lib/components/home/Header.svelte';
	import Earth from '$lib/components/home/Earth.svelte';
</script>

<main class="h-screen text-white bg-black">
	<Header />
	<div class="grid grid-cols-2 grid-rows-1 h-[95%]">
		<article class="flex flex-col justify-center mx-auto">
			<h1
				class="p-3 pl-0 duration-500 hover:bg-white hover:text-black hover:p-4 hover:mb-3 text-9xl"
			>
				Stellar
			</h1>
			<p>Stellar</p>
		</article>
		<section class="relative h-[95%]">
			<Earth />
		</section>
	</div>
</main>
