"use strict";

function Cabinet(data) {
	this.name = data["name"];
	// this.customer = data["customer"];
	this.customer = "**********";
	this.status = data["status"];
	this.pod = data["pod"];
	this.cab = data["cab"];

	this.id = this.pod + "-" + this.cab;

	this.cabEl = document.getElementById(this.pod + "-" + this.cab);
	
	this.cabEl.style.backgroundColor = colors[this.status];
	

	this.hover();
}

Cabinet.prototype.hover = function() {
	$("#" + this.id).popover();
	this.cabEl.dataset.content = this.status + " " + this.customer;
	this.cabEl.dataset.originalTitle = this.name;

	var self = this;
	$(this.cabEl).hover(function () {
		self.cabEl.style.backgroundColor = "#ECF0F1";
	}, function () {
		self.cabEl.style.backgroundColor = colors[self.status];
	});
};

