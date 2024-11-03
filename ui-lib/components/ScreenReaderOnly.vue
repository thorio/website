<script setup lang="ts">
</script>

<template>
	<span class="hidden-visually">
		<slot />
	</span>
</template>

<style lang="scss" scoped>
.hidden-visually {
	position: absolute;
	overflow: hidden;
	white-space: nowrap;
	margin: 0;
	padding: 0;
	height: 1px;
	width: 1px;
	clip: rect(0 0 0 0);
	clip-path: inset(100%);
}
</style>
