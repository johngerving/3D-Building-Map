import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { useSpring, animated } from "@react-spring/web";

import { useCursor } from "./useCursor.jsx";

export function EditorPanel() {
  const [
    floors,
    locations,
    selectedLocation,
    setSelectedLocation,
    setSelectedFloor,
  ] = useOutletContext();

  // Set min and max width of editor panel
  const maxWidth = 800;
  const minWidth = 300;

  const [isHovering, setIsHovering] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  const [width, setWidth] = useState(400); // Initial width is 400px

  const cursor = useCursor(isResizing);

  useEffect(() => {
    // On mouse down, if the resizer was clicked, enable resizing
    function handleMouseDown(e) {
      e.preventDefault();
      if (e.target.classList.contains("resize")) {
        setIsResizing(true);
      }
    }

    // On mouse up, disable resizing no matter what
    function handleMouseUp(e) {
      e.preventDefault();
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
      style={{ width: width }}
      className={`z-10 absolute top-0 left-0 h-full bg-white`}
    >
      <div
        id="resize"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        // Resizer should change cursor on hover if resizing is not enabled
        // Resizer should be blue if hovered over or resizing is enabled
        className={`resize z-10 float-right w-2 h-full bg-white shadow-md ${
          !isResizing ? "hover:cursor-col-resize" : ""
        } ${isHovering || isResizing ? "bg-blue-500" : ""}`}
      ></div>
    </div>
  );
}
