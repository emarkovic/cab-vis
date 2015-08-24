 /**
 * Ena Markovic, vXchnge
 * Draws CA01 - Santa Clara data center.
 */
function DrawNY2() {
	this.dcArea = document.getElementById("dcArea");
	
	this.scale = window.settings.scale * 2;

	//this.drawPerimeter();
	//this.drawPods();
	this.drawCages();
	//this.drawCagePerim();
}

//html template for cabinets + popovers.
DrawNY2.template = _.template($(document.getElementById("template-cab")).html());
//html template for cool isles
DrawNY2.isleTemplate = _.template($(document.getElementById("template-isle")).html());

/**
 * Draws the perimeter of the data center floor with Paper.js.
 */
DrawNY2.prototype.drawPerimeter = function() {
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
DrawNY2.prototype.drawCagePerim = function() {
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
DrawNY2.prototype.addToPath = function(data, path) {
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

/**
 * Draws the pods and cabs on the data center floor.
 */
DrawNY2.prototype.drawPods = function() {
	for (var i = 0; i < data.pods.length; i++) {
		var info = data.pods[i];
		if (info.coolIsle) { 	//if pod has a cool isle
			this.drawCoolIsle(info);
		}

		if (info.pod === "P10") { 	//drawing the special pod 10
			this.drawP10(info);
		} else {
			this.DrawCabs(info);
		}

		if (info.missing) { //deletes the specified cabs
			this.deleteCabs(info);	
		}
	}
};

DrawNY2.prototype.drawCages = function() {
	for (var i = 0; i < data.cabs.length; i++) {
		var info = data.cabs[i];
		
		if (info.coolIsle) { 	//if pod has a cool isle
			this.drawCoolIsle(info);
		}
		
		this.drawCabs(info);		
	}
};

/**
 * Draws the cool isles on the data center floor.
 * @param  {object} info Pod information.
 */
DrawNY2.prototype.drawCoolIsle = function(info) {
	var id = "isle" + info.pod;
	$(this.dcArea).append(DrawNY2.isleTemplate({
		"id" : id,
		"top" : this.getIsleTop(info) + "px",
		"left" : this.getIsleLeft(info) + "px",
		"width" : this.getIsleWidth(info) + "px",
		"height" : this.getIsleHeight(info) + "px",
		// "content" : "Pod " + info.pod.substring(1)
		"content" : info.row
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

/**
 * for functions "getIsleLeft" and "getIsleTop" :
 *
 * depending on where CAB01 of the pod is (lower left/right or upper left/right)
 * and depending on if the pod is oriented in x ( - ) or y ( | ) position,
 * the x (left) and y (top) values of the cool isle will differ
 */

/**
 * Gets the x value for cool isle's top left corner.
 * @param  {object} info Pod information.
 * @return {float}       X value as left position.
 */
DrawNY2.prototype.getIsleLeft = function(info) {
	if (info.cabPos === "LR" || info.cabPos === "UR") { //if lower right or upper right
		if (info.dir === "x") {
			return (info.x - data.widthX * (info.count - 1)) * this.scale;
		} else { 
			return (info.x - info.space) * this.scale;
		}
	} else { 	//if lower left or upper left
		if (info.dir === "x") {
			return info.x * this.scale;
		} else {
			return (info.x + data.widthY) * this.scale;
		}
	}
};

/**
 * Gets the y value for cool isle's top left corner.
 * @param  {object} info Pod information.
 * @return {float}       Y value as top position.
 */
DrawNY2.prototype.getIsleTop = function(info) {
	if (info.cabPos === "LR" || info.cabPos === "LL") { //if lower right or lower left
		if (info.dir === "x") {
			return (info.y - info.space) * this.scale;
		} else {	
			return (info.y - data.heightY * (info.count - 1)) * this.scale;
		}
	} else { 	//if upper right or upper left
		if (info.dir === "x") {
			return (info.y + data.heightX) * this.scale;
		} else {
			return info.y * this.scale;
		}
	}	
};

/**
 * for functions "getIsleWidth" and "getIsleHeight" :
 *
 * depending on if the pod is oriented in x ( - ) or y ( | ) position,
 * the width and height values of the cool isle will differ
 */

/**
 * Gets the width of cool isle.
 * @param  {object} info Pod information.
 * @return {float}       Width.
 */
DrawNY2.prototype.getIsleWidth = function(info) {
	if (info.dir === "x") {
		return data.widthX * info.count * this.scale;
	} else {
		return info.space * this.scale;
	}
};

/**
 * Gets the height of cool isle.
 * @param  {object} info Pod information.
 * @return {float}       Width.
 */
DrawNY2.prototype.getIsleHeight = function(info) {
	if (info.dir === "x") {
		return info.space * this.scale;
	} else {
		return data.heightY * info.count * this.scale;
	}
};

/**
 * Draws cabinets on the data center floor
 * @param  {object} info Pod information.
 */
DrawNY2.prototype.drawCabs = function(info) {
	var cabNum = 1;
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

/**
 * Creates one cabinet.
 * @param  {string} id     Desired id of cabinet element.
 * @param  {float}  top    Top position of cabinet element.
 * @param  {float}  left   Left position of cabinet element.
 * @param  {float}  width  Width of cabinet element.
 * @param  {height} height Height of cabinet element.
 */
DrawNY2.prototype.createCab = function(id, top, left, width, height) {
	
	//lodash templates:
	//passing data to the lodash template
	//the keys will get put into the appropriate positions in the html template
	//html is returned allowing for parent element to append it as a child
	$(this.dcArea).append(DrawNY2.template({
		"id" : id,
		"top" : top + "px",
		"left" : left + "px",
		"width" : width + "px",
		"height" : height + "px"
	}));
	//adding css class
	document.getElementById(id).classList.add("cab");
	console.log(document.getElementById(id));
};

/**
 * The CA01 - Santa Clara data center's pod 10 is unique. This function creates 
 * pod 10.
 * @param  {object} info Pod information.
 */
DrawNY2.prototype.drawP10 = function(info) {
	var id, idA, idB, idC, top, left, height, cabNum = 1;
	for (var i = 0; i < info.count; i++) {
		//the "first row" of cabs are "double cabs", A or B will be appending to their regular id
		id = this.getCabId(info, cabNum);
		idA = id + "A";
		idB = id + "B";
		top = this.getCabTop(info, false, i);
		left = this.getCabLeft(info, false, i);

		if (cabNum === 21) { 	//CAB21 is a single cab, so it is created normally
			this.createCab(id, top, left, data.widthX * this.scale, data.heightX * this.scale);	
		} 
		else {
			//double cab height -> half regular height.
			height = (data.heightX / 2) * this.scale;
			//A
			this.createCab(idA, top, left, data.widthX * this.scale, height);
			//B
			this.createCab(idB, top + height, left, data.widthX * this.scale, height);
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
		left = this.getCabLeft(info, true, i);
		height = (data.heightX / 3) * this.scale;

		//A
		this.createCab(idA, top, left, data.widthX * this.scale, height);
		//B
		this.createCab(idB, top + height, left, data.widthX * this.scale, height);
		//C
		this.createCab(idC, top + (height * 2), left, data.widthX * this.scale, height);
		cabNum++	
	}
};

/**
 * Gets the id of the cabinet.
 * @param  {object} info    Pod information.
 * @param  {integer} cabNum Number of the cabinet on the data center floor.
 * @return {string}         Cabinet id.
 */
DrawNY2.prototype.getCabId = function(info, cabNum) {
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

/**
 * for functions "getCabWidth" and "getCabHeight" :
 *
 * depending on if the pod is oriented in x ( - ) or y ( | ) position,
 * the width and height values of the cabinet will differ
 */

/**
 * Gets the width of the cabinet.
 * @param  {object} info Pod information.
 * @return {float}       Cabinet width.
 */
DrawNY2.prototype.getCabWidth = function(info) {
	if (info.dir === "x") {
		return data.widthX * this.scale;
	} else {
		return data.widthY * this.scale;
	}
};

/**
 * Gets the height of the cabinet.
 * @param  {object} info Pod information.
 * @return {float}       Cabinet height.
 */
DrawNY2.prototype.getCabHeight = function(info) {
	if (info.dir === "x") {
		return data.heightX * this.scale;
	} else {
		return data.heightY * this.scale;
	}
};

/**
 * for functions "getCabLeft" and "getCabTop" :
 *
 * depending on where CAB01 of the pod is (lower left/right or upper left/right)
 * and depending on if the pod is oriented in x ( - ) or y ( | ) position,
 * the x (left) and y (top) values of the cabinet will differ
 */

/**
 * Gets the x value for cabinet's top left corner.
 * @param  {object} info  Pod information.
 * @param  {boolean} row2 If cabinet is in the "second row" of a pod.
 * @param  {integer} i    Index for calculating x value.
 * @return {float}        X value as left position.
 */
DrawNY2.prototype.getCabLeft = function(info, row2, i) {
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

/**
 * Gets the y valye for cabinet's top left corner.
 * @param  {object} info Pod information.
 * @param  {boolean} row2 If cabinet is in the "second row" of a pod.
 * @param  {integer} i    Index for calculating x value.
 * @return {float}        Y value as top position.
 */
DrawNY2.prototype.getCabTop = function(info, row2, i) {
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

/**
 * Deletes the missing cabs from a pod.
 * @param  {object} info Pod information.
 */
DrawNY2.prototype.deleteCabs = function(info) {
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


