// alle vars are local, only get is an public method
exports.get = function(callback) {
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
			callback && callback(myjson.channel.item);
		},
		onerror : function() {
			console.log(this.error);
		}
	});
	client.open('GET', 'http://www.spiegel.de/politik/index.rss',true);
	client.setRequestHeader('User-Agent','My special browser from Hamburg'); // it is only an example
	// sending empty body (GET):
	client.send();
};
