import { useState, useEffect } from "react";
import CloseIcon from "../../../assets/close-icon.svg?react";
import fuzzysort from "fuzzysort";

function CloseButton({ handleClear }) {
  const [hover, setHover] = useState(false);

  return (
    <button
      onClick={handleClear}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
      className="absolute right-4 top-1"
    >
      {/* Show SVG icon, blue on hover */}
      <CloseIcon fill={hover ? "#2563EB" : "black"} />
    </button>
  );
}

// Given an array of locations, a search term, and an integer n, retrieve the top n search results
function getSearchResults(locations, term, n) {
  // Flatten the locations into a single array
  let compiledLocations = [];
  for (const floor in locations) {
    compiledLocations = compiledLocations.concat(locations[floor]);
  }

  // Search by name
  const results = fuzzysort.go(term, compiledLocations, {
    key: "name",
    limit: n,
  });

  // Get the objects returned by the search
  return results.map((result) => result.obj);
}

function Results({
  results,
  setSelectedLocation,
  setFocused,
  buildingProps,
  setSelectedFloor,
  setText,
}) {
  return (
    <div className="z-20 rounded-b-xl border shadow-md">
      {/* Make a button for each search result */}
      {results.map((result, index) => (
        <button
          tabIndex="0"
          className={`search w-full text-left pl-5 py-3 bg-white hover:bg-gray-100 hover:text-blue-600 ${
            // Rounded bottom if last button in list
            index == results.length - 1 ? "rounded-b-xl" : ""
          }`}
          key={index}
          // When clicked, select the location and remove focus
          onClick={() => {
            setSelectedLocation(result);
            setFocused(false);
            setSelectedFloor(
              buildingProps.find((element) => element.id == result.floorID)
            );
            setText(result.name);
          }}
        >
          {result.name}
        </button>
      ))}
    </div>
  );
}

export default function SearchBar({
  locations,
  buildingProps,
  selectedLocation,
  setSelectedLocation,
  setSelectedFloor,
}) {
  const [text, setText] = useState("");
  const [results, setResults] = useState([]);
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    // Add event listeners for focusing in and out of objects

    // If the focus was changed to the search bar or one of the search items, set focused to true
    function handleFocusIn(e) {
      if (e.target.classList.contains("search")) {
        setFocused(true);
        if (text.length > 0) {
          setResults(getSearchResults(text));
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

  // Set the content of the search bar to the name of the selected location and clear the search bar if it is set to null
  useEffect(() => {
    if (selectedLocation == null) {
      setText("");
    } else {
      setText(selectedLocation.name);
    }
  }, [selectedLocation]);

  function handleClear() {
    setText("");
    setSelectedLocation(null);
  }

  // Each time value of search bar changes, update search results
  function handleInputChange(e) {
    setText(e.target.value);
    setResults(getSearchResults(locations, e.target.value, 5));
  }

  const showResults = text.length > 0 && focused && results.length > 0;

  return (
    <div className="z-20 absolute top-3 left-3 w-80 h-12">
      <input
        className={`search w-80 h-12 shadow-[0_0_0_1px_rgba(0,0,0,0.05),rgb(209,213,219)_0_0_0_1px_inset] py-0 pl-6 pr-14 ${
          showResults ? "rounded-t-xl" : "rounded-3xl"
        }`}
        value={text}
        onChange={handleInputChange}
      ></input>
      {/* Only show clear button if input has value */}
      {text.length > 0 ? <CloseButton handleClear={handleClear} /> : null}
      {/* Only show search results if input has value and the search elements are focused on */}
      {showResults ? (
        <Results
          results={results}
          setSelectedLocation={setSelectedLocation}
          setFocused={setFocused}
          buildingProps={buildingProps}
          setSelectedFloor={setSelectedFloor}
          setText={setText}
        />
      ) : null}
    </div>
  );
}
