import { useState } from "react";

function FloorButton({ text, onSelect, selected, isTop, isBottom }) {
  if (isTop) {
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
  selectedFloorIndex,
  setSelectedFloorIndex,
}) {
  return (
    <div className="z-10 absolute bottom-4 right-4 flex flex-col-reverse shadow-md">
      {buildingProps.map((floorProps, index) => {
        return (
          <FloorButton
            key={index}
            text={buildingProps[index].name}
            onSelect={() => {
              if (selectedFloorIndex == index) {
                setSelectedFloorIndex(null);
              } else {
                setSelectedFloorIndex(index);
              }
            }}
            selected={selectedFloorIndex == index}
            isTop={index == buildingProps.length - 1}
            isBottom={index == 0}
          />
        );
      })}
    </div>
  );
}
