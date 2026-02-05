const deepComparison = (item1, item2) => {
  if (Array.isArray(item1) && Array.isArray(item2)) {
    // array implementation
    if (item1.length !== item2.length) return false;
    // return item1.every((el, idx) => el === item2[idx]); // shallow comparison
    return item1.every((el, idx) => deepComparison(el, item2[idx]));
  } else if (typeof item1 === "object" && typeof item2 === "object") {
    // object implementation
    if (Object.keys(item1).length !== Object.keys(item2).length) return false;
    // return Object.keys(item1).every((key) => key === item2[key]); // shallow comparison
    return Object.keys(item1).every((key) => deepComparison(item1[key], item2[key]));
  }
  return item1 === item2; // primitives strict comparison
};

const arr1 = [1, 3, 4];
const arr2 = [1, 4, 3];
deepComparison(arr1, arr2);

const obj1 = {
  val1: "val1",
  val2: "val2",
  val3: {
    val4: "val4",
  },
};
const obj2 = {
  val1: "val1",
  val2: "val2",
  val3: {
    val4: "val4",
  },
};
// deepComparison(obj1, obj2);
