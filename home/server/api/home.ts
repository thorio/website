import { getConfig } from "~/src/config";
import { getUser } from "~/src/user";
import { getServices } from "~/src/services";

export default defineEventHandler((e) => {
	let config = getConfig();
	let user = getUser(e.node.req.headers);

	e.node.req.headers;
	return {
		username: user.name,
		logoutUrl: config.logoutUrl,
		tiles: getServices(user),
	};
});
