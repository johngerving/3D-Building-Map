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

function getSearchResults(locations, term, n) {
  let compiledLocations = [];

  for (const floor in locations) {
    compiledLocations = compiledLocations.concat(locations[floor]);
  }

  const results = fuzzysort.go(term, compiledLocations, {
    key: "name",
    limit: n,
  });

  return results.map((result) => result.obj);
}

function Results({ results, setSelectedLocation, setFocused }) {
  return (
    <div className="z-20 rounded-b-xl border shadow-md">
      {results.map((result, index) => (
        <button
          className={`search w-full text-left pl-5 py-3 bg-white hover:bg-gray-100 hover:text-blue-600 ${
            index == results.length - 1 ? "rounded-b-xl" : ""
          }`}
          key={index}
          onClick={() => {
            setSelectedLocation(result);
            setFocused(false);
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
  selectedLocation,
  setSelectedLocation,
}) {
  const [text, setText] = useState("");
  const [results, setResults] = useState([]);
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    function handleFocusIn(e) {
      if (e.target.classList.contains("search")) {
        setFocused(true);
      }
    }
    function handleFocusOut(e) {
      if (!e.relatedTarget || !e.relatedTarget.classList.contains("search")) {
        setFocused(false);
      }
    }
    window.addEventListener("focusin", handleFocusIn);

    window.addEventListener("focusout", handleFocusOut);

    return () => {
      window.removeEventListener("focusin", handleFocusIn);
      window.removeEventListener("focusout", handleFocusOut);
    };
  });

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

  function handleInputChange(e) {
    setText(e.target.value);
    setResults(getSearchResults(locations, e.target.value, 5));
  }

  return (
    <div className="z-20 absolute top-3 left-3 w-80 h-12">
      <input
        className={`search w-80 h-12 shadow-[0_0_0_1px_rgba(0,0,0,0.05),rgb(209,213,219)_0_0_0_1px_inset] py-0 pl-6 pr-14 ${
          text.length > 0 && focused ? "rounded-t-xl" : "rounded-3xl"
        }`}
        value={text}
        onChange={handleInputChange}
      ></input>
      {/* Only show clear button if input has value */}
      {text.length > 0 ? <CloseButton handleClear={handleClear} /> : null}
      {text.length > 0 && focused ? (
        <Results
          results={results}
          setSelectedLocation={setSelectedLocation}
          setFocused={setFocused}
        />
      ) : null}
    </div>
  );
}
