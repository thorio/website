<script setup lang="ts">
useSeoMeta({ description: "There is nothing here (yet)" });
</script>

<template>
	<p class="test">
		<img width="150" height="150" src="/favicon.svg" alt="" />
		<span>Chirality</span>
	</p>

	<div class="placeholder"></div>

	<p>There is nothing here.</p>
</template>

<style lang="scss">
@use "@workspace/lib/scss/colors.scss";
@use "@workspace/lib/scss/breakpoints.scss";
@use "@workspace/lib/scss/fonts/roboto.scss";

body {
	margin: 0;
	background-color: colors.$background;
	font-family: Roboto, Arial, sans-serif;
	color: colors.$text;
}

.placeholder {
	width: 40em;
	height: 30em;
	margin: 5em auto 0 auto;
	border: 1em dashed #303030;
}

p {
	display: flex;
	flex-direction: row;
	font-size: 2em;
	margin-top: 2em;
	justify-content: center;

	img {
		height: 1em;
		width: auto;
		margin: auto 0;
	}
}
</style>
