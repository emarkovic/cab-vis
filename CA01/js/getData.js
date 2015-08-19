var cabinets = {};

function fetchNetSuiteData() {
	var url = "/CA01/php/getData.php";
	var req = new XMLHttpRequest();
	req.open("GET", url, true);
	req.onload = processData;
	req.send();
}

function processData() {
	var datas = JSON.parse(this.responseText);
	var cust = datas["cust"];
	var noCust = datas["noCust"];
	

	for (var i = 0; i < cust.length; i++) {
		var record = cust[i];
		// if (record.pod === "P10") {
		// 	console.log(record);
		// }
		if (document.getElementById(record["pod"] + "-" + record["cab"])) {
			cabinets[record["name"]] = new Cabinet(record);	
		}	
	}

	for (var i = 0; i < noCust.length; i++) {
		var record = noCust[i];
		// if (record.pod === "P10") {
		// 	console.log(record);
		// }
		if (document.getElementById(record["pod"] + "-" + record["cab"])) {
			cabinets[record["name"]] = new Cabinet(record);	
		}	
	}

	document.getElementById("loading").style.display = "none";
	
	document.getElementById("dcArea").style.display = "block";

}