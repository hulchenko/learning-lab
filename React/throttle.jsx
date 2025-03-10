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

// Throttle part:

import { useRef } from "react";

export const useThrottle = (cb, delay) => {
  const lastExec = useRef(null);

  return (...args) => {
    console.log("FIRED!");
    const now = Date.now();
    if (now - lastExec.current >= delay) {
      cb(...args);
      lastExec.current = now;
    }
  };
};
