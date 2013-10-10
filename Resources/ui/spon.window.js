exports.create = function() {
	var win = Titanium.UI.createWindow({
		title : 'Meldungen vom SPIEGEL',
		backgroundColor : '#fff'
	});
	var listofnews = Ti.UI.createTableView({
		backgroundColor : '#ddd'
	});
	win.add(listofnews);
	listofnews.addEventListener('click', function(event) {
		// in event.rowData.spondata is no the paramter for new sub window
	});
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
				var row = Ti.UI.createTableViewRow({
					hasChild : true,
					spondata : rss[i] // here we save the data for sub window
				});
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
	return win;
};
