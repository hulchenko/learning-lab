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

const App = () => {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
    }, 1000);
    return () => clearTimeout(timer);
  }, [query]);

  return (
    <div>
      <input type="text" placeholder="Search..." value={query} onChange={(e) => setQuery(e.target.value)} />
      <div>Normal: {query}</div>
      <div>Debounced: {debouncedQuery}</div>
    </div>
  );
};

export default App;
