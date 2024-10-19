<script setup lang="ts">
import pages from "../../pages";

const route = useRoute();

let errorpage = pages.find(p => p.code == route.params.id);
errorpage ??= pages.find(p => p.code == "meta404");

useSeoMeta({ title: `${errorpage?.name} - Chirality` });
</script>

<template>
	<h1>{{ errorpage?.name }}</h1>
	<sub>{{ errorpage?.subtitle }}</sub>
	<p>{{ errorpage?.title }}</p>
</template>

<style lang="scss">
@use "@workspace/ui-lib/scss/colors.scss";

html {
	font-family: Arial, Helvetica, sans-serif;
	background-color: colors.$background;
	color: colors.$text;
	text-align: center;
}

h1 {
	font-size: 100pt;
	margin-bottom: 0;
}

sub {
	font-size: 10pt;
	color: colors.$text-muted;
}

p {
	font-size: 20pt;
	margin-top: 4em;
}
</style>
