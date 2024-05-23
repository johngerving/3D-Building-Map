import { SVGLoader } from "three/addons/loaders/SVGLoader.js";
import * as BufferGeometryUtils from "three/addons/utils/BufferGeometryUtils.js";
import * as THREE from "three";

// Load the floor SVGs, create meshes, and return groups out of them
export function loadFloors(floorProperties) {
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
