<script setup lang="ts">
	import pages from "../../pages";
	const route = useRoute();

	let errorpage = pages.find(p => p.code == route.params.id);
	errorpage ??= pages.find(p => p.code == "meta404");
</script>

<template>
	<h1>{{ errorpage?.name }}</h1>
	<sub>{{ errorpage?.subtitle }}</sub>
	<p>{{ errorpage?.title }}</p>
</template>

<style>
	html {
		font-family: Arial, Helvetica, sans-serif;
		background-color: #181a1b;
		color: #e8e6e3;
		text-align: center;
	}

	h1 {
		font-size: 100pt;
		margin-bottom: 0;
	}

	sub {
		font-size: 10pt;
		color: #6f6e6c;
	}

	p {
		font-size: 20pt;
		margin-top: 4em;
	}
</style>
