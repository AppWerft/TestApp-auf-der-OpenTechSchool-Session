// alle vars are local, only get is an public method
exports.get = function(options) {
	var client = Ti.Network.createHTTPClient({
		// on succesful loading:
		onload : function() {
			/* how wired is SPIEGEL ... */
			var xmlstring = this.responseText.replace('encoding="ISO-8859-1"','encoding="UTF-8"');
			// calling of parser module from github:
			var XMLTools = require("vendor/xml2json");
			// making an instance:
			var parser = new XMLTools(xmlstring);
			// parse
			var myjson = parser.toObject();
			// callback to caller function
			options.onsuccess && options.onsuccess(myjson.channel.item);
		},
		onerror : function() {
			console.log(this.error);
		}
	});
	client.open('GET', options.url,true);
	client.setRequestHeader('User-Agent','My special browser from Hamburg'); // it is only an example
	// sending empty body (GET):
	client.send();
};
