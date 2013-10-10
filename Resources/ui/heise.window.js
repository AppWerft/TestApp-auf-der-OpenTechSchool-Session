exports.create = function() {
	var win = Titanium.UI.createWindow({
	});
	win.add(Ti.UI.createWebView({
		url : 'http://heise.de/'
	}));
	return win;
};
