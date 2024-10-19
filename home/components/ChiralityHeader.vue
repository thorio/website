<script setup lang="ts">
import { LogOut } from 'lucide-vue-next';

defineProps<{ username: string; logoutUrl: string; }>();
</script>

<template>
	<header>
		<div class="item">
			<img width="150" height="150" src="/favicon.svg" alt="" />
			<span>Chirality</span>
		</div>
		<div class="item user">
			<span class="username">{{ username }}</span>
			<a :href="logoutUrl">
				<LogOut :size="18" />
			</a>
		</div>
	</header>
</template>

<style lang="scss" scoped>
@use "@workspace/ui-lib/scss/colors.scss";
@use "@workspace/ui-lib/scss/breakpoints.scss";

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
		width: auto;
		margin: auto 0;
	}
}

.user {
	font-size: 0.7em;

	.username {
		margin: auto 0;

		@include breakpoints.down(xs) {
			display: none;
		}
	}

	a {
		transition: color 0.2s;
		color: inherit;
		margin: auto 0 auto 1em;
		padding-top: 6px;

		&:hover {
			color: colors.$accent
		}
	}
}
</style>
