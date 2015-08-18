"use strict";

function DrawCA() {
	this.dcArea = document.getElementById("dcArea");
	this.infoArea = document.getElementById("info");
	
	$.ajaxSetup({
		// cache: false
	});

	this.scale;
	this.getSettings();
	this.data;
	this.getData();

	this.drawPerimeter();
	this.drawCabs();
	this.deleteCabs();
	this.drawCages();
}

DrawCA.prototype.getSettings = function() {
	var self = this;
	$.ajax({
		method: "GET",
		url: "../json/settings.json",
		async: false,
		beforeSend: function (xhr) {
			xhr.overrideMimeType("application/json");
		}
	}).done(function (data) {
		self.scale = 2 * data.scale;
	});
};

DrawCA.prototype.getData = function() {
	var self = this
	$.ajax({
		method: "GET",
		url: "../json/CA01.json",
		async: false,
		beforeSend : function (xhr) {
			xhr.overrideMimeType("application/json");
		}
	}).done(function (data) {
		self.data = data;
	});
};

DrawCA.prototype.drawPerimeter = function() {
	var path = new paper.Path();
	var data = this.data.perimeter;
	path.strokeColor = "black";
	for (var i = 0; i < data.length; i++) {
		var x = data[i][0] * this.scale;
		var y = data[i][1] * this.scale;
		path.add([x, y]);
	}
	x = data[0][0] * this.scale;
	y = data[0][1] * this.scale;	
	path.add([x, y]);
};

DrawCA.prototype.drawCages = function() {
	for (var i = 0; i < this.data.cages.length; i++) {
		var path = new paper.Path();
		path.strokeColor = "red";
		path.dashArray = [8, 6];
		var cage = this.data.cages[i];
		
		for (var j = 0; j < this.data.cages[i].length; j++) {
			var x = cage[j][0] * this.scale;
			var y = cage[j][1] * this.scale;
			path.add([x, y]);
		}
		x = cage[0][0] * this.scale;
		y = cage[0][1] * this.scale;	
		path.add([x, y]);
	}
};

DrawCA.prototype.drawCabs = function() {
	for (var i = 0; i < this.data.cabGrp.length; i++) {
		var info = this.data.cabGrp[i];
		if (info.dir === "x") {
			this.drawCoolIsleX(info);
			this.drawCabX(info);
			
		} else {
			if (info.pod === "P17" || info.pod === "P23") {
				this.drawCoolSpecial(info);
			} else {
				this.drawCoolIsleY(info);	
			}			
			this.drawCabY(info);
		}
	}
};

DrawCA.prototype.drawCabX = function(info) {
	var cabNum = 1;
	for (var i = 0; i < info.count - 1; i++) {
		this.createCabX(false, info, cabNum, i, false);
		cabNum++;
	}
	this.createCabX(true, info, cabNum, info.count - 1, false);
	cabNum++;
	if (info.rows === 2) {
		for (var i = 0; i < info.count - 1; i++) {
			this.createCabX(false, info, cabNum, i, true);
			cabNum++;
		}
		this.createCabX(true, info, cabNum, info.count - 1, true);	
	}
};

DrawCA.prototype.createCabX = function(fullBorder, info, cabNum, i, rowTwo) {
	var self = this;
	var div = document.createElement("div");

	if (cabNum < 10) {
		div.id = info.pod + "-CAB0" + cabNum;
	} else {
		div.id = info.pod + "-CAB" + cabNum;
	}
	div.classList.add("cab");

	if (rowTwo) {
		var startX = info.x - this.data.cabWX * (info.count - 1);
		var startY = info.y - this.data.cabHX - info.space;
		div.style.left = (startX + this.data.cabWX * i) * this.scale + "px";
		div.style.top = startY * this.scale + "px";
		if (!fullBorder) {
			div.style.borderRight = "none";	
		}
	} else {
		div.style.left = (info.x - this.data.cabWX * i)  * this.scale + "px";
		div.style.top = info.y * this.scale + "px";
		if (!fullBorder) {
			div.style.borderLeft = "none";	
		}		
	}
	div.style.width = this.data.cabWX * this.scale + "px";
	div.style.height = this.data.cabHX * this.scale + "px";
	
	this.dcArea.appendChild(div);
};

DrawCA.prototype.drawCoolIsleX = function(info) {
	var div = document.createElement("div");
	var startX = (info.x - this.data.cabWX * (info.count - 1)) * this.scale;
	var startY = (info.y - info.space) * this.scale;

	div.style.position = "absolute";
	div.style.top = startY + "px";
	div.style.left = startX + "px";
	div.style.height = info.space * this.scale + "px";
	div.style.width = info.count * this.data.cabWX * this.scale + "px";
	
	// div.style.backgroundColor = "#A2C5F0";
	div.style.backgroundColor = "#19B5FE";
	div.style.borderLeft = "1px solid black";
	div.style.borderRight = "1px solid black";
	this.dcArea.appendChild(div);
};

DrawCA.prototype.drawCabY = function(info) {
	var cabNum = 1;

	for (var i = 0; i < info.count - 1; i++) {
		this.createCabY(false, info, cabNum, i, false);
		cabNum++;
	}
	this.createCabY(true, info, cabNum, info.count - 1, false);
	cabNum++;
	if (info.rows === 2) {
		for (var i = 0; i < info.count - 1; i++) {
			this.createCabY(false, info, cabNum, i, true);
			cabNum++;
		}
		this.createCabY(true, info, cabNum, info.count - 1, true);	
	}	
};

DrawCA.prototype.createCabY = function(fullBorder, info, cabNum, i, rowTwo) {
	var self = this;
	var div = document.createElement("div");

	if (cabNum < 10) {
		div.id = info.pod + "-CAB0" + cabNum;
	} else {
		div.id = info.pod + "-CAB" + cabNum;
	}
	div.classList.add("cab");
	
	if (rowTwo) {
		var startX = info.x + this.data.cabWY + info.space;
		var startY = info.y - this.data.cabHY * (info.count - 1);		
		div.style.left = startX * this.scale + "px";
		div.style.top = (startY + this.data.cabHY * i) * this.scale + "px";
		if (!fullBorder) {
			div.style.borderBottom = "none";	
		}
	} else {	
		div.style.left = info.x * this.scale + "px";
		div.style.top = (info.y - this.data.cabHY * i)  * this.scale + "px";
		if (!fullBorder) {
			div.style.borderTop = "none";	
		}		
	}

	div.style.width = this.data.cabWY * this.scale + "px";
	div.style.height = this.data.cabHY * this.scale + "px";
	
	this.dcArea.appendChild(div);
};

DrawCA.prototype.drawCoolSpecial = function(info) {
	var div = document.createElement("div");
	var startX = (info.x - info.space) * this.scale;
	var startY = (info.y - this.data.cabHY * (info.count - 1)) * this.scale;

	div.style.position = "absolute";
	div.style.top = startY + "px";
	div.style.left = startX + "px";
	div.style.height = info.count * this.data.cabHY * this.scale + "px";
	div.style.width = info.space * this.scale + "px";
	
	// div.style.backgroundColor = "#A2C5F0";
	div.style.backgroundColor = "#19B5FE";
	div.style.borderTop = "1px solid black";
	div.style.borderBottom = "1px solid black";
	this.dcArea.appendChild(div);	
};

DrawCA.prototype.drawCoolIsleY = function(info) {
	var div = document.createElement("div");
	var startX = (info.x + this.data.cabWY) * this.scale + 2;
	var startY = (info.y - this.data.cabHY * (info.count - 1)) * this.scale;

	div.style.position = "absolute";
	div.style.top = startY + "px";
	div.style.left = startX + "px";
	div.style.height = info.count * this.data.cabHY * this.scale + "px";
	div.style.width = info.space * this.scale + "px";
	
	// div.style.backgroundColor = "#A2C5F0";
	div.style.backgroundColor = "#19B5FE";
	div.style.borderTop = "1px solid black";
	div.style.borderBottom = "1px solid black";
	this.dcArea.appendChild(div);
};

DrawCA.prototype.deleteCabs = function() {
	var cabs = this.data.delete,
		cabB;
		
	for (var i = 0; i < cabs.length; i++) {
		var cab = cabs[i];
		this.dcArea.removeChild(document.getElementById(cabs[i]));
		// document.getElementById(cab[i]).style.backgroundColor = "red";
		var cabNumB = Number.parseInt(cabs[i].substring(cab.length - 2)) - 1;
		if (cabNumB < 10) {
			cabB = cab.substring(0, cab.length - 2) + "0" + cabNumB;
		} else {
			cabB = cab.substring(0, cab.length - 2) + cabNumB;
		}
		cabB = document.getElementById(cabB);
		if (cabB) cabB.style.border = "1px solid black";
	}
};