var shift = 1;
var scale = 15;
window.onload = function () {
	var canvas = document.getElementById("myCanvas");
	setup(canvas);

	createPerimeter();

	createCab(2, 2);
	createCab(2, 8);
	createCab(2, 14);
	createCab(6, 2);
	createCab(6, 8);
	createCab(6, 14);

	createCage();

	view.draw();
};

function createPerimeter() {
	var path = new Path();
	path.strokeColor = "black";
	path.add(
		[shift, shift], 
		[24 * scale + shift, 0 + shift], 
		[24 * scale + shift, 18 * scale + shift], 
		[44 * scale + shift, 18 * scale + shift], 
		[44 * scale + shift, 32 * scale + shift], 
		[0 + shift, 32 * scale + shift], 
		[shift, shift]);
}

function createCab(x, y) {
	var cab1 = new Rectangle(x * scale + shift, y * scale + shift, 2 * scale, 4 * scale);
	var path1 = new Path.Rectangle(cab1);
	path1.style = {
		fillColor: "#8ED3F6",
		strokeWidth: 20
	};
}

function createCage() {
	var path = new Path();
	path.strokeColor = "black";
		
	path.dashArray = [8, 6];
	path.add(
		[1 * scale + shift, 1 * scale + shift],
		[9 * scale + shift, 1 * scale + shift],
		[9 * scale + shift, 19 * scale + shift],
		[1 * scale + shift, 19 * scale + shift],
		[1 * scale + shift, 1 * scale + shift]);
}