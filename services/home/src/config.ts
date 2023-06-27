import { parse } from "yaml";
import fs from "fs";

export class Config {
	public logoutUrl!: string;
	public services!: ServiceConfig[];
}

class ServiceConfig {
	public name!: string;
	public group!: string;
	public icon!: string;
	public url!: string;
}

let config: Config;

export function getConfig(): Config {
	return config ??= loadConfig();
}

function loadConfig(): Config {
	let configString = fs.readFileSync(`${process.cwd()}/config.yml`);

	return parse(configString.toString());
}
