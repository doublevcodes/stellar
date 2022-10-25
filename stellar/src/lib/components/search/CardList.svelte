<script lang="ts">
	import CardItem from "$lib/components/search/CardItem.svelte";
	import Blob from "./Blob.svelte";
	import Searchbox from "./Searchbox.svelte";

    let listSelected: boolean = true;

    let planet_selected: boolean = false;
    let moon_selected: boolean = false;
</script>

<div class="w-full h-auto my-3 mr-3 bg-white/10 rounded-r-md">
    <div class="flex flex-col">
        <Searchbox />
        <div class="grid grid-cols-1 grid-rows-1">
            <div class="relative col-start-1 col-end-1 row-start-1 row-end-1">
                <Blob/>
            </div>
            <div class="flex flex-row col-start-1 col-end-1 row-start-1 row-end-1 px-2 py-3 pl-4 text-xs font-normal tracking-wider text-gray-400 uppercase">
                <p>X results found</p>
                <div class="z-20 flex items-center ml-auto max-h-fit bg-black rounded-md cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" class="w-8 h-8 p-1 mr-1 stroke-gh-gradient transition duration-200 delay-200 rounded-md {listSelected ? 'bg-white' : ''}" on:click={() => {listSelected=true}}>
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>                  
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-8 h-8 p-1 stroke-gh-gradient transition duration-200 delay-200 rounded-md {!listSelected ? 'bg-white' : ''}" on:click={() => {listSelected=false}}>
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                    </svg>     
                </div>
                <div class="relative inline-block group">
                    <button class="z-20 flex items-center px-3 py-2 ml-2 text-white transition duration-150 bg-black rounded-md cursor-pointer hover:bg-white/10 hover:rounded-b-none group-hover:bg-white/10 group-hover:rounded-b-none">
                        <p class="text-xs font-normal tracking-wider text-gray-400 uppercase">Filter</p>
                        <p class="ml-1">▼</p>
                    </button>
                    <div class="absolute hidden group-hover:block bg-black rounded-md p-4 top-8 -left-1.5 hover:flex flex-col group-hover:rounded-tr-none">
                        <button on:click={() => {planet_selected = !planet_selected}} class="bg-white/10 p-2 rounded-md uppercase hover:bg-white/20 {planet_selected ? 'bg-gradient-to-br from-blue-400 to-green-500 text-white': ''}">Planet</button>
                        <button on:click={() => {moon_selected = !moon_selected}} class="mt-2 bg-white/10 p-2 rounded-md uppercase hover:bg-white/20 {moon_selected ? 'bg-gradient-to-br from-gray-400 to-slate-200 text-white': ''}">Moon</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex flex-col mt-2">
            <CardItem name={"Earth"} type={"Planet"}/>
        </div>
    </div>
</div>