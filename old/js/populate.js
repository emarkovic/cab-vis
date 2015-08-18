var scale = 5;

var cabCount = 0;
var outerEl = document.getElementById("outer");
var displayEl = document.getElementById("display-info");
var colors = ["red", "blue", "green"];
window.onload = function() {
	makeCab(8, 40.5 * 2, 29 * 2);	
	makeCab(8, 40.5 * 2, 33 * 2);	

	//

	makeCab(12, 12.5 * 2, 34 * 2);

	makeCab(16, 10.5 * 2, 38 * 2);
	makeCab(20, 28.5 * 2, 38 * 2);
	makeCab(16, 10.5 * 2, 42 * 2);	
	makeCab(15, 28.5 * 2, 42 * 2);	
	makeCab(4, 45.5 * 2, 42 * 2);	

	//

	makeCab(15, 9, 52 * 2);
	makeCab(9, 27.5 * 2, 52 * 2);
	makeCab(9, 38.5 * 2, 52 * 2);
	makeCab(15, 9, 56 * 2);
	makeCab(9, 27.5 * 2, 56 * 2);
	makeCab(9, 38.5 * 2, 56 * 2);

	makeCab(15, 9, 60 * 2);
	makeCab(9, 27.5 * 2, 60 * 2);
	makeCab(9, 38.5 * 2, 60 * 2);
	makeCab(15, 9, 64 * 2);
	makeCab(9, 27.5 * 2, 64 * 2);
	makeCab(9, 38.5 * 2, 64 * 2);

	makeCab(15, 9, 68 * 2);
	makeCab(9, 27.5 * 2, 68 * 2);
	makeCab(9, 38.5 * 2, 68 * 2);
	makeCab(15, 9, 72 * 2);
	makeCab(9, 27.5 * 2, 72 * 2);
	makeCab(9, 38.5 * 2, 72 * 2);

	makeCab(15, 9, 76 * 2);
	makeCab(9, 27.5 * 2, 76 * 2);
	makeCab(9, 38.5 * 2, 76 * 2);
	makeCab(15, 9, 80 * 2);
	makeCab(9, 27.5 * 2, 80 * 2);
	makeCab(9, 38.5 * 2, 80 * 2);

	makeCab(15, 9, 84 * 2);
	makeCab(9, 27.5 * 2, 84 * 2);
	makeCab(9, 38.5 * 2, 84 * 2);
	makeCab(15, 9, 88 * 2);
	makeCab(9, 27.5 * 2, 88 * 2);
	makeCab(9, 38.5 * 2, 88 * 2);

	makeCab(15, 9, 92 * 2);
	makeCab(9, 38.5 * 2, 92 * 2);

	colorCabs();
	
}
function makeCab(count, startX, startY) {
	var div;
	for(var i = 0; i < count - 1; i++) {
		div = document.createElement("div");
		div.style.borderRight = "none";
		div.style.left = (startX + 2 * i) * scale + "px";
		div.style.top = startY * scale + "px";
		div.classList.add("cab");
		div.id = "cab" + cabCount;
		outerEl.appendChild(div);
		cabCount++;
	}
	div = document.createElement("div");
	div.style.left = (startX + 2 * (count - 1)) * scale + "px";
	div.style.top = startY * scale + "px";
	div.classList.add("cab");
	div.id = "cab" + cabCount;
	outerEl.appendChild(div);
	cabCount++;
}
function colorCabs() {
	for (var i = 0; i < cabCount; i++) {
		var cab = document.getElementById("cab" + i);
		cab.style.backgroundColor = colors[i % 3];
		cab.onmouseover = hoverStart;
		cab.onmouseout = hoverEnd;
	}
}

function hoverStart() {
	this.style.backgroundColor = "#e6f1f6";	
	displayEl.innerHTML = this.id;
}

function hoverEnd() {
	var name = this.id;
	var last = name.substring(3);
	this.style.backgroundColor = colors[last % 3];
	displayEl.innerHTML = "";
}
