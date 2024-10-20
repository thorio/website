<script setup lang="ts">
const { data } = await useFetch("/api/home");

useSeoMeta({ description: "Service Dashboard for chirality.de" });
</script>

<template>
	<ChiralityHeader :username="data!.username" />
	<TileContainer :tiles="data!.tiles" />
</template>
