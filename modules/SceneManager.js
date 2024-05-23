import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { loadFloors } from "./loadFloors.js";
import { CSS2DObject } from "three/addons/renderers/CSS2DRenderer.js";
import TWEEN from "@tweenjs/tween.js";
import { gsap } from "gsap";

class SceneManager {
  constructor(
    floorProperties,
    scene,
    camera,
    canvas,
    renderer,
    labelRenderer,
    controls
  ) {
    this.floorProperties = floorProperties;
    this.scene = scene;

    // Initial camera position - away from origin, looking at origin
    this.initialCameraPosition = { x: 0, y: 4, z: 4 };
    this.camera = camera;

    // Initialize canvas and renderer, enable antialiasing
    this.canvas = canvas;
    this.renderer = renderer;

    // Create label renderer for location labels
    this.labelRenderer = labelRenderer;

    this.controls = controls;

    this.currentSelectedLocation;
  }

  constructScene() {
    this.camera.position.x = this.initialCameraPosition.x;
    this.camera.position.y = this.initialCameraPosition.y;
    this.camera.position.z = this.initialCameraPosition.z;
    this.camera.lookAt(0, 0, 0);

    // Render scene whenever camera moves
    this.controls.addEventListener("change", this.render);
    this.controls.screenSpacePanning = true;

    // Render when the window is resized
    window.addEventListener("resize", this.render);

    this.scene.background = new THREE.Color(0xcfe2e3);

    // White directional lighting
    const directionalLightColor = 0xffffff;
    const directionalLightIntensity = 2.5;
    const directionalLight = new THREE.DirectionalLight(
      directionalLightColor,
      directionalLightIntensity
    );
    directionalLight.position.set(-1, 2, 4);
    this.scene.add(directionalLight);

    // Soft white ambient light
    const ambientLight = new THREE.AmbientLight(0xcfe2e3);
    this.scene.add(ambientLight);

    this.labelRenderer.setSize(window.innerWidth, window.innerHeight);
    this.labelRenderer.domElement.style.position = "absolute";
    this.labelRenderer.domElement.style.top = "0px";
    this.labelRenderer.domElement.style.zIndex = 1;
    document.body.appendChild(this.labelRenderer.domElement);
  }

  setUIManager(uiManager) {
    this.uiManager = uiManager;
  }

  addFloors() {
    // Load floor SVGs and add to scene
    return loadFloors(this.floorProperties).then((floorGroups) => {
      floorGroups.forEach((floorGroup) => {
        this.scene.add(floorGroup);
      });
      return floorGroups;
    });
  }

  resizeRendererToDisplaySize(renderer) {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const needResize =
      this.canvas.width !== width || this.canvas.height !== height; // Check if canvas dimensions do not match client dimensions
    if (needResize) {
      this.renderer.setSize(width, height, false);
      this.labelRenderer.setSize(width, height);
    }
    return needResize;
  }

  // Update controls, animations, and call render function
  animate() {
    requestAnimationFrame(animate);

    TWEEN.update();

    this.render();
  }

  render = () => {
    // Check if window has been resized and update camera accordingly
    if (
      this.resizeRendererToDisplaySize(this.renderer) ||
      this.resizeRendererToDisplaySize(this.labelRenderer)
    ) {
      this.camera.aspect = this.canvas.clientWidth / this.canvas.clientHeight;
      this.camera.updateProjectionMatrix();
    }

    this.renderer.render(this.scene, this.camera); // Render scene
    this.labelRenderer.render(this.scene, this.camera); // Render labels
  };

  focusOnFloor(floorGroups, selectedFloor) {
    // Disable all floors
    floorGroups.forEach((floor) => {
      this.toggleFloorVisibility(floor, false);
    });

    // Enable selected floor
    this.toggleFloorVisibility(selectedFloor, true);

    // Enable floor locations
    this.toggleFloorLocationsVisibility(selectedFloor, true);

    // Disable extrusions
    this.toggleFloorExtrusions(selectedFloor, false);

    // Position camera above floor by (zoom) units
    const zoom = 4;
    let newCameraPos = {
      x: 0,
      y: selectedFloor.position.y + zoom,
      z: 0,
    };
    this.moveCameraToPosition(newCameraPos, { x: 0, y: 0, z: 0 }, 1); // Animate camera movement to focus on object

    this.render();
  }

  unfocus(floorGroups) {
    floorGroups.forEach((floor) => {
      // Enable all floors
      this.toggleFloorVisibility(floor, true);
      // Disable all locations
      this.toggleFloorLocationsVisibility(floor, false);
      // Enable extruded sections
      this.toggleFloorExtrusions(floor, true);
      // Move camera to default position
      this.moveCameraToPosition(
        this.initialCameraPosition,
        { x: 0, y: 0, z: 0 },
        1
      );
    });
  }

  locationUIHandler = (location) => {
    // Update information panel with location information and open information panel
    this.uiManager.updateInformationPanel(location);
    this.uiManager.toggleInformationPanel(true);
    this.toggleLocationIndicator(location, true);
  };

  addLocationUI() {
    // Loop through floors
    this.floorProperties.forEach((floorProperty) => {
      // Get floor group from floor name, check if it exists
      let floorGroup = this.scene.getObjectByName(floorProperty.name);
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
          button.addEventListener(
            "pointerdown",
            this.locationUIHandler.bind(this, location)
          );
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

        this.toggleFloorLocationsVisibility(floorGroup, false);
      }
    });
  }

  toggleFloorVisibility = (floor, isVisible) => {
    // Enable/disable floor in scene
    floor.visible = isVisible;

    // Enable/disable locations in floor
    this.toggleFloorLocationsVisibility(floor, isVisible);
  };

  toggleLocationIndicator = (location, isVisible) => {
    if (isVisible) {
      this.toggleLocationIndicator("", false);

      const labelDiv = document.createElement("div");
      labelDiv.className = "location-point";

      const floorProperty = this.floorProperties.find(
        (e) => e.name == location.floorName
      );

      let floorGroup = this.scene.getObjectByName(location.floorName);

      this.currentSelectedLocation = new CSS2DObject(labelDiv);
      this.currentSelectedLocation.position.set(
        location.position[0] * floorProperty.svgScale + floorGroup.position.x,
        floorGroup.position.y,
        location.position[1] * floorProperty.svgScale + floorGroup.position.z
      );
      // label.center.set(0, 1);
      // Add to group
      this.scene.add(this.currentSelectedLocation);
      this.currentSelectedLocation.layers.set(0);
    } else {
      if (this.currentSelectedLocation !== undefined) {
        this.currentSelectedLocation.removeFromParent();
      }
    }
  };

  toggleFloorLocationsVisibility = (floor, isVisible) => {
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
  };

  toggleFloorExtrusions = (floor, isExtruded) => {
    // Get necessary meshes for extrusions
    const extruded_mesh = floor.getObjectByName("extruded_mesh");
    const upper_floor = floor.getObjectByName("upper_floor");
    const extruded_path = floor.getObjectByName("extruded_path");
    const other_path = floor.getObjectByName("other_path");

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
          this.floorProperties[
            this.floorProperties.findIndex((elem) => elem["name"] == floor.name)
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
  };

  // Animate camera and controls to focus on object
  moveCameraToPosition = (pos, lookAt, duration) => {
    // Get spherical coordinates of camera position
    const spherical = new THREE.Spherical().setFromVector3(
      this.camera.position
    );
    const controlSpherical = new THREE.Spherical().setFromVector3(
      this.controls.target
    );
    // Calculate spherical coordinates from target position
    const finalSpherical = new THREE.Spherical().setFromCartesianCoords(
      pos.x,
      pos.y,
      pos.z
    );

    const camera = this.camera;
    const controls = this.controls;

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
        controls.target = new THREE.Vector3().setFromSpherical(
          controlSpherical
        );
        controls.update();
      },
    });
  };
}

// Sort floors by name so they are in the correct order in UI
function sortFloorsByName(floorProperties, floorList) {
  let sortedGroups = floorList.slice().sort(function (a, b) {
    // Sorted based on the order of "name" properties in the floorProperties array
    let indexOfA = floorProperties.findIndex((elem) => elem["name"] == a.name);
    let indexOfB = floorProperties.findIndex((elem) => elem["name"] == b.name);
    return indexOfA - indexOfB;
  });

  return sortedGroups;
}

export { SceneManager, sortFloorsByName };
