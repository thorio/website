<script setup lang="ts">
let tiles = reactive(new Array(20).fill({
	icon: "default.png",
	name: "example",
	title: "test",
	url: "https://example.net",
}));
</script>

<template>
	<section>
		<a class="tile" v-for="tile in tiles" :key="tile.title" :href="tile.url">
			<div class="image-container">
				<img :src="`/icons/${tile.icon}`" alt="" />
			</div>
			<p>{{ tile.name }}</p>
		</a>
	</section>
</template>

<style lang="scss" scoped>
@use "@workspace/lib/scss/breakpoints.scss";

section {
	padding: 1em;
	display: flex;
	flex-direction: row;
	justify-content: center;
	flex-wrap: wrap;
	max-width: 90em;
	margin: 0 auto;
}

.tile {
	transition: transform 0.2s, filter 0.2s;
	width: 15em;
	height: 8em;
	margin: 1em;
	display: flex;
	flex-direction: column;
	color: inherit;
	text-decoration: none;
	filter: drop-shadow(5px 5px 4px rgba(0, 0, 0, 0.2));

	@include breakpoints.down(sm) {
		width: 45%;
		height: 6em;
		margin: 0.3em;
	}

	&:hover {
		filter: drop-shadow(7px 7px 4px rgba(0, 0, 0, 0.2));
		transform: translate(-2px, -2px);
	}

	.image-container {
		height: 0;
		flex: 1;
		padding-top: 4%;
	}

	img {
		display: block;
		height: 100%;
		margin: 0 auto;
	}

	p {
		margin: 4% auto;
		flex: 0;
	}
}
</style>
