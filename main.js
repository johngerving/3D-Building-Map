import * as THREE from "three";
import { SVGLoader } from "three/addons/loaders/SVGLoader.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import * as BufferGeometryUtils from "three/addons/utils/BufferGeometryUtils.js";
import {
  CSS2DRenderer,
  CSS2DObject,
} from "three/addons/renderers/CSS2DRenderer.js";

// Floor properties - defines name of floor, location of svg, which sections are extruded, and the locations on the floor
const floorProperties = [
  {
    name: "Basement",
    svg: "./Library-B.svg",
    svgScale: 0.04,
    position: [0, 0],
    extrudedSections: ["A-WALL-FULL"], //["A-WALL-FULL"],
    floorLayer: { layer: "A-FLOOR-OUTLINE", enabled: false },
    excludedSections: [],
    extrudeDepth: 0,
    locations: [
      {
        name: "19A",
        type: "Room",
        position: [100.19, 55.62],
      },
      {
        name: "40",
        type: "Room",
        position: [49.06, 43.1],
      },
      {
        name: "19",
        type: "Room",
        position: [82.59, 56.17],
      },
      {
        name: "17",
        type: "Room",
        position: [73.27, 62.63],
      },
      {
        name: "7",
        type: "Room",
        position: [63.27, 38.79],
      },
      {
        name: "2",
        type: "Room",
        position: [34.96, 41.13],
      },
      {
        name: "T-0A",
        type: "Room",
        position: [53.58, 55.91],
      },
      {
        name: "8",
        type: "Room",
        position: [54.61, 40.92],
      },
      {
        name: "6",
        type: "Room",
        position: [54.02, 34.34],
      },
      {
        name: "44",
        type: "Room",
        position: [48.69, 34.28],
      },
      {
        name: "S-0C",
        type: "Room",
        position: [21.72, 17.68],
      },
      {
        name: "S-0B",
        type: "Room",
        position: [13.54, 73.39],
      },
      {
        name: "S-0A",
        type: "Room",
        position: [63.36, 61.98],
      },
      {
        name: "64",
        type: "Room",
        position: [122.5, 74.02],
      },
      {
        name: "EL-0A",
        type: "Room",
        position: [52.59, 59.5],
      },
      {
        name: "C-0A",
        type: "Room",
        position: [52.54, 74.84],
      },
      {
        name: "C-0B",
        type: "Room",
        position: [60.69, 35.07],
      },
      {
        name: "[BG]01",
        type: "Room",
        position: [15.54, 18.27],
      },
      {
        name: "[BG]02",
        type: "Room",
        position: [122.91, 67.6],
      },
      {
        name: "[CG]01",
        type: "Room",
        position: [13.02, 14.46],
      },
      {
        name: "[CG]02",
        type: "Room",
        position: [62.88, 27.21],
      },
      {
        name: "H-0A",
        type: "Room",
        position: [28.63, 56.76],
      },
      {
        name: "S-0D",
        type: "Room",
        position: [99.14, 46.74],
      },
      {
        name: "S-0E",
        type: "Room",
        position: [121.47, 82.9],
      },
      {
        name: "RR-W-0",
        type: "Room",
        position: [57.41, 76.14],
      },
      {
        name: "RR-M-0",
        type: "Room",
        position: [55.45, 71.29],
      },
      {
        name: "H-0B",
        type: "Room",
        position: [40.76, 31.29],
      },
      {
        name: "H-0E",
        type: "Room",
        position: [44.29, 49.9],
      },
      {
        name: "L-0C",
        type: "Room",
        position: [56.73, 62.07],
      },
      {
        name: "H-0D",
        type: "Room",
        position: [45.86, 69.68],
      },
      {
        name: "[SA]B-I4",
        type: "Room",
        position: [88.05, 80.66],
      },
      {
        name: "[SA]B-H7",
        type: "Room",
        position: [79.14, 53.95],
      },
      {
        name: "[SA]B-H6",
        type: "Room",
        position: [79.14, 62.85],
      },
      {
        name: "[SA]B-I6",
        type: "Room",
        position: [88.05, 62.85],
      },
      {
        name: "[SA]B-I7",
        type: "Room",
        position: [88.05, 53.95],
      },
      {
        name: "5",
        type: "Room",
        position: [54.48, 22.97],
      },
      {
        name: "5B",
        type: "Room",
        position: [44.93, 21.74],
      },
      {
        name: "5C",
        type: "Room",
        position: [49.38, 20.8],
      },
      {
        name: "5E",
        type: "Room",
        position: [53.91, 27.57],
      },
      {
        name: "5D",
        type: "Room",
        position: [58.36, 27.57],
      },
      {
        name: "5A",
        type: "Room",
        position: [44.95, 27.21],
      },
      {
        name: "M-0A",
        type: "Room",
        position: [20.98, 21.71],
      },
      {
        name: "3",
        type: "Room",
        position: [38.67, 23.78],
      },
      {
        name: "3A",
        type: "Room",
        position: [27.18, 26.74],
      },
      {
        name: "3B",
        type: "Room",
        position: [27.16, 21.26],
      },
      {
        name: "1",
        type: "Room",
        position: [21.38, 41.15],
      },
      {
        name: "1A",
        type: "Room",
        position: [18.77, 34.31],
      },
      {
        name: "1B",
        type: "Room",
        position: [18.75, 29.93],
      },
      {
        name: "1C",
        type: "Room",
        position: [18.82, 25.34],
      },
      {
        name: "37",
        type: "Room",
        position: [41.96, 41.08],
      },
      {
        name: "39",
        type: "Room",
        position: [41.63, 34.32],
      },
      {
        name: "4",
        type: "Room",
        position: [34.94, 34.52],
      },
      {
        name: "42",
        type: "Room",
        position: [49.15, 39.04],
      },
      {
        name: "7A",
        type: "Room",
        position: [67.01, 38.71],
      },
      {
        name: "9",
        type: "Room",
        position: [65.22, 43.37],
      },
      {
        name: "11",
        type: "Room",
        position: [64.59, 48.05],
      },
      {
        name: "13",
        type: "Room",
        position: [62.25, 52.03],
      },
      {
        name: "13A",
        type: "Room",
        position: [66.09, 52.03],
      },
      {
        name: "15",
        type: "Room",
        position: [64.72, 55.98],
      },
      {
        name: "10",
        type: "Room",
        position: [54.58, 49.75],
      },
      {
        name: "35",
        type: "Room",
        position: [40.98, 47.91],
      },
      {
        name: "33",
        type: "Room",
        position: [41.01, 52.32],
      },
      {
        name: "38",
        type: "Room",
        position: [49.8, 48.17],
      },
      {
        name: "36",
        type: "Room",
        position: [49.65, 52.18],
      },
      {
        name: "L-0A",
        type: "Room",
        position: [20.76, 50.02],
      },
      {
        name: "28",
        type: "Room",
        position: [34.27, 49.92],
      },
      {
        name: "26",
        type: "Room",
        position: [32.54, 61.03],
      },
      {
        name: "26A",
        type: "Room",
        position: [36.42, 56.71],
      },
      {
        name: "31",
        type: "Room",
        position: [42.01, 58.26],
      },
      {
        name: "29",
        type: "Room",
        position: [41.47, 65.39],
      },
      {
        name: "22",
        type: "Room",
        position: [36.81, 65.64],
      },
      {
        name: "24",
        type: "Room",
        position: [32.02, 65.36],
      },
      {
        name: "34",
        type: "Room",
        position: [48.99, 56.68],
      },
      {
        name: "32",
        type: "Room",
        position: [49.11, 60.78],
      },
      {
        name: "30",
        type: "Room",
        position: [49.29, 65.28],
      },
      {
        name: "26B",
        type: "Room",
        position: [37.45, 61.1],
      },
      {
        name: "27",
        type: "Room",
        position: [18.95, 63.26],
      },
      {
        name: "27E",
        type: "Room",
        position: [26.06, 57.25],
      },
      {
        name: "27A",
        type: "Room",
        position: [24.11, 60.97],
      },
      {
        name: "27B",
        type: "Room",
        position: [24, 65.59],
      },
      {
        name: "27C",
        type: "Room",
        position: [23.85, 69.67],
      },
      {
        name: "27D",
        type: "Room",
        position: [18.53, 75.05],
      },
      {
        name: "27F",
        type: "Room",
        position: [17.64, 78.49],
      },
      {
        name: "25",
        type: "Room",
        position: [26.98, 77.06],
      },
      {
        name: "25A",
        type: "Room",
        position: [30.91, 72.23],
      },
      {
        name: "23",
        type: "Room",
        position: [35.76, 72.18],
      },
      {
        name: "21",
        type: "Room",
        position: [40.4, 72.21],
      },
      {
        name: "M-0B",
        type: "Room",
        position: [46.48, 78.47],
      },
      {
        name: "M-0C",
        type: "Room",
        position: [37.54, 78.57],
      },
      {
        name: "M-0D",
        type: "Room",
        position: [43.68, 86.63],
      },
      {
        name: "M-0M",
        type: "Room",
        position: [88.09, 84.73],
      },
      {
        name: "19D",
        type: "Room",
        position: [100.09, 85.54],
      },
      {
        name: "19C",
        type: "Room",
        position: [101.58, 79.19],
      },
      {
        name: "M-0P",
        type: "Room",
        position: [73.29, 75.69],
      },
      {
        name: "M-0N",
        type: "Room",
        position: [81.05, 79.03],
      },
      {
        name: "M-0O",
        type: "Room",
        position: [81, 84.14],
      },
      {
        name: "M-0Q",
        type: "Room",
        position: [75.32, 85.89],
      },
      {
        name: "M-0K",
        type: "Room",
        position: [57.41, 79.99],
      },
      {
        name: "M-0E",
        type: "Room",
        position: [49.69, 84.21],
      },
      {
        name: "M-0F",
        type: "Room",
        position: [50.77, 87.26],
      },
      {
        name: "M-0G",
        type: "Room",
        position: [50.75, 90.98],
      },
      {
        name: "M-0H",
        type: "Room",
        position: [50.82, 93.29],
      },
      {
        name: "M-0I",
        type: "Room",
        position: [58.25, 88.84],
      },
      {
        name: "M-0J",
        type: "Room",
        position: [62.39, 86.06],
      },
      {
        name: "M-0L",
        type: "Room",
        position: [53.1, "79.78)", "rotate(-90"],
      },
      {
        name: "M-0R",
        type: "Room",
        position: [71.26, 86.1],
      },
      {
        name: "H-0C",
        type: "Room",
        position: [58.5, 47.04],
      },
      {
        name: "L-0B",
        type: "Room",
        position: [57.59, 32.91],
      },
      {
        name: "EL/M-0A",
        type: "Room",
        position: [52.83, 61.97],
      },
      {
        name: "19B",
        type: "Room",
        position: [100.17, 44.83],
      },
    ],
  },
  // {
  //   name: "Floor 1",
  //   svg: "./Library-1.svg",
  //   svgScale: 0.01,
  //   position: [0.15, -0.05],
  //   extrudedSections: ["A-WALL-FULL"],
  //   floorLayer: { layer: "A-FLOOR-OUTLINE", enabled: true },
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
  //   floorLayer: { layer: "A-FLOOR-OUTLINE", enabled: true },
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
  //   floorLayer: { layer: "A-FLOOR-OUTLINE", enabled: true },
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
  //   floorLayer: { layer: "", enabled: false },
  //   extrudeDepth: 0,
  //   locations: [],
  // },
];

// Initialize canvas and renderer, enable antialiasing
const canvas = document.querySelector("#c");
const renderer = new THREE.WebGLRenderer({ antialias: true, canvas });

// Create label renderer for location labels
const labelRenderer = new CSS2DRenderer();
labelRenderer.setSize(window.innerWidth, window.innerHeight);
labelRenderer.domElement.style.position = "absolute";
labelRenderer.domElement.style.top = "0px";
document.body.appendChild(labelRenderer.domElement);

// Define camera and its properties
const fov = 75;
const aspect = 2;
const near = 0.1;
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
const controls = new OrbitControls(camera, labelRenderer.domElement);
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

// Load floors
loadFloors(floorProperties)
  .then((floorGroups) => sortFloorsByName(floorGroups)) // Sort floors so they aren't out of order in the UI
  .then((floorGroups) => {
    addLocationUI();
    populateFloorListUI(floorGroups); // Populate list of floors with enable/disable checkboxes
    render();
  });

function render() {
  // Check if window has been resized and update camera accordingly
  if (
    resizeRendererToDisplaySize(renderer) ||
    resizeRendererToDisplaySize(labelRenderer)
  ) {
    camera.aspect = canvas.clientWidth / canvas.clientHeight;
    camera.updateProjectionMatrix();
  }

  renderer.render(scene, camera); // Render scene
  labelRenderer.render(scene, camera); // Render labels
}

function resizeRendererToDisplaySize(renderer) {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const needResize = canvas.width !== width || canvas.height !== height; // Check if canvas dimensions do not match client dimensions
  if (needResize) {
    renderer.setSize(width, height, false);
    labelRenderer.setSize(width, height);
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
                    floorProperty.floorLayer.layer.length > 0 &&
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

            // Only create extruded mesh if extrudeDepth is greater than 0
            if (floorProperty.extrudeDepth > 0) {
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
            if (floorProperty.extrudeDepth > 0) {
              // Loop through each extruded section
              // Merge array of extruded geometries into single geometry for performance
              const extrudeGeometry = BufferGeometryUtils.mergeGeometries(
                geometries.extruded[id].extrudeGeometries
              );
              extrudeGeometry.computeBoundingSphere();

              // Create meshes from extruded geometry
              const extrudeMesh = new THREE.Mesh(
                extrudeGeometry,
                extrudeMaterial
              );

              // Scale mesh to appropriate size
              extrudeMesh.scale.multiplyScalar(floorProperty.svgScale);
              extrudeMesh.scale.y *= -1;

              floorGroup.add(extrudeMesh);
            }

            // Merge array of extruded path geometries into single geometry
            const pathGeometry = BufferGeometryUtils.mergeGeometries(
              geometries.extruded[id].pathGeometries
            );
            pathGeometry.computeBoundingSphere();

            // Create meshes from path geometry
            const pathMesh = new THREE.Mesh(pathGeometry, pathMaterial);

            // Scale mesh to appropriate size
            pathMesh.scale.multiplyScalar(floorProperty.svgScale);
            pathMesh.scale.y *= -1;
            if (floorProperty.extrudeDepth > 0) {
              pathMesh.position.z =
                floorProperty.extrudeDepth * floorProperty.svgScale + 1 / 100; // Shift path mesh up to be at top of extrusion
            }

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

          // Draw points at each location
          let pointMaterial = new THREE.PointsMaterial({
            // Material for points
            size: 0.05,
            map: createCanvasCircleMaterial(0x000000, 256),
            transparent: true,
            depthWrite: false,
          });

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
}

function addLocationUI() {
  // Loop through floors
  floorProperties.forEach((floorProperty) => {
    // Get floor group from floor name, check if it exists
    let floorGroup = scene.getObjectByName(floorProperty.name);
    if (typeof floorGroup !== "undefined") {
      // Group for location meshes
      let locationGroup = new THREE.Group();

      // Loop through locations in floor
      floorProperty.locations.forEach((location) => {
        // Create div for location to store text
        const labelDiv = document.createElement("div");
        labelDiv.className = "label";
        labelDiv.textContent = location.name; // Set content to location name
        labelDiv.style.backgroundColor = "transparent";

        // Create CSS2DObject from div
        const label = new CSS2DObject(labelDiv);
        // Set location from location object, scale so it lines up with SVG
        label.position.set(
          location.position[0] * floorProperty.svgScale,
          location.position[1] * -1 * floorProperty.svgScale,
          0
        );
        // label.center.set(0, 1);
        // Add to group
        locationGroup.add(label);
        label.layers.set(0);
      });

      // Set type of locationGroup to 'location'
      locationGroup.userData.type = "location";

      // Add to floorGroup
      floorGroup.add(locationGroup);
    }
  });
}

function createCanvasCircleMaterial(color, size) {
  var matCanvas = document.createElement("canvas");
  matCanvas.width = matCanvas.height = size;
  var matContext = matCanvas.getContext("2d");
  // Create texture object from canvas
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
      if (checkbox.checked) toggleFloorVisibility(floor, true);
      else toggleFloorVisibility(floor, false);
      render();
    };

    // Append list element to list
    li.appendChild(document.createTextNode(floor.name));
    ul.appendChild(li);
  });
}

function toggleFloorVisibility(floor, isVisible) {
  // Enable/disable floor in scene
  floor.visible = isVisible;

  // Loop through children of floorGroup
  floor.children.forEach((child) => {
    // Check if the child is a location group
    if (child.userData.type == "location") {
      // Enable/disable all CSS2DObjects
      child.children.forEach((cssObject) => {
        cssObject.visible = isVisible;
      });
    }
  });
}
