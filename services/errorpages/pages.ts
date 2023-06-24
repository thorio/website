class Errorpage {
	constructor(public code: string, public title: string, public subtitle: string, public name?: string) {
		this.name ??= code;
	}
}

export default [
	new Errorpage("401", "You are not authorized to access this page", "Wait a minute, who are you?"),
	new Errorpage("403", "You are not allowed to access this page", "You shall not pass"),
	new Errorpage("404", "There doesn't seem to be anything here", "The page is a lie"),
	new Errorpage("429", "You're making too many requests", "Slow down there, buddy"),
	new Errorpage("500", "Something went wrong on our end", "Rapid unscheduled self-disassembly"),
	new Errorpage("502", "This page is currently unavailable", "Something's wrong, I can feel it"),
	new Errorpage("503", "The service is currently down for maintenance", `"planned maintenance"`),
	new Errorpage("504", "This page is currently unavailable", "Ain't nobody got time for that"),
	new Errorpage("meta404", "Error unavailable", "it broke so bad there's not even an error for it", "???"),
];
