// Debounce
const debounce = (fn, ms) => {
  let timer = null;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, ms);
  };
};

const saveInput = (name) => console.log("saveInput", name);
const processChange = debounce(saveInput, 2000);
processChange("111");
processChange("222");
processChange("333");
processChange("444");
processChange("555"); // only this will be logged
