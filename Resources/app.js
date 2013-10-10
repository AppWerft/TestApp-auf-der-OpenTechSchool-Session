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
var tab2 = Ti.UI.createTab({
	icon : 'KS_nav_ui.png',
	title : 'heise.de',
	window : require('ui/heise.window').create()
});

//
//  add tabs
//
tabGroup.addTab(tab1);
tabGroup.addTab(tab2);

// open tab group
tabGroup.open();

