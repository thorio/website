import routes from "./pages";

export default defineNuxtConfig({
	experimental: {
		noScripts: true,
		payloadExtraction: false,
	},
	generate: {
		routes: (() => {
			return routes.map(r => `/_error/${r.code}.html`);
		})(),
	}
});
