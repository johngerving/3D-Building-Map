import { useEffect } from "react";

export const useCursor = (enabled) => {
  // Subscribe to state of enabled
  useEffect(() => {
    // Check whether cursor style element exists
    const styleExists = !!document.getElementById("cursor-style");
    if (enabled) {
      // Create element if it doesn't exist and cursor is enabled
      if (!styleExists) {
        const cursorStyle = document.createElement("style");
        cursorStyle.innerHTML = "*{cursor: col-resize!important;}";
        cursorStyle.id = "cursor-style";
        document.head.appendChild(cursorStyle);
      }
    } else {
      // If cursor is disabled and element exists, destroy it
      if (styleExists) {
        document.getElementById("cursor-style").remove();
      }
    }

    // When component unmounts, destroy element if it exists
    return () => {
      const styleExists = !!document.getElementById("cursor-style");
      if (styleExists) {
        document.getElementById("cursor-style").remove();
      }
    };
  }, [enabled]);
};
