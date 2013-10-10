exports.get = function(callback) {
	var client = Ti.Network.createHTTPClient({
		onload : function() {
			/* how wired is SPIEGEL ... */
			var xmlstring = this.responseText.replace('encoding="ISO-8859-1"','encoding="UTF-8"');
			var XMLTools = require("vendor/xml2json");
			var parser = new XMLTools(xmlstring);
			var myjson = parser.toObject();
			callback && callback(myjson.channel.item);
		},
		onerror : function() {
			console.log(this.error);
		}
	});
	client.open('GET', 'http://www.spiegel.de/politik/index.rss');
	client.send();

};
