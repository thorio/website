import { getIconStream } from "~/src/icons";

export default defineEventHandler(async (event) => {
	const stream = await getIconStream(event.context.params?.filename);

	if (!stream) {
		return sendError(event, createError({ status: 404 }));
	}

	return sendStream(event, stream);
});
