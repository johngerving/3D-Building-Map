import { Html, Billboard, Text } from "@react-three/drei";
import * as THREE from "three";
import { useState, useRef, useEffect } from "react";

function LocationText({ floorProps, location }) {
  const [hover, setHover] = useState(false);

  return (
    <Html
      zIndexRange={[5, 0]}
      center
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
      <div className="whitespace-nowrap select-none text-[12px] hover:cursor-pointer hover:text-blue-600">
        {location.name}
      </div>
    </Html>
  );
}

export default function Locations({ floorProps, locations, selected }) {
  if (selected) {
    return (
      <group>
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
