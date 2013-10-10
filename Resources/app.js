// create tab group
var tabGroup = Titanium.UI.createTabGroup();

//
// create base UI tab and root window
//
var win1 = Titanium.UI.createWindow({
	title : 'Meldungen vom SPIEGEL',
	backgroundColor : '#fff'
});
var listofnews = Ti.UI.createTableView({
	backgroundColor : '#ddd'
});
win1.add(listofnews);

var tab1 = Titanium.UI.createTab({
	icon : 'KS_nav_views.png',
	title : 'SPIEGEL',
	window : win1
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

// calling of http-client:
require('model/rssreader').get({
	url : 'http://www.spiegel.de/politik/index.rss',
	onsuccess : function(rss) {
		var data = [];
		// collector for rows
		for (var i = 0; i < rss.length; i++) {
			var description = rss[i].description;
			var title = rss[i].title;
			// creating of empty row:
			var row = Ti.UI.createTableViewRow();
			// container for stapeling
			var container = Ti.UI.createView({
				left : 100,
				layout : 'vertical'
			});
			row.add(container);
			container.add(Ti.UI.createLabel({
				text : title,
				top : 5,
				left : 0,
				color : 'black',
				font : {
					fontSize : 20,
					fontWeight : 'bold'
				}
			}));
			container.add(Ti.UI.createLabel({
				text : description,
				top : 5,
				left : 0,
				color : '#333',
				font : {
					fontSize : 16
				}
			}));
			if (rss[i].enclosure) {
				var image = rss[i].enclosure.url;
				row.add(Ti.UI.createImageView({
					top : 5,
					left : 0,
					width : 90,
					height : 90,
					image : image
				}));
			}
			data.push(row);
		}
		// filling of tabelview with rows:
		listofnews.setData(data);

	}
});

