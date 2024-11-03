<script setup lang="ts">
const { matrixUrl, githubUrl, printablesUrl } = useRuntimeConfig().public;
</script>

<template>
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
</template>

<style lang="scss">
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
</style>
