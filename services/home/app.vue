<script setup lang="ts">
let user = reactive({ name: "test" });
</script>

<template>
	<Header :username="user.name" />
	<TileContainer />
</template>

<style lang="scss">
@use "lib/scss/colors.scss";
@import url("https://fonts.googleapis.com/css?family=Roboto");

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
