function DrawCA() {
	this.dcArea = document.getElementById("dcArea");
	
	this.scale = window.settings.scale * 2;

	this.drawPerimeter();
	this.drawPods();
	this.drawCages();
}

DrawCA.template = _.template($(document.getElementById("template-cab")).html());

DrawCA.prototype.drawPerimeter = function() {
	var path = new paper.Path();
	var perim = data.perimeter;
	path.strokeColor = "black";

	this.addToPath(perim, path);
};

DrawCA.prototype.drawCages = function() {
	for (var i = 0; i < data.cages.length; i++) {
		var path = new paper.Path();
		path.strokeColor = "red";
		path.dashArray = [8, 6];
		var cage = data.cages[i];

		this.addToPath(cage, path);
	}
};

DrawCA.prototype.addToPath = function(data, path) {
	for (var i = 0; i < data.length; i++) {
		var x = data[i][0] * this.scale;
		var y = data[i][1] * this.scale;
		path.add([x, y]);
	}
	x = data[0][0] * this.scale;
	y = data[0][1] * this.scale;
	path.add([x, y]);
};

DrawCA.prototype.drawPods = function() {
	for (var i = 0; i < data.pods.length; i++) {
		var info = data.pods[i];
		if (info.coolIsle) {
			this.drawCoolIsle(info);
		}

		if (info.pod === "P10") {
			// this.drawP10(info);
		} else {
			this.drawCabs(info);
		}

		if (info.missing) {
			this.deleteCabs(info);	
		}
	}
};

DrawCA.prototype.drawCoolIsle = function(info) {
	var div = document.createElement("div");
	div.style.position = "absolute";
	div.style.top = this.getIsleTop(info) + "px";
	div.style.left = this.getIsleLeft(info) + "px";
	div.style.width = this.getIsleWidth(info) + "px";
	div.style.height = this.getIsleHeight(info) + "px";
	div.style.backgroundColor = "#19B5FE";

	if (info.containment) {
		if (info.dir === "x") {
			div.style.borderLeft = "1px solid black";
			div.style.borderRight = "1px solid black";
		} else {
			div.style.borderTop = "1px solid black";
			div.style.borderBottom = "1px solid black";			
		}
	}
	this.dcArea.appendChild(div);
};

DrawCA.prototype.getIsleLeft = function(info) {
	if (info.cabPos === "LR" || info.cabPos === "UR") {
		if (info.dir === "x") {
			return (info.x - data.widthX * (info.count - 1))* this.scale;
		} else { 
			return (info.x - info.space) * this.scale;
		}
	} else { 	//LL and UL
		if (info.dir === "x") {
			return info.x * this.scale;
		} else {
			return (info.x + data.widthY) * this.scale;
		}
	}
};

DrawCA.prototype.getIsleTop = function(info) {
	if (info.cabPos === "LR" || info.cabPos === "LL") { 
		if (info.dir === "x") {
			return (info.y - info.space) * this.scale;
		} else {	
			return (info.y - data.heightY * (info.count - 1)) * this.scale;
		}
	} else { 	//cabPos UR and UL
		if (info.dir === "x") {
			return (info.y + data.heightX) * this.scale;
		} else {
			return info.y * this.scale;
		}
	}	
};

DrawCA.prototype.getIsleWidth = function(info) {
	if (info.dir === "x") {
		return data.widthX * info.count * this.scale;
	} else {
		return info.space * this.scale;
	}
};

DrawCA.prototype.getIsleHeight = function(info) {
	if (info.dir === "x") {
		return info.space * this.scale;
	} else {
		return data.heightY * info.count * this.scale;
	}
};

DrawCA.prototype.drawCabs = function(info) {
	var cabData = {},
		cabNum = 1;
	for (var i = 0; i < info.count; i++) {
		this.createCab(info, cabNum, i, false);
		cabNum++;
	}
	if (info.rows === 2) {
		for (var i = 0; i < info.count; i++) {
			this.createCab(info, cabNum, i, true);
			cabNum++;
		}
	}
};

DrawCA.prototype.createCab = function(info, cabnum, i, row2) {
	var id = this.getCabId(info, cabnum);
	var cabInfo = {
		"id" : id,
		"top" : this.getCabTop(info, row2, i) + "px",
		"left" : this.getCabLeft(info, row2, i) + "px",
		"width" : this.getCabWidth(info) + "px",
		"height" : this.getCabHeight(info) + "px"
	}
	$(this.dcArea).append(DrawCA.template(cabInfo));
	document.getElementById(id).classList.add("cab");
};

// DrawCA.prototype.drawP10 = function(info) {
// 	var id, idA, idB, idC, top, left, height;
// 	for (var i = 0; i < info.count; i++) {
// 		id = "CA01:F01:DH0001::" + this.getCabId(info, 1);
// 		idA = id + "A";
// 		idB = id + "B";
// 		idC = id + "C";
// 		top = this.getCabTop(info, true, 0);
// 		left = this.getCabLeft(info, true, 0);

// 		var cabInfo = {
// 			"id" : id,
// 			"top" : top + "px",
// 			"left" : left + "px",
// 			"width" : data.widthX + "px",
// 			"height" : data.heightX + "px"
// 		}
// 		$(this.dcArea).append(DrawCA.template(cabInfo));
// 		document.getElementById(id).classList.add("cab");
// 	}
// };

DrawCA.prototype.getCabId = function(info, cabNum) {
	if (cabNum < 10) {
		return info.pod + "-CAB0" + cabNum;
	} else {
		return info.pod + "-CAB" + cabNum;
	}
};

DrawCA.prototype.getCabWidth = function(info) {
	if (info.dir === "x") {
		return data.widthX * this.scale;
	} else {
		return data.widthY * this.scale;
	}
};

DrawCA.prototype.getCabHeight = function(info) {
	if (info.dir === "x") {
		return data.heightX * this.scale;
	} else {
		return data.heightY * this.scale;
	}
};

DrawCA.prototype.getCabLeft = function(info, row2, i) {
	var startX;
	if (info.dir === "x") {
		if (row2) {
			if (info.cabPos === "LR" || info.cabPos === "UR") {
				startX = info.x - data.widthX * (info.count - 1);
				return (startX + (data.widthX * i)) * this.scale;
			} else {
				startX = info.x + data.widthX * (info.count - 1);
				return (startX - (data.widthX * i)) * this.scale;
			}
		} else {
			if (info.cabPos === "LR" || info.cabPos === "UR") {
				return (info.x - (data.widthX * i)) * this.scale;	
				
			} else {
				return (info.x + (data.widthX * i)) * this.scale;
			}
		}
	} else {
		if (row2) {
			if (info.cabPos === "LL" || info.cabPos === "UL") {
				startX = info.x + data.widthY + info.space;
			} else {
				startX = info.x - data.widthY - info.space;
			}
			return startX * this.scale;			
		} else {
			return info.x * this.scale;
		}
	}
};

DrawCA.prototype.getCabTop = function(info, row2, i) {
	var startY;
	if (info.dir === "x") {
		if (row2) {
			if (info.cabPos === "LR" || info.cabPos === "LL") {
				startY = info.y - info.space - data.heightX;
			} else {
				startY = info.y + info.space + data.heightX;
			}

			return startY * this.scale;
		} else {
			return info.y * this.scale;
		}
	} else {
		if (row2) {
			if (info.cabPos === "LL" || info.cabPos === "LR") {
				startY = info.y - (data.heightY * (info.count - 1));
				return (startY + (data.heightY * i)) * this.scale;
			} else {
				startY = info.y + (data.heightY * (info.count - 1));
				return (startY - (data.heightY * i)) * this.scale;
			}
		} else {
			if (info.cabPos === "LL" || info.cabPos === "LR") {
				return (info.y - (data.heightY * i)) * this.scale;	
			} else {
				return (info.y + (data.heightY * i)) * this.scale;
			}
		}
	}
};

DrawCA.prototype.deleteCabs = function(info) {
	var del = info.missing;
	for (var i = 0; i < del.length; i++) {
		var cab = del[i];
		if (cab < 10) {
			this.dcArea.removeChild(document.getElementById(info.pod + "-CAB0" + cab));
		} else {
			this.dcArea.removeChild(document.getElementById(info.pod + "-CAB" + cab));
		}
	}
};


