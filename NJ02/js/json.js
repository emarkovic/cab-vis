/**
 * Ena Markovic, vXchnge
 */

/**
 * Biased on cabinet availability, cabinet color will be different 
 */
var colors = {
		"Assigned" : "#BDC3C7",
		"Available" : "#87D37C",
		"Hold" : "#F9BF3B",
		"Reserved" : "#F9BF3B",
		"Lost" : "#6C7A89"	
};

/**
 * Settings for DrawCA.js.
 */
var settings = {
	"scale" : 6.25
};

/**
 * Data for NJ02 - Jersey City data center.
 */
var data = {
	"perimeter" : [
		[0, 22.5],
		[3.5, 22.5],
		[3.5, 12.75],
		[59.75, 12.75],
		[59.75, 0],
		[94, 0],
		[94, 26],
		[0, 26]
	],

	"cages" : [	
		[	//cage 0
			[52.75, 13],
			[60.25, 13],
			[60.25, 17.75],
			[52.75, 17.75]
		],	
		[ 	//cage 1
			[40.5, 13],
			[52.25, 13],
			[52.25, 22.5],
			[40.5, 22.5]
		],
		[	//cage 2
			[52.75, 18.25],
			[60.25, 18.25],
			[60.25, 19.25],
			[63.25, 19.25],
			[63.25, 22.5],
			[52.75, 22.5]		
		],
		[	//cage 3
			[63.75, 19.25],
			[65.5, 19.25],
			[65.5, 22.5],
			[63.75, 22.5]
		],
		[	//cage 4
			[60.75, 13],
			[65.5, 13],
			[65.5, 18.75],
			[60.75, 18.75]
		],
		[	//cage 5
			[60, 6.5],
			[65.5, 6.5],
			[65.5, 10.25],
			[60, 10.25]
		],
		[	//cage 6
			[60, 0.25],
			[65.5, 0.25],
			[65.5, 6],
			[60, 6]
		],
		[ 	//cage 7
			[67.5, 0.25],
			[75.25, 0.25],
			[75.25, 3],
			[74.25, 3],
			[74.25, 5],
			[67.5, 5]
		],
		[ 	//cage 8
			[67.5, 5.5],
			[74.25, 5.5],
			[74.25, 10.25],
			[67.5, 10.25]
		],
		[ 	//cage 9
			[67.5, 12.5],
			[74.5, 12.5],
			[74.5, 25.5],
			[67.5, 25.5]
		],
		[	//cage 10
			[75.75, 0.25],
			[83.5, 0.25],
			[83.5, 10.25],
			[74.75, 10.25],
			[74.75, 3.5],
			[75.75, 3.5]
		],
		[ 	//cage 12
			[3.75, 13],
			[13.5, 13],
			[13.5, 22.5],
			[3.75, 22.5]
		]
	],

	"widthX" : 1,
	"heightX" : 1.5,

	"widthY" : 2,
	"heightY" : 1,

	"cabs" : [
		{
			"cage" : "C001",
			"row" : "R01",
			"dir" : "x",
			"x" : 49.5,
			"y" : 19.5,
			"cabPos" : "UR",
			"rows" : 1,
			"count" : 8,
			"coolIsle" : true,
			"space" : 1,
			"containment" : true,
			"startNum" : 1
		},
		{
			"cage" : "C001",
			"row" : "R02",
			"dir" : "x",
			"x" : 48.5,
			"y" : 16.5,
			"cabPos" : "UR",
			"rows" : 1,
			"count" : 2,
			"coolIsle" : true,
			"space" : 1,
			"containment" : true,
			"startNum" : 2
		},		
		{
			"cage" : "C001",
			"row" : "R03",
			"dir" : "x",
			"x" : 46.5,
			"y" : 13.5,
			"cabPos" : "UR",
			"rows" : 1,
			"count" : 4,
			"coolIsle" : true,
			"space" : 1,
			"containment" : true,
			"startNum" : 4
		// }
		},	
		{
			"cage" : "C002",
			"row" : "R01",
			"dir" : "x",
			"x" : 52.85,
			"y" : 19.5,
			"cabPos" : "UL",
			"rows" : 1,
			"count" : 7,
			"coolIsle" : true,
			"space" : 1,
			"containment" : true,
			"startNum" : 1
		},
		{
			"cage" : "C002",
			"row" : "R02",
			"dir" : "x",
			"x" : 61,
			"y" : 19.5,
			"cabPos" : "UL",
			"rows" : 1,
			"count" : 2,
			"coolIsle" : true,
			"space" : 1,
			"containment" : true,
			"startNum" : 1
		},	
		{
			"cage" : "C004",
			"row" : "R01",
			"dir" : "x",
			"x" : 61,
			"y" : 14.5,
			"cabPos" : "UL",
			"rows" : 1,
			"count" : 3,
			"coolIsle" : true,
			"space" : 2,
			"containment" : true,
			"startNum" : 1
		},
		{
			"cage" : "C008",
			"row" : "R01",
			"dir" : "x",
			"x" : 68.5,
			"y" : 6.25,
			"cabPos" : "UL",
			"rows" : 1,
			"count" : 3,
			"coolIsle" : true,
			"space" : 1,
			"containment" : true,
			"startNum" : 1
		},	
		{
			"cage" : "C009",
			"row" : "R00",
			"dir" : "x",
			"x" : 68.5,
			"y" : 14,
			"cabPos" : "UL",
			"rows" : 1,
			"count" : 6,
			"coolIsle" : false,
			"startNum" : 1
		},
		{
			"cage" : "C009",
			"row" : "R01",
			"dir" : "x",
			"x" : 68.5,
			"y" : 17,
			"cabPos" : "UL",
			"rows" : 1,
			"count" : 1,
			"coolIsle" : false,
			"startNum" : 1
		},
		{
			"cage" : "C009",
			"row" : "R01",
			"dir" : "x",
			"x" : 73.5,
			"y" : 17,
			"cabPos" : "UL",
			"rows" : 1,
			"count" : 1,
			"coolIsle" : false,
			"startNum" : 6
		// }		
		},
		{
			"cage" : "C009",
			"row" : "R02",
			"dir" : "x",
			"x" : 68.5,
			"y" : 20,
			"cabPos" : "UL",
			"rows" : 1,
			"count" : 6,
			"coolIsle" : false,
			"startNum" : 1
		},										
		{
			"cage" : "C009",
			"row" : "R03",
			"dir" : "x",
			"x" : 68.5,
			"y" : 22.5,
			"cabPos" : "UL",
			"rows" : 1,
			"count" : 6,
			"coolIsle" : true,
			"space" : 1,
			"containment" : true,
			"startNum" : 1
		}			
	]
};