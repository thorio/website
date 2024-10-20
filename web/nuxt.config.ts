export default defineNuxtConfig({
	compatibilityDate: "2024-10-19",
	modules: ["@workspace/ui-lib"],

	runtimeConfig: {
		public: {
			matrixUrl: "https://matrix.to/#/@thorou:chirality.de",
			githubUrl: "https://github.com/thorio",
			printablesUrl: "https://www.printables.com/@Thorou",
		},
	},

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
