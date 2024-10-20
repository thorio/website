export default defineNuxtConfig({
	compatibilityDate: "2024-10-19",
	modules: ["@workspace/ui-lib"],

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
