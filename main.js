import * as THREE from "three";
import { SVGLoader } from "three/addons/loaders/SVGLoader.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import * as BufferGeometryUtils from "three/addons/utils/BufferGeometryUtils.js";

const floorProperties = [
  {
    name: "Floor 1",
    svg: "./Library-1.svg",
    extrudedSections: ["A-WALL-FULL"],
    locations: [],
  },
];

// Initialize canvas and renderer, enable antialiasing
const canvas = document.querySelector("#c");
const renderer = new THREE.WebGLRenderer({ antialias: true, canvas });

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

// Define orbit controls - render scene whenever camera moves
const controls = new OrbitControls(camera, renderer.domElement);
controls.addEventListener("change", render);
controls.screenSpacePanning = true;

// Render when the window is resized
window.addEventListener("resize", render);

// White directional lighting
const directionalLightColor = 0xffffff;
const directionalLightIntensity = 3;
const directionalLight = new THREE.DirectionalLight(
  directionalLightColor,
  directionalLightIntensity
);
directionalLight.position.set(-1, 2, 4);
scene.add(directionalLight);

// Soft white ambient light
const ambientLight = new THREE.AmbientLight(0x404040);
scene.add(ambientLight);

const cubeMaterial = new THREE.MeshPhongMaterial();
const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
scene.add(cube);

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
  let floorGroups = [];
  floorProperties.forEach((floorProperty) => {
    let geometries = {
      extruded: {}, // Object for extruded sections geometries
      nonExtruded: { other: [] }, // Object for non-extruded sections geometries - for now, all in one set of geometries
    };

    // For each extruded section in the floor, create two arrays of geometries for that section
    floorProperty.extrudedSections.forEach((el) => {
      geometries.extruded[el] = {
        pathGeometries: [], // One array for the SVG paths of the section
        extrudeGeometries: [], // One array for the extruded mesh portion of the section
      };
    });
  });
  return floorGroups;
}
