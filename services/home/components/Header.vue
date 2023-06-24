<script setup lang="ts">
defineProps(["username"]);
</script>

<template>
	<header>
		<div class="item">
			<img src="../assets/logo.svg" alt="" />
			<span>Chirality</span>
		</div>
		<div class="item user">
			<span class=" username">{{ username }}</span>
			<a href="/logout">Logout</a>
		</div>
	</header>
</template>

<style lang="scss" scoped>
@use "lib/scss/colors.scss";
@use "lib/scss/breakpoints.scss";

header {
	background-color: colors.$background-dark;
	font-size: 20pt;
	display: flex;
	flex-direction: row;
	padding: 0.3em 0.3em;

	@include breakpoints.up(md) {
		padding: 0.3em 1em;
	}
}

.item {
	display: flex;
	flex-direction: row;

	&.user {
		margin-left: auto;
	}

	&.loading {
		filter: brightness(1.3);
		border-radius: 1em;
		width: 10ch;
	}

	img {
		height: 1em;
		margin: auto 0;
	}
}

.username {
	margin: auto 0;
	font-size: 0.7em;

	@include breakpoints.down(xxs) {
		display: none;
	}
}

a {
	font-size: 0.55em;
	line-height: 2.2em;
	text-decoration: none;
	background-color: #303339;
	border: none;
	color: inherit;
	padding: 1px 6px;
	margin-left: 0.7em;

	&:hover {
		filter: brightness(1.1);
	}
}
</style>
