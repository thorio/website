import { defineNuxtModule, createResolver, addComponentsDir, installModule } from "@nuxt/kit";
import defu from "defu";
import type { NuxtOptions, Nuxt } from "@nuxt/schema";

export interface Config {
	appName: string,
	loginUrl: string,
	logoutUrl: string,
}

declare module "@nuxt/schema" {
	// eslint-disable-next-line @typescript-eslint/no-empty-object-type
	interface PublicRuntimeConfig extends Config { }
}

const defaults: Config = {
	appName: "Chirality",
	loginUrl: "https://home.chirality.de",
	logoutUrl: "https://auth.chirality.de",
};

const scssModules = [
	"./scss/colors.scss",
	"./scss/breakpoints.scss"
];

const resolver = createResolver(import.meta.url);

export default defineNuxtModule({
	meta: { name: "ui-lib" },
	defaults,

	async setup(_, nuxt) {
		installModule("@nuxt/eslint");
		installModule("@nuxt/fonts");
		installModule("@nuxt/icon");

		nuxt.options.runtimeConfig.public = defu(nuxt.options.runtimeConfig.public, defaults);

		registerCss(nuxt.options);
		registerAssets(nuxt);

		await registerComponents();
	},
});

function registerComponents() {
	return addComponentsDir({
		path: resolver.resolve("./components"),
	});
}

function registerAssets(nuxt: Nuxt) {
	nuxt.hook("nitro:config", async (nitroConfig) => {
		(nitroConfig.publicAssets ??= []).push({
			dir: resolver.resolve("./public"),
			maxAge: 60 * 60 * 24 * 365,
		});
	});
}

function registerCss(options: NuxtOptions) {
	// global scss variables
	const scssImports = scssModules
		.map(m => resolver.resolve(m))
		.map(m => `@use "${m}";`)
		.join("");

	options.vite = defu(options.vite, { css: { preprocessorOptions: { scss: { additionalData: scssImports, } } } });

	// global styles
	options.css.push(resolver.resolve("./scss/global.scss"));
}

