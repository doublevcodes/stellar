<script lang="ts">
	import Header from "$lib/components/header/Header.svelte";
	import CardList from "$lib/components/search/CardList.svelte";
    import GradientSVG from "$lib/components/util/GradientSVG.svelte";
</script>

<GradientSVG id="gh-gradient" colours={["#ec4899", "#facc15"]}/>

<div class="h-screen">
	<div class="h-[8vh]">
		<Header/>
	</div>
	<div class="flex h-[92vh]">
		<div class="flex items-stretch w-1/5">
			<CardList/>
		</div>
	</div>
</div>
