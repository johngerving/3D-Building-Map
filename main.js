import * as THREE from "three";
import { SVGLoader } from "three/addons/loaders/SVGLoader.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import * as BufferGeometryUtils from "three/addons/utils/BufferGeometryUtils.js";

// Floor properties - defines name of floor, location of svg, which sections are extruded, and the locations on the floor
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

// Example cube
const cubeMaterial = new THREE.MeshPhongMaterial();
const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
scene.add(cube);

render();

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
  const loader = new SVGLoader();

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

    loader.load(floorProperty.svg, function (data) {
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
            const geometry = new THREE.ShapeGeometry(shape).toNonIndexed();

            // Check if current path section should be extruded
            if (floorProperty.extrudedSections.includes(id))
              geometries.extruded[id].pathGeometries.push(geometry);
            // Add geometry to extruded geometries array
            else geometries.nonExtruded.other.push(geometry); // Add geometry to non-extruded geometries array
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
            ).toNonIndexed();

            if (geometry) {
              // If geometry exists
              // Check if current path section should be extruded
              if (floorProperty.extrudedSections.includes(id))
                geometries.extruded[id].pathGeometries.push(geometry);
              // Add geometry to extruded geometries array
              else geometries.nonExtruded.other.push(geometry); // Add geometry to non-extruded geometries array
            }
          }
        }
      }
    });
  });
  return floorGroups;
}
