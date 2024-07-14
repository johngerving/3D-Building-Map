import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { useSpring } from "@react-spring/web";

import { useCursor } from "../useCursor.jsx";
import { FloorInfo } from "./floorInfo.jsx";

import { useFloors } from "../../../../hooks/api/useFloors.jsx";
import { useLocations } from "../../../../hooks/api/useLocations.jsx";
import { BuildingInfo } from "./buildingInfo.jsx";

export function EditorPanel() {
  const [
    building,
    selectedFloor,
    selectedLocation,
    setSelectedLocation,
    setSelectedFloor,
  ] = useOutletContext();

  const buildingID = building.buildingID;

  const { isFloorPending } = useFloors(buildingID);
  const { isLocationPending } = useLocations(buildingID);

  // Set min and max width of editor panel
  const maxWidth = 800;
  const minWidth = 20;

  const [isHovering, setIsHovering] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  const [width, setWidth] = useState(600); // Initial width is 400px

  const cursor = useCursor(isResizing);

  const position = useSpring({
    left: !isFloorPending && !isLocationPending ? `0px` : `${-1 * width}px`,
  });

  useEffect(() => {
    // On mouse down, if the resizer was clicked, enable resizing
    function handleMouseDown(e) {
      if (e.target.classList.contains("resize")) {
        e.preventDefault();
        setIsResizing(true);
      }
    }

    // On mouse up, disable resizing no matter what
    function handleMouseUp(e) {
      setIsResizing(false);
    }

    // On mouse move, set the width of the element to the mouse X position if resizing is enabled and the mouse is within the width requirements
    function handleMouseMove(e) {
      e.preventDefault();
      if (isResizing && e.clientX > minWidth && e.clientX < maxWidth) {
        setWidth(e.clientX);
      }
    }

    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isResizing]);

  return (
    <div
      id="editor-panel"
      style={{ width: width, ...position }}
      className={`z-10 absolute top-0 h-full bg-white`}
    >
      <div
        id="scroll-container"
        className={`h-full mr-2 overflow-y-scroll ${
          width < 100 ? "hidden" : ""
        }`}
      >
        <BuildingInfo building={building} />
        <FloorInfo
          buildingID={buildingID}
          selectedFloor={selectedFloor}
          selectedLocation={selectedLocation}
          setSelectedFloor={setSelectedFloor}
          setSelectedLocation={setSelectedLocation}
        />
      </div>
      <div
        id="resize"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        // Resizer should change cursor on hover if resizing is not enabled
        // Resizer should be blue if hovered over or resizing is enabled
        className={`resize z-10 absolute top-0 right-0 w-2 h-full shadow-md ${
          !isResizing ? "hover:cursor-col-resize" : ""
        } ${isHovering || isResizing ? "bg-blue-500" : "bg-white"}`}
      ></div>
    </div>
  );
}
