function DrawNY02 () {
	this.dcArea = document.getElementById("dcArea");
	this.scale = settings.scale * 2;
	
	this.drawPerimeter();
	this.drawCages();
	this.drawCagePerim();
}

DrawNY02.template = _.template($(document.getElementById("template-cab")).html());
DrawNY02.isleTemplate = _.template($(document.getElementById("template-isle")).html());

/**
 * Draws the perimeter of the data center floor with Paper.js.
 */
DrawNY02.prototype.drawPerimeter = function() {
	var path = new paper.Path();
	//gets perimeter coordinates from json.js
	var perim = data.perimeter;
	path.strokeColor = "black";
	//draw
	this.addToPath(perim, path);
};

/**
 * Draws the cages on the data center floor with Paper.js.
 */
DrawNY02.prototype.drawCagePerim = function() {
	for (var i = 0; i < data.cages.length; i++) {
		var path = new paper.Path();
		path.strokeColor = "red";
		//dashed line
		path.dashArray = [8, 6];
		var cage = data.cages[i];

		this.addToPath(cage, path);
	}
};

/**
 * Helps draw the perimeter of floor/cages with Paper.js.
 * @param {float array} data Coordinates of floor/cage perimeter.
 * @param {Paper.js object} path Helps draw the floor/cage perimeter.
 */
DrawNY02.prototype.addToPath = function(data, path) {
	//draws path from the coordinates provided
	for (var i = 0; i < data.length; i++) {
		var x = data[i][0] * this.scale;
		var y = data[i][1] * this.scale;
		path.add([x, y]);
	}
	//connects the path back to the first coordinate
	x = data[0][0] * this.scale;
	y = data[0][1] * this.scale;
	path.add([x, y]);
};

DrawNY02.prototype.drawCages = function() {
	for (var i = 0; i < data.cabs.length; i++) {
		var info = data.cabs[i];
		this.drawCabs(info);	
		if (info.coolIsle) {
			this.drawCoolIsle(info);
		}
	}
};

DrawNY02.prototype.drawCabs = function(info) {
	var cabNum = info.startNum;
	for (var i = 0; i < info.count; i++) {
		this.drawCab(this.getCabId(info, cabNum), 
					 this.getCabTop(info, false, i), 
					 this.getCabLeft(info, false, i), 
					 this.getCabWidth(info), 
					 this.getCabHeight(info));
		cabNum++;
	}
};
DrawNY02.prototype.getCabId = function(info, cabNum) {
	var id = "";
	if (data.cabs) {
		id += info.cage + "-" + info.row;
	} else if (data.pods) {
		id += info.pod;
	}

	if (cabNum < 10) { 	
		return id + "-CAB0" + cabNum;
	} else {
		return id + "-CAB" + cabNum;
	}
};
DrawNY02.prototype.getCabTop = function(info, row2, i) {
	var startY;
	if (info.dir === "x") {
		if (row2) {
			if (info.cabPos === "LR" || info.cabPos === "LL") {
				startY = info.y - info.space - data.heightX;
			} else {
				startY = info.y + info.space + data.heightX;
			}

			return startY * this.scale + "px";
		} else {
			return info.y * this.scale + "px";
		}
	} else {
		if (row2) {
			if (info.cabPos === "LL" || info.cabPos === "LR") {
				startY = info.y - (data.heightY * (info.count - 1));
				return (startY + (data.heightY * i)) * this.scale + "px";
			} else {
				startY = info.y + (data.heightY * (info.count - 1));
				return (startY - (data.heightY * i)) * this.scale + "px";
			}
		} else {
			if (info.cabPos === "LL" || info.cabPos === "LR") {
				return (info.y - (data.heightY * i)) * this.scale + "px";	
			} else {
				return (info.y + (data.heightY * i)) * this.scale + "px";
			}
		}
	}
};
DrawNY02.prototype.getCabLeft = function(info, row2, i) {
	var startX;
	if (info.dir === "x") {
		if (row2) {
			if (info.cabPos === "LR" || info.cabPos === "UR") {
				startX = info.x - data.widthX * (info.count - 1);
				return (startX + (data.widthX * i)) * this.scale + "px";
			} else {
				startX = info.x + data.widthX * (info.count - 1);
				return (startX - (data.widthX * i)) * this.scale + "px";
			}
		} else {
			if (info.cabPos === "LR" || info.cabPos === "UR") {
				return (info.x - (data.widthX * i)) * this.scale + "px";	
				
			} else {
				return (info.x + (data.widthX * i)) * this.scale + "px";
			}
		}
	} else {
		if (row2) {
			if (info.cabPos === "LL" || info.cabPos === "UL") {
				startX = info.x + data.widthY + info.space;
			} else {
				startX = info.x - data.widthY - info.space;
			}
			return startX * this.scale + "px";			
		} else {
			return info.x * this.scale + "px";
		}
	}
};
DrawNY02.prototype.getCabWidth = function(info) {
	if (info.dir === "x") {
		return data.widthX * this.scale + "px";
	} else {
		return data.widthY * this.scale + "px";
	}
};
DrawNY02.prototype.getCabHeight = function(info) {
	if (info.dir === "x") {
		return data.heightX * this.scale + "px";
	} else {
		return data.heightY * this.scale + "px";
	}
};
DrawNY02.prototype.drawCab = function(id, top, left, width, height) {
	var dataCab = {
		"id" : id,
		"top" : top,
		"left" : left,
		"width" : width,
		"height" : height
	}
	$(this.dcArea).append(DrawNY02.template(dataCab));
	var cab = document.getElementById(id);
	cab.classList.add("cab");

	$("#" + id).popover();
	cab.dataset.content = "Information unavailable";
	cab.dataset.originalTitle = id;
};

DrawNY02.prototype.drawCoolIsle = function(info) {
	var id = "isle-" + info.cage + "-" + info.row;
	$(this.dcArea).append(DrawNY02.isleTemplate({
		"id" : id,
		"top" : this.getIsleTop(info),
		"left" : this.getIsleLeft(info),
		"width" : this.getIsleWidth(info),
		"height" : this.getIsleHeight(info),
		"content" : ""
	}));
	var isle = document.getElementById(id);
	if (info.containment) {
		if (info.dir === "x") {
			isle.style.borderLeft = "1px solid black";
			isle.style.borderRight = "1px solid black";
		} else {
			isle.style.borderTop = "1px solid black";
			isle.style.borderBottom = "1px solid black";			
		}
	}
};
DrawNY02.prototype.getIsleTop = function(info) {
	if (info.cabPos === "LR" || info.cabPos === "LL") { //if lower right or lower left
		if (info.dir === "x") {
			return (info.y - info.space) * this.scale + "px";
		} else {	
			return (info.y - data.heightY * (info.count - 1)) * this.scale + "px";
		}
	} else { 	//if upper right or upper left
		if (info.dir === "x") {
			return (info.y + data.heightX) * this.scale + "px";
		} else {
			return info.y * this.scale + "px";
		}
	}	
};
DrawNY02.prototype.getIsleLeft = function(info) {
	if (info.cabPos === "LR" || info.cabPos === "UR") { //if lower right or upper right
		if (info.dir === "x") {
			return (info.x - data.widthX * (info.count - 1)) * this.scale + "px";
		} else { 
			return (info.x - info.space) * this.scale + "px";
		}
	} else { 	//if lower left or upper left
		if (info.dir === "x") {
			return info.x * this.scale + "px";
		} else {
			return (info.x + data.widthY) * this.scale + "px";
		}
	}
};
DrawNY02.prototype.getIsleWidth = function(info) {
	if (info.dir === "x") {
		return data.widthX * info.count * this.scale + "px";
	} else {
		return info.space * this.scale + "px";
	}
};
DrawNY02.prototype.getIsleHeight = function(info) {
	if (info.dir === "x") {
		return info.space * this.scale + "px";
	} else {
		return data.heightY * info.count * this.scale + "px";
	}
};