import type { User } from "~/types";
import type { IncomingHttpHeaders } from "http";

const RemoteUser = "remote-user";
const RemoteGroups = "remote-groups";
const RemoteName = "remote-name";

export function getUser(headers: IncomingHttpHeaders): User {
	let user = headers[RemoteUser] as string;
	let name = headers[RemoteName] as string ?? user;
	let groups = headers[RemoteGroups] as string ?? "";

	if (!user) {
		throw new Error("Remote-User header is not set");
	}

	return {
		user,
		name,
		groups: groups.split(",")
	};
};
