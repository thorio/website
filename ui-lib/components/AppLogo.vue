<script setup lang="ts">
const { appName } = useRuntimeConfig().public;
</script>

<template>
	<img width="150" height="150" src="/favicon.svg" alt="" />
	<span>{{ appName }}</span>
</template>

<style lang="scss" scoped>
img {
	height: 1em;
	width: auto;
	margin: auto 0;
}
</style>
