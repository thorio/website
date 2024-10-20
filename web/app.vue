<script setup lang="ts">
useSeoMeta({ description: "Nothing to see here (yet)" });
</script>

<template>
	<AppHeader ghost no-logo />
	<p class="title">
		<AppLogo />
	</p>

	<div class="placeholder"></div>

	<p>Nothing to see here.</p>
</template>

<style lang="scss">
@use "@workspace/ui-lib/scss/colors.scss";
@use "@workspace/ui-lib/scss/breakpoints.scss";

.placeholder {
	width: 32em;
	height: 24em;
	margin: 5em auto 0 auto;
	border: 1em dashed #303030;

	@include breakpoints.down("md") {
		display: none;
	}
}

.title {
	font-size: 2.5em;
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
