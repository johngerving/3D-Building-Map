import * as THREE from "three";
import { SVGLoader } from "three/addons/loaders/SVGLoader.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import * as BufferGeometryUtils from "three/addons/utils/BufferGeometryUtils.js";

// Floor properties - defines name of floor, location of svg, which sections are extruded, and the locations on the floor
const floorProperties = [
  {
    name: "Basement",
    svg: "./Library-B.svg",
    svgScale: 0.01,
    position: [0, 0],
    extrudedSections: [], //["A-WALL-FULL"],
    floorLayer: { layer: "A-FLOOR-OUTLINE", enabled: false },
    excludedSections: ["A-FLOOR-OUTLINE"],
    extrudeDepth: 30,
    locations: [
      {
        name: "19A",
        type: "Room",
        position: [431.09, 239.46],
      },
      {
        name: "40",
        type: "Room",
        position: [211.24, 185.63],
      },
      {
        name: "19",
        type: "Room",
        position: [355.41, 241.82],
      },
      {
        name: "17",
        type: "Room",
        position: [315.34, 269.6],
      },
      {
        name: "7",
        type: "Room",
        position: [272.32, 167.07],
      },
      {
        name: "2",
        type: "Room",
        position: [150.61, 177.13],
      },
      {
        name: "T-0A",
        type: "Room",
        position: [230.7, 240.69],
      },
      {
        name: "8",
        type: "Room",
        position: [235.1, 176.26],
      },
      {
        name: "6",
        type: "Room",
        position: [232.56, 147.96],
      },
      {
        name: "44",
        type: "Room",
        position: [209.64, 147.71],
      },
      {
        name: "S-0C",
        type: "Room",
        position: [93.7, 76.3],
      },
      {
        name: "S-0B",
        type: "Room",
        position: [58.53, 315.87],
      },
      {
        name: "S-0A",
        type: "Room",
        position: [272.71, 266.81],
      },
      {
        name: "64",
        type: "Room",
        position: [527.02, 318.54],
      },
      {
        name: "EL-0A",
        type: "Room",
        position: [226.41, 256.11],
      },
      {
        name: "C-0A",
        type: "Room",
        position: [226.19, 322.07],
      },
      {
        name: "C-0B",
        type: "Room",
        position: [261.23, 151.08],
      },
      {
        name: "[BG]01",
        type: "Room",
        position: [67.13, 78.86],
      },
      {
        name: "[BG]02",
        type: "Room",
        position: [528.76, 290.97],
      },
      {
        name: "[CG]01",
        type: "Room",
        position: [56.3, 62.49],
      },
      {
        name: "[CG]02",
        type: "Room",
        position: [270.66, 117.31],
      },
      {
        name: "H-0A",
        type: "Room",
        position: [123.4, 244.34],
      },
      {
        name: "S-0D",
        type: "Room",
        position: [426.57, 201.27],
      },
      {
        name: "S-0E",
        type: "Room",
        position: [522.56, 356.76],
      },
      {
        name: "RR-W-0",
        type: "Room",
        position: [247.13, 327.68],
      },
      {
        name: "RR-M-0",
        type: "Room",
        position: [238.73, 306.8],
      },
      {
        name: "H-0B",
        type: "Room",
        position: [175.55, 134.86],
      },
      {
        name: "H-0E",
        type: "Room",
        position: [190.75, 214.86],
      },
      {
        name: "L-0C",
        type: "Room",
        position: [244.23, 267.16],
      },
      {
        name: "H-0D",
        type: "Room",
        position: [197.48, 299.9],
      },
      {
        name: "[SA]B-I4",
        type: "Room",
        position: [378.9, 347.09],
      },
      {
        name: "[SA]B-H7",
        type: "Room",
        position: [340.58, 232.29],
      },
      {
        name: "[SA]B-H6",
        type: "Room",
        position: [340.58, 270.55],
      },
      {
        name: "[SA]B-I6",
        type: "Room",
        position: [378.9, 270.55],
      },
      {
        name: "[SA]B-I7",
        type: "Room",
        position: [378.9, 232.29],
      },
      {
        name: "5",
        type: "Room",
        position: [234.54, 99.07],
      },
      {
        name: "5B",
        type: "Room",
        position: [193.48, 93.77],
      },
      {
        name: "5C",
        type: "Room",
        position: [212.61, 89.75],
      },
      {
        name: "5E",
        type: "Room",
        position: [232.09, 118.86],
      },
      {
        name: "5D",
        type: "Room",
        position: [251.21, 118.84],
      },
      {
        name: "5A",
        type: "Room",
        position: [193.58, 117.28],
      },
      {
        name: "M-0A",
        type: "Room",
        position: [90.51, 93.66],
      },
      {
        name: "3",
        type: "Room",
        position: [166.56, 102.56],
      },
      {
        name: "3A",
        type: "Room",
        position: [117.18, 115.28],
      },
      {
        name: "3B",
        type: "Room",
        position: [117.08, 91.72],
      },
      {
        name: "1",
        type: "Room",
        position: [92.22, 177.23],
      },
      {
        name: "1A",
        type: "Room",
        position: [81.02, 147.84],
      },
      {
        name: "1B",
        type: "Room",
        position: [80.91, 128.98],
      },
      {
        name: "1C",
        type: "Room",
        position: [81.22, 109.27],
      },
      {
        name: "37",
        type: "Room",
        position: [180.73, 176.95],
      },
      {
        name: "39",
        type: "Room",
        position: [179.31, 147.86],
      },
      {
        name: "4",
        type: "Room",
        position: [150.51, 148.73],
      },
      {
        name: "42",
        type: "Room",
        position: [211.62, 168.17],
      },
      {
        name: "7A",
        type: "Room",
        position: [288.43, 166.73],
      },
      {
        name: "9",
        type: "Room",
        position: [280.7, 186.78],
      },
      {
        name: "11",
        type: "Room",
        position: [278.01, 206.91],
      },
      {
        name: "13",
        type: "Room",
        position: [267.94, 224.02],
      },
      {
        name: "13A",
        type: "Room",
        position: [284.48, 224.02],
      },
      {
        name: "15",
        type: "Room",
        position: [278.58, 240.98],
      },
      {
        name: "10",
        type: "Room",
        position: [234.97, 214.19],
      },
      {
        name: "35",
        type: "Room",
        position: [176.5, 206.3],
      },
      {
        name: "33",
        type: "Room",
        position: [176.63, 225.27],
      },
      {
        name: "38",
        type: "Room",
        position: [214.43, 207.4],
      },
      {
        name: "36",
        type: "Room",
        position: [213.76, 224.64],
      },
      {
        name: "L-0A",
        type: "Room",
        position: [89.55, 215.35],
      },
      {
        name: "28",
        type: "Room",
        position: [147.64, 214.93],
      },
      {
        name: "26",
        type: "Room",
        position: [140.22, 262.71],
      },
      {
        name: "26A",
        type: "Room",
        position: [156.9, 244.14],
      },
      {
        name: "31",
        type: "Room",
        position: [180.92, 250.81],
      },
      {
        name: "29",
        type: "Room",
        position: [178.6, 281.47],
      },
      {
        name: "22",
        type: "Room",
        position: [158.55, 282.52],
      },
      {
        name: "24",
        type: "Room",
        position: [137.98, 281.34],
      },
      {
        name: "34",
        type: "Room",
        position: [210.94, 244.02],
      },
      {
        name: "32",
        type: "Room",
        position: [211.44, 261.63],
      },
      {
        name: "30",
        type: "Room",
        position: [212.25, 280.96],
      },
      {
        name: "26B",
        type: "Room",
        position: [161.31, 263.02],
      },
      {
        name: "27",
        type: "Room",
        position: [81.8, 272.29],
      },
      {
        name: "27E",
        type: "Room",
        position: [112.36, 246.43],
      },
      {
        name: "27A",
        type: "Room",
        position: [103.97, 262.44],
      },
      {
        name: "27B",
        type: "Room",
        position: [103.49, 282.31],
      },
      {
        name: "27C",
        type: "Room",
        position: [102.87, 299.84],
      },
      {
        name: "27D",
        type: "Room",
        position: [79.97, 322.99],
      },
      {
        name: "27F",
        type: "Room",
        position: [76.14, 337.8],
      },
      {
        name: "25",
        type: "Room",
        position: [116.33, 331.61],
      },
      {
        name: "25A",
        type: "Room",
        position: [133.2, 310.85],
      },
      {
        name: "23",
        type: "Room",
        position: [154.06, 310.64],
      },
      {
        name: "21",
        type: "Room",
        position: [174, 310.8],
      },
      {
        name: "M-0B",
        type: "Room",
        position: [200.14, 337.7],
      },
      {
        name: "M-0C",
        type: "Room",
        position: [161.71, 338.11],
      },
      {
        name: "M-0D",
        type: "Room",
        position: [188.11, 372.77],
      },
      {
        name: "M-0M",
        type: "Room",
        position: [379.06, 364.6],
      },
      {
        name: "19D",
        type: "Room",
        position: [430.65, 368.1],
      },
      {
        name: "19C",
        type: "Room",
        position: [437.05, 340.79],
      },
      {
        name: "M-0P",
        type: "Room",
        position: [315.44, 325.74],
      },
      {
        name: "M-0N",
        type: "Room",
        position: [348.79, 340.1],
      },
      {
        name: "M-0O",
        type: "Room",
        position: [348.58, 362.08],
      },
      {
        name: "M-0Q",
        type: "Room",
        position: [324.13, 369.59],
      },
      {
        name: "M-0K",
        type: "Room",
        position: [247.14, 344.24],
      },
      {
        name: "M-0E",
        type: "Room",
        position: [213.94, 362.37],
      },
      {
        name: "M-0F",
        type: "Room",
        position: [218.59, 375.49],
      },
      {
        name: "M-0G",
        type: "Room",
        position: [218.51, 391.47],
      },
      {
        name: "M-0H",
        type: "Room",
        position: [218.79, 401.39],
      },
      {
        name: "M-0I",
        type: "Room",
        position: [250.74, 382.27],
      },
      {
        name: "M-0J",
        type: "Room",
        position: [268.55, 370.33],
      },
      {
        name: "M-0L",
        type: "Room",
        position: [228.61, 343.34],
      },
      {
        name: "M-0R",
        type: "Room",
        position: [306.71, 370.48],
      },
      {
        name: "H-0C",
        type: "Room",
        position: [251.82, 202.55],
      },
      {
        name: "L-0B",
        type: "Room",
        position: [247.92, 141.81],
      },
      {
        name: "EL/M-0A",
        type: "Room",
        position: [227.44, 266.74],
      },
      {
        name: "19B",
        type: "Room",
        position: [431.01, 193.07],
      },
    ],
  },
  // {
  //   name: "Floor 1",
  //   svg: "./Library-1.svg",
  //   svgScale: 0.01,
  //   position: [0.15, -0.05],
  //   extrudedSections: ["A-WALL-FULL"],
  //   floorLayer: "A-FLOOR-OUTLINE",
  //   extrudeDepth: 30,
  //   locations: [
  //     {
  //       name: "101A",
  //       type: "Room",
  //       position: [352.49, 225.03],
  //     },
  //     {
  //       name: "111B",
  //       type: "Room",
  //       position: [496.54, 271.4],
  //     },
  //     {
  //       name: "111H",
  //       type: "Room",
  //       position: [549.66, 287.6],
  //     },
  //     {
  //       name: "111G",
  //       type: "Room",
  //       position: [545.64, 228.35],
  //     },
  //     {
  //       name: "111F",
  //       type: "Room",
  //       position: [499.23, 171.64],
  //     },
  //     {
  //       name: "111K",
  //       type: "Room",
  //       position: [540.15, 174.39],
  //     },
  //     {
  //       name: "111E",
  //       type: "Room",
  //       position: [505.07, 201.68],
  //     },
  //     {
  //       name: "111J",
  //       type: "Room",
  //       position: [495.09, 221.98],
  //     },
  //     {
  //       name: "110",
  //       type: "Room",
  //       position: [431.83, 278.75],
  //     },
  //     {
  //       name: "111A",
  //       type: "Room",
  //       position: [469.75, 221.2],
  //     },
  //     {
  //       name: "111C",
  //       type: "Room",
  //       position: [455.27, 202.88],
  //     },
  //     {
  //       name: "111D",
  //       type: "Room",
  //       position: [475, 202.88],
  //     },
  //     {
  //       name: "111I",
  //       type: "Room",
  //       position: [467.86, 271.86],
  //     },
  //     {
  //       name: "110C",
  //       type: "Room",
  //       position: [440.39, 214.15],
  //     },
  //     {
  //       name: "110B",
  //       type: "Room",
  //       position: [441.11, 231.28],
  //     },
  //     {
  //       name: "110A",
  //       type: "Room",
  //       position: [421.21, 225.16],
  //     },
  //     {
  //       name: "T-1A",
  //       type: "Room",
  //       position: [227.08, 240.02],
  //     },
  //     {
  //       name: "122",
  //       type: "Room",
  //       position: [104.03, 292.2],
  //     },
  //     {
  //       name: "121",
  //       type: "Room",
  //       position: [181.67, 326.55],
  //     },
  //     {
  //       name: "115",
  //       type: "Room",
  //       position: [236.01, 148.21],
  //     },
  //     {
  //       name: "117",
  //       type: "Room",
  //       position: [240.55, 110.23],
  //     },
  //     {
  //       name: "118",
  //       type: "Room",
  //       position: [241, 88.43],
  //     },
  //     {
  //       name: "116",
  //       type: "Room",
  //       position: [238.59, 130.67],
  //     },
  //     {
  //       name: "112",
  //       type: "Room",
  //       position: [276.16, 185.18],
  //     },
  //     {
  //       name: "112A",
  //       type: "Room",
  //       position: [283.37, 166.41],
  //     },
  //     {
  //       name: "113",
  //       type: "Room",
  //       position: [267.47, 166.41],
  //     },
  //     {
  //       name: "114",
  //       type: "Room",
  //       position: [264.16, 138.89],
  //     },
  //     {
  //       name: "101B",
  //       type: "Room",
  //       position: [256.98, 140.65],
  //     },
  //     {
  //       name: "120",
  //       type: "Room",
  //       position: [248.83, 318.38],
  //     },
  //     {
  //       name: "C-1A",
  //       type: "Room",
  //       position: [228.18, 282.11],
  //     },
  //     {
  //       name: "E-1",
  //       type: "Room",
  //       position: [228.11, 272.82],
  //     },
  //     {
  //       name: "C-1B",
  //       type: "Room",
  //       position: [409.44, 354.09],
  //     },
  //     {
  //       name: "109A",
  //       type: "Room",
  //       position: [493.26, 338.85],
  //     },
  //     {
  //       name: "106",
  //       type: "Room",
  //       position: [440.77, 339.77],
  //     },
  //     {
  //       name: "106B",
  //       type: "Room",
  //       position: [439.5, 362.25],
  //     },
  //     {
  //       name: "106C",
  //       type: "Room",
  //       position: [446.02, 385.65],
  //     },
  //     {
  //       name: "109B",
  //       type: "Room",
  //       position: [493.97, 358.5],
  //     },
  //     {
  //       name: "109",
  //       type: "Room",
  //       position: [550.47, 366.03],
  //     },
  //     {
  //       name: "107",
  //       type: "Room",
  //       position: [462.63, 339.17],
  //     },
  //     {
  //       name: "108A",
  //       type: "Room",
  //       position: [458.54, 367.96],
  //     },
  //     {
  //       name: "108",
  //       type: "Room",
  //       position: [477.64, 363.92],
  //     },
  //     {
  //       name: "101",
  //       type: "Room",
  //       position: [130.34, 174.95],
  //     },
  //     {
  //       name: "102",
  //       type: "Room",
  //       position: [336.37, 290.47],
  //     },
  //     {
  //       name: "111",
  //       type: "Room",
  //       position: [505.75, 240.97],
  //     },
  //     {
  //       name: "E-1B",
  //       type: "Room",
  //       position: [455.91, 223.83],
  //     },
  //     {
  //       name: "104",
  //       type: "Room",
  //       position: [381.4, 385.43],
  //     },
  //     {
  //       name: "S-1C",
  //       type: "Room",
  //       position: [93.43, 74.17],
  //     },
  //     {
  //       name: "S-1B",
  //       type: "Room",
  //       position: [56.69, 316.25],
  //     },
  //     {
  //       name: "S-1E",
  //       type: "Room",
  //       position: [522.61, 358.35],
  //     },
  //     {
  //       name: "S-1D",
  //       type: "Room",
  //       position: [428.47, 192.66],
  //     },
  //     {
  //       name: "S-1A",
  //       type: "Room",
  //       position: [272.29, 266.92],
  //     },
  //     {
  //       name: "[BG]100",
  //       type: "Room",
  //       position: [57.79, 347.73],
  //     },
  //     {
  //       name: "[CG]100",
  //       type: "Room",
  //       position: [71.11, 349.31],
  //     },
  //     {
  //       name: "[CG]101",
  //       type: "Room",
  //       position: [188.87, 377],
  //     },
  //     {
  //       name: "[CG]102",
  //       type: "Room",
  //       position: [242.57, 408.18],
  //     },
  //     {
  //       name: "[CG]103",
  //       type: "Room",
  //       position: [457.29, 186.73],
  //     },
  //     {
  //       name: "EL-1A",
  //       type: "Room",
  //       position: [226.86, 256.67],
  //     },
  //     {
  //       name: "[XX]101",
  //       type: "Room",
  //       position: [434.93, 331.67],
  //     },
  //     {
  //       name: "EL-1B",
  //       type: "Room",
  //       position: [528.83, 301.18],
  //     },
  //     {
  //       name: "M-1A",
  //       type: "Room",
  //       position: [228.14, 366.85],
  //     },
  //     {
  //       name: "RR-M-1",
  //       type: "Room",
  //       position: [419.6, 374.59],
  //     },
  //     {
  //       name: "RR-W-1",
  //       type: "Room",
  //       position: [394.16, 374.59],
  //     },
  //     {
  //       name: "101C",
  //       type: "Room",
  //       position: [398.73, 222.09],
  //     },
  //   ],
  // },
  // {
  //   name: "Floor 2",
  //   svg: "./Library-2.svg",
  //   svgScale: 0.01,
  //   position: [0.21, 0],
  //   extrudedSections: ["A-WALL-FULL"],
  //   floorLayer: "A-FLOOR-OUTLINE",
  //   extrudeDepth: 30,
  //   locations: [
  //     {
  //       name: "T-2B",
  //       type: "Room",
  //       position: [227.04, 240.89],
  //     },
  //     {
  //       name: "204",
  //       type: "Room",
  //       position: [487.58, 319.83],
  //     },
  //     {
  //       name: "203",
  //       type: "Room",
  //       position: [482.01, 338.73],
  //     },
  //     {
  //       name: "208",
  //       type: "Room",
  //       position: [276.81, 139.04],
  //     },
  //     {
  //       name: "206",
  //       type: "Room",
  //       position: [275.73, 187.74],
  //     },
  //     {
  //       name: "207",
  //       type: "Room",
  //       position: [275.57, 169.99],
  //     },
  //     {
  //       name: "205",
  //       type: "Room",
  //       position: [425.08, 219.18],
  //     },
  //     {
  //       name: "C-2A",
  //       type: "Room",
  //       position: [227.23, 322.4],
  //     },
  //     {
  //       name: "205B",
  //       type: "Room",
  //       position: [455.74, 207.7],
  //     },
  //     {
  //       name: "209",
  //       type: "Room",
  //       position: [271.12, 375.57],
  //     },
  //     {
  //       name: "E-2A",
  //       type: "Room",
  //       position: [227.75, 271.88],
  //     },
  //     {
  //       name: "EL-2A",
  //       type: "Room",
  //       position: [226.71, 256.96],
  //     },
  //     {
  //       name: "S-2C",
  //       type: "Room",
  //       position: [81.4, 70.2],
  //     },
  //     {
  //       name: "S-2B",
  //       type: "Room",
  //       position: [58.37, 316.06],
  //     },
  //     {
  //       name: "S-2E",
  //       type: "Room",
  //       position: [522.75, 357.02],
  //     },
  //     {
  //       name: "S-2D",
  //       type: "Room",
  //       position: [428.29, 193.78],
  //     },
  //     {
  //       name: "S-2A",
  //       type: "Room",
  //       position: [278.85, 278.92],
  //     },
  //     {
  //       name: "L-2",
  //       type: "Room",
  //       position: [247.92, 278.25],
  //     },
  //     {
  //       name: "T-2A",
  //       type: "Room",
  //       position: [229.48, 282.04],
  //     },
  //     {
  //       name: "M-2A",
  //       type: "Room",
  //       position: [455.83, 225.63],
  //     },
  //     {
  //       name: "[XX]201",
  //       type: "Room",
  //       position: [284.11, 265.34],
  //     },
  //     {
  //       name: "[SA]202",
  //       type: "Room",
  //       position: [520.44, 309.89],
  //     },
  //     {
  //       name: "[BG]200",
  //       type: "Room",
  //       position: [226.03, 353.69],
  //     },
  //     {
  //       name: "EL-2B",
  //       type: "Room",
  //       position: [529.11, 301.18],
  //     },
  //     {
  //       name: "RR-M-2",
  //       type: "Room",
  //       position: [241.22, 307.84],
  //     },
  //     {
  //       name: "RR-2",
  //       type: "Room",
  //       position: [250.11, 328.32],
  //     },
  //     {
  //       name: "FPS-2",
  //       type: "Room",
  //       position: [292.21, 290.26],
  //     },
  //     {
  //       name: "[SA]2-B10",
  //       type: "Room",
  //       position: [110.96, 118.4],
  //     },
  //     {
  //       name: "[SA]2-C10",
  //       type: "Room",
  //       position: [149.23, 118.4],
  //     },
  //     {
  //       name: "[SA]2-D10",
  //       type: "Room",
  //       position: [187.49, 118.4],
  //     },
  //     {
  //       name: "[SA]2-E10",
  //       type: "Room",
  //       position: [225.77, 118.4],
  //     },
  //     {
  //       name: "[SA]2-B9",
  //       type: "Room",
  //       position: [111.03, 156.67],
  //     },
  //     {
  //       name: "[SA]2-C9",
  //       type: "Room",
  //       position: [149.3, 156.67],
  //     },
  //     {
  //       name: "[SA]2-D9",
  //       type: "Room",
  //       position: [187.56, 156.67],
  //     },
  //     {
  //       name: "[SA]2-E9",
  //       type: "Room",
  //       position: [225.84, 156.67],
  //     },
  //     {
  //       name: "[SA]2-B8",
  //       type: "Room",
  //       position: [111.03, 194.94],
  //     },
  //     {
  //       name: "[SA]2-C8",
  //       type: "Room",
  //       position: [149.29, 194.94],
  //     },
  //     {
  //       name: "[SA]2-D8",
  //       type: "Room",
  //       position: [187.56, 194.94],
  //     },
  //     {
  //       name: "[SA]2-E8",
  //       type: "Room",
  //       position: [225.84, 194.94],
  //     },
  //     {
  //       name: "[SA]2-H8",
  //       type: "Room",
  //       position: [340.63, 194.94],
  //     },
  //     {
  //       name: "[SA]2-I8",
  //       type: "Room",
  //       position: [378.94, 194.94],
  //     },
  //     {
  //       name: "[SA]2-B7",
  //       type: "Room",
  //       position: [111.03, 233.21],
  //     },
  //     {
  //       name: "[SA]2-C7",
  //       type: "Room",
  //       position: [149.29, 233.21],
  //     },
  //     {
  //       name: "[SA]2-D7",
  //       type: "Room",
  //       position: [187.56, 233.21],
  //     },
  //     {
  //       name: "[SA]2-F7",
  //       type: "Room",
  //       position: [264.11, 233.21],
  //     },
  //     {
  //       name: "[SA]2-H7",
  //       type: "Room",
  //       position: [340.63, 233.21],
  //     },
  //     {
  //       name: "[SA]2-I7",
  //       type: "Room",
  //       position: [378.94, 233.21],
  //     },
  //     {
  //       name: "[SA]2-L8",
  //       type: "Room",
  //       position: [493.72, 194.94],
  //     },
  //     {
  //       name: "[SA]2-L7",
  //       type: "Room",
  //       position: [493.72, 233.21],
  //     },
  //     {
  //       name: "[SA]2-B6",
  //       type: "Room",
  //       position: [111.03, 271.47],
  //     },
  //     {
  //       name: "[SA]2-C6",
  //       type: "Room",
  //       position: [149.29, 271.47],
  //     },
  //     {
  //       name: "[SA]2-D6",
  //       type: "Room",
  //       position: [187.56, 271.47],
  //     },
  //     {
  //       name: "[SA]2-L6",
  //       type: "Room",
  //       position: [493.72, 271.47],
  //     },
  //     {
  //       name: "[SA]2-H6",
  //       type: "Room",
  //       position: [340.63, 271.47],
  //     },
  //     {
  //       name: "[SA]2-I6",
  //       type: "Room",
  //       position: [378.94, 271.47],
  //     },
  //     {
  //       name: "[SA]2-J6",
  //       type: "Room",
  //       position: [417.18, 271.47],
  //     },
  //     {
  //       name: "[SA]2-K6",
  //       type: "Room",
  //       position: [455.43, 271.47],
  //     },
  //     {
  //       name: "[SA]2-B5",
  //       type: "Room",
  //       position: [111.03, 309.74],
  //     },
  //     {
  //       name: "[SA]2-C5",
  //       type: "Room",
  //       position: [149.29, 309.74],
  //     },
  //     {
  //       name: "[SA]2-D5",
  //       type: "Room",
  //       position: [187.56, 309.74],
  //     },
  //     {
  //       name: "[SA]2-H5",
  //       type: "Room",
  //       position: [340.63, 309.74],
  //     },
  //     {
  //       name: "[SA]2-I5",
  //       type: "Room",
  //       position: [378.94, 309.74],
  //     },
  //     {
  //       name: "[SA]2-J5",
  //       type: "Room",
  //       position: [417.18, 309.74],
  //     },
  //     {
  //       name: "[SA]2-H4",
  //       type: "Room",
  //       position: [340.62, 348.01],
  //     },
  //     {
  //       name: "[SA]2-I4",
  //       type: "Room",
  //       position: [378.94, 348.01],
  //     },
  //     {
  //       name: "[SA]2-J4",
  //       type: "Room",
  //       position: [417.18, 348.01],
  //     },
  //     {
  //       name: "[SA]2-G7",
  //       type: "Room",
  //       position: [302.36, 233.21],
  //     },
  //     {
  //       name: "210",
  //       type: "Room",
  //       position: [552.92, 178.15],
  //     },
  //     {
  //       name: "201",
  //       type: "Room",
  //       position: [248.59, 216.99],
  //     },
  //     {
  //       name: "[SA]2-M6",
  //       type: "Room",
  //       position: [531.96, 271.47],
  //     },
  //     {
  //       name: "202",
  //       type: "Room",
  //       position: [392.55, 254.48],
  //     },
  //   ],
  // },
  // {
  //   name: "Floor 3",
  //   svg: "./Library-3.svg",
  //   svgScale: 0.01,
  //   position: [-0.05, 0.17],
  //   extrudedSections: ["A-WALL-FULL"],
  //   floorLayer: "A-FLOOR-OUTLINE",
  //   extrudeDepth: 30,
  //   locations: [
  //     {
  //       name: "S-3C",
  //       type: "Room",
  //       position: [82.15, 78.27],
  //     },
  //     {
  //       name: "S-3B",
  //       type: "Room",
  //       position: [60.25, 316.06],
  //     },
  //     {
  //       name: "S-3E",
  //       type: "Room",
  //       position: [522.61, 357.3],
  //     },
  //     {
  //       name: "S-3D",
  //       type: "Room",
  //       position: [428.05, 194.66],
  //     },
  //     {
  //       name: "S-3A",
  //       type: "Room",
  //       position: [278.71, 278.92],
  //     },
  //     {
  //       name: "EL-3A",
  //       type: "Room",
  //       position: [226.71, 256.67],
  //     },
  //     {
  //       name: "L-3",
  //       type: "Room",
  //       position: [247.66, 267.11],
  //     },
  //     {
  //       name: "301",
  //       type: "Room",
  //       position: [276.06, 234.93],
  //     },
  //     {
  //       name: "314",
  //       type: "Room",
  //       position: [276.43, 128.87],
  //     },
  //     {
  //       name: "312",
  //       type: "Room",
  //       position: [276.83, 168.16],
  //     },
  //     {
  //       name: "313",
  //       type: "Room",
  //       position: [276.83, 148.35],
  //     },
  //     {
  //       name: "315A",
  //       type: "Room",
  //       position: [246.52, 94.78],
  //     },
  //     {
  //       name: "315B",
  //       type: "Room",
  //       position: [227.36, 94.78],
  //     },
  //     {
  //       name: "311",
  //       type: "Room",
  //       position: [277.26, 187.83],
  //     },
  //     {
  //       name: "310",
  //       type: "Room",
  //       position: [276.09, 208.8],
  //     },
  //     {
  //       name: "C-3B",
  //       type: "Room",
  //       position: [495.88, 309.31],
  //     },
  //     {
  //       name: "306",
  //       type: "Room",
  //       position: [493.35, 294.66],
  //     },
  //     {
  //       name: "307",
  //       type: "Room",
  //       position: [468.21, 296.85],
  //     },
  //     {
  //       name: "305",
  //       type: "Room",
  //       position: [488.71, 322.57],
  //     },
  //     {
  //       name: "304",
  //       type: "Room",
  //       position: [460.51, 324.18],
  //     },
  //     {
  //       name: "309",
  //       type: "Room",
  //       position: [438.63, 221.52],
  //     },
  //     {
  //       name: "308",
  //       type: "Room",
  //       position: [488, 220.47],
  //     },
  //     {
  //       name: "E-3A",
  //       type: "Room",
  //       position: [228.13, 271.76],
  //     },
  //     {
  //       name: "T-3B",
  //       type: "Room",
  //       position: [226.73, 240.53],
  //     },
  //     {
  //       name: "C-3A",
  //       type: "Room",
  //       position: [227.04, 322.01],
  //     },
  //     {
  //       name: "T-3A",
  //       type: "Room",
  //       position: [229.34, 282.18],
  //     },
  //     {
  //       name: "301B",
  //       type: "Room",
  //       position: [78.29, 356.81],
  //     },
  //     {
  //       name: "301A",
  //       type: "Room",
  //       position: [244.34, 74.71],
  //     },
  //     {
  //       name: "301C",
  //       type: "Room",
  //       position: [61.53, 252.98],
  //     },
  //     {
  //       name: "301D",
  //       type: "Room",
  //       position: [61.54, 94.27],
  //     },
  //     {
  //       name: "301E",
  //       type: "Room",
  //       position: [161.13, 75.7],
  //     },
  //     {
  //       name: "[XX]301",
  //       type: "Room",
  //       position: [283.97, 265.24],
  //     },
  //     {
  //       name: "H-3",
  //       type: "Room",
  //       position: [474.2, 346.4],
  //     },
  //     {
  //       name: "[BG]300",
  //       type: "Room",
  //       position: [59.99, 67.05],
  //     },
  //     {
  //       name: "EL-3B",
  //       type: "Room",
  //       position: [528.83, 300.89],
  //     },
  //     {
  //       name: "RR-M-3",
  //       type: "Room",
  //       position: [243.86, 304.47],
  //     },
  //     {
  //       name: "RR-W-3",
  //       type: "Room",
  //       position: [243.86, 325.2],
  //     },
  //     {
  //       name: "M-3A",
  //       type: "Room",
  //       position: [455.1, 224.78],
  //     },
  //     {
  //       name: "315",
  //       type: "Room",
  //       position: [239.26, 113.03],
  //     },
  //     {
  //       name: "316",
  //       type: "Room",
  //       position: [200.92, 109.08],
  //     },
  //     {
  //       name: "317",
  //       type: "Room",
  //       position: [201.49, 199.57],
  //     },
  //     {
  //       name: "[SA]3-B10",
  //       type: "Room",
  //       position: [110.82, 118.4],
  //     },
  //     {
  //       name: "[SA]3-B9",
  //       type: "Room",
  //       position: [110.89, 156.67],
  //     },
  //     {
  //       name: "[SA]3-B8",
  //       type: "Room",
  //       position: [110.88, 194.94],
  //     },
  //     {
  //       name: "[SA]3-B7",
  //       type: "Room",
  //       position: [110.88, 233.21],
  //     },
  //     {
  //       name: "[SA]3-B6",
  //       type: "Room",
  //       position: [110.88, 271.47],
  //     },
  //     {
  //       name: "[SA]3-B5",
  //       type: "Room",
  //       position: [110.88, 309.74],
  //     },
  //     {
  //       name: "[SA]3-A9",
  //       type: "Room",
  //       position: [72.63, 156.67],
  //     },
  //     {
  //       name: "[SA]3-A8",
  //       type: "Room",
  //       position: [72.63, 194.94],
  //     },
  //     {
  //       name: "[SA]3-C10",
  //       type: "Room",
  //       position: [149.08, 118.4],
  //     },
  //     {
  //       name: "[SA]3-C9",
  //       type: "Room",
  //       position: [149.15, 156.67],
  //     },
  //     {
  //       name: "[SA]3-C8",
  //       type: "Room",
  //       position: [149.15, 194.94],
  //     },
  //     {
  //       name: "[SA]3-C7",
  //       type: "Room",
  //       position: [149.15, 233.21],
  //     },
  //     {
  //       name: "[SA]3-C6",
  //       type: "Room",
  //       position: [149.15, 271.47],
  //     },
  //     {
  //       name: "[SA]3-C5",
  //       type: "Room",
  //       position: [149.15, 309.74],
  //     },
  //     {
  //       name: "[SA]3-C4",
  //       type: "Room",
  //       position: [149.15, 348.01],
  //     },
  //     {
  //       name: "[SA]3-D7",
  //       type: "Room",
  //       position: [187.42, 233.21],
  //     },
  //     {
  //       name: "[SA]3-D6",
  //       type: "Room",
  //       position: [187.42, 271.47],
  //     },
  //     {
  //       name: "[SA]3-D5",
  //       type: "Room",
  //       position: [187.42, 309.74],
  //     },
  //     {
  //       name: "[SA]3-D4",
  //       type: "Room",
  //       position: [187.42, 348.01],
  //     },
  //     {
  //       name: "[SA]3-317",
  //       type: "Room",
  //       position: [230.39, 155.7],
  //     },
  //     {
  //       name: "[SA]3-F7",
  //       type: "Room",
  //       position: [263.96, 233.21],
  //     },
  //     {
  //       name: "[SA]3-H7",
  //       type: "Room",
  //       position: [340.49, 233.21],
  //     },
  //     {
  //       name: "[SA]3-H8",
  //       type: "Room",
  //       position: [340.49, 194.94],
  //     },
  //     {
  //       name: "[SA]3-H5",
  //       type: "Room",
  //       position: [340.49, 309.74],
  //     },
  //     {
  //       name: "[SA]3-I7",
  //       type: "Room",
  //       position: [378.8, 233.21],
  //     },
  //     {
  //       name: "[SA]3-I8",
  //       type: "Room",
  //       position: [378.8, 194.94],
  //     },
  //     {
  //       name: "[SA]3-I5",
  //       type: "Room",
  //       position: [378.8, 309.74],
  //     },
  //     {
  //       name: "[SA]3-J7",
  //       type: "Room",
  //       position: [417.04, 233.21],
  //     },
  //     {
  //       name: "[SA]3-J5",
  //       type: "Room",
  //       position: [417.04, 309.74],
  //     },
  //     {
  //       name: "[SA]3-L6",
  //       type: "Room",
  //       position: [493.57, 271.47],
  //     },
  //     {
  //       name: "302",
  //       type: "Room",
  //       position: [391.48, 248.45],
  //     },
  //     {
  //       name: "303",
  //       type: "Room",
  //       position: [392.01, 294.12],
  //     },
  //     {
  //       name: "FPS-3",
  //       type: "Room",
  //       position: [292.07, 290.26],
  //     },
  //   ],
  // },
  // {
  //   name: "Roof",
  //   svg: "./Library-4.svg",
  //   svgScale: 0.01,
  //   position: [0.2, -0.25],
  //   extrudedSections: [],
  //   floorLayer: "",
  //   extrudeDepth: 0,
  //   locations: [],
  // },
];

// Initialize canvas and renderer, enable antialiasing
const canvas = document.querySelector("#c");
const renderer = new THREE.WebGLRenderer({ antialias: true, canvas });

// Define camera and its properties
const fov = 75;
const aspect = 2;
const near = 0.01;
const far = 1000;
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

// Initial camera position - away from origin, looking at origin
camera.position.y = 3;
camera.position.z = 3;
camera.lookAt(0, 0, 0);

// Define scene
const scene = new THREE.Scene();

scene.background = new THREE.Color(0xcfe2e3);

// Define orbit controls - render scene whenever camera moves
const controls = new OrbitControls(camera, renderer.domElement);
controls.addEventListener("change", render);
controls.screenSpacePanning = true;

// Render when the window is resized
window.addEventListener("resize", render);

// White directional lighting
const directionalLightColor = 0xffffff;
const directionalLightIntensity = 2.5;
const directionalLight = new THREE.DirectionalLight(
  directionalLightColor,
  directionalLightIntensity
);
directionalLight.position.set(-1, 2, 4);
scene.add(directionalLight);

// Soft white ambient light
const ambientLight = new THREE.AmbientLight(0xcfe2e3);
scene.add(ambientLight);

// let pointMaterial = new THREE.PointsMaterial({
//   size: 0.1,
//   map: createCanvasCircleMaterial(0x000000, 256),
//   transparent: true,
//   depthWrite: false,
// });

// const dotGeometry = new THREE.BufferGeometry();
// dotGeometry.setAttribute(
//   "position",
//   new THREE.BufferAttribute(new Float32Array([0, 0, 0]), 3)
// );

// let point = new THREE.Points(dotGeometry, pointMaterial);

// scene.add(point);

// Load floors
loadFloors(floorProperties)
  .then((floorGroups) => sortFloorsByName(floorGroups)) // Sort floors so they aren't out of order in the UI
  .then((floorGroups) => {
    populateFloorListUI(floorGroups); // Populate list of floors with enable/disable checkboxes
  });

function render() {
  // Check if window has been resized and update camera accordingly
  if (resizeRendererToDisplaySize(renderer)) {
    camera.aspect = canvas.clientWidth / canvas.clientHeight;
    camera.updateProjectionMatrix();
  }

  renderer.render(scene, camera); // Render scene
}

function resizeRendererToDisplaySize(renderer) {
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;
  const needResize = canvas.width !== width || canvas.height !== height; // Check if canvas dimensions do not match client dimensions
  if (needResize) {
    renderer.setSize(width, height, false);
  }
  return needResize;
}

// Load the floor SVGs, create meshes, and return groups out of them
function loadFloors(floorProperties) {
  // Return promise so UI doesn't load until finished
  return new Promise((resolve, reject) => {
    const loader = new SVGLoader();

    let floorGroups = [];

    floorProperties.forEach((floorProperty, i, arr) => {
      const geometries = {
        extruded: {}, // Object for extruded sections geometries
        nonExtruded: { other: [] }, // Object for non-extruded sections geometries - for now, all in one set of geometries
        floorGeometries: [], // Array of geometries for floor and ceiling
      };

      // For each extruded section in the floor, create two arrays of geometries for that section
      floorProperty.extrudedSections.forEach((el) => {
        geometries.extruded[el] = {
          pathGeometries: [], // One array for the SVG paths of the section
          extrudeGeometries: [], // One array for the extruded mesh portion of the section
        };
      });

      loader.load(
        floorProperty.svg,
        function (data) {
          // Loop through paths in svg data
          for (const path of data.paths) {
            const fillColor = path.userData.style.fill; // Get fill color of SVG path

            // Get parent group id to identify the current section of the SVG
            const pathNode = path.userData.node;
            const parentGroup = pathNode.parentElement.parentElement;
            const id = parentGroup.id;

            if (fillColor !== undefined && fillColor !== "none") {
              // If SVG path is not empty
              // Create shapes from filled SVG shapes
              const shapes = SVGLoader.createShapes(path);

              for (const shape of shapes) {
                // Create geometry from SVG shape
                const pathGeometry = new THREE.ShapeGeometry(
                  shape
                ).toNonIndexed();

                // Check if current path section should be extruded
                if (floorProperty.extrudedSections.includes(id)) {
                  // Add geometry to extruded geometries paths array
                  geometries.extruded[id].pathGeometries.push(pathGeometry);
                } else if (
                  floorProperty.floorLayer.layer.length > 0 &&
                  floorProperty.floorLayer.layer == id
                ) {
                  // Add floor geometry to array
                  geometries.floorGeometries.push(pathGeometry);
                } else {
                  geometries.nonExtruded.other.push(pathGeometry); // Add geometry to non-extruded geometries array
                }
              }
            }

            const strokeColor = path.userData.style.stroke; // Get stroke color of SVG path

            if (strokeColor !== undefined && strokeColor !== "none") {
              // If stroke is not empty
              for (const subPath of path.subPaths) {
                // Create geometry from subpath
                const geometry = SVGLoader.pointsToStroke(
                  subPath.getPoints(),
                  path.userData.style
                );

                if (geometry) {
                  // If geometry exists
                  // Check if current path section should be extruded
                  if (floorProperty.extrudedSections.includes(id)) {
                    geometries.extruded[id].pathGeometries.push(geometry);
                    // Add geometry to extruded geometries array
                  } else if (
                    floorProperty.floorLayer.length > 0 &&
                    floorProperty.floorLayer == id
                  ) {
                    // Add floor geometry to array
                    geometries.floorGeometries.push(geometry);
                  } else {
                    geometries.nonExtruded.other.push(geometry); // Add geometry to non-extruded geometries array
                  }
                }
              }
            }

            const shapes = SVGLoader.createShapes(path);

            shapes.forEach((shape, j) => {
              if (floorProperty.extrudedSections.includes(id)) {
                // Create extruded geometry
                const extrudedGeometry = new THREE.ExtrudeGeometry(shape, {
                  depth: floorProperty.extrudeDepth,
                  bevelEnabled: false,
                });
                extrudedGeometry.computeVertexNormals();

                // Add geometry to extruded geometries meshes array
                geometries.extruded[id].extrudeGeometries.push(
                  extrudedGeometry
                );
              }
            });
          }

          // Create Group for the floor
          const floorGroup = new THREE.Group();
          floorGroup.name = floorProperty.name;

          let pathMaterial = new THREE.MeshStandardMaterial({
            color: 0x000000,
            side: THREE.DoubleSide,
          });

          // if (i > 0) {
          //   pathMaterial = new THREE.MeshStandardMaterial({
          //     color: 0x34cfeb,
          //     side: THREE.DoubleSide,
          //   });
          // }

          const extrudeMaterial = new THREE.MeshPhongMaterial({
            //   color: 0x7d7d7d,
            //   transparent: true,
            //   depthWrite: false,
            opacity: 0.5,
          });

          floorProperty.extrudedSections.forEach((id) => {
            // Loop through each extruded section
            // Merge array of extruded geometries into single geometry for performance
            const extrudeGeometry = BufferGeometryUtils.mergeGeometries(
              geometries.extruded[id].extrudeGeometries
            );
            extrudeGeometry.computeBoundingSphere();

            // Merge array of extruded path geometries into single geometry
            const pathGeometry = BufferGeometryUtils.mergeGeometries(
              geometries.extruded[id].pathGeometries
            );
            pathGeometry.computeBoundingSphere();

            // Create meshes from extruded geometry and path geometry
            const extrudeMesh = new THREE.Mesh(
              extrudeGeometry,
              extrudeMaterial
            );
            const pathMesh = new THREE.Mesh(pathGeometry, pathMaterial);

            // Scale meshes to appropriate size
            extrudeMesh.scale.multiplyScalar(floorProperty.svgScale);
            extrudeMesh.scale.y *= -1;

            pathMesh.scale.multiplyScalar(floorProperty.svgScale);
            pathMesh.position.z = floorProperty.extrudeDepth / 100 + 1 / 100; // Shift path mesh up to be at top of extrusion
            pathMesh.scale.y *= -1;

            floorGroup.add(extrudeMesh);
            floorGroup.add(pathMesh);
          });

          // Merge array of geometries for non-extruded sections
          const otherPathGeometry = BufferGeometryUtils.mergeGeometries(
            geometries.nonExtruded.other
          );
          otherPathGeometry.computeBoundingSphere();

          // Create mesh from path geometry
          const otherPathMesh = new THREE.Mesh(otherPathGeometry, pathMaterial);
          otherPathMesh.scale.multiplyScalar(floorProperty.svgScale);
          otherPathMesh.scale.y *= -1;
          otherPathMesh.position.z += 1 / 100;

          floorGroup.add(otherPathMesh);

          if (
            geometries.floorGeometries.length > 0 &&
            floorProperty.floorLayer.enabled
          ) {
            // Merge array of floor geometries
            const floorGeometry = BufferGeometryUtils.mergeGeometries(
              geometries.floorGeometries
            );
            floorGeometry.computeBoundingSphere();

            // Create mesh from floor geometry
            const floorMesh = new THREE.Mesh(floorGeometry, extrudeMaterial);
            floorMesh.scale.multiplyScalar(floorProperty.svgScale);
            floorMesh.scale.y *= -1;

            floorGroup.add(floorMesh);

            const upperFloorMesh = floorMesh.clone();
            upperFloorMesh.position.z += floorProperty.extrudeDepth / 100;

            floorGroup.add(upperFloorMesh);
          }

          // Group for location meshes
          let locationGroup = new THREE.Group();

          // Draw points at each location
          let pointMaterial = new THREE.PointsMaterial({
            // Material for points
            size: 0.05,
            map: createCanvasCircleMaterial(0x000000, 256),
            transparent: true,
            depthWrite: false,
          });

          floorProperty.locations.forEach((location) => {
            // Point geometry
            const dotGeometry = new THREE.BufferGeometry();

            // Position point based off of location position in floorProperties
            dotGeometry.setAttribute(
              "position",
              new THREE.BufferAttribute(
                new Float32Array([
                  location.position[0] * floorProperty.svgScale,
                  location.position[1] * -1 * floorProperty.svgScale,
                  0,
                ]),
                3
              )
            );

            let point = new THREE.Points(dotGeometry, pointMaterial);

            locationGroup.add(point);
          });

          // Add location group to floorGroup
          floorGroup.add(locationGroup);

          floorGroup.rotateX(-Math.PI / 2); // Rotate group so it is horizontal

          // Get bounding box of group
          const boundingBox = new THREE.Box3().setFromObject(floorGroup);
          const size = boundingBox.getSize(new THREE.Vector3());

          // Center floor group based on bounding box
          floorGroup.position.x = -size.x / 2;
          floorGroup.position.z = -size.z / 2;

          // Shift floor group to align with others
          floorGroup.position.x += floorProperty.position[0];
          floorGroup.position.z -= floorProperty.position[1];

          // Change y position so levels are stacked on top of each other
          if (i > 0) {
            let sum = 0;
            for (let j = 0; j < i; j++) {
              sum += arr[j].extrudeDepth / 100 + 3 / 100;
            }
            floorGroup.position.y = sum;
          }

          // Add group to scene and to array for later use
          scene.add(floorGroup);
          floorGroups.push(floorGroup);

          // Resolve promise if all floors have been loaded and added to the array
          if (floorGroups.length == arr.length) {
            resolve(floorGroups);
          }

          render();
        },
        function (xhr) {
          console.log("SVG " + (xhr.loaded / xhr.total) * 100 + "% loaded");
        },
        function (error) {
          console.log("An error happened: " + error);
        }
      );
    });
  });
  // return floorGroups;
}

function createCanvasCircleMaterial(color, size) {
  var matCanvas = document.createElement("canvas");
  matCanvas.width = matCanvas.height = size;
  var matContext = matCanvas.getContext("2d");
  // Create texture object from canvas.
  var texture = new THREE.Texture(matCanvas);
  // Draw a circle
  var center = size / 2;
  matContext.beginPath();
  matContext.arc(center, center, size / 2, 0, 2 * Math.PI, false);
  matContext.closePath();
  matContext.fillStyle = color;
  matContext.fill();
  // Need to set needsUpdate
  texture.needsUpdate = true;
  // Return a texture made from the canvas
  return texture;
}

// Sort floors by name so they are in the correct order in UI
function sortFloorsByName(floorList) {
  let sortedGroups = floorList.slice().sort(function (a, b) {
    // Sorted based on the order of "name" properties in the floorProperties array
    let indexOfA = floorProperties.findIndex((elem) => elem["name"] == a.name);
    let indexOfB = floorProperties.findIndex((elem) => elem["name"] == b.name);
    return indexOfA - indexOfB;
  });

  return sortedGroups;
}

// Populate list of floors with enable/disable checkboxes
function populateFloorListUI(floorList) {
  const ul = document.getElementById("floor-list");

  // For each floor, add an element to the list
  floorList.forEach((floor) => {
    let li = document.createElement("li");

    // Add checkbox to list element to enable/disable floor
    let checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.checked = true;
    li.appendChild(checkbox);

    checkbox.onclick = () => {
      // Change visibility of floor Group based on status of checkbox
      if (checkbox.checked) floor.visible = true;
      else floor.visible = false;
      render();
    };

    // Append list element to list
    li.appendChild(document.createTextNode(floor.name));
    ul.appendChild(li);
  });
}
