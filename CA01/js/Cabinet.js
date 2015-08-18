"use strict";

function Cabinet(data) {
	this.name = data["name"];
	// this.customer = data["customer"];
	this.customer = "**********";
	this.status = data["status"];
	this.pod = data["pod"];
	this.cab = data["cab"];

	this.cabEl = document.getElementById(this.pod + "-" + this.cab);
	
	this.cabEl.style.backgroundColor = colors[this.status];
	this.infoArea = document.getElementById("info");

	this.hover();
}

Cabinet.prototype.hover = function() {
	var self = this;
	$(this.cabEl).hover(function () {
		//in
		self.cabEl.style.backgroundColor = "#ECF0F1";
		self.infoArea.innerHTML = self.name + "<br>";
		if (self.customer) self.infoArea.innerHTML += self.customer + "<br>";
		self.infoArea.innerHTML += self.status;
	}, function () {
		//out
		self.cabEl.style.backgroundColor = colors[self.status];
		self.infoArea.innerHTML = "";
	});
};

