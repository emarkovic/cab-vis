/**
 * Ena Markovic, vXchnge
 */

"use strict";

/**
 * Attaches data and hover functionality to cabinet elements.
 * @param {object} data NetSuite cabinet data.
 */
function Cabinet(data) {
	// this.customer = data["customer"];
	this.customer = "**********";
	this.status = data.status;
	this.pod = data.pod;
	this.cab = data.cab;
	this.name = data.name;
	this.id = this.name.replace(/:/g,'-');
	
	this.cabEl = document.getElementById(this.id);
	this.cabEl.style.backgroundColor = colors[this.status];
	this.hover();
}

/**
 * Enables hover functionality for the cabinet element.
 */
Cabinet.prototype.hover = function() {
	//popover() function is from bootstrap js. It gives the cabinet 
	//element popover functionality
	// $("#" + this.id).popover();
	//sets the popover content field
	this.cabEl.dataset.content = this.status + " " + this.customer;
	//sets the popover title field
	this.cabEl.dataset.originalTitle = this.name;

	//more hover functionality : cabinet element will change color on hover
	//this does not interfere with the other popover functionality
	var self = this;
	$(this.cabEl).hover(function () {
		self.cabEl.style.backgroundColor = "#ECF0F1";
	}, function () { 	//when cabinet is no longer being hovered over, 
						//regular color returns
		self.cabEl.style.backgroundColor = colors[self.status];
	});
};

