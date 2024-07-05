import { useState, useEffect, useId } from "react";
import { useOutletContext } from "react-router-dom";
import { useSpring, animated } from "@react-spring/web";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { useRevalidator } from "react-router-dom";

import { useCursor } from "./useCursor.jsx";
import { putFloor } from "../../../api/put.js";

import { useFloors } from "../../../hooks/api/useFloors.jsx";
import { useLocations } from "../../../hooks/api/useLocations.jsx";

const usePutFloor = () => {
  const queryClient = useQueryClient();
  const revalidator = useRevalidator();

  return useMutation({
    mutationFn: putFloor,
    // When mutated:
    onMutate: async (floor) => {
      // Cancel refetches
      await queryClient.cancelQueries({
        queryKey: ["floors", floor.buildingName],
      });

      // Get previous value
      const previousFloors = queryClient.getQueryData([
        "floors",
        floor.buildingName,
      ]);

      // Optimistically update to new value
      queryClient.setQueryData(["floors", floor.buildingName], (old) =>
        // Replace old floor with new floor if they have the same ID
        old.map((oldFloor) => {
          if (oldFloor.floorID == floor.floorID) {
            return floor;
          } else {
            return oldFloor;
          }
        })
      );

      // Return context object with old data
      return { previousFloors };
    },
    // If the mutation fails, roll back the change
    onError: (err, floor, context) => {
      queryClient.setQueryData(
        ["floors", floor.buildingName],
        context.previousFloors
      );
      console.log(err);
    },
    // Always refetch after error or success
    onSettled: (floor) => {
      queryClient.invalidateQueries({
        queryKey: ["floors", floor.data.buildingName],
      });
      revalidator.revalidate();
    },
  });
};

function SingleFloorInfo({ floor, index }) {
  const nameInputId = useId();
  const svgInputId = useId();
  const scaleInputId = useId();
  const positionXInputId = useId();
  const positionYInputId = useId();
  const verticalGapInputId = useId();
  const extrudedSectionsInputId = useId();
  const extrudeDepthInputId = useId();
  const floorLayerInputId = useId();

  const [name, setName] = useState(floor.name);

  const putFloorMutation = usePutFloor();

  const labelClassName = "text-right w-full";
  return (
    // Label and input for each field in floor
    <div className="p-1">
      <h1 className="text-xl text-slate-700 mb-2">{index + 1}</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "max-content auto",
          gridGap: "10px",
          paddingLeft: "1rem",
        }}
      >
        <label className={labelClassName} htmlFor={nameInputId}>
          Name
        </label>
        <input
          type="text"
          id={nameInputId}
          name="name"
          value={name}
          onChange={(e) => {
            putFloorMutation.mutate({
              ...floor,
              name: e.target.value,
            });
            setName(e.target.value);
          }}
          className="border"
        />

        <label className={labelClassName} htmlFor={svgInputId}>
          SVG
        </label>
        <input
          type="text"
          id={svgInputId}
          name="svg"
          defaultValue={floor.svg}
          className="border"
        />

        <label className={labelClassName} htmlFor={scaleInputId}>
          Scale
        </label>
        <input
          type="text"
          id={scaleInputId}
          name="scale"
          defaultValue={floor.scale}
          className="border"
        />

        <label className={labelClassName} htmlFor={positionXInputId}>
          Position X
        </label>
        <input
          type="text"
          id={positionXInputId}
          name="positionX"
          defaultValue={floor.position[0]}
          className="border"
        />

        <label className={labelClassName} htmlFor={positionYInputId}>
          Position Y
        </label>
        <input
          type="text"
          id={positionYInputId}
          name="positionY"
          defaultValue={floor.position[1]}
          className="border"
        />

        <label className={labelClassName} htmlFor={verticalGapInputId}>
          Vertical Gap
        </label>
        <input
          type="text"
          id={verticalGapInputId}
          name="verticalGap"
          defaultValue={floor.verticalGap}
          className="border"
        />

        <label className={labelClassName} htmlFor={extrudedSectionsInputId}>
          Extruded Sections
        </label>
        <input
          type="text"
          id={extrudedSectionsInputId}
          name="extrudedSections"
          defaultValue={floor.extrudedSections}
          className="border"
        />

        <label className={labelClassName} htmlFor={extrudeDepthInputId}>
          Extrude Depth
        </label>
        <input
          type="text"
          id={extrudeDepthInputId}
          name="extrudeDepth"
          defaultValue={floor.extrudeDepth}
          className="border"
        />

        <label className={labelClassName} htmlFor={floorLayerInputId}>
          Floor Layer
        </label>
        <input
          type="text"
          id={floorLayerInputId}
          name="floorLayer"
          defaultValue={floor.floorLayer}
          className="border"
        />
      </div>
    </div>
  );
}

function FloorInfo({ buildingName }) {
  const labelClassName = "text-right";

  const { floors } = useFloors(buildingName);

  return (
    <div className="p-4 pr-3">
      {floors.map((floor, index) => {
        return <SingleFloorInfo key={index} floor={floor} index={index} />;
      })}
    </div>
  );
}

export function EditorPanel() {
  const [
    buildingName,
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
      style={{ width: width }}
      className={`z-10 absolute top-0 left-0 h-full bg-white`}
    >
      <div id="scroll-container" className="h-full mr-2 overflow-y-scroll">
        <FloorInfo buildingName={buildingName} />
      </div>
      <div
        id="resize"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        // Resizer should change cursor on hover if resizing is not enabled
        // Resizer should be blue if hovered over or resizing is enabled
        className={`resize z-10 absolute top-0 right-0 w-2 h-full bg-white shadow-md ${
          !isResizing ? "hover:cursor-col-resize" : ""
        } ${isHovering || isResizing ? "bg-blue-500" : ""}`}
      ></div>
    </div>
  );
}
