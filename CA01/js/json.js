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