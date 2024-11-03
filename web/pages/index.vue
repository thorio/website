<script setup lang="ts">
const { matrixUrl, githubUrl, printablesUrl } = useRuntimeConfig().public;

useSeoMeta({ description: "Nothing to see here (yet)" });
</script>

<template>
	<div>
		<AppHeader ghost no-logo />
		<p class="title">
			<AppLogo />
		</p>

		<div class="placeholder" />

		<p>Nothing to see here.</p>

		<div class="links">
			<a :href="matrixUrl">
				<Icon name="simple-icons:matrix" />
				<ScreenReaderOnly>Matrix</ScreenReaderOnly>
			</a>
			<a :href="githubUrl">
				<Icon name="simple-icons:github" />
				<ScreenReaderOnly>Github</ScreenReaderOnly>
			</a>
			<a :href="printablesUrl">
				<Icon name="simple-icons:printables" />
				<ScreenReaderOnly>Printables</ScreenReaderOnly>
			</a>
		</div>
	</div>
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

	@include breakpoints.up("md") {
		margin-top: 1em;
	}
}

.links {
	font-size: 2.5em;
	margin: 2em auto 0 auto;
	display: flex;
	flex-direction: row;
	gap: 0.5em;
	justify-content: center;

	a {
		transition: color 0.2s;

		&:hover {
			color: colors.$accent
		}
	}
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
