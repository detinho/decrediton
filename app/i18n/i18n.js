export function getMessages(locale) {
	try {
		module = require("./" + locale);
		return module.messages;
	} catch(ex) {
		return "en-us";
	}
}