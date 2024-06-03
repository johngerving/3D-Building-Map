import * as THREE from "three";
import { useState, useMemo, useRef, useLayoutEffect } from "react";
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader";
import { OrbitControls } from "@react-three/drei";

function FloorOutline({ paths }) {}

function Walls({ paths }) {
  const [shapePaths, strokePaths] = useMemo(() => {
    let shapePaths = [];
    let strokePaths = [];

    paths.forEach((path) => {
      const fillColor = path.userData.style.fill;
      const strokeColor = path.userData.style.stroke;

      if (fillColor !== undefined && fillColor !== "none") {
        shapePaths.push(path);
      }
      if (strokeColor !== undefined && strokeColor !== "none") {
        strokePaths.push(path);
      }
    });

    return [shapePaths, strokePaths];
  }, [paths]);

  const geometries = useMemo(() => {
    let geometries = [];

    shapePaths.map((path) => {
      const shapes = SVGLoader.createShapes(path);
      shapes.forEach((shape) => {
        geometries.push(new THREE.ShapeGeometry(shape).toNonIndexed());
      });
    });

    strokePaths.forEach((path) => {
      path.subPaths.forEach((subPath) => {
        geometries.push(
          SVGLoader.pointsToStroke(subPath.getPoints(), path.userData.style)
        );
      });
    });

    return geometries;
  }, [shapePaths, strokePaths]);

  return (
    <>
      {geometries.map((geometry, index) => {
        return (
          <mesh key={index} geometry={geometry}>
            <meshStandardMaterial color={0x000000} side={THREE.DoubleSide} />
          </mesh>
        );
      })}
    </>
  );
}

function Map({ paths }) {
  const [shapePaths, strokePaths] = useMemo(() => {
    let shapePaths = [];
    let strokePaths = [];

    paths.forEach((path) => {
      const fillColor = path.userData.style.fill;
      const strokeColor = path.userData.style.stroke;

      if (fillColor !== undefined && fillColor !== "none") {
        shapePaths.push(path);
      }
      if (strokeColor !== undefined && strokeColor !== "none") {
        strokePaths.push(path);
      }
    });

    return [shapePaths, strokePaths];
  }, [paths]);

  const geometries = useMemo(() => {
    let geometries = [];

    shapePaths.map((path) => {
      const shapes = SVGLoader.createShapes(path);
      shapes.forEach((shape) => {
        geometries.push(new THREE.ShapeGeometry(shape).toNonIndexed());
      });
    });

    strokePaths.forEach((path) => {
      path.subPaths.forEach((subPath) => {
        geometries.push(
          SVGLoader.pointsToStroke(subPath.getPoints(), path.userData.style)
        );
      });
    });

    return geometries;
  }, [shapePaths, strokePaths]);

  return (
    <>
      {geometries.map((geometry, index) => {
        return (
          <mesh key={index} geometry={geometry}>
            <meshStandardMaterial color={0x000000} side={THREE.DoubleSide} />
          </mesh>
        );
      })}
    </>
  );
}

function groupPaths(paths) {
  let groupedPaths = {};
  paths.forEach((path) => {
    if (!groupedPaths[path.userData.node.parentElement.parentElement.id]) {
      groupedPaths[path.userData.node.parentElement.parentElement.id] = [];
    }
    groupedPaths[path.userData.node.parentElement.parentElement.id].push(path);
  });
  return groupedPaths;
}

function Floor({ floorProps }) {
  const { paths } = useLoader(SVGLoader, floorProps.svg);

  const groupedPaths = useMemo(() => {
    return groupPaths(paths);
  }, [paths]);

  const [mapPaths, wallPaths, outlinePaths] = useMemo(() => {
    let mapPaths = [],
      wallPaths = [],
      outlinePaths = [];

    for (const group in groupedPaths) {
      if (floorProps.extrudedSections.includes(group)) {
        wallPaths = wallPaths.concat(groupedPaths[group]);
      } else if (
        floorProps.floorLayer.layer.length > 0 &&
        floorProps.floorLayer.layer == group
      ) {
        outlinePaths = outlinePaths.concat(groupedPaths[group]);
      } else {
        mapPaths = mapPaths.concat(groupedPaths[group]);
      }
    }

    return [mapPaths, wallPaths, outlinePaths];
  }, [groupedPaths]);

  const ref = useRef();
  useLayoutEffect(() => {
    const sphere = new THREE.Box3()
      .setFromObject(ref.current)
      .getBoundingSphere(new THREE.Sphere());
    // ref.current.position.set(-sphere.center.x, -sphere.center.y, 0);
    // ref.current.position.set(0, 0, 0);
    console.log(ref.current.position);
  });

  return (
    <group ref={ref}>
      <Map paths={mapPaths} />
      <Walls paths={wallPaths} />
      <FloorOutline paths={outlinePaths} />
    </group>
  );
}

function Building({ buildingProps }) {
  return (
    <>
      {buildingProps.map((floorProps, index) => {
        if (index !== 3) {
          return null;
        } else {
          return <Floor key={floorProps.name} floorProps={floorProps} />;
        }
      })}
    </>
  );
}

function Box(props) {
  // This reference will give us direct access to the mesh
  const meshRef = useRef();
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (meshRef.current.rotation.x += delta));
  // Return view, these are regular three.js elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={meshRef}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
}

export default function Scene({ buildingProps }) {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas>
        <OrbitControls makeDefault />
        <directionalLight args={[0xffffff, 2.5]} />
        <ambientLight args={[0xcfe2e3]} />
        <Box position={[0, 0, 0]} />
        <Building buildingProps={buildingProps} />
      </Canvas>
    </div>
  );
}
