var cabinets = {};

function fetchNetSuiteData() {
	var url = "/CA01/php/getData.php";
	var req = new XMLHttpRequest();
	req.open("GET", url, true);
	req.onload = processData;
	req.send();
}

function processData() {
	var data = JSON.parse(this.responseText);
	var cust = data["cust"];
	var noCust = data["noCust"];
	

	for (var i = 0; i < cust.length; i++) {
		var data = cust[i];
		if (document.getElementById(data["pod"] + "-" + data["cab"])) {
			cabinets[data["name"]] = new Cabinet(data);	
		}	
	}

	for (var i = 0; i < noCust.length; i++) {
		var data = noCust[i];
		if (document.getElementById(data["pod"] + "-" + data["cab"])) {
			cabinets[data["name"]] = new Cabinet(data);	
		}	
	}

	document.getElementById("loading").style.display = "none";
	
	document.getElementById("dcArea").style.display = "block";

}