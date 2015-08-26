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
 * Data for CA01 - Santa Clara.
 */
var ca01 = {
	"perimeter" : [
		[0, 0],
		[94, 0],
		[94, 65],
		[0, 65]
	],
	"cages" : [
		[
			[20, 24],
			[44, 24],
			[44, 32.5],
			[20, 32.5]
		],
		[
			[68, 4.5],
			[90.5, 4.5],
			[90.5, 28],
			[68, 28]
		],
		[
			[45.5, 36],
			[52, 36],
			[52, 37],
			[90.5, 37],
			[90.5, 62],
			[45.5, 62]
		]
	],
	"widthX" : 1,
	"heightX" : 2,

	"widthY" : 2,
	"heightY" : 1,

	"pods" : [
		{
			"pod" : "P01",
			"dir" : "x",
			"x" : 17,
			"y" : 59.5,
			"cabPos" : "LR",
			"rows" : 2,
			"count" : 16,
			"coolIsle" : true,
			"space" : 2,
			"containment" : true
		},
		{
			"pod" : "P02",
			"dir" : "x",
			"x" : 17,
			"y" : 52.5,
			"cabPos" : "LR",
			"rows" : 2,
			"count" : 16,
			"coolIsle" : true,
			"space" : 2,
			"containment" : true
		},
		{
			"pod" : "P03",
			"dir" : "x",
			"x" : 17,
			"y" : 45.5,
			"cabPos" : "LR",
			"rows" : 2,
			"count" : 16,
			"coolIsle" : true,
			"space" : 2,
			"containment" : true
		},
		{
			"pod" : "P04",
			"dir" : "x",
			"x" : 17,
			"y" : 38.5,
			"cabPos" : "LR",
			"rows" : 2,
			"count" : 16,
			"coolIsle" : true,
			"space" : 2,
			"containment" : true
		},
		{
			"pod" : "P05",
			"dir" : "x",
			"x" : 17,
			"y" : 28.5,
			"cabPos" : "LR",
			"rows" : 2,
			"count" : 16,
			"coolIsle" : true,
			"space" : 2,
			"containment" : true
		},
		{
			"pod" : "P06",
			"dir" : "x",
			"x" : 17,
			"y" : 21.5,
			"cabPos" : "LR",
			"rows" : 2,
			"count" : 16,
			"coolIsle" : true,
			"space" : 2,
			"containment" : true
		},
		{
			"pod" : "P07",
			"dir" : "x",
			"x" : 17,
			"y" : 14.5,
			"cabPos" : "LR",
			"rows" : 2,
			"count" : 16,
			"coolIsle" : true,
			"space" : 2,
			"containment" : true
		},
		{
			"pod" : "P08",
			"dir" : "x",
			"x" : 17,
			"y" : 7.5,
			"cabPos" : "LR",
			"rows" : 2,
			"count" : 16,
			"coolIsle" : true,
			"space" : 2,
			"containment" : true
		},
		{
			"pod" : "P09",
			"dir" : "x",
			"x" : 42,
			"y" : 59.5,
			"cabPos" : "LR",
			"rows" : 2,
			"count" : 21,
			"coolIsle" : true,
			"space" : 2,
			"containment" : true
		},
		{
			"_war" : "strange",

			"pod" : "P10",
			"dir" : "x",
			"x" : 42,
			"y" : 52.5,
			"cabPos" : "LR",
			"rows" : 2,
			"count" : 21,
			"coolIsle" : true,
			"space" : 2,
			"containment" : true
		},
		{
			"pod" : "P11",
			"dir" : "x",
			"x" : 42,
			"y" : 45.5,
			"cabPos" : "LR",
			"rows" : 2,
			"count" : 21,
			"coolIsle" : true,
			"space" : 2,
			"containment" : true
		},
		{
			"pod" : "P12",
			"dir" : "x",
			"x" : 42,
			"y" : 38.5,
			"cabPos" : "LR",
			"rows" : 2,
			"count" : 21,
			"coolIsle" : true,
			"space" : 2,
			"containment" : true
		},
		{
			"pod" : "P13",
			"dir" : "x",
			"x" : 41,
			"y" : 28.5,
			"cabPos" : "LR",
			"rows" : 2,
			"count" : 20,
			"coolIsle" : true,
			"space" : 2,
			"containment" : true
		},
		{
			"pod" : "P14",
			"dir" : "x",
			"x" : 41,
			"y" : 21.5,
			"cabPos" : "LR",
			"rows" : 2,
			"count" : 20,
			"coolIsle" : true,
			"space" : 2,
			"containment" : true
		},
		{
			"pod" : "P15",
			"dir" : "x",
			"x" : 41,
			"y" : 14.5,
			"cabPos" : "LR",
			"rows" : 2,
			"count" : 20,
			"coolIsle" : true,
			"space" : 2,
			"containment" : true
		},
		{
			"pod" : "P16",
			"dir" : "x",
			"x" : 41.5,
			"y" : 7.5,
			"cabPos" : "LR",
			"rows" : 2,
			"count" : 19,
			"coolIsle" : true,
			"space" : 2,
			"containment" : true
		},
		{
			"pod" : "P17",
			"dir" : "y",
			"x" : 48,
			"y" : 58.5,
			"cabPos" : "LR",
			"rows" : 1,
			"count" : 23,
			"coolIsle" : true,
			"side" : "L",
			"space" : 2,
			"containment" : true
		},
		{
			"pod" : "P18",
			"dir" : "y",
			"x" : 52,
			"y" : 58.5,
			"cabPos" : "LL",
			"rows" : 2,
			"count" : 22,
			"coolIsle" : true,
			"space" : 2,
			"containment" : true
		},
		{
			"pod" : "P19",
			"dir" : "y",
			"x" : 60,
			"y" : 58.5,
			"cabPos" : "LL",
			"rows" : 2,
			"count" : 22,
			"coolIsle" : true,
			"space" : 2,
			"containment" : true
		},
		{
			"pod" : "P20",
			"dir" : "y",
			"x" : 68,
			"y" : 58.5,
			"cabPos" : "LL",
			"rows" : 2,
			"count" : 22,
			"missing" : [4, 5, 16, 17],
			"coolIsle" : true,
			"space" : 2,
			"containment" : true
		},
		{
			"pod" : "P21",
			"dir" : "y",
			"x" : 76,
			"y" : 58.5,
			"cabPos" : "LL",
			"rows" : 2,
			"count" : 22,
			"coolIsle" : true,
			"space" : 2,
			"containment" : true
		},
		{
			"pod" : "P22",
			"dir" : "y",
			"x" : 84,
			"y" : 58.5,
			"cabPos" : "LL",
			"rows" : 2,
			"count" : 22,
			"coolIsle" : true,
			"space" : 2,
			"containment" : true
		},
		{
			"pod" : "P23",
			"dir" : "y",
			"x" : 48,
			"y" : 27.5,
			"cabPos" : "LR",
			"rows" : 1,
			"count" : 24,
			"missing" : [17],
			"coolIsle" : true,
			"side" : "L",
			"space" : 2,
			"containment" : true
		},
		{
			"pod" : "P24",
			"dir" : "y",
			"x" : 52,
			"y" : 26.5,
			"cabPos" : "LL",
			"rows" : 2,
			"count" : 23,
			"coolIsle" : true,
			"space" : 2,
			"containment" : true
		},
		{
			"pod" : "P25",
			"dir" : "y",
			"x" : 60,
			"y" : 26.5,
			"cabPos" : "LL",
			"rows" : 2,
			"count" : 23,
			"coolIsle" : true,
			"space" : 2,
			"containment" : true
		},
		{
			"pod" : "P26",
			"dir" : "y",
			"x" : 70,
			"y" : 26.5,
			"cabPos" : "LL",
			"rows" : 2,
			"count" : 21,
			"coolIsle" : true,
			"space" : 2,
			"containment" : true
		},
		{
			"pod" : "P27",
			"dir" : "y",
			"x" : 78,
			"y" : 26.5,
			"cabPos" : "LL",
			"rows" : 2,
			"count" : 21,
			"coolIsle" : true,
			"space" : 2,
			"containment" : true
		},
		{
			"pod" : "P28",
			"dir" : "y",
			"x" : 86,
			"y" : 26.5,
			"cabPos" : "LL",
			"rows" : 1,
			"count" : 21,
			"coolIsle" : true,
			"side" : "R",
			"space" : 2,
			"containment" : true
		}
	]
};

/**
 * Data for NJ02 - Jersey City.
 */
var nj02 = {
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

/**
 * Data for NJ01 - Secaucus
 */
var nj01 = {
	"perimeter" : [
		[5, 0],
		[99, 0],
		[99, 52],
		[32, 52],
		[32, 28],
		[0.5, 28],
		[0.5, 23],
		[25, 23],
		[25, 3],
		[5, 3]
	],

	"cages" : [],

	"widthX" : 1,
	"heightX" : 2,

	"widthY" : 2, 
	"heightY" : 1,

	"pods" : [
		{
			"pod" : "P00",
			"dir" : "y",
			"x" : 29,
			"y" : 5,
			"cabPos" : "UL",
			"rows" : 2,
			"count" : 8,
			"coolIsle" : true,
			"space" : 2,
			"containment" : true
		},
		{
			"pod" : "P01",
			"dir" : "y",
			"x" : 38,
			"y" : 5,
			"cabPos" : "UL",
			"rows" : 1,
			"count" : 5,
			"coolIsle" : true,
			"space" : 1,
			"containment" : true
		},
		{
			"pod" : "P02",
			"dir" : "y",
			"x" : 42,
			"y" : 4,
			"cabPos" : "UR",
			"rows" : 1,
			"count" : 4,
			"coolIsle" : true,
			"space" : 1,
			"containment" : true
		},			
		{
			"pod" : "P03",
			"dir" : "y",
			"x" : 38,
			"y" : 10,
			"cabPos" : "UL",
			"rows" : 2,
			"count" : 15,
			"coolIsle" : true,
			"space" : 2,
			"containment" : true
		},		
		{
			"pod" : "P04",
			"dir" : "y",
			"x" : 34,
			"y" : 29,
			"cabPos" : "UR",
			"rows" : 1,
			"count" : 12,
			"coolIsle" : true,
			"space" : 1,
			"containment" : true
		},			
		{
			"pod" : "P05",
			"dir" : "y",
			"x" : 38,
			"y" : 27,
			"cabPos" : "UL",
			"rows" : 2,
			"count" : 16,
			"coolIsle" : true,
			"space" : 2,
			"containment" : true
		},	
		{
			"pod" : "P06",
			"dir" : "y",
			"x" : 52,
			"y" : 5,
			"cabPos" : "UL",
			"rows" : 2,
			"count" : 10,
			"coolIsle" : true,
			"space" : 2,
			"containment" : true
		},		
		{
			"pod" : "P07",
			"dir" : "y",
			"x" : 52,
			"y" : 17,
			"cabPos" : "UL",
			"rows" : 2,
			"count" : 9,
			"coolIsle" : true,
			"space" : 2,
			"containment" : true
		},			
		{
			"pod" : "P08",
			"dir" : "y",
			"x" : 52,
			"y" : 33,
			"cabPos" : "UL",
			"rows" : 2,
			"count" : 16,
			"coolIsle" : true,
			"space" : 2,
			"containment" : true
		},
		{
			"pod" : "P09",
			"dir" : "y",
			"x" : 60,
			"y" : 5,
			"cabPos" : "UL",
			"rows" : 1,
			"count" : 10,
			"coolIsle" : true,
			"space" : 1,
			"containment" : true
		},	
		{
			"pod" : "P10",
			"dir" : "y",
			"x" : 65,
			"y" : 5,
			"cabPos" : "UR",
			"rows" : 1,
			"count" : 10,
			"coolIsle" : true,
			"space" : 1,
			"containment" : true
		},		
		{
			"pod" : "P11",
			"dir" : "y",
			"x" : 60,
			"y" : 17,
			"cabPos" : "UL",
			"rows" : 2,
			"count" : 9,
			"coolIsle" : true,
			"space" : 2,
			"containment" : true
		},
		{
			"pod" : "P12",
			"dir" : "y",
			"x" : 60,
			"y" : 33,
			"cabPos" : "UL",
			"rows" : 2,
			"count" : 16,
			"coolIsle" : true,
			"space" : 2,
			"containment" : true
		},
		{
			"pod" : "P13",
			"dir" : "y",
			"x" : 68,
			"y" : 5,
			"cabPos" : "UL",
			"rows" : 2,
			"count" : 10,
			"coolIsle" : true,
			"space" : 2,
			"containment" : true
		},	
		{
			"pod" : "P14",
			"dir" : "y",
			"x" : 68,
			"y" : 17,
			"cabPos" : "UL",
			"rows" : 2,
			"count" : 9,
			"coolIsle" : true,
			"space" : 2,
			"containment" : true
		},	
		{
			"pod" : "P15",
			"dir" : "y",
			"x" : 68,
			"y" : 33,
			"cabPos" : "UL",
			"rows" : 2,
			"count" : 16,
			"coolIsle" : true,
			"space" : 2,
			"containment" : true
		},	
		{
			"pod" : "P16",
			"dir" : "y",
			"x" : 76,
			"y" : 5,
			"cabPos" : "UL",
			"rows" : 2,
			"count" : 10,
			"coolIsle" : true,
			"space" : 2,
			"containment" : true
		},		
		{
			"pod" : "P17",
			"dir" : "y",
			"x" : 76,
			"y" : 17,
			"cabPos" : "UL",
			"rows" : 2,
			"count" : 9,
			"coolIsle" : true,
			"space" : 2,
			"containment" : true
		},	
		{
			"pod" : "P18",
			"dir" : "y",
			"x" : 76,
			"y" : 33,
			"cabPos" : "UL",
			"rows" : 2,
			"count" : 16,
			"coolIsle" : true,
			"space" : 2,
			"containment" : true
		},		
		{
			"pod" : "P19",
			"dir" : "y",
			"x" : 84,
			"y" : 5,
			"cabPos" : "UL",
			"rows" : 2,
			"count" : 10,
			"coolIsle" : true,
			"space" : 2,
			"containment" : true
		},	
		{
			"pod" : "P20",
			"dir" : "y",
			"x" : 84,
			"y" : 17,
			"cabPos" : "UL",
			"rows" : 2,
			"count" : 9,
			"coolIsle" : true,
			"space" : 2,
			"containment" : true
		},	
		{
			"pod" : "P21",
			"dir" : "y",
			"x" : 84,
			"y" : 33,
			"cabPos" : "UL",
			"rows" : 2,
			"count" : 16,
			"coolIsle" : true,
			"space" : 2,
			"containment" : true
		},	
		{
			"pod" : "P22",
			"dir" : "y",
			"x" : 92,
			"y" : 5,
			"cabPos" : "UL",
			"rows" : 2,
			"count" : 10,
			"coolIsle" : true,
			"space" : 2,
			"containment" : true
		},	
		{
			"pod" : "P23",
			"dir" : "y",
			"x" : 92,
			"y" : 33,
			"cabPos" : "UL",
			"rows" : 1,
			"count" : 16,
			"coolIsle" : true,
			"space" : 2,
			"containment" : true
		}								
	]
}

/**
 * Data for OH01 - Cleveland
 */
var oh01 = {
	"perimeter" : [
		[0.5, 0],
		[39, 0],
		[39, 3.25],
		[37, 4.5],
		[39, 6.25],
		[39, 17.25],
		[0.5, 17.25]
	],

	"cages" : [],

	"widthX" : 1,
	"heightX" : 2,

	"widthY" : 2, 
	"heightY" : 1,

	"pods" : [
		{
			"pod" : "P01",
			"dir" : "y",
			"x" : 2,
			"y" : 10.5,
			"cabPos" : "UL",
			"rows" : 1,
			"count" : 4,
			"coolIsle" : false
		},
		{
			"pod" : "P02",
			"dir" : "y",
			"x" : 6,
			"y" : 0.25,
			"cabPos" : "UL",
			"rows" : 1,
			"count" : 7,
			"coolIsle" : false
		},
		{
			"pod" : "P03",
			"dir" : "y",
			"x" : 6,
			"y" : 10.25,
			"cabPos" : "UL",
			"rows" : 1,
			"count" : 4,
			"coolIsle" : false
		},	
		{
			"pod" : "P04",
			"dir" : "y",
			"x" : 10,
			"y" : 0.25,
			"cabPos" : "UL",
			"rows" : 2,
			"count" : 14,
			"coolIsle" : true,
			"space" : 2,
			"containment" : true
		},
		{
			"pod" : "P05",
			"dir" : "y",
			"x" : 17,
			"y" : 0.25,
			"cabPos" : "UL",
			"rows" : 2,
			"count" : 14,
			"missing" : [8, 9],
			"coolIsle" : true,
			"space" : 2,
			"containment" : true
		},		
		{
			"pod" : "P06",
			"dir" : "y",
			"x" : 24,
			"y" : 0.25,
			"cabPos" : "UL",
			"rows" : 2,
			"count" : 14,
			"missing" : [20, 21],
			"coolIsle" : true,
			"space" : 2,
			"containment" : true
		},		
		{
			"pod" : "P07",
			"dir" : "y",
			"x" : 31,
			"y" : 0.25,
			"cabPos" : "UL",
			"rows" : 1,
			"count" : 9,
			"coolIsle" : true,
			"space" : 1,
			"containment" : true
		},
		{
			"pod" : "P08",
			"dir" : "y",
			"x" : 31,
			"y" : 9.25,
			"cabPos" : "UL",
			"rows" : 2,
			"count" : 5,
			"coolIsle" : true,
			"space" : 2,
			"containment" : true
		}
	]
}