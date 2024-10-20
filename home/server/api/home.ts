import { getUser } from "~/src/user";
import { getServices } from "~/src/services";

export default defineEventHandler((e) => {
	let user = getUser(e.node.req.headers);

	e.node.req.headers;
	return {
		username: user.name,
		tiles: getServices(user),
	};
});
