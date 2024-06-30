import { Html, Billboard, Text } from "@react-three/drei";
import * as THREE from "three";
import { useState, useRef, useEffect } from "react";

function LocationText({
  floorProps,
  location,
  selectedLocation,
  setSelectedLocation,
}) {
  function handleSelectLocation() {
    if (selectedLocation != location) {
      setSelectedLocation(location);
    } else {
      setSelectedLocation(null);
    }
  }
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
      <div
        onClick={handleSelectLocation}
        className={`whitespace-nowrap select-none text-[12px] hover:cursor-pointer hover:text-blue-600 ${
          selectedLocation == location ? "text-blue-600" : ""
        }`}
      >
        {location.name}
      </div>
    </Html>
  );
}

export default function Locations({
  floorProps,
  locations,
  visible,
  selectedLocation,
  setSelectedLocation,
}) {
  if (visible) {
    return (
      <group>
        {locations[floorProps.id].map((location, index) => {
          return (
            <LocationText
              floorProps={floorProps}
              location={location}
              key={index}
              selectedLocation={selectedLocation}
              setSelectedLocation={setSelectedLocation}
            />
          );
        })}
      </group>
    );
  } else {
    return null;
  }
}
