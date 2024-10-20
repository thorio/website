import { defineNuxtModule, createResolver, addComponentsDir, installModule } from "@nuxt/kit";
import defu from "defu";

export interface Config {
	loginUrl: string,
	logoutUrl: string,
}

declare module "@nuxt/schema" {
	interface PublicRuntimeConfig extends Config { }
}

const defaults: Config = {
	loginUrl: "https://home.chirality.de",
	logoutUrl: "https://auth.chirality.de",
};

export default defineNuxtModule({
	meta: { name: "ui-lib" },
	defaults,

	async setup(_, nuxt) {
		const resolver = createResolver(import.meta.url);

		installModule("@nuxt/fonts");
		installModule("@nuxt/icon");

		nuxt.options.runtimeConfig.public = defu(nuxt.options.runtimeConfig.public, defaults);
		nuxt.options.css.push(resolver.resolve("./scss/global.scss"));

		nuxt.hook("nitro:config", async (nitroConfig) => {
			(nitroConfig.publicAssets ??= []).push({
				dir: resolver.resolve("./public"),
				maxAge: 60 * 60 * 24 * 365, // 1 year
			});
		});

		await addComponentsDir({
			path: resolver.resolve("./components"),
		});
	},
});
