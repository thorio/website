import fs from "fs";
import path from "path";

export async function getIconStream(filename: string | undefined): Promise<fs.ReadStream | undefined> {
	if (!filename) return;

	const filePath = path.join(process.cwd(), "public/icons", filename);

	if (!(await (fs.promises.stat(filePath).catch(() => { })))?.isFile()) {
		return;
	}

	return fs.createReadStream(filePath);
}
