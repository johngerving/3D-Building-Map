import { useState } from "react";
import { createPortal } from "react-dom";

import Close from "../../assets/close-icon.svg?react";
import { usePostBuilding } from "../../hooks/api/usePostBuilding";
import { useNavigate } from "react-router-dom";

function NewBuildingModal({ setShowModal }) {
  const navigate = useNavigate();

  const [name, setName] = useState("");

  // Match a-z, 0-9 with dashes in between
  const nameRegex = /^([a-z0-9]-?)*[a-z0-9]$/;

  const isNameValid = nameRegex.test(name);

  const { isPending, variables, mutate, isError } = usePostBuilding();

  const handleClick = async () => {
    // If the building name is valid, create a new building
    if (isNameValid) {
      mutate({
        buildingName: name,
        locationFontSize: 6,
        initialCameraPosition: [0, 4, 4],
      });
    }
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
          <h1 className="text-4xl mb-4">New Building</h1>
          <p
            className={`text-lg mb-4 ${
              (!isNameValid && name.length > 0) || isError ? "text-red-500" : ""
            }`}
          >
            {!isNameValid && name.length > 0
              ? "Name must be lowercase a-z, 0-9, separated by dashes."
              : isError
              ? "There was an error creating the building."
              : "Enter the name of the building:"}
          </p>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={`search border-2 w-full p-2 rounded-lg placeholder:italic mb-4`}
            placeholder="Building Name"
            disabled={isPending}
          />
          <button
            className={`bg-blue-600 transition rounded-md text-white p-2 ${
              isPending ? "" : "hover:bg-blue-700"
            }`}
            onClick={handleClick}
            disabled={isPending}
          >
            Create Building
          </button>
        </div>
      </div>
    </>
  );
}

export function NewBuildingButton() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        className="absolute top-3 left-3 bg-blue-600 hover:bg-blue-700 transition text-white p-2 rounded-md"
        onClick={() => setShowModal(true)}
      >
        New Building +
      </button>
      {showModal &&
        createPortal(
          <NewBuildingModal setShowModal={setShowModal} />,
          document.body
        )}
    </>
  );
}
