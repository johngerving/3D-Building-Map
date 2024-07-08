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
import { usePutFloors } from "../../../hooks/api/usePutFloors.jsx";
import { usePostFloor } from "../../../hooks/api/usePostFloor.jsx";
import { usePostLocation } from "../../../hooks/api/usePostLocation.jsx";

import SwapUp from "../../../assets/swap_up.svg?react";
import SwapDown from "../../../assets/swap_down.svg?react";
import Trash from "../../../assets/trash-icon.svg?react";

function AddNewLocation({ buildingName, floorID }) {
  const { isPending, variables, mutate, isError } =
    usePostLocation(buildingName);

  if (isError)
    return (
      <p className="text-center m-auto w-full">
        <i>Error creating location</i>
      </p>
    );

  // Show temporary UI if the mutation is still occurring
  if (isPending) {
    return (
      <Tree
        name={"Untitled"}
        style={{ marginBottom: "10px", opacity: 0.5 }}
        childStyle={{ overflow: "hidden" }}
        disabled={true}
      ></Tree>
    );
  }

  return (
    <button
      className="w-full p-3 mr-[5px] mb-[5px] rounded-lg bg-gray-100 hover:bg-gray-200"
      onClick={() => {
        mutate({ buildingName: buildingName, floorID: floorID });
      }}
    >
      Add Location +
    </button>
  );
}

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

  const labelClassName = "text-right w-full leading-8";
  const inputClassName = "border w-full mb-1 mr-1 h-8 p-1";

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
        className={inputClassName}
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
        className={inputClassName}
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
        className={inputClassName}
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
        className={inputClassName}
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
        className={inputClassName}
      />
    </div>
  );
}

function Locations({
  buildingName,
  floorID,
  selectedLocation,
  setSelectedLocation,
}) {
  const { locations } = useLocations(buildingName);

  return (
    locations[floorID] && (
      <Tree
        name={"Locations"}
        style={{ margin: "20px 0 0 35px" }}
        childStyle={{ margin: "0 0 0 40px" }}
        border={false}
      >
        <div className="p-1">
          {locations[floorID].map((location, index) => (
            <Tree
              key={location.locationID}
              name={location.name}
              style={{ marginBottom: "5px" }}
              childStyle={{ overflowX: "hidden" }}
              onClick={(isOpen) => {
                if (isOpen && selectedLocation == location) {
                  setSelectedLocation(null);
                } else {
                  setSelectedLocation(location);
                }
              }}
            >
              <SingleLocation buildingName={buildingName} location={location} />
            </Tree>
          ))}
          <AddNewLocation buildingName={buildingName} floorID={floorID} />
        </div>
      </Tree>
    )
  );
}

function SingleFloorInfo({
  buildingName,
  floor,
  floorsChanged,
  setFloorsChanged,
  debouncingStates,
  setDebouncingStates,
}) {
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

  // Debounce the floor state and mutate 2 seconds after last input change
  const { isDebouncing, debouncedValue } = useDebounce(floor, 2000);

  // Get update and mutate functions
  const { update } = useUpdateFloor(buildingName);
  const { mutate } = usePutFloor(buildingName, debouncingStates);

  // When the debounced value changes, mutate the data if input has been changed
  useEffect(() => {
    if (floorsChanged.includes(floor.floorID)) {
      mutate(floor);
    }
  }, [debouncedValue]);

  useEffect(() => {
    setDebouncingStates((debouncingStates) => {
      return {
        ...debouncingStates,
        [floor.floorID]: isDebouncing,
      };
    });
  }, [isDebouncing]);

  // Function to update the value of a parameter in the floor
  const handleInputChange = (newParam) => {
    if (!floorsChanged.includes(floor.floorID)) {
      setFloorsChanged([...floorsChanged, floor.floorID]);
    }

    // Cancel any current queries to prevent overwriting new input with fetched data
    queryClient.cancelQueries({
      queryKey: ["floors", floor.buildingName],
    });

    // Update the floor with the new parameter

    update(floor.floorID, (old) => {
      return Object.assign({}, old, newParam);
    });
  };

  const labelClassName = "text-right w-full leading-8";
  const inputClassName = "border w-full mb-1 mr-1 h-8 p-1";
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
          className={inputClassName}
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
          className={inputClassName}
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
          className={inputClassName}
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
          className={inputClassName}
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
          className={inputClassName}
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
          className={inputClassName}
        />

        <label className={labelClassName} htmlFor={extrudedSectionsInputId}>
          Extruded Sections
        </label>
        <div>
          {floor.extrudedSections.map((section, index) => (
            <div key={index} className="flex">
              <input
                type="text"
                id={
                  index == floor.extrudedSections.length - 1
                    ? extrudedSectionsInputId
                    : null
                }
                name="extrudedSections"
                value={floor.extrudedSections[index]}
                onChange={(e) =>
                  handleInputChange({
                    extrudedSections: floor.extrudedSections.map(
                      (section, i) => {
                        if (i == index) {
                          return e.target.value;
                        } else {
                          return section;
                        }
                      }
                    ),
                  })
                }
                className={inputClassName}
              />
              <button
                className="bg-red-300 h-8 rounded-sm hover:bg-red-400"
                onClick={() => {
                  handleInputChange({
                    extrudedSections: floor.extrudedSections.filter(
                      (section, i) => {
                        return i != index;
                      }
                    ),
                  });
                }}
              >
                <Trash className="fill-red-600" />
              </button>
            </div>
          ))}
          <button
            className="w-full h-9 mr-[5px] mb-[5px] rounded-lg bg-gray-100 hover:bg-gray-200"
            onClick={() => {
              handleInputChange({
                extrudedSections: [...floor.extrudedSections, ""],
              });
            }}
          >
            Add Section +
          </button>
        </div>

        <label className={labelClassName} htmlFor={extrudeDepthInputId}>
          Extrude Depth
        </label>
        <input
          type="text"
          id={extrudeDepthInputId}
          name="extrudeDepth"
          value={floor.extrudeDepth}
          onChange={(e) => handleInputChange({ extrudeDepth: e.target.value })}
          className={inputClassName}
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
          className={inputClassName}
        />
      </div>
    </div>
  );
}

function AddNewFloor({ buildingName }) {
  const { isPending, variables, mutate, isError } = usePostFloor(buildingName);

  if (isError)
    return (
      <p className="text-center m-auto w-full">
        <i>Error creating floor</i>
      </p>
    );

  // Show temporary UI if the mutation is still occurring
  if (isPending) {
    const tempFloorInfo = {
      floorID: 0,
      buildingName: buildingName,
      index: 0,
      name: "Untitled Floor",
      svg: "",
      scale: 1,
      verticalGap: 0,
      position: [0, 0],
      extrudedSections: [],
      floorLayer: "",
      excludedSections: [],
      extrudeDepth: 0,
    };
    return (
      <Tree
        name={tempFloorInfo.name}
        style={{ marginBottom: "10px", opacity: 0.5 }}
        childStyle={{ overflow: "hidden" }}
        disabled={true}
      ></Tree>
    );
  }

  return (
    <button
      className="w-full p-3 rounded-lg bg-gray-100 hover:bg-gray-200"
      onClick={() => {
        mutate({ buildingName: buildingName });
      }}
    >
      Add Floor +
    </button>
  );
}

function FloorInfo({
  buildingName,
  selectedFloor,
  selectedLocation,
  setSelectedFloor,
  setSelectedLocation,
}) {
  const queryClient = useQueryClient();
  const { floors } = useFloors(buildingName);

  const [floorsChanged, setFloorsChanged] = useState([]);

  const [debouncingStates, setDebouncingStates] = useState({});

  // Function to swap floor with the one below it
  const handleDownClick = (index) => {
    if (index < floors.length - 1) {
      // Indicate that the input has been changed
      setFloorsChanged((floorsChanged) => {
        const additions = [];
        if (!floorsChanged.includes(floors[index].floorID)) {
          additions.push(floors[index].floorID);
        }
        if (!floorsChanged.includes(floors[index + 1].floorID)) {
          additions.push(floors[index + 1].floorID);
        }
        return [...floorsChanged, ...additions];
      });

      // Cancel any current queries to prevent overwriting new input with fetched data
      queryClient.cancelQueries({
        queryKey: ["floors", buildingName],
      });

      // Update the query data to swap the floors
      queryClient.setQueryData(["floors", buildingName], (oldFloors) => {
        return oldFloors.map((oldFloor, i) => {
          if (i == index) {
            const nextOldFloor = oldFloors[index + 1];
            return {
              ...nextOldFloor,
              index: index,
            };
          } else if (i == index + 1) {
            const prevOldFloor = oldFloors[index];
            return {
              ...prevOldFloor,
              index: index + 1,
            };
          } else {
            return oldFloor;
          }
        });
      });
    }
  };

  // Function to swap floor with the one below it
  const handleUpClick = (index) => {
    if (index > 0) {
      // Indicate that the input has been changed
      setFloorsChanged((floorsChanged) => {
        const additions = [];
        if (!floorsChanged.includes(floors[index].floorID)) {
          additions.push(floors[index].floorID);
        }
        if (!floorsChanged.includes(floors[index - 1].floorID)) {
          additions.push(floors[index - 1].floorID);
        }
        return [...floorsChanged, ...additions];
      });

      // Cancel any current queries to prevent overwriting new input with fetched data
      queryClient.cancelQueries({
        queryKey: ["floors", buildingName],
      });

      // Update the query data to swap the floors
      queryClient.setQueryData(["floors", buildingName], (oldFloors) => {
        const newFloors = oldFloors.map((oldFloor, i) => {
          if (i == index) {
            const prevOldFloor = oldFloors[index - 1];
            return {
              ...prevOldFloor,
              index: index,
            };
          } else if (i == index - 1) {
            const nextOldFloor = oldFloors[index];
            return {
              ...nextOldFloor,
              index: index - 1,
            };
          } else {
            return oldFloor;
          }
        });

        return newFloors;
      });
    }
  };

  return (
    <div className="p-4 pr-3">
      {floors.map((floor, index) => {
        return (
          /* {index == 0 ? (
              <div className="w-full h-2 bg-blue-400 rounded"></div>
            ) : null} */
          <div key={index} className="relative">
            <div className="absolute top-0 right-0 h-10 flex">
              <button
                className="h-full mr-1 fill-black hover:fill-blue-600"
                onClick={(e) => handleUpClick(index)}
              >
                <SwapUp className="fill-inherit" />
              </button>
              <button
                className="h-full mr-2 fill-black hover:fill-blue-600"
                onClick={(e) => handleDownClick(index)}
              >
                <SwapDown className="fill-inherit" />
              </button>
            </div>

            <Tree
              name={floor.name}
              style={{ marginBottom: "10px" }}
              childStyle={{ overflow: "hidden" }}
            >
              <SingleFloorInfo
                buildingName={buildingName}
                floor={floor}
                floorsChanged={floorsChanged}
                setFloorsChanged={setFloorsChanged}
                debouncingStates={debouncingStates}
                setDebouncingStates={setDebouncingStates}
              />
              <Locations
                buildingName={buildingName}
                floorID={floor.floorID}
                selectedLocation={selectedLocation}
                setSelectedLocation={setSelectedLocation}
              />
            </Tree>
          </div>
        );
      })}
      <AddNewFloor buildingName={buildingName} />
    </div>
  );
}

export function EditorPanel() {
  const [
    buildingName,
    selectedFloor,
    selectedLocation,
    setSelectedLocation,
    setSelectedFloor,
  ] = useOutletContext();

  const { isFloorPending } = useFloors(buildingName);
  const { isLocationPending } = useLocations(buildingName);

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
        <FloorInfo
          buildingName={buildingName}
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
