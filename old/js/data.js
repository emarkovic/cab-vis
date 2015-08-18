var cabinets = {};
function fetchExcelData() {

	var url = "excel/test.xlsx";

	var oReq = new XMLHttpRequest();
	oReq.open("GET", url, true);
	oReq.responseType = "arraybuffer";
	oReq.onload = toJson;
	oReq.send();

	function toJson() {
		var arraybuffer = this.response;

	    /* convert data to binary string */
		var data = new Uint8Array(arraybuffer);
		var arr = new Array();
		for(var i = 0; i != data.length; ++i) {
			arr[i] = String.fromCharCode(data[i]);
		}
		var bstr = arr.join("");

	 	 /* Call XLSX */
		var workbook = XLSX.read(bstr, {type:"binary"});	
		var sheet = workbook.Sheets[workbook.SheetNames[0]];

		var excel = XLSX.utils.sheet_to_json(sheet);	
		injectData(excel);
		
	}

	function injectData(excel) {
		for (var i = 0; i < excel.length; i++) {
			var line = excel[i];
			if (document.getElementById(line["Object Locator (POD)"] + "-" + line["Object ID (Cabinet #)"])) {
				cabinets[line["Name"]] = new Cabinet(line);
			}
		}
	}
}

