import { Html } from "@react-three/drei";

import { useLocations } from "../../../hooks/api/useLocations.jsx";
import { useBuilding } from "../../../hooks/api/useBuilding.jsx";
import { useEffect } from "react";

function LocationText({
  floor,
  location,
  selectedLocation,
  setSelectedLocation,
  fontSize,
}) {
  function handleSelectLocation() {
    if (selectedLocation != location) {
      setSelectedLocation(location);
    } else {
      setSelectedLocation(null);
    }
  }

  const isLocationSelected =
    selectedLocation && selectedLocation.locationID == location.locationID;

  return (
    (location.defaultEnabled || isLocationSelected) && (
      <Html
        zIndexRange={[5, 0]}
        center
        position={[
          location.position[0] * floor.scale,
          0,
          location.position[1] * floor.scale,
        ]}
        distanceFactor={fontSize}
      >
        <div
          onClick={handleSelectLocation}
          className={`whitespace-nowrap select-none hover:cursor-pointer hover:text-blue-600 ${
            isLocationSelected ? "text-blue-600" : ""
          }`}
        >
          {location.name}
        </div>
      </Html>
    )
  );
}

export default function Locations({
  buildingName,
  buildingID,
  floor,
  visible,
  selectedFloor,
  selectedLocation,
  setSelectedLocation,
}) {
  const { building } = useBuilding(buildingName);
  const { locations } = useLocations(buildingID);

  // Only draw locations if floor is visible
  if (visible) {
    return (
      <group
        position={
          selectedFloor == null && selectedLocation != null
            ? [0, floor.extrudeDepth * floor.scale * 0.5, 0]
            : [0, 0, 0]
        }
      >
        {/* For each floor, draw out all of the locations */}
        {locations[floor.floorID].map((location, index) => {
          const isIndividualLocationVisible =
            (selectedFloor == null && selectedLocation == location) ||
            selectedFloor != null;
          if (isIndividualLocationVisible) {
            return (
              <LocationText
                floor={floor}
                location={location}
                key={index}
                selectedLocation={selectedLocation}
                setSelectedLocation={setSelectedLocation}
                fontSize={building.locationFontSize}
              />
            );
          } else {
            return null;
          }
        })}
      </group>
    );
  } else {
    return null;
  }
}
