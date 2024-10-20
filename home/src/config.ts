import yaml from "yaml";
import fs from "fs";

export interface Config {
	services: ServiceConfig[];
}

export interface ServiceConfig {
	name: string;
	group: string;
	icon: string;
	url: string;
}

let config: Config;

export function getConfig(): Config {
	return config ??= loadConfig();
}

function loadConfig(): Config {
	let configString = fs.readFileSync(`${process.cwd()}/config.yml`);

	return yaml.parse(configString.toString());
}
