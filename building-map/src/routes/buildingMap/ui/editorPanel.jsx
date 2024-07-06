import { useState, useEffect, useId, useRef } from "react";
import { useOutletContext } from "react-router-dom";
import { useSpring, animated } from "@react-spring/web";
import { useIsFetching, useQueryClient } from "@tanstack/react-query";

import { useCursor } from "./useCursor.jsx";
import { Tree } from "./tree.jsx";

import { useFloors } from "../../../hooks/api/useFloors.jsx";
import { useLocations } from "../../../hooks/api/useLocations.jsx";
import { useUpdateFloor } from "../../../hooks/api/useUpdateFloor.jsx";
import { useUpdateLocation } from "../../../hooks/api/useUpdateLocation.jsx";
import { useDebounce } from "../../../hooks/api/useDebounce.jsx";
import { usePutFloor } from "../../../hooks/api/usePutFloor.jsx";
import { usePutLocation } from "../../../hooks/api/usePutLocation.jsx";

function SingleLocation({ buildingName, location }) {
  const nameInputId = useId();
  const descriptionInputId = useId();
  const positionXInputId = useId();
  const positionYInputId = useId();
  const typeInputId = useId();

  const queryClient = useQueryClient();

  // Set initial delay to infinity to prevent mutation at start
  const [inputChanged, setInputChanged] = useState(false);

  // Debounce the floor state and mutate 2 seconds after last input change
  const { isDebouncing, debouncedValue } = useDebounce(location, 2000);

  // Get update and mutate functions
  const { update } = useUpdateLocation(buildingName, location.floorID);
  const { mutate } = usePutLocation(buildingName, isDebouncing);

  // When the debounced value changes, mutate the data if input has been changed
  useEffect(() => {
    if (inputChanged) {
      mutate(debouncedValue);
    }
  }, [debouncedValue]);

  // Function to update the value of a parameter in the floor
  const handleInputChange = (newParam) => {
    // Set the debounce delay to 2 seconds
    setInputChanged(true);
    // Cancel any current queries to prevent overwriting new input with fetched data
    queryClient.cancelQueries({
      queryKey: ["locations", location.buildingName],
    });

    // Update the location with the new parameter
    update(location.locationID, (old) => {
      return Object.assign({}, old, newParam);
    });
  };

  const labelClassName = "text-right w-full";

  return (
    <div
      className="p-1"
      style={{
        display: "grid",
        gridTemplateColumns: "max-content auto",
        gridGap: "10px",
        padding: "0 0.25rem 0.5rem 1rem",
      }}
    >
      <label className={labelClassName} htmlFor={nameInputId}>
        Name
      </label>
      <input
        type="text"
        id={nameInputId}
        name="name"
        value={location.name}
        onChange={(e) => handleInputChange({ name: e.target.value })}
        className="border"
      />

      <label className={labelClassName} htmlFor={descriptionInputId}>
        Description
      </label>
      <textarea
        id={descriptionInputId}
        rows={5}
        name="description"
        value={location.description}
        onChange={(e) => handleInputChange({ description: e.target.value })}
        className="border"
      />

      <label className={labelClassName} htmlFor={positionXInputId}>
        Position X
      </label>
      <input
        type="text"
        id={positionXInputId}
        name="positionX"
        value={location.position[0]}
        onChange={(e) =>
          handleInputChange({
            position: location.position.map((el, i) => {
              if (i == 0) {
                return e.target.value;
              } else {
                return el;
              }
            }),
          })
        }
        className="border"
      />

      <label className={labelClassName} htmlFor={positionYInputId}>
        Position Y
      </label>
      <input
        type="text"
        id={positionYInputId}
        name="positionY"
        value={location.position[1]}
        onChange={(e) =>
          handleInputChange({
            position: location.position.map((el, i) => {
              if (i == 1) {
                return e.target.value;
              } else {
                return el;
              }
            }),
          })
        }
        className="border"
      />

      <label className={labelClassName} htmlFor={typeInputId}>
        Type
      </label>
      <input
        type="text"
        id={typeInputId}
        name="type"
        value={location.type}
        onChange={(e) => handleInputChange({ type: e.target.value })}
        className="border"
      />
    </div>
  );
}

function Locations({ buildingName, floorID }) {
  const { locations } = useLocations(buildingName);

  return (
    <Tree
      name={"Locations"}
      style={{ margin: "20px 0 0 35px" }}
      childStyle={{ margin: "0 0 0 40px" }}
      border={false}
    >
      {locations[floorID].map((location, index) => (
        <Tree
          key={location.locationID}
          name={location.name}
          style={{ margin: "0 5px 5px 0" }}
          childStyle={{ overflowX: "hidden" }}
        >
          <SingleLocation buildingName={buildingName} location={location} />
        </Tree>
      ))}
    </Tree>
  );
}

function SingleFloorInfo({ buildingName, floor, index }) {
  const nameInputId = useId();
  const svgInputId = useId();
  const scaleInputId = useId();
  const positionXInputId = useId();
  const positionYInputId = useId();
  const verticalGapInputId = useId();
  const extrudedSectionsInputId = useId();
  const extrudeDepthInputId = useId();
  const floorLayerInputId = useId();

  const queryClient = useQueryClient();

  // Set initial delay to infinity to prevent mutation at start
  const [inputChanged, setInputChanged] = useState(false);

  // Debounce the floor state and mutate 2 seconds after last input change
  const { isDebouncing, debouncedValue } = useDebounce(floor, 2000);

  // Get update and mutate functions
  const { update } = useUpdateFloor(buildingName);
  const { mutate } = usePutFloor(buildingName, isDebouncing);

  // When the debounced value changes, mutate the data if input has been changed
  useEffect(() => {
    if (inputChanged) {
      mutate(debouncedValue);
    }
  }, [debouncedValue]);

  // Function to update the value of a parameter in the floor
  const handleInputChange = (newParam) => {
    // Set the debounce delay to 2 seconds
    setInputChanged(true);
    // Cancel any current queries to prevent overwriting new input with fetched data
    queryClient.cancelQueries({
      queryKey: ["floors", floor.buildingName],
    });

    // Update the floor with the new parameter
    update(floor.floorID, (old) => {
      return Object.assign({}, old, newParam);
    });
  };

  const labelClassName = "text-right w-full";
  return (
    // Label and input for each field in floor
    <div className="p-1">
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
          value={floor.name}
          onChange={(e) => handleInputChange({ name: e.target.value })}
          className="border"
        />

        <label className={labelClassName} htmlFor={svgInputId}>
          SVG
        </label>
        <input
          type="text"
          id={svgInputId}
          name="svg"
          value={floor.svg}
          onChange={(e) => handleInputChange({ svg: e.target.value })}
          className="border"
        />

        <label className={labelClassName} htmlFor={scaleInputId}>
          Scale
        </label>
        <input
          type="text"
          id={scaleInputId}
          name="scale"
          value={floor.scale}
          onChange={(e) => handleInputChange({ scale: e.target.value })}
          className="border"
        />

        <label className={labelClassName} htmlFor={positionXInputId}>
          Position X
        </label>
        <input
          type="text"
          id={positionXInputId}
          name="positionX"
          value={floor.position[0]}
          onChange={(e) =>
            handleInputChange({
              position: floor.position.map((el, i) => {
                if (i == 0) {
                  return e.target.value;
                } else {
                  return el;
                }
              }),
            })
          }
          className="border"
        />

        <label className={labelClassName} htmlFor={positionYInputId}>
          Position Y
        </label>
        <input
          type="text"
          id={positionYInputId}
          name="positionY"
          value={floor.position[1]}
          onChange={(e) =>
            handleInputChange({
              position: floor.position.map((el, i) => {
                if (i == 1) {
                  return e.target.value;
                } else {
                  return el;
                }
              }),
            })
          }
          className="border"
        />

        <label className={labelClassName} htmlFor={verticalGapInputId}>
          Vertical Gap
        </label>
        <input
          type="text"
          id={verticalGapInputId}
          name="verticalGap"
          value={floor.verticalGap}
          onChange={(e) => handleInputChange({ verticalGap: e.target.value })}
          className="border"
        />

        {/* TODO: Change to add buttons */}
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
          value={floor.extrudeDepth}
          onChange={(e) => handleInputChange({ extrudeDepth: e.target.value })}
          className="border"
        />

        <label className={labelClassName} htmlFor={floorLayerInputId}>
          Floor Layer
        </label>
        <input
          type="text"
          id={floorLayerInputId}
          name="floorLayer"
          value={floor.floorLayer}
          onChange={(e) => handleInputChange({ floorLayer: e.target.value })}
          className="border"
        />
      </div>
    </div>
  );
}

function FloorInfo({ buildingName }) {
  const { floors } = useFloors(buildingName);

  return (
    <div className="p-4 pr-3">
      {floors.map((floor, index) => {
        return (
          <Tree
            key={index}
            name={floor.name}
            style={{ marginBottom: "10px" }}
            childStyle={{ overflow: "hidden" }}
          >
            <SingleFloorInfo
              buildingName={buildingName}
              floor={floor}
              index={index}
            />
            <Locations buildingName={buildingName} floorID={floor.floorID} />
          </Tree>
        );
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

  const { isFloorPending } = useFloors(buildingName);
  const { isLocationPending } = useLocations(buildingName);

  // Set min and max width of editor panel
  const maxWidth = 800;
  const minWidth = 300;

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
      <div id="scroll-container" className="h-full mr-2 overflow-y-scroll">
        <FloorInfo buildingName={buildingName} />
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
