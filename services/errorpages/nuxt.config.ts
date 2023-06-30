import routes from "./pages";

export default defineNuxtConfig({
	app: {
		head: {
			htmlAttrs: { lang: "en" },
		},
	},

	experimental: {
		noScripts: true,
		payloadExtraction: false,
	},

	generate: {
		routes: routes.map(r => `/_error/${r.code}.html`),
	}
});
