import { eventHandler } from "h3";

export default defineNuxtConfig({
	modules: ["@workspace/lib"],

	app: {
		head: {
			title: "Home - Chirality",
			htmlAttrs: { lang: "en" },
			link: [
				{ rel: "icon", href: "/favicon.svg" },
			],
		},
	},

	devServerHandlers: [
		{
			// These headers are set by the reverse proxy in production,
			// so in dev mode it needs to be done inside the service itself.
			route: "/",
			handler: eventHandler(e => {
				e.node.req.headers["remote-user"] ??= "test-user";
				e.node.req.headers["remote-name"] ??= "test user";
				e.node.req.headers["remote-groups"] ??= "service2,service3,restOfServices";
			}),
		},
	],
});
