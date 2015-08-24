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
 * Data for CA01 - Santa Clara data center.
 */
var data = {
	"perimeter" : [
		[0, 22.5],
		[3.5, 22.5],
		[3.5, 13],
		[60, 13],
		[60, 0],
		[94, 0],
		[94, 26],
		[0, 26]
	],

	"cages" : [	
		[	//cage 0
			[52.5, 13],
			[60.5, 13],
			[60.5, 18],
			[52.5, 18]
		],	
		[ 	//cage 1
			[40.5, 13],
			[52.5, 13],
			[52.5, 22.5],
			[40.5, 22.5]
		],
		[	//cage 2
			[52.5, 18],
			[60.5, 18],
			[60.5, 19],
			[63.5, 19],
			[63.5, 22.5],
			[52.5, 22.5]		
		],
		[	//cage 3
			[63.5, 19],
			[65.5, 19],
			[65.5, 22.5],
			[63.5, 22.5]
		],
		[	//cage 4
			[60.5, 13],
			[65.5, 13],
			[65.5, 19],
			[60.5, 19]
		],
		[	//cage 5
			[60, 6],
			[65.5, 6],
			[65.5, 10],
			[60, 10]
		],
		[	//cage 6
			[60, 0],
			[65.5, 0],
			[65.5, 6],
			[60, 6]
		],
		[ 	//cage 7
			[67.5, 0],
			[75.5, 0],
			[75.5, 3],
			[74.5, 3],
			[74.5, 5],
			[67.5, 5]
		],
		[ 	//cage 8
			[67.5, 5],
			[74.5, 5],
			[74.5, 10],
			[67.5, 10]
		],
		[ 	//cage 9
			[67.5, 12.5],
			[74.5, 12.5],
			[74.5, 25.5],
			[67.5, 25.5]
		],
		[	//cage 10
			[75.5, 0],
			[83.5, 0],
			[83.5, 10],
			[74.5, 10],
			[74.5, 3],
			[75.5, 3]
		]
	],

	"widthX" : 1,
	"heightX" : 1.5,

	"widthY" : 2,
	"heightY" : 1,

	"cabs" : [
		{
			"cage" : "C01",
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
			"cage" : "C01",
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
			"cage" : "C01",
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
			"cage" : "C02",
			"row" : "R01",
			"dir" : "x",
			"x" : 52.5,
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
			"cage" : "C02",
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
			"cage" : "C04",
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
			"cage" : "C08",
			"row" : "R01",
			"dir" : "x",
			"x" : 68.5,
			"y" : 6,
			"cabPos" : "UL",
			"rows" : 1,
			"count" : 3,
			"coolIsle" : true,
			"space" : 1,
			"containment" : true,
			"startNum" : 1
		},	
		{
			"cage" : "C09",
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
			"cage" : "C09",
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
			"cage" : "C09",
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
			"cage" : "C09",
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
			"cage" : "C09",
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