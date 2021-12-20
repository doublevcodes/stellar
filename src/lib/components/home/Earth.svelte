<script lang="ts">
	import * as THREE from 'three';
	import * as SC from 'svelte-cubed';
	import { onMount } from 'svelte';
	import { spring } from 'svelte/motion';

	// Constants for the scene
	const cameraPosition: SC.Position = [0.75, 0.75, 1.25];
	const allowZoom = false;
	const ambientLightingIntensity = 0.6;
	const directionalLightingPosition: SC.Position = [0, 7, 0];
	const directionalLightingIntensity = 0.2;

	// Earth and cloud constants
	let earthMaterial: THREE.MeshPhongMaterial;
	let earthRadius = spring(0.4);
	const earthSpinSpeed = 0.0005;
	let cloudMaterial: THREE.MeshPhongMaterial;
	const cloudSpinSpeed = earthSpinSpeed * 1.0005;

	// Application state
	let earthMousedown = false;
	let earthSpin = 0;
	let cloudSpin = 0;

	onMount(async () => {
		const earthTexture = '/earth/texture.avif';
		const earthBumpMap = '/earth/bump.avif';
		const earthBumpScale = 0.05;
		const earthSpecularMap = '/earth/specular.avif';
		const earthSpecularColour = new THREE.Color('grey');
		const cloudTexture = '/earth/clouds.avif';

		earthMaterial = new THREE.MeshPhongMaterial({
			map: await new THREE.TextureLoader().loadAsync(earthTexture),
			bumpMap: await new THREE.TextureLoader().loadAsync(earthBumpMap),
			bumpScale: earthBumpScale,
			specularMap: await new THREE.TextureLoader().loadAsync(earthSpecularMap),
			specular: earthSpecularColour
		});

		cloudMaterial = new THREE.MeshPhongMaterial({
			map: await new THREE.TextureLoader().loadAsync(cloudTexture),
			transparent: true
		});
	});

	// The block is reactive since the `earthMousedown` variable can change
	$: SC.onFrame(() => {
		earthSpin += !earthMousedown ? earthSpinSpeed : 0;
		cloudSpin += !earthMousedown ? cloudSpinSpeed : 0;
	});
</script>

<div
	id="earth-canvas"
	class="relative h-[95%]"
	on:mouseenter={(_event) => ($earthRadius += 0.1)}
	on:mousedown={(_event) => (earthMousedown = true)}
	on:mouseup={(_event) => (earthMousedown = false)}
	on:mouseout={(_event) => ($earthRadius -= 0.1)}
	on:blur={(_event) => ($earthRadius -= 0.1)}
>
	<!-- Checking if globe materials are ready i.e. the assets have been fetched -->
	{#if earthMaterial && cloudMaterial}
		<SC.Canvas>
			<SC.Mesh
				geometry={new THREE.SphereGeometry($earthRadius, 32, 32)}
				material={earthMaterial}
				rotation={[0, earthSpin, 0]}
			/>
			<SC.Mesh
				geometry={new THREE.SphereGeometry($earthRadius * 1.005, 32, 32)}
				material={cloudMaterial}
				rotation={[0, cloudSpin, 0]}
			/>
			<SC.PerspectiveCamera position={cameraPosition} />
			<SC.OrbitControls enableZoom={allowZoom} />
			<SC.AmbientLight intensity={ambientLightingIntensity} />
			<SC.DirectionalLight
				position={directionalLightingPosition}
				intensity={directionalLightingIntensity}
			/>
		</SC.Canvas>
	{:else}
		<!-- Shows an animated loading spinner whilst the globe assets are being fetched-->
		<div class="flex items-center justify-center h-[95%]">
			<svg
				class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
			>
				<circle
					class="opacity-25"
					cx="12"
					cy="12"
					r="10"
					stroke="currentColor"
					stroke-width="4"
				/>
				<path
					class="opacity-75"
					fill="currentColor"
					d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
				/>
			</svg>
		</div>
	{/if}
</div>
