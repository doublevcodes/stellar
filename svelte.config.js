import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),
		// This hydrates the div element with ID "svelte" (<div id="svelte"/>) with the Svelte app.
		target: '#svelte'
	}
};

export default config;
