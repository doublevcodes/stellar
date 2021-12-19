<script lang="ts">
	import * as THREE from 'three';
	import * as SC from 'svelte-cubed';

	// Spring is used to provide a nice animation for the Earth increasing and decreasing in
	// size when it is hovered on.
	import { spring } from 'svelte/motion';

	let earthMousedown = false;
	let earthSpin = 0;
	let cloudSpin = 0;

	// Constants for the scene
	const cameraPosition: SC.Position = [0.75, 0.75, 1.25];
	const allowZoom = false;
	const ambientLightingIntensity = 0.6;
	const directionalLightingPosition: SC.Position = [0, 7, 0];
	const directionalLightingIntensity = 0.2;

	// Earth constants
	let earthRadius = spring(0.5);
	const earthSpinSpeed = 0.0005;
	const earthTexture = '/earth/texture.jpg';
	const earthBumpMap = '/earth/bump.jpg';
	const earthBumpScale = 0.05;
	const earthSpecularMap = '/earth/specular.jpg';
	const earthSpecularColour = new THREE.Color('grey');
	const cloudTexture = '/earth/clouds.png';
	let cloudRadius = spring($earthRadius * 1.005);
	const cloudSpinSpeed = earthSpinSpeed * 1.0005;

	// The block is reactive since the `earthMousedown` variable can change
	$: SC.onFrame(() => {
		earthSpin += !earthMousedown ? earthSpinSpeed : 0;
		cloudSpin += !earthMousedown ? cloudSpinSpeed : 0;
	});

	// This increases the size of the Earth
	function earthMouseenterHandler(_event: MouseEvent) {
		cloudRadius.set(($earthRadius + 0.1) * 1.005);
		earthRadius.set($earthRadius + 0.1);
	}

	// This decreases the size of the Earth
	function earthMouseoutHandler(_event: MouseEvent | FocusEvent) {
		cloudRadius.set(($earthRadius - 0.1) * 1.005);
		earthRadius.set($earthRadius - 0.1);
	}
</script>

<section
	id="earth-canvas"
	class="relative h-[95%]"
	on:mouseenter={earthMouseenterHandler}
	on:mousedown={(_event) => (earthMousedown = true)}
	on:mouseup={(_event) => (earthMousedown = false)}
	on:mouseout={earthMouseoutHandler}
	on:blur={earthMouseoutHandler}
>
	<SC.Canvas>
		<SC.Mesh
			geometry={new THREE.SphereGeometry($earthRadius, 32, 32)}
			material={new THREE.MeshPhongMaterial({
				map: new THREE.TextureLoader().load(earthTexture),
				bumpMap: new THREE.TextureLoader().load(earthBumpMap),
				bumpScale: earthBumpScale,
				specularMap: new THREE.TextureLoader().load(earthSpecularMap),
				specular: earthSpecularColour
			})}
			rotation={[0, earthSpin, 0]}
		/>
		<SC.Mesh
			geometry={new THREE.SphereGeometry($cloudRadius, 32, 32)}
			material={new THREE.MeshPhongMaterial({
				map: new THREE.TextureLoader().load(cloudTexture),
				transparent: true
			})}
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
</section>
