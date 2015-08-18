"use strict";
(function () {
	var cabs = {};

	window.onload = function () {
		
		fetchData();
	};

	function fetchData() {
		
		var url = "xlsx/pittsburgh.xlsx";

		var req = new XMLHttpRequest();
		req.open("GET", url, true);
		req.responseType = "arraybuffer";
		req.onload = toJson;
		req.send();
	}

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
		
		createCabs(excel);
	}

	function createCabs(excel) {
		for (var i = 0; i < excel.length; i++) {
			var data = excel[i];	
			cabs[data["Name"]] = new Cabinet(data);
		}
	}
})();


