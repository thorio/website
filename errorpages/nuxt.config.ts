import routes from "./pages";

export default defineNuxtConfig({
	compatibilityDate: "2024-10-19",

	app: {
		head: {
			htmlAttrs: { lang: "en" },
		},
	},

	experimental: {
		payloadExtraction: false,
	},

	features: {
		noScripts: true,
	},

	nitro: {
		prerender: {
			crawlLinks: false,
			routes: routes.map(r => `/_error/${r.code}.html`),
			ignore: ["/200", "/404"]
		},
	},
});
