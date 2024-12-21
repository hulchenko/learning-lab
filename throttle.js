const throttle = (fn, delay) => {
  let lastExecution = 0;
  const callback = (...args) => {
    const now = Date.now();

    if (now - lastExecution >= delay) {
      lastExecution = now;
      fn(...args);
    }
  };
  return callback;
};

const saveInput = (...args) => console.log(...args);
const process = throttle(saveInput, 2000); // only allows execution once every 2s

process("test1"); // fired (last execution timer set)
setTimeout(() => process("test2"), 1000); // ignored (under 2 seconds)
setTimeout(() => process("test3"), 1200); // ignored (still under 2 seconds)
setTimeout(() => process("test4"), 2400); // fired (it's been more than 2 seconds)
process("test5"); // ignored (less than 2s since last execution)
process("test6"); // ignored (less than 2s since last execution)
