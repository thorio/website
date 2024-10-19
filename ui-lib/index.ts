import { defineNuxtModule, createResolver, addComponentsDir } from "@nuxt/kit";

export default defineNuxtModule({
	meta: {
		name: "ui-lib",
	},

	async setup(_, nuxt) {
		const resolver = createResolver(import.meta.url);

		nuxt.hook("nitro:config", async (nitroConfig) => {
			(nitroConfig.publicAssets ??= []).push({
				dir: resolver.resolve("./public"),
				maxAge: 60 * 60 * 24 * 365, // 1 year
			});
		});

		await addComponentsDir({
			path: resolver.resolve("./components"),
			global: true,
		});
	},
});
