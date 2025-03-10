import { useState } from "react";
import { useDebounce } from "./hooks/debounce.jsx";
import { useThrottle } from "./hooks/throttle.jsx";

export const DataInput = () => {
  const [data, setData] = useState("");
  const [throttledData, setThrottledData] = useState("");
  const debouncedData = useDebounce(data, 1000);
  const throttled = useThrottle((data) => setThrottledData(data), 2000);

  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          setData(e.target.value);
          throttled(e.target.value);
        }}
      />
      <p>Text: {data}</p>
      <p>Debounced text: {debouncedData}</p>
      <p>Throttled text: {throttledData}</p>
    </>
  );
};

// Debounce part:

import { useEffect, useState } from "react";

export const useDebounce = (data, delay) => {
  const [debouncedData, setDebouncedData] = useState(data);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedData(data);
    }, delay);

    return () => clearTimeout(timer);
  }, [data]);

  return debouncedData;
};
