import * as THREE from "three";
import { SVGLoader } from "three/addons/loaders/SVGLoader.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import * as BufferGeometryUtils from "three/addons/utils/BufferGeometryUtils.js";

// Floor properties - defines name of floor, location of svg, which sections are extruded, and the locations on the floor
const floorProperties = [
  {
    name: "Floor 1",
    svg: "./Library-1.svg",
    svgScale: 0.01,
    extrudedSections: ["A-WALL-FULL"],
    extrudeDepth: 20,
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
// const cubeMaterial = new THREE.MeshPhongMaterial();
// const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
// const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
// scene.add(cube);

const floorGroups = loadFloors(floorProperties);

render();

function render() {
  // Check if window has been resized and update camera accordingly
  if (resizeRendererToDisplaySize(renderer)) {
    camera.aspect = canvas.clientWidth / canvas.clientHeight;
    camera.updateProjectionMatrix();
  }

  renderer.render(scene, camera); // Render scene
}

async function resizeRendererToDisplaySize(renderer) {
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
    const geometries = {
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
              geometries.extruded[id].extrudeGeometries.push(extrudedGeometry);
            }
          });
        }

        // Create Group for the floor
        const floorGroup = new THREE.Group();

        // Materials for paths and extruded meshes
        const pathMaterial = new THREE.MeshStandardMaterial({
          // color: "#09c",
          side: THREE.DoubleSide,
        });

        const extrudeMaterial = new THREE.MeshPhongMaterial();

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
          const extrudeMesh = new THREE.Mesh(extrudeGeometry, extrudeMaterial);
          const pathMesh = new THREE.Mesh(pathGeometry, pathMaterial);

          // Scale meshes to appropriate size
          extrudeMesh.scale.multiplyScalar(floorProperty.svgScale);
          extrudeMesh.scale.y *= -1;

          pathMesh.scale.multiplyScalar(floorProperty.svgScale);
          pathMesh.position.z = floorProperty.extrudeDepth / 100; // Shift path mesh up to be at top of extrusion
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

        floorGroup.add(otherPathMesh);

        floorGroup.rotateX(-Math.PI / 2); // Rotate group so it is horizontal

        // Get bounding box of group
        const boundingBox = new THREE.Box3().setFromObject(floorGroup);
        const size = boundingBox.getSize(new THREE.Vector3());

        // Center floor group based on bounding box
        floorGroup.position.x = -size.x / 2;
        floorGroup.position.y = size.y / 2;
        floorGroup.position.z = -size.z / 2;

        floorGroups.push(floorGroup);
      },
      function (xhr) {
        console.log("SVG " + (xhr.loaded / xhr.total) * 100 + "% loaded");
      },
      function (error) {
        console.log("An error happened: " + error);
      }
    );
  });

  return floorGroups;
}
