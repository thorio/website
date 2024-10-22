<script setup lang="ts">
const { data } = await useFetch("/api/home");
const { appName } = useRuntimeConfig().public;

useSeoMeta({ description: `${appName} Service Dashboard` });
</script>

<template>
	<div>
		<AppHeader :username="data!.username" />
		<TileContainer :tiles="data!.tiles" />
	</div>
</template>
