import { useId, useEffect } from "react";
import { createPortal } from "react-dom";
import { useQueryClient } from "@tanstack/react-query";
import { useDebounce } from "../../../../hooks/api/useDebounce";
import { Tree } from "../tree";
import { Locations } from "./locations";

import { useFloors } from "../../../../hooks/api/useFloors";
import { useDeleteFloor } from "../../../../hooks/api/useDeleteFloor";
import { usePostFloor } from "../../../../hooks/api/usePostFloor.jsx";
import { usePutFloor } from "../../../../hooks/api/usePutFloor.jsx";
import { useUpdateFloor } from "../../../../hooks/api/useUpdateFloor.jsx";

import { useState } from "react";

import SwapUp from "../../../../assets/swap_up.svg?react";
import SwapDown from "../../../../assets/swap_down.svg?react";
import Trash from "../../../../assets/trash-icon.svg?react";

function SingleFloorInfo({
  buildingID,
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
  const { update } = useUpdateFloor(buildingID);
  const { mutate } = usePutFloor(buildingID, debouncingStates);

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
      queryKey: ["floors", floor.buildingID],
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

function AddNewFloor({ buildingID }) {
  const { isPending, variables, mutate, isError } = usePostFloor(buildingID);

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
      buildingID: buildingID,
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
        mutate({ buildingID: buildingID });
      }}
    >
      Add Floor +
    </button>
  );
}

function DeleteFloorModal({ floorToDelete, setFloorToDelete, mutate }) {
  return (
    <>
      <div className="z-30 absolute top-0 left-0 w-screen h-screen bg-gray-600 opacity-50"></div>
      <div className="z-30 absolute top-0 left-0 w-screen h-screen flex items-center justify-center">
        <div className="w-[35rem] bg-white rounded-lg text-slate-600 p-7">
          <h1 className="text-4xl mb-4">Confirmation</h1>
          <p className="text-lg">
            Are you sure you want to delete floor "{floorToDelete.name}"? This
            decision cannot be undone.
          </p>
          <div className="w-full flex justify-end mt-3">
            <button
              className="rounded-md border shadow-sm p-3 mr-7 w-20 hover:bg-gray-100 transition"
              onClick={() => setFloorToDelete(null)}
            >
              Cancel
            </button>
            <button
              className="rounded-md border shadow-sm p-3 bg-red-500 hover:bg-red-600 text-white w-20 transition"
              onClick={() => {
                mutate({ floorID: floorToDelete.floorID });
                setFloorToDelete(null);
              }}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export function FloorInfo({
  buildingID,
  selectedFloor,
  selectedLocation,
  setSelectedFloor,
  setSelectedLocation,
}) {
  const queryClient = useQueryClient();
  const { floors } = useFloors(buildingID);

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
        queryKey: ["floors", buildingID],
      });

      // Update the query data to swap the floors
      queryClient.setQueryData(["floors", buildingID], (oldFloors) => {
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
        queryKey: ["floors", buildingID],
      });

      // Update the query data to swap the floors
      queryClient.setQueryData(["floors", buildingID], (oldFloors) => {
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

  const {
    isPending: isDeletePending,
    variables: deleteVariables,
    mutate: mutateDelete,
  } = useDeleteFloor(buildingID);

  // Hold state of floor selected to delete
  const [floorToDelete, setFloorToDelete] = useState(null);

  return (
    <>
      {/* Render modal if a floor is selected to delete */}
      {floorToDelete &&
        createPortal(
          <DeleteFloorModal
            floorToDelete={floorToDelete}
            setFloorToDelete={setFloorToDelete}
            mutate={mutateDelete}
          />,
          document.body
        )}
      <div className="p-4 pr-3">
        <h2 className="text-4xl text-slate-600 p-3">Floors</h2>
        {floors.map((floor, index) => {
          return (
            <div
              key={index}
              className={`relative ${
                deleteVariables && deleteVariables.floorID == floor.floorID
                  ? "opacity-50"
                  : ""
              }`}
            >
              <div className="absolute top-0 right-0 h-10 flex">
                <button
                  className={`h-full mr-1 fill-black ${
                    deleteVariables && deleteVariables.floorID == floor.floorID
                      ? ""
                      : "hover:fill-blue-600"
                  }`}
                  onClick={(e) => handleUpClick(index)}
                  disabled={
                    deleteVariables && deleteVariables.floorID == floor.floorID
                  }
                >
                  <SwapUp className="fill-inherit" />
                </button>
                <button
                  className={`h-full mr-4 fill-black ${
                    deleteVariables && deleteVariables.floorID == floor.floorID
                      ? ""
                      : "hover:fill-blue-600"
                  }`}
                  onClick={(e) => handleDownClick(index)}
                  disabled={
                    deleteVariables && deleteVariables.floorID == floor.floorID
                  }
                >
                  <SwapDown className="fill-inherit" />
                </button>
                <button
                  className={`bg-red-300 h-8 rounded-sm mt-[5px] mr-2 ${
                    deleteVariables && deleteVariables.floorID == floor.floorID
                      ? ""
                      : "hover:bg-red-400"
                  }`}
                  onClick={() => {
                    setFloorToDelete(floor);
                  }}
                  disabled={
                    deleteVariables && deleteVariables.floorID == floor.floorID
                  }
                >
                  <Trash className="fill-red-600" />
                </button>
              </div>

              <Tree
                name={floor.name}
                style={{ marginBottom: "10px" }}
                childStyle={{ overflow: "hidden" }}
                disabled={
                  deleteVariables && deleteVariables.floorID == floor.floorID
                }
              >
                <SingleFloorInfo
                  buildingID={buildingID}
                  floor={floor}
                  floorsChanged={floorsChanged}
                  setFloorsChanged={setFloorsChanged}
                  debouncingStates={debouncingStates}
                  setDebouncingStates={setDebouncingStates}
                />
                <Locations
                  buildingID={buildingID}
                  floorID={floor.floorID}
                  selectedLocation={selectedLocation}
                  setSelectedLocation={setSelectedLocation}
                />
              </Tree>
            </div>
          );
        })}
        <AddNewFloor buildingID={buildingID} />
      </div>
    </>
  );
}
