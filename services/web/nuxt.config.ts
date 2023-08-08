export default defineNuxtConfig({
	modules: ["@workspace/lib"],

	app: {
		head: {
			title: "Chirality",
			htmlAttrs: { lang: "en" },
			link: [
				{ rel: "icon", href: "/favicon.svg" },
			],
		},
	},
});
