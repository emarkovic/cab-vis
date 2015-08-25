/**
 * Ena Markovic, vXchnge
 */

//object containing all of the cabinet objects for later reference
var cabinets = {};
//hours until stored data expires
var hours = 5;
var dc;
/**
 * Gets cabinet data from NetSuite.
 */
function fetchNetSuiteData(datacenter) {
	dc = datacenter;
	//expiration in seconds
	var expire = hours * 3600;
	var time = localStorage.getItem(dc + "-time");
	var data = localStorage.getItem(dc + "-data");

	if (time && data) { //if time and data exist in local storage
		if (time + expire >= Math.floor(Date.now() / 1000)) { 	//has the data expired?
			//turn it to json object
			data = JSON.parse(data);
			//use dat data.
			assignToCabs(data["cust"], data["noCust"]);
		} else { //it has expired, get new data
			getNewData();			
		}
	} else { //did not find anything in local storage, get new data
		getNewData();		
	}
}

/**
 * Sends a request to getData.php to get NetSuite data.
 */
function getNewData() {
	var url = "/php/getData.php?dc=" + dc;
	var req = new XMLHttpRequest();
	req.open("GET", url, true);
	req.onload = saveData;
	req.send();	
}

/**
 * Saves the data to local storage.
 */
function saveData() {
	localStorage.removeItem(dc + "-time");
	localStorage.removeItem(dc + "-data");
								  //seconds since unix epoch
	localStorage.setItem(dc + "-time", Math.floor(Date.now() / 1000));
	localStorage.setItem(dc + "-data", JSON.parse(this.responseText));
	
	var data = JSON.parse(localStorage.getItem(dc + "-data"));
	var cust = data["cust"];
	var noCust = data["noCust"];
	
	//attach that data to some cabs
	assignToCabs(cust, noCust);
}

/**
 * Attaches NetSuite data to cabinet elements.
 * @param  {array} cust    Array of cabinets with customers.
 * @param  {array} noCust  Array of cabinets without customers.
 */
function assignToCabs(cust, noCust) {
	//cabs with customers
	for (var i = 0; i < cust.length; i++) {
		var record = cust[i];
		setCab(record);
	}
	//cabs without customers
	for (var i = 0; i < noCust.length; i++) {
		var record = noCust[i];
		setCab(record);	
	}
	//hides the loading element
	document.getElementById("loading").style.display = "none";
	document.getElementById("dcArea").style.display = "block";
}

/**
 * Creates cabinet objects.
 * @param {object} record NetSuite cabinet data.
 */
function setCab(record) {
	//pod 10 is different. It requires more manipulation to match a 
	//NetSuite record to the html element
	var name = record.name;
	if (dc === "CA01") {
		if (record["pod"] === "P10") {	
			//isolating pod and cab from the rest of the name
			name = name.substring(name.indexOf("::") + 2); 
			//replacing colon with dash
			name = name.replace(":", "-");

			if (document.getElementById(name)) { 	//if this element exists, 
													//create the Cabinet object.
				cabinets[record.name] = new Cabinet(record, dc);
			}
		} else {
			if (document.getElementById(record.pod + "-" + record.cab)) { //if this element exists, 
																		  //create the Cabinet object.
				cabinets[name] = new Cabinet(record, dc);	
			}		
		}
	} else if (dc === "NJ02") {
		name = name.replace(/:/g,'-');
		if (document.getElementById(name)) {
			cabinets[name] = new Cabinet(record, dc);
		}
	}
}