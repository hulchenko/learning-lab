// JavaScript
const debounce = (fn, ms) => {
  let timer = null;

  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, ms);
  };
};

const saveInput = (val) => console.log(val); // 555
const process = debounce(saveInput, 2000);
process("111");
process("222");
process("333");
process("444");
process("555");

// React

import { useEffect, useState } from "react";

const useDebounce = (str: string, ms: number) => {
  // custom hook (called every time App() is re-rendered)
  const [debouncedQuery, setDebouncedQuery] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedQuery(str), ms);
    return () => clearTimeout(timer);
  }, [str]);

  return debouncedQuery;
};

const App = () => {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 1000);

  return (
    <div>
      <input type="text" placeholder="Search..." value={query} onChange={(e) => setQuery(e.target.value)} />
      <div>Normal: {query}</div>
      <div>Debounced: {debouncedQuery}</div>
    </div>
  );
};

export default App;
