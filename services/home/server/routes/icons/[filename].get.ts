import { getIconStream } from "~/src/icons";

// Nuxt doesn't support adding static content at runtime.
// This route serves icon files from /icons.
export default defineEventHandler(async (event) => {
	const stream = await getIconStream(event.context.params?.filename);

	if (!stream) {
		return sendError(event, createError({ status: 404 }));
	}

	// Enable caching for one week
	event.node.res.setHeader("cache-control", "public, max-age=604800");

	return sendStream(event, stream);
});
