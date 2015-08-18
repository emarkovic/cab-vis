// Select the DIV container "D3line" then
// add an SVG element to it
 
//1ft = scale px
var scale = 15;

var width = window.innerWidth;
var height = window.innerHeight;
 
var lineGraph = d3.select("#D3lines")
    .append("svg:svg")
    .attr("width", width)    
    .attr("height", height);
console.log(lineGraph); 
 
// To draw a line use the "svg:line" element.
// "svg:line" element requires 4 attributes (x1, y1, x2, and y2)
// (x1,y1) are coordinates of the starting point. 
// (x2,y2) are coordinates of the end point.
// You also need to specify the stroke color.
 
// Using for loop to draw multiple horizontal lines
for (var j = 0; j <= width; j += scale) {
    lineGraph.append("svg:line")
        .attr("x1", 0)
        .attr("y1", j)
        .attr("x2", width)
        .attr("y2", j)
        .style("stroke", "#E6F1F6")
        .style("stroke-width", 2);            
};
 
// Using for loop to draw multiple vertical lines
for (var j = 0; j <= width; j += scale) {
    lineGraph.append("svg:line")
        .attr("x1", j)
        .attr("y1", 0)
        .attr("x2", j)
        .attr("y2", height)
        .style("stroke", "#E6F1F6")
        .style("stroke-width", 2);            
};


// d3.select("body").append("p").text("new paragraph");