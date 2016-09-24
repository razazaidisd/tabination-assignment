/* 
 * Global Utility Function 
 */

/*
 * getJson() for XHR calls
 * params{}: API URL  
 * returns Promise
 */
function getJson(url){
	 // Return ecmascript new promise object
	return new Promise(function(resolve, reject) {
	    // Creating a js xhr request
	    var req = new XMLHttpRequest();
	    // Open the xhr request based on url passed in function
	    req.open("GET", url);
	    // Success and Error callbacks
	    req.onload = function() {
	      if (req.status === 200) {
	        resolve(JSON.parse(req.response));
	      } else {
	        reject(new Error(req.statusText));
	      }
	    };
	    req.onerror = function() {
	      reject(new Error("Network error"));
	    };
	    // Start the process
	    req.send();
	});

}
