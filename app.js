//Temp Constants
var BASE_API_URL = 'mock-data/';
var tempData = {
    "tab1": [],
    "tab2": [],
    "tab3": []
}

function getData(tabId) {

    // Selecting an element to set the Dynamic content
    var el = document.getElementById('panel' + tabId);
    console.log(el);
    var selectedTab = tempData['tab' + tabId];

    //Check if data is already exist
    if (selectedTab.length > 0) {
      el.querySelector('h3').innerHTML = selectedTab[0].title;
      el.querySelector('p').innerHTML = selectedTab[0].content;
    }
    //Make a call to server
    else {
	    // TEMP: Currently added static keywords for getting different JSON files. 
	    getJson(BASE_API_URL + 'data' + tabId + '.json')
	      .then(function(res) {
	          el.querySelector('h3').innerHTML = res.title;
	          el.querySelector('p').innerHTML = res.content;

	          //Saving the tabContent locally
	          selectedTab.push(res);
	      });
    }
}
