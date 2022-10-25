<script lang="ts" context="module">
    const COLOURS: string[] = ["pink", "purple", "orange", "yellow", "blue", "green"];
</script>

<script lang="ts">
    let random = Math.floor(Math.random() * COLOURS.length);
    let colour = COLOURS[random];
    COLOURS.splice(random, 1);

    let top_offset = Math.floor(Math.random() * 40)
    let left_offset = Math.floor(Math.random() * 50)
</script>

<div class="absolute bg-pink-300 rounded-full top-12 -left-4 w-72 h-72 filter blur-2xl mix-blend-soft-light animate-blob animation-delay-3000"></div>
<div class="absolute bg-purple-300 rounded-full top-48 left-20 w-72 h-72 filter blur-2xl mix-blend-soft-light animate-blob animation-delay-3000"></div>
<div class="absolute top-[40rem] left-36 w-72 h-72 bg-orange-300 rounded-full filter blur-2xl mix-blend-soft-light animate-blob animation-delay-4000"></div>
<div class="absolute top-[36rem] left-[18rem] w-72 h-72 bg-yellow-400 rounded-full filter blur-2xl mix-blend-soft-light animate-blob"></div>
            