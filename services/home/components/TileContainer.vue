<script setup>
let tiles = reactive(new Array(20).fill({
	icon: "default.png",
	name: "default",
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
@use "lib/scss/colors.scss";
@use "lib/scss/breakpoints.scss";

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
	transition: filter 0.2s;
	width: 15em;
	height: 8em;
	margin: 1em;
	background-color: colors.$background-dark;
	display: flex;
	flex-direction: column;
	color: inherit;
	text-decoration: none;

	@include breakpoints.down(sm) {
		width: 45%;
		height: 6em;
		margin: 0.3em;
	}

	&:hover {
		filter: brightness(1.1);
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
