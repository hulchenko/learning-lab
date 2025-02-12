// Create a hook to easily use setTimeout(callback, delay).

// reset the timer if delay changes
// DO NOT reset the timer if only callback changes

import { useEffect, useRef } from "react";

export function useTimeout(callback: () => void, delay: number) {
  const cb = useRef<() => void>(callback);
  cb.current = callback;

  useEffect(() => {
    const timer = setTimeout(() => cb.current(), delay);
    return () => clearTimeout(timer);
  }, [delay]);
}
