import type { Tile, User } from "~/types";
import { getConfig } from "./config";

export function getServices(user: User): Tile[] {
	return getConfig().services
		.filter(s => !s.group || user.groups.includes(s.group))
		.map(s => ({
			url: s.url,
			name: s.name,
			icon: s.icon ?? "default.webp",
		}));
}
