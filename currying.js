// create currying function
const curriedSum = curry((a, b, c) => a + b + c);
const partiallyCurriedSum = curriedSum(1);
console.log(partiallyCurriedSum(2, 3)); // 6

function curry(cb) {
  return function initCurried(...args) {
    if (args.length >= cb.length) {
      return cb(...args); // call callback function once all args are received
    }
    return function subsequentCurrying(...addArgs) {
      return cb(...args, ...addArgs); // collect the rest of arguments, call recursively
    };
  };
}
