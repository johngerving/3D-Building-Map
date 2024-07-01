import { useState } from "react";

function FloorButton({ text, onSelect, selected, isTop, isBottom }) {
  // Select floor when clicked
  if (isTop) {
    // Rounded top corners if at top of list
    return (
      <button
        onClick={onSelect}
        className={`w-11 h-11 border border-gray-100 rounded-t-md ${
          selected
            ? "bg-blue-600 text-white border-none shadow-inner"
            : "bg-white hover:text-blue-600"
        }`}
      >
        {text}
      </button>
    );
  } else if (isBottom) {
    // Rounded bottom corners if at bottom of list
    return (
      <button
        onClick={onSelect}
        className={`w-11 h-11 border border-gray-100 rounded-b-md ${
          selected
            ? "bg-blue-600 text-white border-none shadow-inner"
            : "bg-white hover:text-blue-600"
        }`}
      >
        {text}
      </button>
    );
  } else {
    return (
      <button
        onClick={onSelect}
        className={`w-11 h-11 border border-gray-100 ${
          selected
            ? "bg-blue-600 text-white border-none shadow-inner"
            : "bg-white hover:text-blue-600"
        }`}
      >
        {text}
      </button>
    );
  }
}

export default function FloorSelect({
  buildingProps,
  selectedFloor,
  setSelectedFloor,
}) {
  return (
    <div className="z-20 absolute bottom-4 right-4 flex flex-col-reverse shadow-md">
      {/* Add button for each floor */}
      {buildingProps.map((floorProps, index) => {
        return (
          <FloorButton
            key={index}
            text={buildingProps[index].name}
            onSelect={() => {
              // When button clicked, select or unselected floor
              if (
                selectedFloor != null &&
                selectedFloor.id == buildingProps[index].id
              ) {
                setSelectedFloor(null);
              } else {
                setSelectedFloor(buildingProps[index]);
              }
            }}
            selected={
              selectedFloor != null &&
              selectedFloor.id == buildingProps[index].id
            }
            isTop={index == buildingProps.length - 1}
            isBottom={index == 0}
          />
        );
      })}
    </div>
  );
}
