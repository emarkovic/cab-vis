"use strict";

// var request = new XMLHttpRequest();
// request.overrideMimeType("application/json");
// request.open("GET", "secaucus.json", true);
// request.onload = ready;
// request.send();

$.ajax({
	method: "GET",
	url: "secaucus.json",
	beforeSend: function (xhr) {
		xhr.overrideMimeType("application/json");
	}
}).done(function (data) {
	console.log(data);
})

// function ready() {
// 	console.log(JSON.parse(this.responseText));
// }