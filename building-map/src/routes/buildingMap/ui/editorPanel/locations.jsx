import { useId, useState, useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";

import { useUpdateLocation } from "../../../../hooks/api/useUpdateLocation.jsx";
import { useDebounce } from "../../../../hooks/api/useDebounce.jsx";
import { Tree } from "../tree.jsx";

import Trash from "../../../../assets/trash-icon.svg?react";
import Close from "../../../../assets/close-icon.svg?react";

import { useFloors } from "../../../../hooks/api/useFloors.jsx";
import { useLocations } from "../../../../hooks/api/useLocations.jsx";
import { createPortal } from "react-dom";
import { usePostLocations } from "../../../../hooks/api/usePostLocations.jsx";
import { usePutLocation } from "../../../../hooks/api/usePutLocation.jsx";
import { usePostLocation } from "../../../../hooks/api/usePostLocation.jsx";
import { useDeleteLocation } from "../../../../hooks/api/useDeleteLocation.jsx";

function AddNewLocation({ buildingID, floorID }) {
  const { isPending, variables, mutate, isError } = usePostLocation(buildingID);

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
      className="w-full p-3 mr-[5px] mb-[5px] rounded-lg bg-gray-100 hover:bg-gray-200 transition"
      onClick={() => {
        mutate({ buildingID: buildingID, floorID: floorID });
      }}
    >
      Add Location +
    </button>
  );
}

function SingleLocation({ buildingID, location }) {
  const nameInputId = useId();
  const descriptionInputId = useId();
  const defaultEnabledId = useId();
  const positionXInputId = useId();
  const positionYInputId = useId();
  const typeInputId = useId();

  const queryClient = useQueryClient();

  // Set initial delay to infinity to prevent mutation at start
  const [inputChanged, setInputChanged] = useState(false);

  // Debounce the floor state and mutate 2 seconds after last input change
  const { isDebouncing, debouncedValue } = useDebounce(location, 2000);

  // Get update and mutate functions
  const { update } = useUpdateLocation(buildingID, location.floorID);
  const { mutate } = usePutLocation(buildingID, isDebouncing);

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
      queryKey: ["locations", location.buildingID],
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

      <label className={labelClassName} htmlFor={defaultEnabledId}>
        Default Enabled
      </label>
      <div className="flex items-center">
        <input
          type="checkbox"
          id={defaultEnabledId}
          name="defaultEnabled"
          checked={location.defaultEnabled}
          onChange={(e) =>
            handleInputChange({ defaultEnabled: e.target.checked })
          }
          className="scale-125 ml-1"
        />
        <div></div>
      </div>

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

function ScanLocationsModal({ buildingID, floor, setShowModal }) {
  const [floorLayer, setFloorLayer] = useState("");
  const [error, setError] = useState(null);
  const inputClassName = "border-2 border-gray-300 w-full mb-1 mr-1 h-8 p-1";

  const [view, setView] = useState(0);
  const [locations, setLocations] = useState(null);

  const { isPending, variables, mutate, isError } =
    usePostLocations(buildingID);

  const getLayerChildrenFromSVG = async (url, layerName) => {
    // Fetch the SVG and parse into an XML object
    fetch(url)
      .then((response) => response.text())
      .then((str) => new window.DOMParser().parseFromString(str, "text/xml"))
      .then((svg) => {
        const layer = svg.getElementById(layerName);

        // Check if layer exists, set error if it doesn't
        if (layer == null) {
          setError("Layer not found.");
          return;
        } else {
          setError(null);
        }

        // Populate locations with SVG data
        let locations = [];
        for (let i = 0; i < layer.children.length; i++) {
          // Go down layers to get to location data
          const translate =
            layer.children[i].children[0].getAttribute("transform");
          const positionRegex = /^translate\(([0-9|.]+) ([0-9|.]+)\)/;
          const regexMatch = translate.match(positionRegex);

          const position = [
            parseFloat(regexMatch[1]),
            parseFloat(regexMatch[2]),
          ];
          const name = layer.children[i].children[0].children[0].textContent;

          locations.push({
            name: name,
            position: position,
            floorID: floor.floorID,
            buildingID: buildingID,
          });
        }

        setLocations(locations);
        setView(1);
      });
  };

  return (
    <>
      <div className="z-30 absolute top-0 left-0 w-screen h-screen bg-gray-600 opacity-50"></div>
      <div className="z-30 absolute top-0 left-0 w-screen h-screen flex items-center justify-center">
        <div className="relative w-[35rem] bg-white rounded-lg text-slate-600 p-7">
          <button
            className="absolute right-1 top-1"
            onClick={() => setShowModal(false)}
          >
            <Close className="fill-gray-400 hover:fill-gray-500 transition w-9 h-9" />
          </button>
          <h1 className="text-4xl mb-4">Scan Locations</h1>
          {
            {
              0: (
                <>
                  <p className="text-lg mb-5">
                    {error || "Enter a layer to scan for locations."}
                  </p>
                  <form>
                    <input
                      type="text"
                      value={floorLayer}
                      onChange={(e) => setFloorLayer(e.target.value)}
                      className={inputClassName}
                    />
                    <button
                      className="rounded-md border shadow-sm px-3 py-2 mt-3 mr-7 w-20 text-white bg-blue-600 hover:bg-blue-700 transition"
                      onClick={(e) => {
                        e.preventDefault();
                        getLayerChildrenFromSVG(floor.svg, floorLayer);
                      }}
                    >
                      Scan
                    </button>
                  </form>
                </>
              ),
              1: locations && (
                <>
                  <p className="text-lg mb-3">
                    Found {locations.length} locations:
                  </p>
                  <p className="text-lg mb-2">
                    <i>
                      {locations
                        .map((location) => location.name)
                        .join(", ")
                        .substr(0, 50) + " . . ."}
                    </i>
                  </p>
                  <p className="text-lg mb-3">
                    Do you wish to add these locations?
                  </p>
                  <div>
                    <button
                      className="px-5 py-2 rounded bg-blue-600 hover:bg-blue-700 text-white mr-3 transition"
                      onClick={() => {
                        mutate({ locations: locations });
                        setView(2);
                      }}
                    >
                      Yes
                    </button>
                    <button
                      className="px-4 py-2 rounded border hover:bg-gray-50 transition"
                      onClick={() => {
                        setFloorLayer("");
                        setView(0);
                      }}
                    >
                      No, Select Another Layer
                    </button>
                  </div>
                </>
              ),
              2: (
                <>
                  {isError ? (
                    <p className="text-lg mb-2">
                      There was an error adding locations.
                    </p>
                  ) : isPending ? (
                    <p className="text-lg mb-2">
                      <i>Adding locations...</i>
                    </p>
                  ) : (
                    <>
                      <p>Locations added successfully.</p>
                    </>
                  )}
                </>
              ),
            }[view]
          }
        </div>
      </div>
    </>
  );
}

function ScanLocationsButton({ buildingID, floor }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        className="w-full rounded-lg bg-gray-100 hover:bg-gray-200 transition p-3 mb-4"
        onClick={() => setShowModal(true)}
      >
        Scan Floor for Locations
      </button>
      {showModal &&
        createPortal(
          <ScanLocationsModal
            buildingID={buildingID}
            floor={floor}
            setShowModal={setShowModal}
          />,
          document.body
        )}
    </>
  );
}

export function Locations({
  buildingID,
  floorID,
  selectedLocation,
  setSelectedLocation,
}) {
  const { floors } = useFloors(buildingID);
  const { locations } = useLocations(buildingID);

  const floor = floors.find((floor) => floor.floorID == floorID);

  const { isPending, variables, mutate, isError } =
    useDeleteLocation(buildingID);

  return (
    locations[floorID] && (
      <Tree
        name={"Locations"}
        style={{ margin: "20px 0 0 35px" }}
        childStyle={{ margin: "0 0 0 40px" }}
        border={false}
      >
        <div className="p-1">
          {locations[floorID].length == 0 ? (
            <ScanLocationsButton buildingID={buildingID} floor={floor} />
          ) : null}
          {locations[floorID].map((location, index) => (
            <div
              key={location.locationID}
              className={`border rounded-md relative mb-1 ${
                variables && variables.locationID == location.locationID
                  ? "opacity-50"
                  : ""
              }`}
            >
              <Tree
                name={location.name}
                style={{}}
                childStyle={{ overflowX: "hidden" }}
                onClick={(isOpen) => {
                  // If the tree is already open when clicked, deslect the location, oterwise select it
                  if (isOpen) {
                    setSelectedLocation(null);
                  } else {
                    setSelectedLocation(location);
                  }
                }}
                border={false}
                disabled={
                  variables && variables.locationID == location.locationID
                }
              >
                <SingleLocation buildingID={buildingID} location={location} />
              </Tree>
              <button
                className={`absolute top-1 right-1 rounded-[3px] bg-red-300 h-8 ${
                  variables && variables.locationID == location.locationID
                    ? ""
                    : "hover:bg-red-400"
                }`}
                onClick={() => {
                  mutate({ locationID: location.locationID });
                }}
                disabled={
                  variables && variables.locationID == location.locationID
                }
              >
                <Trash className="fill-red-600" />
              </button>
            </div>
          ))}
          <AddNewLocation buildingID={buildingID} floorID={floorID} />
        </div>
      </Tree>
    )
  );
}
