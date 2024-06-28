import { useState } from "react";

function FloorButton({ text, isTop, isBottom }) {
  const [selected, setSelected] = useState(false);

  function handleClick() {
    setSelected(!selected);
  }

  if (isTop) {
    return (
      <button
        onClick={handleClick}
        className={`bg-white w-11 h-11 border border-gray-100 rounded-t-md ${
          selected
            ? "bg-blue-600 text-white border-none"
            : "hover:text-blue-600"
        }`}
      >
        {text}
      </button>
    );
  } else if (isBottom) {
    return (
      <button
        onClick={handleClick}
        className={`bg-white w-11 h-11 border border-gray-100 rounded-b-md ${
          selected
            ? "bg-blue-600 text-white border-none"
            : "hover:text-blue-600"
        }`}
      >
        {text}
      </button>
    );
  } else {
    return (
      <button
        onClick={handleClick}
        className={`bg-white w-11 h-11 border border-gray-100 ${
          selected
            ? "bg-blue-600 text-white border-none"
            : "hover:text-blue-600"
        }`}
      >
        {text}
      </button>
    );
  }
}

export default function FloorSelect({ buildingProps }) {
  return (
    <div className="z-10 absolute bottom-4 right-4 flex flex-col shadow-md">
      {buildingProps.map((floorProps, index) => {
        return (
          <FloorButton
            key={index}
            text={buildingProps.length - 1 - index}
            isTop={index == 0}
            isBottom={index == buildingProps.length - 1}
          />
        );
      })}
    </div>
  );
}
