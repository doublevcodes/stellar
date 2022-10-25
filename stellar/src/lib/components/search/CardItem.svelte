<script lang="ts">
    export let name: string;
    export let type: string;

    const bg_for_types = new Map<string, string>([
        ["planet", "from-blue-400 to-green-500"],
    ]);
</script>

<div class="w-auto ml-4 mr-2 rounded-md h-72 bg-white/10">
    <div class="flex items-center p-3 py-1 bg-white/10 rounded-t-md">
        <h3 class="text-2xl tracking-wide uppercase font-extralight">{name}</h3>
        <p class="ml-auto text-xs tracking-wider p-1 px-3 uppercase rounded-full bg-gradient-to-br {bg_for_types.get(type.toLowerCase())} hover:scale-105 transition duration-150">{type}</p>
    </div>
</div>