exports.get = function(callback) {
	var client = Ti.Network.createHTTPClient({
		onload : function() {
			var XMLTools = require("vendor/xml2json");
			var parser = new XMLTools(this.responseText);
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
