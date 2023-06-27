import { User } from "~/types/user";
import { getConfig } from "./config";
import { Tile } from "types/tile";

export function getServices(user: User): Tile[] {
	return getConfig().services
		.filter(s => !s.group || user.groups.includes(s.group))
		.map(s => ({
			url: s.url,
			name: s.name,
			icon: s.icon,
			title: "huh?",
		}));
}
