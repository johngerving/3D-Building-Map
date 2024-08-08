import { useState } from "react";
import { createPortal } from "react-dom";
import { useDeleteBuilding } from "../../hooks/api/useDeleteBuilding";

function DeleteBuildingModal({ building, setShowModal }) {
  const { isPending, variables, mutate, isError } = useDeleteBuilding(
    building.buildingName
  );

  return (
    <>
      <div className="z-30 absolute top-0 left-0 w-screen h-screen bg-gray-600 opacity-50"></div>
      <div className="z-30 absolute top-0 left-0 w-screen h-screen flex items-center justify-center">
        <div className="w-[35rem] bg-white rounded-lg text-slate-600 p-7">
          <h1 className="text-4xl mb-4">Confirmation</h1>
          <p className="text-lg">
            Are you sure you want to delete building "{building.buildingName}"?
            This decision cannot be undone.
          </p>
          <div className="w-full flex justify-end mt-3">
            <button
              className="rounded-md border shadow-sm p-3 mr-7 w-20 hover:bg-gray-100 transition"
              onClick={() => {
                setShowModal(false);
              }}
            >
              Cancel
            </button>
            <button
              className="rounded-md border shadow-sm p-3 bg-red-500 hover:bg-red-600 text-white w-20 transition"
              onClick={() => {
                mutate();
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

export function DeleteBuildingButton({ building }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="w-full text-left" onClick={() => setShowModal(true)}>
        <div className="w-full px-4 py-2 hover:bg-slate-100 text-nowrap text-red-500">
          Delete
        </div>
      </button>
      {showModal &&
        createPortal(
          <DeleteBuildingModal
            building={building}
            setShowModal={setShowModal}
          />,
          document.body
        )}
    </>
  );
}
