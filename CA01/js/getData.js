var cabinets = {};
var hours = 5;

function fetchNetSuiteData() {
	//expiration in seconds
	var expire = hours * 3600;
	var time = localStorage.getItem("time");
	var data = localStorage.getItem("data");

	if (time && data) {
		if (time + expire >= Math.floor(Date.now() / 1000)) {
			data = JSON.parse(data);
			assignToCabs(data["cust"], data["noCust"]);
		} else {
			getNewData();			
		}
	} else {
		getNewData();		
	}
}

function getNewData() {
	var url = "/CA01/php/getData.php";
	var req = new XMLHttpRequest();
	req.open("GET", url, true);
	req.onload = processData;
	req.send();	
}

function processData() {
	localStorage.clear();
	localStorage.setItem("time", Math.floor(Date.now() / 1000));
	localStorage.setItem("data", this.responseText);
	
	var data = JSON.parse(this.responseText);
	var cust = data["cust"];
	var noCust = data["noCust"];
	
	assignToCabs(cust, noCust);
}

function assignToCabs(cust, noCust) {
	for (var i = 0; i < cust.length; i++) {
		var record = cust[i];
		setCab(record);
	}

	for (var i = 0; i < noCust.length; i++) {
		var record = noCust[i];
		setCab(record);	
	}
	document.getElementById("loading").style.display = "none";
	document.getElementById("dcArea").style.display = "block";
}

function setCab(record) {
	if (record["pod"] === "P10") {
		var name = record.name;
		name = name.substring(name.indexOf("::") + 2);
		name = name.replace(":", "-");

		if (document.getElementById(name)) {
			cabinets[record.name] = new Cabinet(record);
		}
	} else {
		if (document.getElementById(record.pod + "-" + record.cab)) {
			cabinets[record.name] = new Cabinet(record);	
		}		
	}
}