<script lang="ts">
    export let title: string;
    export let description: string;
    export let src: string;
    export let alt: string;
</script>

<div class="h-56 border">
    <h1>{title}</h1>
    <p>{description}</p>
    <img {src} {alt}>
</div>