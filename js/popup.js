var selectedText;
var r;
console.log("hit2");

function onLoad(){
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		chrome.tabs.sendMessage(tabs[0].id, {method: "getSelection"}, function(response){
	     selectedText = response.data;
	     document.getElementById("left_col").innerHTML= selectedText;
	  	});
	});
	
	document.getElementById("right_col").innerHTML= "right";
}
document.addEventListener("DOMContentLoaded", onLoad, false);