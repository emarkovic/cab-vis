"use strict";

function Cabinet(data) {
	// this.customer = data["customer"];
	this.customer = "**********";
	this.status = data.status;
	this.pod = data.pod;
	this.cab = data.cab;
	this.name = data.name;
	if (this.pod === "P10") {
		var nameP10 = this.name.substring(this.name.indexOf("::") + 2);
		nameP10 = nameP10.replace(":", "-");		
		this.id = nameP10;
	} else {
		this.id = this.pod + "-" + this.cab;	
	}
	this.cabEl = document.getElementById(this.id);
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

