import fs from "fs";
import path from "path";

export async function getIconStream(filename: string | undefined): Promise<fs.ReadStream | undefined> {
	const filePath = path.join(process.cwd(), "public/icons", filename ?? "default.png");

	if (!(await (fs.promises.stat(filePath).catch(() => { })))?.isFile()) {
		return;
	}

	return fs.createReadStream(filePath);
}
