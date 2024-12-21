// Execute the given list of asynchronous functions in parallel and return the results as an array to the callback

const asyncParallel = (fnArr, cb) => {
  const promises = fnArr.map((fn) => new Promise((res) => fn(res)));
  Promise.all(promises).then((result) => cb(result));
};

const asyncFn1 = (callback) => {
  // callback === res (from line 2)
  setTimeout(() => {
    callback(1);
  }, 3000);
};
console.log(asyncFn1);
const asyncFn2 = (callback) => {
  setTimeout(() => {
    callback(2);
  }, 2000);
};
const asyncFn3 = (callback) => {
  setTimeout(() => {
    callback(3);
  }, 1000);
};

asyncParallel([asyncFn1, asyncFn2, asyncFn3], (result) => {
  console.log(result); // after 3 seconds all should display: 1, 2, 3
});
