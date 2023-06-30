<script setup lang="ts">
const { data } = await useFetch("/api/home");

useSeoMeta({ description: "Service Dashboard for chirality.de" });
</script>

<template>
	<ChiralityHeader :username="data!.username" :logoutUrl="data!.logoutUrl" />
	<TileContainer :tiles="data!.tiles" />
</template>

<style lang="scss">
@use "@workspace/lib/scss/colors.scss";
@use "~/scss/fonts/roboto.scss";

body {
	margin: 0;
	background-color: colors.$background;
	font-family: Roboto, Arial, sans-serif;
	color: colors.$text;
}

html {
	box-sizing: border-box;
}

*,
*:before,
*:after {
	box-sizing: inherit;
}

*:focus {
	outline: 1px solid #777;
}
</style>
