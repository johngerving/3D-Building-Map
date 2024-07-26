import { useQuery } from "@tanstack/react-query";
import { baseURL } from "../../http-common";
import { useUser } from "../../hooks/api/useUser";
import { Link, useNavigate } from "react-router-dom";

import Scene from "../buildingMap/scene/scene";
import { useEffect, useRef, useState } from "react";

import Logo from "../../assets/logo-black.svg?react";
import More from "../../assets/more_icon.svg?react";
import Close from "../../assets/close-icon.svg?react";
import { createPortal } from "react-dom";
import { useUserPermissions } from "../../hooks/api/useUserPermissions";
import { usePostUserPermissions } from "../../hooks/api/usePostUserPermissions";
import { useDeleteUserPermissions } from "../../hooks/api/useDeleteUserPermissions";
import { usePutUserPermissions } from "../../hooks/api/usePutUserPermissions";

function Results({ building, results, setFocused }) {
  const { isPending, variables, mutate, isError } = usePostUserPermissions(
    building.buildingID
  );

  const handleClick = (result) => () => {
    mutate(result.userID);
    setFocused(false);
  };

  return (
    <div className="z-30 absolute bottom-0 left-0 translate-y-full w-full rounded-b-lg border-b-2 border-l-2 border-r-2 bg-white">
      {results.map((result) => (
        <button
          tabIndex={"0"}
          key={result.email}
          className="search p-2 w-full text-left hover:bg-slate-100"
          onClick={handleClick(result)}
        >
          {result.email}
        </button>
      ))}
    </div>
  );
}

function ManageAccessModal({ building, setShowModal }) {
  const navigate = useNavigate();

  const [text, setText] = useState("");
  const [results, setResults] = useState([]);
  const [focused, setFocused] = useState(false);

  const showResults = text.length > 0 && focused && results.length > 0;

  const {
    isPermissionPending,
    isPermissionError,
    permissions,
    permissionError,
  } = useUserPermissions(building.buildingID);

  const { isPending, isError, mutate, error } = usePutUserPermissions(
    building.buildingID
  );

  const { isDeletePending, deletePermission, isDeleteError, deleteError } =
    useDeleteUserPermissions(building.buildingID);

  async function getSearchResults(term, limit) {
    const res = await fetch(`${baseURL}/users?term=${term}&limit=${limit}`, {
      credentials: "include",
    });

    if (res.status == 401) {
      navigate("/login");
    }

    const json = await res.json();

    if (!res.ok) {
      throw new Error(json.error);
    }

    return json;
  }

  useEffect(() => {
    // Add event listeners for focusing in and out of objects

    // If the focus was changed to the search bar or one of the search items, set focused to true
    function handleFocusIn(e) {
      if (e.target.classList.contains("search")) {
        setFocused(true);
        if (text.length > 0) {
          // Get the search results based on input
          getSearchResults(text, 5).then((searchResults) => {
            // Filter the results by whether they are already in the permissions and set the search results
            setResults(
              searchResults.filter((result) => {
                return !permissions.some(
                  (permission) => permission.email == result.email
                );
              })
            );
          });
        }
      }
    }

    // If the focus was changed away from the search bar or one of the search items, set focused to false
    function handleFocusOut(e) {
      if (!e.relatedTarget || !e.relatedTarget.classList.contains("search")) {
        setFocused(false);
      }
    }

    window.addEventListener("focusin", handleFocusIn);
    window.addEventListener("focusout", handleFocusOut);

    // Remove the event listeners
    return () => {
      window.removeEventListener("focusin", handleFocusIn);
      window.removeEventListener("focusout", handleFocusOut);
    };
  }, []);

  // Each time value of search bar changes, update search results
  function handleInputChange(e) {
    setText(e.target.value);
    if (e.target.value.length > 0) {
      // Get the search results
      getSearchResults(e.target.value, 5).then((searchResults) => {
        // Filter the results by whether they are already in the permissions and set the search results
        setResults(
          searchResults.filter((result) => {
            return !permissions.some(
              (permission) => permission.email == result.email
            );
          })
        );
      });
    } else {
      setResults([]);
    }
  }

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
          <h1 className="text-4xl mb-4">Manage Access</h1>
          <div className="relative">
            <input
              value={text}
              onChange={handleInputChange}
              className={`search border-2 w-full p-2 ${
                showResults ? "rounded-t-lg" : "border-2 rounded-lg"
              }`}
            ></input>
            {showResults && (
              <Results
                building={building}
                results={results}
                setFocused={setFocused}
              />
            )}
          </div>
          <div className="mt-3">
            {permissions &&
              permissions.map((permission) => (
                <div
                  key={permission.userID}
                  className="flex justify-between items-center"
                >
                  <p>{permission.email}</p>
                  <div className="flex">
                    <select
                      className="hover:cursor-pointer mr-4"
                      defaultValue={permission.role}
                      onChange={(e) =>
                        mutate({
                          userID: permission.userID,
                          role: e.target.value,
                        })
                      }
                    >
                      <option value="editor">Editor</option>
                      <option value="admin">Admin</option>
                    </select>
                    <button
                      className="opacity-30 hover:opacity-80"
                      onClick={() => deletePermission(permission.userID)}
                    >
                      <Close className="w-6" />
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

function Kebab({ building }) {
  const [active, setActive] = useState(false);

  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setActive((active) => !active);
  };

  const ref = useRef();

  useEffect(() => {
    function onClick(e) {
      if (!ref.current.contains(e.target)) {
        setActive(false);
      }
    }
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("click", onClick);
    };
  }, []);

  return (
    <div ref={ref} className="rounded-xl relative bg-white">
      {active && (
        <div className="absolute z-0 top-0 left-0 pt-11 bg-white border rounded-xl">
          <Link to={`/${building.buildingName}`}>
            <div className="w-full px-4 py-3 hover:bg-slate-100">View</div>
          </Link>
          <button onClick={() => setShowModal(true)}>
            <div className="w-full px-4 py-3 hover:bg-slate-100 text-nowrap">
              Manage Access
            </div>
          </button>
        </div>
      )}
      <button
        className={`more-button z-10 p-2 opacity-50 rounded-lg m-1 ${
          !active ? "hover:opacity-100 hover:bg-slate-100" : ""
        }`}
        onClick={handleClick}
      >
        <More className="more-button h-full fill-slate-900" />
      </button>
      {showModal &&
        createPortal(
          <ManageAccessModal building={building} setShowModal={setShowModal} />,
          document.body
        )}
    </div>
  );
}

function SceneView({ building }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="w-fit rounded-xl shadow-md border mb-6">
      <Link to={`/${building.buildingName}/edit`}>
        <div className="w-96 h-52 relative overflow-hidden rounded-t-xl">
          <div
            className={`w-full h-full absolute top-0 left-0 z-20 flex items-center justify-center hover:cursor-pointer ${
              !loaded ? "bg-gray-50" : ""
            }`}
          >
            {!loaded ? (
              <Logo className="w-32 fill-gray-300 animate-pulse" />
            ) : null}
          </div>
          <Scene
            buildingName={building.buildingName}
            buildingID={building.buildingID}
            selectedFloor={null}
            selectedLocation={null}
            width={"100%"}
            height={"100%"}
            setLoaded={setLoaded}
          />
        </div>
      </Link>
      <div className="flex items-center w-full border-t">
        <Link style={{ flex: 1 }} to={`/${building.buildingName}/edit`}>
          <div className={"w-full h-full text-lg text-slate-800 p-3"}>
            {building.buildingName}
          </div>
        </Link>
        <Kebab building={building} />
      </div>
    </div>
  );
}

export function Root() {
  const navigate = useNavigate();

  const { isUserPending, isUserError, user, userError } = useUser();

  const { isPending, error, data } = useQuery({
    queryKey: ["user", "buildings"],
    queryFn: async () => {
      const res = await fetch(`${baseURL}/users/buildings`, {
        credentials: "include",
      });
      const json = await res.json();

      if (res.status == 401) {
        navigate("/login");
      }

      if (!res.ok) {
        throw new Error(json.error);
      }

      return json;
    },
  });

  return (
    <>
      {user && <div className="w-full h-12"></div>}
      {data && (
        <div className="w-full flex flex-col items-center justify-center">
          {data.map((building) => (
            <SceneView key={building.buildingID} building={building} />
          ))}
        </div>
      )}
    </>
  );
}
