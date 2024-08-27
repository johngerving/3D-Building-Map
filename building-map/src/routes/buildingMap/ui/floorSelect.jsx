import { useFloors } from "../../../hooks/api/useFloors";

function FloorButton({ text, onSelect, selected, isTop, isBottom }) {
  // Select floor when clicked
  return (
    <button
      onClick={onSelect}
      className={`w-11 h-11 border border-gray-100 overflow-hidden ${
        isTop ? "rounded-t-md" : ""
      } ${isBottom ? "rounded-b-md" : ""} ${
        selected
          ? "bg-blue-600 text-white border-none shadow-inner"
          : "bg-white hover:text-blue-600"
      }`}
    >
      {text}
    </button>
  );
}

export default function FloorSelect({
  buildingID,
  selectedFloor,
  setSelectedFloor,
}) {
  const { floors } = useFloors(buildingID);
  return (
    <div className="z-20 absolute bottom-4 right-4 flex flex-col-reverse shadow-md rounded-md">
      {/* Add button for each floor */}
      {floors.map((floor, index) => {
        return (
          <FloorButton
            key={index}
            text={floors[index].name}
            onSelect={() => {
              // When button clicked, select or unselected floor
              if (
                selectedFloor != null &&
                selectedFloor.floorID == floors[index].floorID
              ) {
                setSelectedFloor(null);
              } else {
                setSelectedFloor(floors[index]);
              }
            }}
            selected={
              selectedFloor != null &&
              selectedFloor.floorID == floors[index].floorID
            }
            isTop={index == floors.length - 1}
            isBottom={index == 0}
          />
        );
      })}
    </div>
  );
}
