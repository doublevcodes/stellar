<script lang="ts">
    export let id: string;
    export let colours: string[];

    let number_of_colours = colours.length;
    let offsets: number[] = [0];
    let offset = 100 / number_of_colours;
    let offset_number = 0
    
    while (offsets[offsets.length - 1] < 100) {
        offsets.push(offset * offset_number)
        offset_number += 1
    }
</script>

<svg
    class="absolute w-0 h-0"
    aria-hidden="true"
    focusable="false"
>
    <linearGradient {id} x2="1" y2="1">
        {#each colours as colour, index}
            <stop offset={`${offsets[index]}%`} stop-color={colour}/>
        {/each}
        <stop offset="0%" stop-color="#ec4899"/>
        <stop offset="100%" stop-color="#facc15"/>
    </linearGradient>
</svg>