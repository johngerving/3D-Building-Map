import { useEffect, useState } from "react";

export const useDebounce = (value, delay) => {
  const [isDebouncing, setIsDebouncing] = useState(false);
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // When value changes, isDebouncing is set to true
    setIsDebouncing(true);

    // Update debounced value and isDebouncing after delay
    const handler = setTimeout(() => {
      setIsDebouncing(false);
      setDebouncedValue(value);
    }, delay);

    // Cancel timeout if value or delay changes or on unmount
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return { isDebouncing, debouncedValue };
};
