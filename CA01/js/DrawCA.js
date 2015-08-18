function DrawCA() {
	this.dcArea = document.getElementById("dcArea");
	this.infoArea = document.getElementById("info");
	
	this.scale = window.settings.scale * 2;

	this.drawPerimeter();
	this.drawPods();
	this.drawCages();
}

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
			var isleData = this.getIsleData(info);
			this.drawCoolIsle(isleData);
		}
		this.drawCabs(info);
		if (info.missing) {
			this.deleteCabs(info);	
		}	
	}
};

DrawCA.prototype.getIsleData = function(info) {
	var isleData = {};
	isleData["containment"] = info.containment;
	if (info.dir === "x") {
		isleData["dir"] = "x";
		if (info.cabPos === "LR" || info.cabPos === "UR") {
			isleData["left"] = (info.x - data.widthX * (info.count - 1))* this.scale;
		} else {
			isleData["left"] = info.x * this.scale;
		}

		if (info.cabPos === "LR" || info.cabPos === "LL") {
			isleData["top"] = (info.y - info.space) * this.scale;
		} else {
			isleData["top"] = (info.y + data.heightX) * this.scale;
		}

		isleData["width"] = data.widthX * info.count * this.scale + 2;
		isleData["height"] =  info.space * this.scale;
	} else {
		isleData["dir"] = "y";
		if (info.cabPos === "LL" || info.cabPos === "UL") {
			isleData["left"] = (info.x + data.widthY) * this.scale + 1;
		} else {
			isleData["left"] = (info.x - info.space) * this.scale + 1;
		}

		if (info.cabPos === "LL" || info.cabPos === "LR") {
			isleData["top"] = (info.y - data.heightY * (info.count - 1)) * this.scale;
		} else {
			isleData["top"] = info.y * this.scale;
		}

		isleData["width"] = info.space * this.scale;
		isleData["height"] = data.heightY * info.count * this.scale;
	}

	return isleData;
};

DrawCA.prototype.drawCoolIsle = function(isleData) {
	var div = document.createElement("div");
	div.style.position = "absolute";
	div.style.top = isleData.top + "px";
	div.style.left = isleData.left + "px";
	div.style.width = isleData.width + "px";
	div.style.height = isleData.height + "px";
	div.style.backgroundColor = "#19B5FE";
	if (isleData.containment) {
		if (isleData === "x") {
			div.style.borderLeft = "1px solid black";
			div.style.borderRight = "1px solid black";
		} else {
			div.style.borderTop = "1px solid black";
			div.style.borderBottom = "1px solid black";			
		}
	}
	this.dcArea.appendChild(div);
};

DrawCA.prototype.drawCabs = function(info) {
	var cabData = {},
		cabNum = 1;
	//row #1
	for (var i = 0; i < info.count; i++) {
		this.fillData(info, cabData, i, cabNum, false);
		this.createCab(cabData, info.dir);
		cabNum++;
	}
	if (info.rows === 2) {
		for (var i = 0; i < info.count; i++) {
			this.fillData(info, cabData, i, cabNum, true);
			this.createCab(cabData, info.dir);
			cabNum++;
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

DrawCA.prototype.fillData = function(info, cabData, i, cabNum, row2, last) {

	var startX, startY;

	if (cabNum < 10) {
		cabData["id"] = info.pod + "-CAB0" + cabNum;
	} else {
		cabData["id"] = info.pod + "-CAB" + cabNum;
	}
	cabData["last"] = last;

	if (info.dir === "x") {
		cabData["width"] = data.widthX * this.scale;
		cabData["height"] = data.heightX * this.scale;

		if (row2) {
			if (info.cabPos === "LR" || info.cabPos === "UR") {
				startX = info.x - data.widthX * (info.count - 1);
			} else {
				startX = info.x + data.widthX * (info.count - 1);
			}

			if (info.cabPos === "LR" || info.cabPos === "LL") {
				startY = info.y - info.space - data.heightX;
			} else {
				startY = info.y + info.space + data.heightX;
			}

			cabData["top"] = startY * this.scale;

			if (info.cabPos === "LR" || info.cabPos === "UR") {
				cabData["left"] = (startX + (data.widthX * i)) * this.scale;
			} else {
				cabData["left"] = (startX - (data.widthX * i)) * this.scale;
			}
		} else {
			cabData["top"] = info.y * this.scale;

			if (info.cabPos === "LR" || info.cabPos === "UR") {
				cabData["left"] = (info.x - (data.widthX * i)) * this.scale;	
				
			} else {
				cabData["left"] = (info.x + (data.widthX * i)) * this.scale;
			}			
		}
	} else { // y dir
		cabData["width"] = data.widthY * this.scale;
		cabData["height"] = data.heightY * this.scale;

		if (row2) {
			if (info.cabPos === "LL" || info.cabPos === "UL") {
				startX = info.x + data.widthY + info.space;
			} else {
				startX = info.x - data.widthY - info.space;
			}
			cabData["left"] = startX * this.scale;

			if (info.cabPos === "LL" || info.cabPos === "LR") {
				startY = info.y - (data.heightY * (info.count - 1));
				cabData["top"] = (startY + (data.heightY * i)) * this.scale;
			} else {
				startY = info.y + (data.heightY * (info.count - 1));
				cabData["top"] = (startY - (data.heightY * i)) * this.scale;
			}
		} else {
			cabData["left"] = info.x * this.scale;
			if (info.cabPos === "LL" || info.cabPos === "LR") {
				cabData["top"] = (info.y - (data.heightY * i)) * this.scale;	
			} else {
				cabData["top"] = (info.y + (data.heightY * i)) * this.scale;
			}
		}
	}
};

DrawCA.prototype.createCab = function(cabData, dir) {
	var div = document.createElement("div");
	div.id = cabData.id;
	div.classList.add("cab");
	div.style.position = "absolute";
	div.style.top = cabData.top + "px";
	div.style.left = cabData.left + "px";
	div.style.width = cabData.width + "px";
	div.style.height = cabData.height + "px";
	this.dcArea.appendChild(div);
};


