import type { Config } from "~";

export const useConfig = (): Config => {
	return useRuntimeConfig().public;
};
