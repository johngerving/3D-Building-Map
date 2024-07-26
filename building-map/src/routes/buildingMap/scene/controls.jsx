import getFloorYPosFromIndex from "./getFloorYPosFromIndex";
import * as THREE from "three";
import { OrbitControls } from "@react-three/drei";
import { useSpring } from "@react-spring/three";
import { useRef, useEffect, useState } from "react";

export default function Controls({
  initialPosition,
  zoomMultiplier,
  floors,
  selectedFloor,
  setLoaded = null,
}) {
  // Get reference to OrbitControls
  const controlsRef = useRef();

  // Keep track of whether initial zoom in animation has occurred
  const [initialized, setInitialized] = useState(false);

  // Animation at start of application - zoom in
  useSpring(() => ({
    // Start zoomed out
    from: {
      x: initialPosition[0] * zoomMultiplier,
      y: initialPosition[1] * zoomMultiplier,
      z: initialPosition[2] * zoomMultiplier,
    },
    // End at default position
    to: {
      x: initialPosition[0],
      y: initialPosition[1],
      z: initialPosition[2],
    },
    config: {
      precision: 0.01,
    },
    // Disable OrbitControls at start of animation
    onStart: () => {
      controlsRef.current.enabled = false;
    },
    // Update position of orbitcontrols
    onChange: (props) => {
      controlsRef.current.object.position.x = props.value.x;
      controlsRef.current.object.position.y = props.value.y;
      controlsRef.current.object.position.z = props.value.z;
      // console.log(controlsRef.current.object.position);
      controlsRef.current.update();
    },
    // Enable OrbitControls at end of animation
    onRest: () => {
      controlsRef.current.enabled = true;
      setInitialized(true); // Set initialized to true
      if (setLoaded) {
        setLoaded(true);
      }
    },
  }));

  const [cameraPos, api] = useSpring(() => ({
    from: {
      radius: 0,
      phi: 0,
      theta: 0,
      height: 0,
    },
  }));

  useEffect(() => {
    // Only trigger animation if camera initialization has occurred
    if (initialized) {
      if (selectedFloor != null) {
        const floorHeight = getFloorYPosFromIndex(
          floors,
          floors.findIndex((element) => element == selectedFloor)
        );

        // Get distance from camera to selected floor and convert to spherical coordinates
        const initialSpherical = new THREE.Spherical().setFromCartesianCoords(
          controlsRef.current.object.position.x,
          controlsRef.current.object.position.y - floorHeight,
          controlsRef.current.object.position.z
        );

        // Convert default position to spherical coordinates
        const defaultPositionToSpherical =
          new THREE.Spherical().setFromCartesianCoords(
            initialPosition[0],
            initialPosition[1],
            initialPosition[2]
          );

        api.start(() => ({
          from: {
            // Set spherical coordinates to initial camera spherical coordinates
            radius: initialSpherical.radius,
            phi: initialSpherical.phi,
            theta: initialSpherical.theta,
            height: controlsRef.current.target.y,
          },
          to: {
            // Animate to be centered around selected floor
            radius: defaultPositionToSpherical.radius,
            phi: defaultPositionToSpherical.phi,
            theta: initialSpherical.theta, // Rotation around y axis stays the same
            height: floorHeight,
          },
          config: {
            precision: 0.01, // Lower value keeps animation from jumping
          },
          // Disable OrbitControls at start of animation
          onStart: () => {
            controlsRef.current.enabled = false;
          },
          // Update position of orbitcontrols
          onChange: (props) => {
            // Convert current spherical coordinates to Vector3
            const spherical = new THREE.Spherical(
              props.value.radius,
              props.value.phi,
              props.value.theta
            );
            const position = new THREE.Vector3().setFromSpherical(spherical);

            // Add height of floor to camera position
            position.y += props.value.height;

            // Set camera position to current animated position
            controlsRef.current.object.position.x = position.x;
            controlsRef.current.object.position.y = position.y;
            controlsRef.current.object.position.z = position.z;

            // Set target that camera looks at to the floor height
            controlsRef.current.target = new THREE.Vector3(
              0,
              props.value.height,
              0
            );

            controlsRef.current.update();
          },
          // Enable OrbitControls at end of animation
          onRest: () => {
            controlsRef.current.enabled = true;
          },
        }));
      } else {
        // Get distance from camera to origin and convert to spherical coordinates
        const initialSpherical = new THREE.Spherical().setFromCartesianCoords(
          controlsRef.current.object.position.x,
          controlsRef.current.object.position.y,
          controlsRef.current.object.position.z
        );

        // Convert default position to spherical coordinates
        const defaultPositionToSpherical =
          new THREE.Spherical().setFromCartesianCoords(
            initialPosition[0],
            initialPosition[1],
            initialPosition[2]
          );

        api.start(() => ({
          from: {
            // Set spherical coordinates to initial camera spherical coordinates
            radius: initialSpherical.radius,
            phi: initialSpherical.phi,
            theta: initialSpherical.theta,
            height: controlsRef.current.target.y,
          },
          to: {
            // Animate to be centered around origin in default position
            radius: defaultPositionToSpherical.radius,
            phi: defaultPositionToSpherical.phi,
            theta: defaultPositionToSpherical.theta,
            height: 0,
          },
          config: {
            precision: 0.0001, // Lower value keeps animation from jumping
          },
          // Disable OrbitControls at start of animation
          onStart: () => {
            controlsRef.current.enabled = false;
          },
          // Update position of orbitcontrols
          onChange: (props) => {
            // Convert current spherical coordinates to Vector3
            const spherical = new THREE.Spherical(
              props.value.radius,
              props.value.phi,
              props.value.theta
            );
            const position = new THREE.Vector3().setFromSpherical(spherical);

            // Add height of floor to camera position
            position.y += props.value.height;

            // Set camera position to current animated position
            controlsRef.current.object.position.x = position.x;
            controlsRef.current.object.position.y = position.y;
            controlsRef.current.object.position.z = position.z;

            // Set target that camera looks at to the floor height
            controlsRef.current.target = new THREE.Vector3(
              0,
              props.value.height,
              0
            );

            controlsRef.current.update();
          },
          // Enable OrbitControls at end of animation
          onRest: () => {
            controlsRef.current.enabled = true;
          },
        }));
      }
    }
  }, [selectedFloor]);

  // Update camera position when edited
  useEffect(() => {
    controlsRef.current.object.position.x = initialPosition[0];
    controlsRef.current.object.position.y = initialPosition[1];
    controlsRef.current.object.position.z = initialPosition[2];
  }, [initialPosition]);

  return <OrbitControls ref={controlsRef} target={[0, 0, 0]} />;
}
