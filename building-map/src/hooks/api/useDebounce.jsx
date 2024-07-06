import { useEffect } from "react";

export const useDebounce = (value, delay, cb) => {
  useEffect(() => {
    // Update debounced value after delay
    const handler = setTimeout(() => {
      cb(value);
    }, delay);

    // Cancel timeout if value or delay changes or on unmount
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
};
