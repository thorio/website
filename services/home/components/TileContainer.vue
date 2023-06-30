<script setup lang="ts">
import { Tile } from "~/types/tile";

defineProps<{ tiles: Tile[]; }>();
</script>

<template>
	<section>
		<a class="tile" v-for="tile in tiles" :href="tile.url">
			<div class="image-container">
				<img width="80" height="80" :src="`/icons/${tile.icon}`" alt="" />
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
	width: 15em;
	height: 8em;
	margin: 1em;
	margin-bottom: 1.5em;
	display: flex;
	flex-direction: column;
	color: inherit;
	text-decoration: none;

	transition: transform 0.2s, filter 0.2s;
	filter: drop-shadow(5px 5px 4px rgba(0, 0, 0, 0.2));

	&:hover {
		filter: drop-shadow(7px 7px 4px rgba(0, 0, 0, 0.2));
		transform: translate(-2px, -2px);
	}

	@include breakpoints.down(sm) {
		width: 45%;
		height: 6em;
		margin: 0.3em;
	}

	.image-container {
		height: 0;
		flex: 1;
		padding-top: 9px;
	}

	img {
		display: block;
		height: 100%;
		width: auto;
		margin: 0 auto;
	}

	p {
		margin: 10px auto;
		flex: 0;
	}
}
</style>
