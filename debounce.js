// Debounce
const debounce = (fn, ms) => {
  let timer = null;

  const callback = (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, ms);
  };

  return callback;
};

const saveInput = (val) => console.log(val); // 555
const process = debounce(saveInput, 2000);
process("111");
process("222");
process("333");
process("444");
process("555");

// useEffect approach (it's a bit different)

useEffect(() => {
  const timer = setTimeout(() => {
    //some setAction
  }, 1000);

  return () => clearTimeout(timer); // Cleanup function to clear previous timer on re-render
}, [input]);
