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
			<span class="username">{{ username }}</span>
			<a href="/logout"><lib-Icon name="log-in" aria-label="log out" /></a>
		</div>
	</header>
</template>

<style lang="scss" scoped>
@use "@workspace/lib/scss/colors.scss";
@use "@workspace/lib/scss/breakpoints.scss";

header {
	position: sticky;
	top: 0;
	z-index: 999;
	background-color: colors.$background-header;
	font-size: 20pt;
	display: flex;
	flex-direction: row;
	padding: 0.3em 0.3em;
	border-bottom: solid 2px colors.$accent;
	box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);

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

	img {
		height: 1em;
		margin: auto 0;
	}
}

.user {
	font-size: 0.7em;

	>span {
		margin: auto 0;

		@include breakpoints.down(xs) {
			display: none;
		}
	}

	a {
		transition: color 0.2s;
		text-decoration: none;
		border: none;
		color: inherit;
		margin: auto 0.5em auto 1.5em;

		&:hover {
			color: colors.$accent
		}
	}
}
</style>
