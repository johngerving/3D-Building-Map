import { Html, Billboard, Text } from "@react-three/drei";
import * as THREE from "three";
import { useState, useRef, useEffect } from "react";

function LocationText({ floorProps, location }) {
  const [hover, setHover] = useState(false);

  return (
    <Html
      position={[
        location.position[0] * floorProps.scale,
        0,
        location.position[1] * floorProps.scale,
      ]}
    >
      {/* <div
        onPointerEnter={() => setHover(true)}
        onPointerLeave={() => setHover(false)}
        className="w-2 h-2 rounded-full bg-black hover:cursor-pointer"
      ></div> */}
      <div className="whitespace-nowrap select-none relative bottom-5 left-5 text-sm hover:cursor-pointer hover:text-blue-600">
        {location.name}
      </div>
    </Html>
  );
}

export default function Locations({ floorProps, locations, selected }) {
  if (selected) {
    return (
      <group position={[0, floorProps.verticalGap * 4, 0]}>
        {locations[floorProps.id].map((location, index) => {
          return (
            <LocationText
              floorProps={floorProps}
              location={location}
              key={index}
            />
          );
        })}
      </group>
    );
  } else {
    return null;
  }
}
