export default defineNuxtConfig({
	compatibilityDate: "2024-10-19",
	modules: ["@workspace/ui-lib", "@nuxt/fonts"],

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
