function curry(fn) {
  return function inner(...args) {
    if (args.length >= fn.length) {
      // check if provided args sufficient for what func expects
      return fn(...args);
    }
    return (...newArgs) => {
      // if not, take args, combine with existing and run recursively again
      return inner(...args, ...newArgs);
    };
  };
}

const join = (a, b, c) => {
  return `${a}_${b}_${c}`;
};
const curriedJoin = curry(join);
const one = curriedJoin(1, 2, 3); // '1_2_3'
const two = curriedJoin(1)(2, 3); // '1_2_3'
const three = curriedJoin(1, 2)(3); // '1_2_3'
console.log(one, two, three);
