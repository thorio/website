<script setup lang="ts">
import { useConfig } from "../src/config";

const { loginUrl, logoutUrl } = useConfig();

defineProps<{
	ghost?: boolean,
	noLogo?: boolean,
	username?: string;
}>();
</script>

<template>
	<header :class="{ solid: !ghost }">
		<AppLogo v-if="!noLogo" />

		<div class="item user">
			<template v-if="username">
				<span class="username">{{ username }}</span>
				<a :href="logoutUrl">
					<Icon name="lucide:log-out" />
				</a>
			</template>

			<a v-else :href="loginUrl">
				<Icon name="lucide:log-in" />
			</a>
		</div>
	</header>
</template>

<style lang="scss" scoped>
@use "../scss/colors.scss";
@use "../scss/breakpoints.scss";

header {
	position: sticky;
	top: 0;
	z-index: 999;
	font-size: 20pt;
	display: flex;
	flex-direction: row;
	border-bottom: solid 2px transparent;
	padding: 0.3em 0.3em;
	min-height: 50px;

	@include breakpoints.up(md) {
		padding: 0.3em 1em;
	}

	&.solid {
		background-color: colors.$background-header;
		border-bottom-color: colors.$accent;
		box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
	}
}

.item {
	display: flex;
	flex-direction: row;

	&.user {
		margin-left: auto;
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
		margin: auto 0 auto 1em;
		height: 1em;
		padding-top: 1px;

		&:hover {
			color: colors.$accent
		}
	}
}
</style>
