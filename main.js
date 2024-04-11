import * as THREE from "three";
import { SVGLoader } from "three/addons/loaders/SVGLoader.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import * as BufferGeometryUtils from "three/addons/utils/BufferGeometryUtils.js";
import {
  CSS2DRenderer,
  CSS2DObject,
} from "three/addons/renderers/CSS2DRenderer.js";
import TWEEN from "@tweenjs/tween.js";
import { gsap } from "gsap";
import fuzzysort from "fuzzysort";

// Floor properties - defines name of floor, location of svg, which sections are extruded, and the locations on the floor
const floorProperties = [
  {
    name: "Basement",
    svg: "./Library-B.svg",
    svgScale: 0.01,
    position: [0, 0],
    extrudedSections: ["A-WALL-FULL"], //["A-WALL-FULL"],
    floorLayer: { layer: "A-FLOOR-OUTLINE", enabled: true },
    excludedSections: [],
    extrudeDepth: 30,
    locations: [
      {
        name: "19A",
        type: "Room",
        position: [431.09, 239.46],
        floorName: "Basement",
      },
      {
        name: "40",
        type: "Room",
        position: [211.24, 185.63],
        floorName: "Basement",
      },
      {
        name: "19",
        type: "Room",
        position: [355.41, 241.82],
        floorName: "Basement",
      },
      {
        name: "17",
        type: "Room",
        position: [315.34, 269.6],
        floorName: "Basement",
      },
      {
        name: "7",
        type: "Room",
        position: [272.32, 167.07],
        floorName: "Basement",
      },
      {
        name: "2",
        type: "Room",
        position: [150.61, 177.13],
        floorName: "Basement",
      },
      {
        name: "T-0A",
        type: "Room",
        position: [230.7, 240.69],
        floorName: "Basement",
      },
      {
        name: "8",
        type: "Room",
        position: [235.1, 176.26],
        floorName: "Basement",
      },
      {
        name: "6",
        type: "Room",
        position: [232.56, 147.96],
        floorName: "Basement",
      },
      {
        name: "44",
        type: "Room",
        position: [209.64, 147.71],
        floorName: "Basement",
      },
      {
        name: "S-0C",
        type: "Room",
        position: [93.7, 76.3],
        floorName: "Basement",
      },
      {
        name: "S-0B",
        type: "Room",
        position: [58.53, 315.87],
        floorName: "Basement",
      },
      {
        name: "S-0A",
        type: "Room",
        position: [272.71, 266.81],
        floorName: "Basement",
      },
      {
        name: "64",
        type: "Room",
        position: [527.02, 318.54],
        floorName: "Basement",
      },
      {
        name: "EL-0A",
        type: "Room",
        position: [226.41, 256.11],
        floorName: "Basement",
      },
      {
        name: "C-0A",
        type: "Room",
        position: [226.19, 322.07],
        floorName: "Basement",
      },
      {
        name: "C-0B",
        type: "Room",
        position: [261.23, 151.08],
        floorName: "Basement",
      },
      {
        name: "[BG]01",
        type: "Room",
        position: [67.13, 78.86],
        floorName: "Basement",
      },
      {
        name: "[BG]02",
        type: "Room",
        position: [528.76, 290.97],
        floorName: "Basement",
      },
      {
        name: "[CG]01",
        type: "Room",
        position: [56.3, 62.49],
        floorName: "Basement",
      },
      {
        name: "[CG]02",
        type: "Room",
        position: [270.66, 117.31],
        floorName: "Basement",
      },
      {
        name: "H-0A",
        type: "Room",
        position: [123.4, 244.34],
        floorName: "Basement",
      },
      {
        name: "S-0D",
        type: "Room",
        position: [426.57, 201.27],
        floorName: "Basement",
      },
      {
        name: "S-0E",
        type: "Room",
        position: [522.56, 356.76],
        floorName: "Basement",
      },
      {
        name: "RR-W-0",
        type: "Room",
        position: [247.13, 327.68],
        floorName: "Basement",
      },
      {
        name: "RR-M-0",
        type: "Room",
        position: [238.73, 306.8],
        floorName: "Basement",
      },
      {
        name: "H-0B",
        type: "Room",
        position: [175.55, 134.86],
        floorName: "Basement",
      },
      {
        name: "H-0E",
        type: "Room",
        position: [190.75, 214.86],
        floorName: "Basement",
      },
      {
        name: "L-0C",
        type: "Room",
        position: [244.23, 267.16],
        floorName: "Basement",
      },
      {
        name: "H-0D",
        type: "Room",
        position: [197.48, 299.9],
        floorName: "Basement",
      },
      {
        name: "[SA]B-I4",
        type: "Room",
        position: [378.9, 347.09],
        floorName: "Basement",
      },
      {
        name: "[SA]B-H7",
        type: "Room",
        position: [340.58, 232.29],
        floorName: "Basement",
      },
      {
        name: "[SA]B-H6",
        type: "Room",
        position: [340.58, 270.55],
        floorName: "Basement",
      },
      {
        name: "[SA]B-I6",
        type: "Room",
        position: [378.9, 270.55],
        floorName: "Basement",
      },
      {
        name: "[SA]B-I7",
        type: "Room",
        position: [378.9, 232.29],
        floorName: "Basement",
      },
      {
        name: "5",
        type: "Room",
        position: [234.54, 99.07],
        floorName: "Basement",
      },
      {
        name: "5B",
        type: "Room",
        position: [193.48, 93.77],
        floorName: "Basement",
      },
      {
        name: "5C",
        type: "Room",
        position: [212.61, 89.75],
        floorName: "Basement",
      },
      {
        name: "5E",
        type: "Room",
        position: [232.09, 118.86],
        floorName: "Basement",
      },
      {
        name: "5D",
        type: "Room",
        position: [251.21, 118.84],
        floorName: "Basement",
      },
      {
        name: "5A",
        type: "Room",
        position: [193.58, 117.28],
        floorName: "Basement",
      },
      {
        name: "M-0A",
        type: "Room",
        position: [90.51, 93.66],
        floorName: "Basement",
      },
      {
        name: "3",
        type: "Room",
        position: [166.56, 102.56],
        floorName: "Basement",
      },
      {
        name: "3A",
        type: "Room",
        position: [117.18, 115.28],
        floorName: "Basement",
      },
      {
        name: "3B",
        type: "Room",
        position: [117.08, 91.72],
        floorName: "Basement",
      },
      {
        name: "1",
        type: "Room",
        position: [92.22, 177.23],
        floorName: "Basement",
      },
      {
        name: "1A",
        type: "Room",
        position: [81.02, 147.84],
        floorName: "Basement",
      },
      {
        name: "1B",
        type: "Room",
        position: [80.91, 128.98],
        floorName: "Basement",
      },
      {
        name: "1C",
        type: "Room",
        position: [81.22, 109.27],
        floorName: "Basement",
      },
      {
        name: "37",
        type: "Room",
        position: [180.73, 176.95],
        floorName: "Basement",
      },
      {
        name: "39",
        type: "Room",
        position: [179.31, 147.86],
        floorName: "Basement",
      },
      {
        name: "4",
        type: "Room",
        position: [150.51, 148.73],
        floorName: "Basement",
      },
      {
        name: "42",
        type: "Room",
        position: [211.62, 168.17],
        floorName: "Basement",
      },
      {
        name: "7A",
        type: "Room",
        position: [288.43, 166.73],
        floorName: "Basement",
      },
      {
        name: "9",
        type: "Room",
        position: [280.7, 186.78],
        floorName: "Basement",
      },
      {
        name: "11",
        type: "Room",
        position: [278.01, 206.91],
        floorName: "Basement",
      },
      {
        name: "13",
        type: "Room",
        position: [267.94, 224.02],
        floorName: "Basement",
      },
      {
        name: "13A",
        type: "Room",
        position: [284.48, 224.02],
        floorName: "Basement",
      },
      {
        name: "15",
        type: "Room",
        position: [278.58, 240.98],
        floorName: "Basement",
      },
      {
        name: "10",
        type: "Room",
        position: [234.97, 214.19],
        floorName: "Basement",
      },
      {
        name: "35",
        type: "Room",
        position: [176.5, 206.3],
        floorName: "Basement",
      },
      {
        name: "33",
        type: "Room",
        position: [176.63, 225.27],
        floorName: "Basement",
      },
      {
        name: "38",
        type: "Room",
        position: [214.43, 207.4],
        floorName: "Basement",
      },
      {
        name: "36",
        type: "Room",
        position: [213.76, 224.64],
        floorName: "Basement",
      },
      {
        name: "L-0A",
        type: "Room",
        position: [89.55, 215.35],
        floorName: "Basement",
      },
      {
        name: "28",
        type: "Room",
        position: [147.64, 214.93],
        floorName: "Basement",
      },
      {
        name: "26",
        type: "Room",
        position: [140.22, 262.71],
        floorName: "Basement",
      },
      {
        name: "26A",
        type: "Room",
        position: [156.9, 244.14],
        floorName: "Basement",
      },
      {
        name: "31",
        type: "Room",
        position: [180.92, 250.81],
        floorName: "Basement",
      },
      {
        name: "29",
        type: "Room",
        position: [178.6, 281.47],
        floorName: "Basement",
      },
      {
        name: "22",
        type: "Room",
        position: [158.55, 282.52],
        floorName: "Basement",
      },
      {
        name: "24",
        type: "Room",
        position: [137.98, 281.34],
        floorName: "Basement",
      },
      {
        name: "34",
        type: "Room",
        position: [210.94, 244.02],
        floorName: "Basement",
      },
      {
        name: "32",
        type: "Room",
        position: [211.44, 261.63],
        floorName: "Basement",
      },
      {
        name: "30",
        type: "Room",
        position: [212.25, 280.96],
        floorName: "Basement",
      },
      {
        name: "26B",
        type: "Room",
        position: [161.31, 263.02],
        floorName: "Basement",
      },
      {
        name: "27",
        type: "Room",
        position: [81.8, 272.29],
        floorName: "Basement",
      },
      {
        name: "27E",
        type: "Room",
        position: [112.36, 246.43],
        floorName: "Basement",
      },
      {
        name: "27A",
        type: "Room",
        position: [103.97, 262.44],
        floorName: "Basement",
      },
      {
        name: "27B",
        type: "Room",
        position: [103.49, 282.31],
        floorName: "Basement",
      },
      {
        name: "27C",
        type: "Room",
        position: [102.87, 299.84],
        floorName: "Basement",
      },
      {
        name: "27D",
        type: "Room",
        position: [79.97, 322.99],
        floorName: "Basement",
      },
      {
        name: "27F",
        type: "Room",
        position: [76.14, 337.8],
        floorName: "Basement",
      },
      {
        name: "25",
        type: "Room",
        position: [116.33, 331.61],
        floorName: "Basement",
      },
      {
        name: "25A",
        type: "Room",
        position: [133.2, 310.85],
        floorName: "Basement",
      },
      {
        name: "23",
        type: "Room",
        position: [154.06, 310.64],
        floorName: "Basement",
      },
      {
        name: "21",
        type: "Room",
        position: [174, 310.8],
        floorName: "Basement",
      },
      {
        name: "M-0B",
        type: "Room",
        position: [200.14, 337.7],
        floorName: "Basement",
      },
      {
        name: "M-0C",
        type: "Room",
        position: [161.71, 338.11],
        floorName: "Basement",
      },
      {
        name: "M-0D",
        type: "Room",
        position: [188.11, 372.77],
        floorName: "Basement",
      },
      {
        name: "M-0M",
        type: "Room",
        position: [379.06, 364.6],
        floorName: "Basement",
      },
      {
        name: "19D",
        type: "Room",
        position: [430.65, 368.1],
        floorName: "Basement",
      },
      {
        name: "19C",
        type: "Room",
        position: [437.05, 340.79],
        floorName: "Basement",
      },
      {
        name: "M-0P",
        type: "Room",
        position: [315.44, 325.74],
        floorName: "Basement",
      },
      {
        name: "M-0N",
        type: "Room",
        position: [348.79, 340.1],
        floorName: "Basement",
      },
      {
        name: "M-0O",
        type: "Room",
        position: [348.58, 362.08],
        floorName: "Basement",
      },
      {
        name: "M-0Q",
        type: "Room",
        position: [324.13, 369.59],
        floorName: "Basement",
      },
      {
        name: "M-0K",
        type: "Room",
        position: [247.14, 344.24],
        floorName: "Basement",
      },
      {
        name: "M-0E",
        type: "Room",
        position: [213.94, 362.37],
        floorName: "Basement",
      },
      {
        name: "M-0F",
        type: "Room",
        position: [218.59, 375.49],
        floorName: "Basement",
      },
      {
        name: "M-0G",
        type: "Room",
        position: [218.51, 391.47],
        floorName: "Basement",
      },
      {
        name: "M-0H",
        type: "Room",
        position: [218.79, 401.39],
        floorName: "Basement",
      },
      {
        name: "M-0I",
        type: "Room",
        position: [250.74, 382.27],
        floorName: "Basement",
      },
      {
        name: "M-0J",
        type: "Room",
        position: [268.55, 370.33],
        floorName: "Basement",
      },
      {
        name: "M-0L",
        type: "Room",
        position: [228.61, "343.34)", "rotate(-90"],
        floorName: "Basement",
      },
      {
        name: "M-0R",
        type: "Room",
        position: [306.71, 370.48],
        floorName: "Basement",
      },
      {
        name: "H-0C",
        type: "Room",
        position: [251.82, 202.55],
        floorName: "Basement",
      },
      {
        name: "L-0B",
        type: "Room",
        position: [247.92, 141.81],
        floorName: "Basement",
      },
      {
        name: "EL/M-0A",
        type: "Room",
        position: [227.44, 266.74],
        floorName: "Basement",
      },
      {
        name: "19B",
        type: "Room",
        position: [431.01, 193.07],
        floorName: "Basement",
      },
    ],
  },
  {
    name: "Floor 1",
    svg: "./Library-1.svg",
    svgScale: 0.01,
    position: [0.15, -0.05],
    extrudedSections: ["A-WALL-FULL"],
    floorLayer: { layer: "A-FLOOR-OUTLINE", enabled: true },
    extrudeDepth: 30,
    locations: [
      {
        name: "101A",
        type: "Room",
        position: [352.49, 225.03],
        floorName: "Floor 1",
      },
      {
        name: "111B",
        type: "Room",
        position: [496.54, 271.4],
        floorName: "Floor 1",
      },
      {
        name: "111H",
        type: "Room",
        position: [549.66, 287.6],
        floorName: "Floor 1",
      },
      {
        name: "111G",
        type: "Room",
        position: [545.64, 228.35],
        floorName: "Floor 1",
      },
      {
        name: "111F",
        type: "Room",
        position: [499.23, 171.64],
        floorName: "Floor 1",
      },
      {
        name: "111K",
        type: "Room",
        position: [540.15, 174.39],
        floorName: "Floor 1",
      },
      {
        name: "111E",
        type: "Room",
        position: [505.07, 201.68],
        floorName: "Floor 1",
      },
      {
        name: "111J",
        type: "Room",
        position: [495.09, 221.98],
        floorName: "Floor 1",
      },
      {
        name: "110",
        type: "Room",
        position: [431.83, 278.75],
        floorName: "Floor 1",
      },
      {
        name: "111A",
        type: "Room",
        position: [469.75, 221.2],
        floorName: "Floor 1",
      },
      {
        name: "111C",
        type: "Room",
        position: [455.27, 202.88],
        floorName: "Floor 1",
      },
      {
        name: "111D",
        type: "Room",
        position: [475, 202.88],
        floorName: "Floor 1",
      },
      {
        name: "111I",
        type: "Room",
        position: [467.86, 271.86],
        floorName: "Floor 1",
      },
      {
        name: "110C",
        type: "Room",
        position: [440.39, 214.15],
        floorName: "Floor 1",
      },
      {
        name: "110B",
        type: "Room",
        position: [441.11, 231.28],
        floorName: "Floor 1",
      },
      {
        name: "110A",
        type: "Room",
        position: [421.21, 225.16],
        floorName: "Floor 1",
      },
      {
        name: "T-1A",
        type: "Room",
        position: [227.08, 240.02],
        floorName: "Floor 1",
      },
      {
        name: "122",
        type: "Room",
        position: [104.03, 292.2],
        floorName: "Floor 1",
      },
      {
        name: "121",
        type: "Room",
        position: [181.67, 326.55],
        floorName: "Floor 1",
      },
      {
        name: "115",
        type: "Room",
        position: [236.01, 148.21],
        floorName: "Floor 1",
      },
      {
        name: "117",
        type: "Room",
        position: [240.55, 110.23],
        floorName: "Floor 1",
      },
      {
        name: "118",
        type: "Room",
        position: [241, 88.43],
        floorName: "Floor 1",
      },
      {
        name: "116",
        type: "Room",
        position: [238.59, 130.67],
        floorName: "Floor 1",
      },
      {
        name: "112",
        type: "Room",
        position: [276.16, 185.18],
        floorName: "Floor 1",
      },
      {
        name: "112A",
        type: "Room",
        position: [283.37, 166.41],
        floorName: "Floor 1",
      },
      {
        name: "113",
        type: "Room",
        position: [267.47, 166.41],
        floorName: "Floor 1",
      },
      {
        name: "114",
        type: "Room",
        position: [264.16, 138.89],
        floorName: "Floor 1",
      },
      {
        name: "101B",
        type: "Room",
        position: [256.98, 140.65],
        floorName: "Floor 1",
      },
      {
        name: "120",
        type: "Room",
        position: [248.83, 318.38],
        floorName: "Floor 1",
      },
      {
        name: "C-1A",
        type: "Room",
        position: [228.18, 282.11],
        floorName: "Floor 1",
      },
      {
        name: "E-1",
        type: "Room",
        position: [228.11, 272.82],
        floorName: "Floor 1",
      },
      {
        name: "C-1B",
        type: "Room",
        position: [409.44, 354.09],
        floorName: "Floor 1",
      },
      {
        name: "109A",
        type: "Room",
        position: [493.26, 338.85],
        floorName: "Floor 1",
      },
      {
        name: "106",
        type: "Room",
        position: [440.77, 339.77],
        floorName: "Floor 1",
      },
      {
        name: "106B",
        type: "Room",
        position: [439.5, 362.25],
        floorName: "Floor 1",
      },
      {
        name: "106C",
        type: "Room",
        position: [446.02, 385.65],
        floorName: "Floor 1",
      },
      {
        name: "109B",
        type: "Room",
        position: [493.97, 358.5],
        floorName: "Floor 1",
      },
      {
        name: "109",
        type: "Room",
        position: [550.47, 366.03],
        floorName: "Floor 1",
      },
      {
        name: "107",
        type: "Room",
        position: [462.63, 339.17],
        floorName: "Floor 1",
      },
      {
        name: "108A",
        type: "Room",
        position: [458.54, 367.96],
        floorName: "Floor 1",
      },
      {
        name: "108",
        type: "Room",
        position: [477.64, 363.92],
        floorName: "Floor 1",
      },
      {
        name: "101",
        type: "Room",
        position: [130.34, 174.95],
        floorName: "Floor 1",
      },
      {
        name: "102",
        type: "Room",
        position: [336.37, 290.47],
        floorName: "Floor 1",
      },
      {
        name: "111",
        type: "Room",
        position: [505.75, 240.97],
        floorName: "Floor 1",
      },
      {
        name: "E-1B",
        type: "Room",
        position: [455.91, 223.83],
        floorName: "Floor 1",
      },
      {
        name: "104",
        type: "Room",
        position: [381.4, 385.43],
        floorName: "Floor 1",
      },
      {
        name: "S-1C",
        type: "Room",
        position: [93.43, 74.17],
        floorName: "Floor 1",
      },
      {
        name: "S-1B",
        type: "Room",
        position: [56.69, 316.25],
        floorName: "Floor 1",
      },
      {
        name: "S-1E",
        type: "Room",
        position: [522.61, 358.35],
        floorName: "Floor 1",
      },
      {
        name: "S-1D",
        type: "Room",
        position: [428.47, 192.66],
        floorName: "Floor 1",
      },
      {
        name: "S-1A",
        type: "Room",
        position: [272.29, 266.92],
        floorName: "Floor 1",
      },
      {
        name: "[BG]100",
        type: "Room",
        position: [57.79, 347.73],
        floorName: "Floor 1",
      },
      {
        name: "[CG]100",
        type: "Room",
        position: [71.11, 349.31],
        floorName: "Floor 1",
      },
      {
        name: "[CG]101",
        type: "Room",
        position: [188.87, 377],
        floorName: "Floor 1",
      },
      {
        name: "[CG]102",
        type: "Room",
        position: [242.57, 408.18],
        floorName: "Floor 1",
      },
      {
        name: "[CG]103",
        type: "Room",
        position: [457.29, 186.73],
        floorName: "Floor 1",
      },
      {
        name: "EL-1A",
        type: "Room",
        position: [226.86, 256.67],
        floorName: "Floor 1",
      },
      {
        name: "[XX]101",
        type: "Room",
        position: [434.93, 331.67],
        floorName: "Floor 1",
      },
      {
        name: "EL-1B",
        type: "Room",
        position: [528.83, 301.18],
        floorName: "Floor 1",
      },
      {
        name: "M-1A",
        type: "Room",
        position: [228.14, 366.85],
        floorName: "Floor 1",
      },
      {
        name: "RR-M-1",
        type: "Room",
        position: [419.6, 374.59],
        floorName: "Floor 1",
      },
      {
        name: "RR-W-1",
        type: "Room",
        position: [394.16, 374.59],
        floorName: "Floor 1",
      },
      {
        name: "101C",
        type: "Room",
        position: [398.73, 222.09],
        floorName: "Floor 1",
      },
    ],
  },
  {
    name: "Floor 2",
    svg: "./Library-2.svg",
    svgScale: 0.01,
    position: [0.21, 0],
    extrudedSections: ["A-WALL-FULL"],
    floorLayer: { layer: "A-FLOOR-OUTLINE", enabled: true },
    extrudeDepth: 30,
    locations: [
      {
        name: "T-2B",
        type: "Room",
        position: [227.04, 240.89],
        floorName: "Floor 2",
      },
      {
        name: "204",
        type: "Room",
        position: [487.58, 319.83],
        floorName: "Floor 2",
      },
      {
        name: "203",
        type: "Room",
        position: [482.01, 338.73],
        floorName: "Floor 2",
      },
      {
        name: "208",
        type: "Room",
        position: [276.81, 139.04],
        floorName: "Floor 2",
      },
      {
        name: "206",
        type: "Room",
        position: [275.73, 187.74],
        floorName: "Floor 2",
      },
      {
        name: "207",
        type: "Room",
        position: [275.57, 169.99],
        floorName: "Floor 2",
      },
      {
        name: "205",
        type: "Room",
        position: [425.08, 219.18],
        floorName: "Floor 2",
      },
      {
        name: "C-2A",
        type: "Room",
        position: [227.23, 322.4],
        floorName: "Floor 2",
      },
      {
        name: "205B",
        type: "Room",
        position: [455.74, 207.7],
        floorName: "Floor 2",
      },
      {
        name: "209",
        type: "Room",
        position: [271.12, 375.57],
        floorName: "Floor 2",
      },
      {
        name: "E-2A",
        type: "Room",
        position: [227.75, 271.88],
        floorName: "Floor 2",
      },
      {
        name: "EL-2A",
        type: "Room",
        position: [226.71, 256.96],
        floorName: "Floor 2",
      },
      {
        name: "S-2C",
        type: "Room",
        position: [81.4, 70.2],
        floorName: "Floor 2",
      },
      {
        name: "S-2B",
        type: "Room",
        position: [58.37, 316.06],
        floorName: "Floor 2",
      },
      {
        name: "S-2E",
        type: "Room",
        position: [522.75, 357.02],
        floorName: "Floor 2",
      },
      {
        name: "S-2D",
        type: "Room",
        position: [428.29, 193.78],
        floorName: "Floor 2",
      },
      {
        name: "S-2A",
        type: "Room",
        position: [278.85, 278.92],
        floorName: "Floor 2",
      },
      {
        name: "L-2",
        type: "Room",
        position: [247.92, 278.25],
        floorName: "Floor 2",
      },
      {
        name: "T-2A",
        type: "Room",
        position: [229.48, 282.04],
        floorName: "Floor 2",
      },
      {
        name: "M-2A",
        type: "Room",
        position: [455.83, 225.63],
        floorName: "Floor 2",
      },
      {
        name: "[XX]201",
        type: "Room",
        position: [284.11, 265.34],
        floorName: "Floor 2",
      },
      {
        name: "[SA]202",
        type: "Room",
        position: [520.44, 309.89],
        floorName: "Floor 2",
      },
      {
        name: "[BG]200",
        type: "Room",
        position: [226.03, 353.69],
        floorName: "Floor 2",
      },
      {
        name: "EL-2B",
        type: "Room",
        position: [529.11, 301.18],
        floorName: "Floor 2",
      },
      {
        name: "RR-M-2",
        type: "Room",
        position: [241.22, 307.84],
        floorName: "Floor 2",
      },
      {
        name: "RR-2",
        type: "Room",
        position: [250.11, 328.32],
        floorName: "Floor 2",
      },
      {
        name: "FPS-2",
        type: "Room",
        position: [292.21, 290.26],
        floorName: "Floor 2",
      },
      {
        name: "[SA]2-B10",
        type: "Room",
        position: [110.96, 118.4],
        floorName: "Floor 2",
      },
      {
        name: "[SA]2-C10",
        type: "Room",
        position: [149.23, 118.4],
        floorName: "Floor 2",
      },
      {
        name: "[SA]2-D10",
        type: "Room",
        position: [187.49, 118.4],
        floorName: "Floor 2",
      },
      {
        name: "[SA]2-E10",
        type: "Room",
        position: [225.77, 118.4],
        floorName: "Floor 2",
      },
      {
        name: "[SA]2-B9",
        type: "Room",
        position: [111.03, 156.67],
        floorName: "Floor 2",
      },
      {
        name: "[SA]2-C9",
        type: "Room",
        position: [149.3, 156.67],
        floorName: "Floor 2",
      },
      {
        name: "[SA]2-D9",
        type: "Room",
        position: [187.56, 156.67],
        floorName: "Floor 2",
      },
      {
        name: "[SA]2-E9",
        type: "Room",
        position: [225.84, 156.67],
        floorName: "Floor 2",
      },
      {
        name: "[SA]2-B8",
        type: "Room",
        position: [111.03, 194.94],
        floorName: "Floor 2",
      },
      {
        name: "[SA]2-C8",
        type: "Room",
        position: [149.29, 194.94],
        floorName: "Floor 2",
      },
      {
        name: "[SA]2-D8",
        type: "Room",
        position: [187.56, 194.94],
        floorName: "Floor 2",
      },
      {
        name: "[SA]2-E8",
        type: "Room",
        position: [225.84, 194.94],
        floorName: "Floor 2",
      },
      {
        name: "[SA]2-H8",
        type: "Room",
        position: [340.63, 194.94],
        floorName: "Floor 2",
      },
      {
        name: "[SA]2-I8",
        type: "Room",
        position: [378.94, 194.94],
        floorName: "Floor 2",
      },
      {
        name: "[SA]2-B7",
        type: "Room",
        position: [111.03, 233.21],
        floorName: "Floor 2",
      },
      {
        name: "[SA]2-C7",
        type: "Room",
        position: [149.29, 233.21],
        floorName: "Floor 2",
      },
      {
        name: "[SA]2-D7",
        type: "Room",
        position: [187.56, 233.21],
        floorName: "Floor 2",
      },
      {
        name: "[SA]2-F7",
        type: "Room",
        position: [264.11, 233.21],
        floorName: "Floor 2",
      },
      {
        name: "[SA]2-H7",
        type: "Room",
        position: [340.63, 233.21],
        floorName: "Floor 2",
      },
      {
        name: "[SA]2-I7",
        type: "Room",
        position: [378.94, 233.21],
        floorName: "Floor 2",
      },
      {
        name: "[SA]2-L8",
        type: "Room",
        position: [493.72, 194.94],
        floorName: "Floor 2",
      },
      {
        name: "[SA]2-L7",
        type: "Room",
        position: [493.72, 233.21],
        floorName: "Floor 2",
      },
      {
        name: "[SA]2-B6",
        type: "Room",
        position: [111.03, 271.47],
        floorName: "Floor 2",
      },
      {
        name: "[SA]2-C6",
        type: "Room",
        position: [149.29, 271.47],
        floorName: "Floor 2",
      },
      {
        name: "[SA]2-D6",
        type: "Room",
        position: [187.56, 271.47],
        floorName: "Floor 2",
      },
      {
        name: "[SA]2-L6",
        type: "Room",
        position: [493.72, 271.47],
        floorName: "Floor 2",
      },
      {
        name: "[SA]2-H6",
        type: "Room",
        position: [340.63, 271.47],
        floorName: "Floor 2",
      },
      {
        name: "[SA]2-I6",
        type: "Room",
        position: [378.94, 271.47],
        floorName: "Floor 2",
      },
      {
        name: "[SA]2-J6",
        type: "Room",
        position: [417.18, 271.47],
        floorName: "Floor 2",
      },
      {
        name: "[SA]2-K6",
        type: "Room",
        position: [455.43, 271.47],
        floorName: "Floor 2",
      },
      {
        name: "[SA]2-B5",
        type: "Room",
        position: [111.03, 309.74],
        floorName: "Floor 2",
      },
      {
        name: "[SA]2-C5",
        type: "Room",
        position: [149.29, 309.74],
        floorName: "Floor 2",
      },
      {
        name: "[SA]2-D5",
        type: "Room",
        position: [187.56, 309.74],
        floorName: "Floor 2",
      },
      {
        name: "[SA]2-H5",
        type: "Room",
        position: [340.63, 309.74],
        floorName: "Floor 2",
      },
      {
        name: "[SA]2-I5",
        type: "Room",
        position: [378.94, 309.74],
        floorName: "Floor 2",
      },
      {
        name: "[SA]2-J5",
        type: "Room",
        position: [417.18, 309.74],
        floorName: "Floor 2",
      },
      {
        name: "[SA]2-H4",
        type: "Room",
        position: [340.62, 348.01],
        floorName: "Floor 2",
      },
      {
        name: "[SA]2-I4",
        type: "Room",
        position: [378.94, 348.01],
        floorName: "Floor 2",
      },
      {
        name: "[SA]2-J4",
        type: "Room",
        position: [417.18, 348.01],
        floorName: "Floor 2",
      },
      {
        name: "[SA]2-G7",
        type: "Room",
        position: [302.36, 233.21],
        floorName: "Floor 2",
      },
      {
        name: "210",
        type: "Room",
        position: [552.92, 178.15],
        floorName: "Floor 2",
      },
      {
        name: "201",
        type: "Room",
        position: [248.59, 216.99],
        floorName: "Floor 2",
      },
      {
        name: "[SA]2-M6",
        type: "Room",
        position: [531.96, 271.47],
        floorName: "Floor 2",
      },
      {
        name: "202",
        type: "Room",
        position: [392.55, 254.48],
        floorName: "Floor 2",
      },
    ],
  },
  {
    name: "Floor 3",
    svg: "./Library-3.svg",
    svgScale: 0.01,
    position: [-0.05, 0.17],
    extrudedSections: ["A-WALL-FULL"],
    floorLayer: { layer: "A-FLOOR-OUTLINE", enabled: true },
    extrudeDepth: 30,
    locations: [
      {
        name: "S-3C",
        type: "Room",
        position: [82.15, 78.27],
        floorName: "Floor 3",
      },
      {
        name: "S-3B",
        type: "Room",
        position: [60.25, 316.06],
        floorName: "Floor 3",
      },
      {
        name: "S-3E",
        type: "Room",
        position: [522.61, 357.3],
        floorName: "Floor 3",
      },
      {
        name: "S-3D",
        type: "Room",
        position: [428.05, 194.66],
        floorName: "Floor 3",
      },
      {
        name: "S-3A",
        type: "Room",
        position: [278.71, 278.92],
        floorName: "Floor 3",
      },
      {
        name: "EL-3A",
        type: "Room",
        position: [226.71, 256.67],
        floorName: "Floor 3",
      },
      {
        name: "L-3",
        type: "Room",
        position: [247.66, 267.11],
        floorName: "Floor 3",
      },
      {
        name: "301",
        type: "Room",
        position: [276.06, 234.93],
        floorName: "Floor 3",
      },
      {
        name: "314",
        type: "Room",
        position: [276.43, 128.87],
        floorName: "Floor 3",
      },
      {
        name: "312",
        type: "Room",
        position: [276.83, 168.16],
        floorName: "Floor 3",
      },
      {
        name: "313",
        type: "Room",
        position: [276.83, 148.35],
        floorName: "Floor 3",
      },
      {
        name: "315A",
        type: "Room",
        position: [246.52, 94.78],
        floorName: "Floor 3",
      },
      {
        name: "315B",
        type: "Room",
        position: [227.36, 94.78],
        floorName: "Floor 3",
      },
      {
        name: "311",
        type: "Room",
        position: [277.26, 187.83],
        floorName: "Floor 3",
      },
      {
        name: "310",
        type: "Room",
        position: [276.09, 208.8],
        floorName: "Floor 3",
      },
      {
        name: "C-3B",
        type: "Room",
        position: [495.88, 309.31],
        floorName: "Floor 3",
      },
      {
        name: "306",
        type: "Room",
        position: [493.35, 294.66],
        floorName: "Floor 3",
      },
      {
        name: "307",
        type: "Room",
        position: [468.21, 296.85],
        floorName: "Floor 3",
      },
      {
        name: "305",
        type: "Room",
        position: [488.71, 322.57],
        floorName: "Floor 3",
      },
      {
        name: "304",
        type: "Room",
        position: [460.51, 324.18],
        floorName: "Floor 3",
      },
      {
        name: "309",
        type: "Room",
        position: [438.63, 221.52],
        floorName: "Floor 3",
      },
      {
        name: "308",
        type: "Room",
        position: [488, 220.47],
        floorName: "Floor 3",
      },
      {
        name: "E-3A",
        type: "Room",
        position: [228.13, 271.76],
        floorName: "Floor 3",
      },
      {
        name: "T-3B",
        type: "Room",
        position: [226.73, 240.53],
        floorName: "Floor 3",
      },
      {
        name: "C-3A",
        type: "Room",
        position: [227.04, 322.01],
        floorName: "Floor 3",
      },
      {
        name: "T-3A",
        type: "Room",
        position: [229.34, 282.18],
        floorName: "Floor 3",
      },
      {
        name: "301B",
        type: "Room",
        position: [78.29, 356.81],
        floorName: "Floor 3",
      },
      {
        name: "301A",
        type: "Room",
        position: [244.34, 74.71],
        floorName: "Floor 3",
      },
      {
        name: "301C",
        type: "Room",
        position: [61.53, 252.98],
        floorName: "Floor 3",
      },
      {
        name: "301D",
        type: "Room",
        position: [61.54, 94.27],
        floorName: "Floor 3",
      },
      {
        name: "301E",
        type: "Room",
        position: [161.13, 75.7],
        floorName: "Floor 3",
      },
      {
        name: "[XX]301",
        type: "Room",
        position: [283.97, 265.24],
        floorName: "Floor 3",
      },
      {
        name: "H-3",
        type: "Room",
        position: [474.2, 346.4],
        floorName: "Floor 3",
      },
      {
        name: "[BG]300",
        type: "Room",
        position: [59.99, 67.05],
        floorName: "Floor 3",
      },
      {
        name: "EL-3B",
        type: "Room",
        position: [528.83, 300.89],
        floorName: "Floor 3",
      },
      {
        name: "RR-M-3",
        type: "Room",
        position: [243.86, 304.47],
        floorName: "Floor 3",
      },
      {
        name: "RR-W-3",
        type: "Room",
        position: [243.86, 325.2],
        floorName: "Floor 3",
      },
      {
        name: "M-3A",
        type: "Room",
        position: [455.1, 224.78],
        floorName: "Floor 3",
      },
      {
        name: "315",
        type: "Room",
        position: [239.26, 113.03],
        floorName: "Floor 3",
      },
      {
        name: "316",
        type: "Room",
        position: [200.92, 109.08],
        floorName: "Floor 3",
      },
      {
        name: "317",
        type: "Room",
        position: [201.49, 199.57],
        floorName: "Floor 3",
      },
      {
        name: "[SA]3-B10",
        type: "Room",
        position: [110.82, 118.4],
        floorName: "Floor 3",
      },
      {
        name: "[SA]3-B9",
        type: "Room",
        position: [110.89, 156.67],
        floorName: "Floor 3",
      },
      {
        name: "[SA]3-B8",
        type: "Room",
        position: [110.88, 194.94],
        floorName: "Floor 3",
      },
      {
        name: "[SA]3-B7",
        type: "Room",
        position: [110.88, 233.21],
        floorName: "Floor 3",
      },
      {
        name: "[SA]3-B6",
        type: "Room",
        position: [110.88, 271.47],
        floorName: "Floor 3",
      },
      {
        name: "[SA]3-B5",
        type: "Room",
        position: [110.88, 309.74],
        floorName: "Floor 3",
      },
      {
        name: "[SA]3-A9",
        type: "Room",
        position: [72.63, 156.67],
        floorName: "Floor 3",
      },
      {
        name: "[SA]3-A8",
        type: "Room",
        position: [72.63, 194.94],
        floorName: "Floor 3",
      },
      {
        name: "[SA]3-C10",
        type: "Room",
        position: [149.08, 118.4],
        floorName: "Floor 3",
      },
      {
        name: "[SA]3-C9",
        type: "Room",
        position: [149.15, 156.67],
        floorName: "Floor 3",
      },
      {
        name: "[SA]3-C8",
        type: "Room",
        position: [149.15, 194.94],
        floorName: "Floor 3",
      },
      {
        name: "[SA]3-C7",
        type: "Room",
        position: [149.15, 233.21],
        floorName: "Floor 3",
      },
      {
        name: "[SA]3-C6",
        type: "Room",
        position: [149.15, 271.47],
        floorName: "Floor 3",
      },
      {
        name: "[SA]3-C5",
        type: "Room",
        position: [149.15, 309.74],
        floorName: "Floor 3",
      },
      {
        name: "[SA]3-C4",
        type: "Room",
        position: [149.15, 348.01],
        floorName: "Floor 3",
      },
      {
        name: "[SA]3-D7",
        type: "Room",
        position: [187.42, 233.21],
        floorName: "Floor 3",
      },
      {
        name: "[SA]3-D6",
        type: "Room",
        position: [187.42, 271.47],
        floorName: "Floor 3",
      },
      {
        name: "[SA]3-D5",
        type: "Room",
        position: [187.42, 309.74],
        floorName: "Floor 3",
      },
      {
        name: "[SA]3-D4",
        type: "Room",
        position: [187.42, 348.01],
        floorName: "Floor 3",
      },
      {
        name: "[SA]3-317",
        type: "Room",
        position: [230.39, 155.7],
        floorName: "Floor 3",
      },
      {
        name: "[SA]3-F7",
        type: "Room",
        position: [263.96, 233.21],
        floorName: "Floor 3",
      },
      {
        name: "[SA]3-H7",
        type: "Room",
        position: [340.49, 233.21],
        floorName: "Floor 3",
      },
      {
        name: "[SA]3-H8",
        type: "Room",
        position: [340.49, 194.94],
        floorName: "Floor 3",
      },
      {
        name: "[SA]3-H5",
        type: "Room",
        position: [340.49, 309.74],
        floorName: "Floor 3",
      },
      {
        name: "[SA]3-I7",
        type: "Room",
        position: [378.8, 233.21],
        floorName: "Floor 3",
      },
      {
        name: "[SA]3-I8",
        type: "Room",
        position: [378.8, 194.94],
        floorName: "Floor 3",
      },
      {
        name: "[SA]3-I5",
        type: "Room",
        position: [378.8, 309.74],
        floorName: "Floor 3",
      },
      {
        name: "[SA]3-J7",
        type: "Room",
        position: [417.04, 233.21],
        floorName: "Floor 3",
      },
      {
        name: "[SA]3-J5",
        type: "Room",
        position: [417.04, 309.74],
        floorName: "Floor 3",
      },
      {
        name: "[SA]3-L6",
        type: "Room",
        position: [493.57, 271.47],
        floorName: "Floor 3",
      },
      {
        name: "302",
        type: "Room",
        position: [391.48, 248.45],
        floorName: "Floor 3",
      },
      {
        name: "303",
        type: "Room",
        position: [392.01, 294.12],
        floorName: "Floor 3",
      },
      {
        name: "FPS-3",
        type: "Room",
        position: [292.07, 290.26],
        floorName: "Floor 3",
      },
    ],
  },
  {
    name: "Roof",
    svg: "./Library-4.svg",
    svgScale: 0.01,
    position: [0.2, -0.25],
    extrudedSections: [],
    floorLayer: { layer: "", enabled: false },
    extrudeDepth: 0,
    locations: [],
  },
];

// Initialize canvas and renderer, enable antialiasing
const canvas = document.querySelector("#c");
const renderer = new THREE.WebGLRenderer({ antialias: true, canvas });

// Create label renderer for location labels
const labelRenderer = new CSS2DRenderer();
labelRenderer.setSize(window.innerWidth, window.innerHeight);
labelRenderer.domElement.style.position = "absolute";
labelRenderer.domElement.style.top = "0px";
labelRenderer.domElement.style.zIndex = 1;
document.body.appendChild(labelRenderer.domElement);

// Define camera and its properties
const fov = 75;
const aspect = 2;
const near = 0.01;
const far = 500;
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

// Initial camera position - away from origin, looking at origin
const initialCameraPosition = { x: 0, y: 4, z: 4 };
camera.position.x = initialCameraPosition.x;
camera.position.y = initialCameraPosition.y;
camera.position.z = initialCameraPosition.z;
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

let state = {};

let currentSelectedLocation;

// Load floors
loadFloors(floorProperties)
  .then((floorGroups) => sortFloorsByName(floorGroups)) // Sort floors so they aren't out of order in the UI
  .then((floorGroups) => {
    addLocationUI();
    populateUI(floorGroups);
    render();
  });

// Update controls, animations, and call render function
function animate() {
  requestAnimationFrame(animate);

  TWEEN.update();

  render();
}

animate();

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

          const extrudeMaterial = new THREE.MeshPhongMaterial({
            transparent: true,
            opacity: 0.5,
          });

          const floorMaterial = new THREE.MeshPhongMaterial({
            side: THREE.DoubleSide,
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

              extrudeMesh.name = "extruded_mesh";

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
                (floorProperty.extrudeDepth + 1) * floorProperty.svgScale; // Shift path mesh up to be at top of extrusion
            }

            pathMesh.name = "extruded_path";

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

          otherPathMesh.name = "other_path";

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
            const floorMesh = new THREE.Mesh(floorGeometry, floorMaterial);
            floorMesh.scale.multiplyScalar(floorProperty.svgScale);
            floorMesh.scale.y *= -1;

            floorMesh.name = "lower_floor";

            floorGroup.add(floorMesh);

            const upperFloorMesh = floorMesh.clone();
            upperFloorMesh.position.z +=
              floorProperty.extrudeDepth * floorProperty.svgScale;

            upperFloorMesh.name = "upper_floor";

            floorGroup.add(upperFloorMesh);
          }

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
              sum += arr[j].extrudeDepth * floorProperty.svgScale + 3 / 100;
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

        let button = document.createElement("BUTTON");
        button.setAttribute("class", "label highlight-onselect");
        button.appendChild(document.createTextNode(location.name));
        labelDiv.appendChild(button);
        button.addEventListener("pointerdown", function () {
          // Update information panel with location information and open information panel
          updateInformationPanel(location);
          toggleInformationPanel(true);
          toggleLocationIndicator(location, true);
        });
        labelDiv.style.backgroundColor = "transparent";

        // Create CSS2DObject from div
        const label = new CSS2DObject(labelDiv);
        // Set location from location object, scale so it lines up with SVG
        label.position.set(
          location.position[0] * floorProperty.svgScale,
          location.position[1] * -1 * floorProperty.svgScale,
          0
        );
        label.center.set(0, 1);
        // Add to group
        locationGroup.add(label);
        label.layers.set(0);
      });

      // Set type of locationGroup to 'location'
      locationGroup.name = "locations";

      // Add to floorGroup
      floorGroup.add(locationGroup);

      toggleFloorLocationsVisibility(floorGroup, false);
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

// Populate all UI
function populateUI(floorList) {
  document.getElementById("back-arrow").onclick = () => {
    unfocus(floorList);
  }; // Unfocus on all floors when arrow is pressed

  // Disable information panel by default
  const information_panel = document.getElementById("information-panel");
  information_panel.style.display = "none";

  // Listen for input - if there is text in the search bar, make the close button visible
  const search_input = document.getElementById("search-bar");
  search_input.addEventListener("input", function (e) {
    if (e.target.value.length > 0) {
      toggleSearchBarCloseButton(true); // Enable close button

      toggleSearchBarResults(e.target.value, true); // Show search bar results
    } else {
      const information_panel = document.getElementById("information-panel");
      // Disable close button if the information panel isn't enabled
      if (information_panel.style.display == "none") {
        toggleSearchBarCloseButton(false);
      }

      toggleSearchBarResults("", false); // Disable search bar results
    }
  });

  // When the search bar is selected, show the search results if the user has typed anything in
  search_input.addEventListener("focusin", function (e) {
    if (search_input.value.length > 0) {
      toggleSearchBarResults(search_input.value, true);
    }
  });

  // When the search bar is deselected, hide the search results
  search_input.addEventListener("focusout", function (e) {
    // If the selection is not the search results, disable the search results
    if (
      !e.relatedTarget ||
      (e.relatedTarget &&
        !e.relatedTarget.classList.contains("search-result-button"))
    ) {
      toggleSearchBarResults("", false);
    }
  });

  // If the clear search button is clicked, clear the search bar, hide the information panel, and disable the close button
  const clear_search_button = document.getElementById("clear-search");
  clear_search_button.onclick = () => {
    search_input.value = "";
    toggleInformationPanel(false);
    toggleSearchBarCloseButton(false);
    toggleLocationIndicator("", false);
  };

  floorListUI(floorList); // Populate list of floors with enable/disable checkboxes
}

function toggleLocationIndicator(location, isVisible) {
  if (isVisible) {
    toggleLocationIndicator("", false);

    const labelDiv = document.createElement("div");
    labelDiv.className = "location-point";

    const floorProperty = floorProperties.find(
      (e) => e.name == location.floorName
    );

    let floorGroup = scene.getObjectByName(location.floorName);

    currentSelectedLocation = new CSS2DObject(labelDiv);
    currentSelectedLocation.position.set(
      location.position[0] * floorProperty.svgScale + floorGroup.position.x,
      floorGroup.position.y,
      location.position[1] * floorProperty.svgScale + floorGroup.position.z
    );
    // label.center.set(0, 1);
    // Add to group
    scene.add(currentSelectedLocation);
    currentSelectedLocation.layers.set(0);
  } else {
    if (currentSelectedLocation !== undefined) {
      currentSelectedLocation.removeFromParent();
    }
  }
}

// Given location data, update the information panel
function updateInformationPanel(location) {
  // Get elements inside information panel
  const information_panel_img = document.getElementById(
    "information-panel-img"
  );
  const information_panel_name = document.getElementById(
    "information-panel-name"
  );
  const information_panel_description = document.getElementById(
    "information-panel-description"
  );

  // Get search bar for changing its value
  const search_bar = document.getElementById("search-bar");

  // If there is no image provided, disable the image in the information panel
  if (!location.img) {
    information_panel_img.style.display = "none";
  }

  // If the location has a name,
  if (location.name) {
    information_panel_name.textContent = location.name; // Set title in information panel to location name
    search_bar.value = location.name; // Set search bar value to location name
    toggleSearchBarCloseButton(true); // Enable the close button

    // If the location is a room, add "room" to the title
    if (location.type == "Room") {
      information_panel_name.textContent = "Room " + location.name;
    }
  }

  // If the location is a room, set the description to "room" - if the location has a description, this will be overridden
  if (location.type == "Room") {
    information_panel_description.textContent = "Room";
  }
  // If the location has a description, set the text content of the description element to the location description
  if (location.description) {
    information_panel_description.textContent = location.description;
  }
}

// Enable/disable the information panel
function toggleInformationPanel(isVisible) {
  const information_panel = document.getElementById("information-panel");
  if (isVisible) {
    // Start an animation moving the information panel right to be in view
    information_panel.style.display = "block";
    gsap.to("#information-panel", { left: 0, duration: 0.25 });
  } else {
    // Start an animation moving the information panel left to be out of view
    gsap.to("#information-panel", {
      left: -360,
      duration: 0.25,
      onComplete: function () {
        information_panel.style.display = "none";
      },
    });
  }
}

// Enable/disable the close button
function toggleSearchBarCloseButton(isVisible) {
  // Get the div containing the close button
  const clear_search_div = document.getElementById("clear-search-div");
  // Enable/disable button
  if (isVisible) {
    clear_search_div.style.display = "block";
  } else {
    clear_search_div.style.display = "none";
  }
}

// Get search bar results given the input value and number of results
function searchBarResults(term, n) {
  // Compile array of locations
  let locations = [];
  floorProperties.forEach((floorProperty) => {
    locations = locations.concat(floorProperty.locations);
  });

  // Search for locations by name and sort by relevance
  const results = fuzzysort.go(term, locations, { key: "name", limit: n });

  // Return n results
  return results.map((result) => result.obj);
}

// Enable/Disable search bar results panel
function toggleSearchBarResults(term, isVisible) {
  // Get element with list of results
  const search_results_ul = document.getElementById("search-items");
  // Get search bar element
  const search_bar = document.getElementById("search-bar");

  if (isVisible) {
    // Clear search bar results
    toggleSearchBarResults("", false);

    // Get 5 most relevant search results
    let search_results = searchBarResults(term, 5);

    // For each result, make a button
    search_results.forEach((result) => {
      const li = document.createElement("li");
      const button = document.createElement("BUTTON");

      button.setAttribute("class", "search-result-button highlight-onselect");
      button.appendChild(document.createTextNode(result.name)); // Set button text to location name

      // When button is clicked, update information panel with location information, enable information panel, and disable search bar results
      button.onclick = () => {
        updateInformationPanel(result);
        toggleInformationPanel(true);
        toggleSearchBarResults("", false);
        toggleLocationIndicator(result, true);
      };

      // Add list to search bar results
      li.appendChild(button);
      search_results_ul.appendChild(li);
    });

    // Change the border radius of the search bar to line up with the search results
    search_bar.style.borderRadius = "15px 15px 0 0";
    // Add a box shadow to the search results
    search_results_ul.style.boxShadow =
      "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset";
  } else {
    // Remove all search results
    while (search_results_ul.firstChild) {
      search_results_ul.removeChild(search_results_ul.firstChild);
    }

    // Reset border radius of search bar
    search_bar.style.borderRadius = "25px";
    // Remove box shadow from search results
    search_results_ul.style.boxShadow = "none";
  }
}

// Populate list of floors in UI
function floorListUI(floorList) {
  const floorDiv = document.getElementById("floor-buttons");

  // For each floor, add a button to the div
  floorList.forEach((floor) => {
    let button = document.createElement("BUTTON");
    button.setAttribute("class", "highlight-onselect");
    button.appendChild(document.createTextNode(floor.name));

    // Focus on floor when clicked
    button.onclick = () => {
      focusOnFloor(floorList, floor);
    };

    floorDiv.appendChild(button);
  });
}

function toggleFloorVisibility(floor, isVisible) {
  // Enable/disable floor in scene
  floor.visible = isVisible;

  // Enable/disable locations in floor
  toggleFloorLocationsVisibility(floor, isVisible);
}

function toggleFloorLocationsVisibility(floor, isVisible) {
  // Loop through children of floorGroup
  floor.children.forEach((child) => {
    // Check if the child is a location group
    if (child.name == "locations") {
      // Enable/disable all CSS2DObjects
      child.children.forEach((cssObject) => {
        cssObject.visible = isVisible;
      });
    }
  });
}

function toggleFloorExtrusions(floor, isExtruded) {
  // Get necessary meshes for extrusions
  let extruded_mesh = floor.getObjectByName("extruded_mesh");
  let upper_floor = floor.getObjectByName("upper_floor");
  let extruded_path = floor.getObjectByName("extruded_path");
  let other_path = floor.getObjectByName("other_path");

  if (extruded_mesh && upper_floor && extruded_path && other_path) {
    if (!isExtruded) {
      // Disable extruded mesh
      extruded_mesh.visible = false;
      upper_floor.visible = false;

      // Move extruded path down to be level with rest of floor
      extruded_path.position.z = other_path.position.z;
    } else {
      // Get properties of current floor
      let floorProperty =
        floorProperties[
          floorProperties.findIndex((elem) => elem["name"] == floor.name)
        ];

      // Enable extruded mesh
      extruded_mesh.visible = true;
      // Enable upper floor mesh
      upper_floor.visible = true;

      // Move extruded path up to proper height
      extruded_path.position.z =
        (floorProperty.extrudeDepth + 1) * floorProperty.svgScale;
    }
  }
}

// Animate camera and controls to focus on object
function moveCameraToPosition(pos, lookAt, duration) {
  // Get spherical coordinates of camera position
  const spherical = new THREE.Spherical().setFromVector3(camera.position);
  const controlSpherical = new THREE.Spherical().setFromVector3(
    controls.target
  );
  // Calculate spherical coordinates from target position
  const finalSpherical = new THREE.Spherical().setFromCartesianCoords(
    pos.x,
    pos.y,
    pos.z
  );

  // Begin animation of camera position and rotation
  gsap.to(spherical, {
    duration: duration,
    radius: finalSpherical.radius,
    phi: finalSpherical.phi,
    theta: finalSpherical.theta,
    onUpdate: function () {
      // Get coordinates from spherical coordinates, set camera position
      const position = new THREE.Vector3().setFromSpherical(spherical);
      camera.position.set(position.x, position.y, position.z);
      controls.update();
    },
  });

  // Calculate spherical coordinates from lookAt position
  const finalControlSpherical = new THREE.Spherical().setFromCartesianCoords(
    lookAt.x,
    lookAt.y,
    lookAt.z
  );
  finalControlSpherical.radius = 0;
  finalControlSpherical.phi = 0.0001;
  finalControlSpherical.theta = 0;

  // Begin Tween animation of controls target position, look at object
  gsap.to(controlSpherical, {
    duration: duration,
    radius: finalControlSpherical.radius,
    phi: finalControlSpherical.phi,
    theta: finalControlSpherical.theta,
    onUpdate: function () {
      // Set target position of controls from current sphere coordinates
      controls.target = new THREE.Vector3().setFromSpherical(controlSpherical);
      controls.update();
    },
  });
}

function focusOnFloor(floorGroups, selectedFloor) {
  // Disable all floors
  floorGroups.forEach((floor) => {
    toggleFloorVisibility(floor, false);
  });

  // Enable selected floor
  toggleFloorVisibility(selectedFloor, true);

  // Enable floor locations
  toggleFloorLocationsVisibility(selectedFloor, true);

  // Disable extrusions
  toggleFloorExtrusions(selectedFloor, false);

  // Position camera above floor by (zoom) units
  const zoom = 4;
  let newCameraPos = {
    x: 0,
    y: selectedFloor.position.y + zoom,
    z: 0,
  };
  moveCameraToPosition(newCameraPos, { x: 0, y: 0, z: 0 }, 1); // Animate camera movement to focus on object

  render();
}

function unfocus(floorGroups) {
  floorGroups.forEach((floor) => {
    // Enable all floors
    toggleFloorVisibility(floor, true);
    // Disable all locations
    toggleFloorLocationsVisibility(floor, false);
    // Enable extruded sections
    toggleFloorExtrusions(floor, true);
    // Move camera to default position
    moveCameraToPosition(initialCameraPosition, { x: 0, y: 0, z: 0 }, 1);
  });
}
