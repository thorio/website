<script setup lang="ts">
defineProps<{ name: string; }>();
</script>

<template>
	<span :class="`gg-${name}`"></span>
</template>

<style scoped lang="scss">
@import "css.gg/icons/icons.scss";
</style>
