import { useState } from "react";
import CloseIcon from "../../../assets/close-icon.svg?react";

function CloseButton() {
  const [hover, setHover] = useState(false);

  return (
    <button
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
      className="absolute right-4 top-1"
    >
      {/* Show SVG icon, blue on hover */}
      <CloseIcon fill={hover ? "#2563EB" : "black"} />
    </button>
  );
}

export default function SearchBar() {
  const [text, setText] = useState("");

  return (
    <div className="z-10 absolute top-3 left-3 w-80 h-12">
      <input
        className="rounded-3xl w-80 h-12 shadow-sm py-0 pl-6 pr-14"
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></input>
      {/* Only show clear button if input has value */}
      {text.length > 0 ? <CloseButton /> : null}
    </div>
  );
}
