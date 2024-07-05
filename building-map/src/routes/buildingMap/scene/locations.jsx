import { Html } from "@react-three/drei";

import { useLocations } from "../../../hooks/api/useLocations.jsx";

function LocationText({
  floor,
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
        location.position[0] * floor.scale,
        0,
        location.position[1] * floor.scale,
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
  buildingName,
  floor,
  visible,
  selectedFloor,
  selectedLocation,
  setSelectedLocation,
}) {
  const { locations } = useLocations(buildingName);

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
