"use strict";

function Cabinet(data) {
	this.colors = {
		"Assigned" : "#BDC3C7",
		"Available" : "#87D37C",
		"Hold" : "#F9BF3B",
		"Reserved" : "#F9BF3B",
		"Lost" : "#6C7A89",
		"Planned" : "#F7CA18"		
	};

	this.dcArea = document.getElementById("dcArea");
	this.scale = 7.5;
	this.cabH = 1;
	this.cabW = 2;

	this.name = data["Name"];
	this.customer = data["Customer"];
	this.status = data["Status"];
	this.xAxis = convert(data["Object Locator (X-Axis)"]);
	this.yAxis = Number(data["Object Locator (Y-Axis)"]);
	this.cab = data["Object ID (Cabinet #)"];

	this.createCab();
}

Cabinet.prototype.createCab = function() {
	var div = document.createElement("div");

	div.style.position = "absolute";
	div.style.top = this.yAxis * this.scale + "px";
	div.style.left = this.xAxis * this.scale + "px";
	div.style.width = this.cabW * this.scale + "px";
	div.style.height = this.cabH * this.scale + "px";

	div.style.backgroundColor = this.colors[this.status];
	div.style.border = "1px solid black";

	div.id = this.name;
	div.onmouse

	this.dcArea.appendChild(div);
};