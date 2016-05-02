function genericOnClick(m){
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		chrome.tabs.sendMessage(tabs[0].id, {method: "getSelection"}, function(response){
	     var searchstring = response.data;
	     console.log(response.data);
	  	});
	});
	//console.log(searchstring);
	console.log("hit");
	m = searchstring;
}

var m = null;
var parent = chrome.contextMenus.create({"title": "search",	"contexts":["selection"],
                                       		"onclick": genericOnClick});
