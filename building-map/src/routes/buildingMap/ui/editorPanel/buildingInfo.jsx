import { useEffect, useState } from "react";

import { useBuilding } from "../../../../hooks/api/useBuilding";
import { useQueryClient } from "@tanstack/react-query";
import { useDebounce } from "../../../../hooks/api/useDebounce";
import { useUpdateBuilding } from "../../../../hooks/api/useUpdateBuilding";
import { usePutBuilding } from "../../../../hooks/api/usePutBuilding";
import { usePutBuildingName } from "../../../../hooks/api/usePutBuildingName";

import { createPortal } from "react-dom";

import Close from "../../../../assets/close-icon.svg?react";

function ChangeNameModal({ building, setShowModal }) {
  const [name, setName] = useState("");

  // Match a-z, 0-9 with dashes in between
  const nameRegex = /^([a-z0-9]-?)*[a-z0-9]$/;

  const isNameValid = nameRegex.test(name);

  const { isPending, variables, mutate, isError } = usePutBuildingName(
    building.buildingName
  );

  const inputClassName = `border w-full mb-4 mr-1 h-8 p-1 ${
    !isNameValid && name.length > 0 ? "border-red-500 outline-red-500" : ""
  }`;

  return (
    <>
      <div className="z-30 absolute top-0 left-0 w-screen h-screen bg-gray-600 opacity-50"></div>
      <div className="z-30 absolute top-0 left-0 w-screen h-screen flex items-center justify-center">
        <div className="relative w-[40rem] bg-white rounded-lg text-slate-600 p-7">
          <button
            className="absolute right-1 top-1"
            onClick={() => setShowModal(false)}
          >
            <Close className="fill-gray-400 hover:fill-gray-500 transition w-9 h-9" />
          </button>
          <h1 className="text-4xl mb-4">Change Building Name</h1>
          <p className="text-lg mb-4">
            Building name must be lowercase a-z or 0-9 separated by dashes.
          </p>
          <form>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={inputClassName}
            />
            <button
              className="rounded-md border shadow-sm px-3 py-2 mt-3 mr-7 w-20 text-white bg-blue-600 hover:bg-blue-700 transition"
              onClick={(e) => {
                e.preventDefault();
                mutate({ ...building, buildingName: name });
              }}
            >
              Change
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

function ChangeNameButton({ building }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        className="px-2 ml-1 border rounded-md h-8 hover:bg-gray-50 transition"
        onClick={() => setShowModal(true)}
      >
        Change
      </button>
      {showModal &&
        createPortal(
          <ChangeNameModal building={building} setShowModal={setShowModal} />,
          document.body
        )}
    </>
  );
}

export function BuildingInfo({ building }) {
  const labelClassName = "text-right w-full leading-8";
  const inputClassName = "border w-full mb-1 mr-1 h-8 p-1";

  const queryClient = useQueryClient();

  // Debounce the floor state and mutate 2 seconds after last input change
  const { isDebouncing, debouncedValue } = useDebounce(building, 2000);

  // Get update and mutate functions
  const { update } = useUpdateBuilding(building.buildingName);
  const { mutate } = usePutBuilding(building.buildingID, isDebouncing);

  useEffect(() => {
    mutate(building);
  }, [debouncedValue]);

  // Function to update the value of a parameter in the floor
  const handleInputChange = (newParam) => {
    // Cancel any current queries to prevent overwriting new input with fetched data
    queryClient.cancelQueries({
      queryKey: ["building", building.buildingName],
    });

    // Update the building with the new parameter
    update(Object.assign({}, building, newParam));
  };

  // Match only numbers and decimals
  const numRegex = /^[0-9.]*$/;

  return (
    <div className="p-4 pr-3">
      <h2 className="text-4xl text-slate-600 p-3">Building</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "max-content auto",
          gridGap: "10px",
          paddingLeft: "1rem",
        }}
      >
        <label className={labelClassName} htmlFor="name">
          Name
        </label>
        <div className="flex justify-center">
          <input
            readOnly
            type="text"
            id="name"
            name="name"
            value={building.buildingName}
            onChange={() => {}}
            className={inputClassName}
          />
          <ChangeNameButton building={building} />
        </div>

        <label className={labelClassName} htmlFor="cameraX">
          Camera Position X
        </label>
        <input
          type="text"
          id="cameraX"
          name="cameraX"
          value={building.initialCameraPosition[0]}
          onChange={(e) => {
            if (numRegex.test(e.target.value)) {
              handleInputChange({
                initialCameraPosition: [
                  e.target.value.length == 0 ? 0 : parseFloat(e.target.value),
                  building.initialCameraPosition[1],
                  building.initialCameraPosition[2],
                ],
              });
            }
          }}
          className={inputClassName}
        />

        <label className={labelClassName} htmlFor="cameraY">
          Camera Position Y
        </label>
        <input
          type="text"
          id="cameraY"
          name="cameraY"
          value={building.initialCameraPosition[1]}
          onChange={(e) => {
            if (numRegex.test(e.target.value)) {
              handleInputChange({
                initialCameraPosition: [
                  building.initialCameraPosition[0],
                  e.target.value.length == 0 ? 0 : parseFloat(e.target.value),
                  building.initialCameraPosition[2],
                ],
              });
            }
          }}
          className={inputClassName}
        />

        <label className={labelClassName} htmlFor="cameraZ">
          Camera Position Z
        </label>
        <input
          type="text"
          id="cameraZ"
          name="cameraZ"
          value={building.initialCameraPosition[2]}
          onChange={(e) => {
            if (numRegex.test(e.target.value)) {
              handleInputChange({
                initialCameraPosition: [
                  building.initialCameraPosition[0],
                  building.initialCameraPosition[1],
                  e.target.value.length == 0 ? 0 : parseFloat(e.target.value),
                ],
              });
            }
          }}
          className={inputClassName}
        />

        <label className={labelClassName} htmlFor="fontSize">
          Location Font Size
        </label>
        <input
          type="text"
          id="fontSize"
          name="fontSize"
          value={building.locationFontSize}
          onChange={(e) => {
            if (numRegex.test(e.target.value)) {
              handleInputChange({
                locationFontSize:
                  e.target.value.length == 0 ? 0 : parseFloat(e.target.value),
              });
            }
          }}
          className={inputClassName}
        />
      </div>
    </div>
  );
}
