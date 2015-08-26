function DrawDC(datacenter) {
	this.dcArea = document.getElementById("dcArea");
	this.scale = window.settings.scale * 2;
	this.data = datacenter;

	this.drawPerimeter();
	if (this.data.pods) { 	//ca01, nj01`
		this.drawPods();
	} else if (this.data.cabs) { 	//nj02
		this.drawCages();
	}
	this.drawCagePerim();

	if (datacenter === nj01 || datacenter === oh01) {
		this.dcArea.style.display="block";
		document.getElementById("loading").style.display = "none";
	}
}

//html template for cabinets + popovers.
DrawDC.template = _.template($(document.getElementById("template-cab")).html());
//html template for cool isles
DrawDC.isleTemplate = _.template($(document.getElementById("template-isle")).html());

DrawDC.prototype.drawPerimeter = function() {
	var path = new paper.Path();
	//gets perimeter coordinates from json.js
	var perim = this.data.perimeter;
	path.strokeColor = "black";
	//draw
	this.addToPath(perim, path);
};
DrawDC.prototype.drawCagePerim = function() {
	for (var i = 0; i < this.data.cages.length; i++) {
		var path = new paper.Path();
		path.strokeColor = "red";
		//dashed line
		path.dashArray = [8, 6];
		var cage = this.data.cages[i];

		this.addToPath(cage, path);
	}
};
DrawDC.prototype.addToPath = function(cage, path) {
	//draws path from the coordinates provided
	for (var i = 0; i < cage.length; i++) {
		var x = cage[i][0] * this.scale;
		var y = cage[i][1] * this.scale;
		path.add([x, y]);
	}
	//connects the path back to the first coordinate
	x = cage[0][0] * this.scale;
	y = cage[0][1] * this.scale;
	path.add([x, y]);
};

//if CA01
DrawDC.prototype.drawPods = function() {
	
	for (var i = 0; i < this.data.pods.length; i++) {
		var info = this.data.pods[i];
		if (info.coolIsle) { 	//if pod has a cool isle
			this.drawCoolIsle(info);
		}
		if (this.data === ca01) {
			if (info.pod === "P10") { 	//drawing the special pod 10
				this.drawP10(info);
			}
			this.drawCabs(info);
		} else {
			this.drawCabs(info);
		}

		if (info.missing) { //deletes the specified cabs
			this.deleteCabs(info);	
		}
	}
};
//if CA01
DrawDC.prototype.drawP10 = function(info) {
	var id, idA, idB, idC, top, left, height, cabNum = 1;
	for (var i = 0; i < info.count; i++) {
		//the "first row" of cabs are "double cabs", A or B will be appending to their regular id
		id = this.getCabId(info, cabNum);
		idA = id + "A";
		idB = id + "B";

		top = this.getCabTop(info, false, i);
		top = Number.parseFloat(top.substring(0, top.length - 2));

		left = this.getCabLeft(info, false, i);

		if (cabNum === 21) { 	//CAB21 is a single cab, so it is created normally
			this.createCab(id, top + "px", left, this.data.widthX * this.scale + "px", this.data.heightX * this.scale + "px");	
		} 
		else {
			//double cab height -> half regular height.
			height = (this.data.heightX / 2) * this.scale;
			//A
			this.createCab(idA, top + "px", left, this.data.widthX * this.scale + "px", height + "px");
			//B
			this.createCab(idB, top + height + "px", left, this.data.widthX * this.scale + "px", height + "px");
		}
		cabNum++;
	}

	for (var i = 0; i < info.count; i++) {
		//the "second row" of cabs are "double cabs", A or B will be appending to their regular id
		id = this.getCabId(info, cabNum);
		idA = id + "A";
		idB = id + "B";
		idC = id + "C";	

		top = this.getCabTop(info, true, i);
		top = Number.parseFloat(top.substring(0, top.length - 2));

		left = this.getCabLeft(info, true, i);

		height = (this.data.heightX / 3) * this.scale;

		//A
		this.createCab(idA, top + "px", left, this.data.widthX * this.scale + "px", height + "px");
		//B
		this.createCab(idB, top + height + "px", left, this.data.widthX * this.scale + "px", height + "px");
		//C
		this.createCab(idC, top + (height * 2) + "px",left , this.data.widthX * this.scale + "px", height + "px");
		cabNum++	
	}
};
//if NJ02
DrawDC.prototype.drawCages = function() {
	for (var i = 0; i < this.data.cabs.length; i++) {
		var info = this.data.cabs[i];
		this.drawCabs(info);	
		if (info.coolIsle) {
			this.drawCoolIsle(info);
		}
	}
};

DrawDC.prototype.drawCabs = function(info) {
	var cabNum;
	if (this.data.pods) { 	//ca01
		cabNum = 1;
	} else if (this.data.cabs) { 	//nj02
		cabNum = info.startNum;
	}

	for (var i = 0; i < info.count; i++) {
		this.createCab(
			this.getCabId(info, cabNum),
			this.getCabTop(info, false, i),
			this.getCabLeft(info, false, i),
			this.getCabWidth(info),
			this.getCabHeight(info)
		);
		cabNum++;
	}
	if (info.rows === 2) {
		for (var i = 0; i < info.count; i++) {
			this.createCab(
				this.getCabId(info, cabNum),
				this.getCabTop(info, true, i),
				this.getCabLeft(info, true, i),
				this.getCabWidth(info),
				this.getCabHeight(info)
			);			
			cabNum++;
		}
	}
};
DrawDC.prototype.getCabId = function(info, cabNum) {
	var id = "";
	if (this.data.pods) { 	//ca01
		id += info.pod;
	} else if (this.data.cabs) { 	//nj02
		id += "NJ02-F07-DH0705-" + info.cage + "-" + info.row;
	}

	if (cabNum < 10) { 	
		return id + "-CAB0" + cabNum;
	} else {
		return id + "-CAB" + cabNum;
	}
};
DrawDC.prototype.getCabTop = function(info, row2, i) {
	var startY;
	if (info.dir === "x") {
		if (row2) {
			if (info.cabPos === "LR" || info.cabPos === "LL") {
				startY = info.y - info.space - this.data.heightX;
			} else {
				startY = info.y + info.space + this.data.heightX;
			}

			return startY * this.scale + "px";
		} else {
			return info.y * this.scale + "px";
		}
	} else {
		if (row2) {
			if (info.cabPos === "LL" || info.cabPos === "LR") {
				startY = info.y - (this.data.heightY * (info.count - 1));
				return (startY + (this.data.heightY * i)) * this.scale + "px";
			} else {
				startY = info.y + (this.data.heightY * (info.count - 1));
				return (startY - (this.data.heightY * i)) * this.scale + "px";
			}
		} else {
			if (info.cabPos === "LL" || info.cabPos === "LR") {
				return (info.y - (this.data.heightY * i)) * this.scale + "px";	
			} else {
				return (info.y + (this.data.heightY * i)) * this.scale + "px";
			}
		}
	}
};
DrawDC.prototype.getCabLeft = function(info, row2, i) {
	var startX;
	if (info.dir === "x") {
		if (row2) {
			if (info.cabPos === "LR" || info.cabPos === "UR") {
				startX = info.x - this.data.widthX * (info.count - 1);
				return (startX + (this.data.widthX * i)) * this.scale + "px";
			} else {
				startX = info.x + this.data.widthX * (info.count - 1);
				return (startX - (this.data.widthX * i)) * this.scale + "px";
			}
		} else {
			if (info.cabPos === "LR" || info.cabPos === "UR") {
				return (info.x - (this.data.widthX * i)) * this.scale + "px";	
				
			} else {
				return (info.x + (this.data.widthX * i)) * this.scale + "px";
			}
		}
	} else {
		if (row2) {
			if (info.cabPos === "LL" || info.cabPos === "UL") {
				startX = info.x + this.data.widthY + info.space;
			} else {
				startX = info.x - this.data.widthY - info.space;
			}
			return startX * this.scale + "px";			
		} else {
			return info.x * this.scale + "px";
		}
	}
};
DrawDC.prototype.getCabWidth = function(info) {
	if (info.dir === "x") {
		return this.data.widthX * this.scale + "px";
	} else {
		return this.data.widthY * this.scale + "px";
	}
};
DrawDC.prototype.getCabHeight = function(info) {
	if (info.dir === "x") {
		return this.data.heightX * this.scale + "px";
	} else {
		return this.data.heightY * this.scale + "px";
	}
};
DrawDC.prototype.createCab = function(id, top, left, width, height) {
	//lodash templates:
	//passing data to the lodash template
	//the keys will get put into the appropriate positions in the html template
	//html is returned allowing for parent element to append it as a child
	$(this.dcArea).append(DrawDC.template({
		"id" : id,
		"top" : top,
		"left" : left,
		"width" : width,
		"height" : height
	}));
	var cab = document.getElementById(id);
	cab.classList.add("cab");

	$("#" + id).popover();
	cab.dataset.content = "Information unavailable.";
	cab.dataset.originalTitle = id;
};
DrawDC.prototype.deleteCabs = function(info) {
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

DrawDC.prototype.drawCoolIsle = function(info) {
	var id, content;
	if (this.data.pods) { 	//ca01, nj01
		id = "isle" + info.pod;
		if (this.data === ca01) {
			content = "Pod " + info.pod.substring(1);	
		} else {
			content = "";		
		}
	} else if (this.data.cabs) { 	//nj02
		id = "isle-" + info.cage + "-" + info.row;
		content = "";
	}
	
	$(this.dcArea).append(DrawDC.isleTemplate({
		"id" : id,
		"top" : this.getIsleTop(info),
		"left" : this.getIsleLeft(info),
		"width" : this.getIsleWidth(info),
		"height" : this.getIsleHeight(info),
		"content" : content
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
DrawDC.prototype.getIsleTop = function(info) {
	if (info.cabPos === "LR" || info.cabPos === "LL") { //if lower right or lower left
		if (info.dir === "x") {
			return (info.y - info.space) * this.scale + "px";
		} else {	
			return (info.y - this.data.heightY * (info.count - 1)) * this.scale + "px";
		}
	} else { 	//if upper right or upper left
		if (info.dir === "x") {
			return (info.y + this.data.heightX) * this.scale + "px";
		} else {
			return info.y * this.scale + "px";
		}
	}	
};
DrawDC.prototype.getIsleLeft = function(info) {
	if (info.cabPos === "LR" || info.cabPos === "UR") { //if lower right or upper right
		if (info.dir === "x") {
			return (info.x - this.data.widthX * (info.count - 1)) * this.scale + "px";
		} else { 
			return (info.x - info.space) * this.scale + "px";
		}
	} else { 	//if lower left or upper left
		if (info.dir === "x") {
			return info.x * this.scale + "px";
		} else {
			return (info.x + this.data.widthY) * this.scale + "px";
		}
	}
};
DrawDC.prototype.getIsleWidth = function(info) {
	if (info.dir === "x") {
		return this.data.widthX * info.count * this.scale + "px";
	} else {
		return info.space * this.scale + "px";
	}
};
DrawDC.prototype.getIsleHeight = function(info) {
	if (info.dir === "x") {
		return info.space * this.scale + "px";
	} else {
		return this.data.heightY * info.count * this.scale + "px";
	}
};