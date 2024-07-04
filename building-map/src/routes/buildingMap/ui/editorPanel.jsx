import { useOutletContext } from "react-router-dom";

import { useSpring, animated } from "@react-spring/web";

export function EditorPanel() {
  const [
    floors,
    locations,
    selectedLocation,
    setSelectedLocation,
    setSelectedFloor,
  ] = useOutletContext();

  return (
    <div
      id="editor-panel"
      className="z-10 absolute top-0 left-0 w-[344px] h-full bg-white"
    ></div>
  );
}
