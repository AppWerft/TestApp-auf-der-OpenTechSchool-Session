// create tab group
var tabGroup = Titanium.UI.createTabGroup();

//
// create base UI tab and root window
//

var tab1 = Titanium.UI.createTab({
	icon : 'KS_nav_views.png',
	title : 'SPIEGEL',
	window : require('ui/spon.window').create()
});
//
// create controls tab and root window
//
var win2 = Titanium.UI.createWindow({
	title : 'Tab 2',
	backgroundColor : '#fff'
});
win2.add(Ti.UI.createWebView({
	url : 'http://betahaus.de/'
}));

var tab2 = Ti.UI.createTab({
	icon : 'KS_nav_ui.png',
	title : 'Betahaus',
	window : win2
});

//
//  add tabs
//
tabGroup.addTab(tab1);
tabGroup.addTab(tab2);

// open tab group
tabGroup.open();

