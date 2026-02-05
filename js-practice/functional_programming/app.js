//setting mapForEach function for future use
function mapForEach(arr, fn) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    newArr.push(fn(arr[i]));
  }

  return newArr;
}

var arr1 = [1, 2, 3];
console.log(arr1);

//seeing mapForEach in action
var arr2 = mapForEach(arr1, function (item) {
  return item * 2;
});
console.log(arr2);

var arr3 = mapForEach(arr1, function (item) {
  return item > 2;
});
console.log(arr3);

//simplifying comparison above
var checkPastLimit = function (limiter, item) {
  return item > limiter;
};
var arr4 = mapForEach(arr1, checkPastLimit.bind(this, 1)); //the one below is a copy
console.log(arr4);

//simplifying comparison above even more
var checkPastLimitSimplified = function (limiter) {
  return function (limiter, item) {
    return item > limiter;
  }.bind(this, limiter); //copy of the one above ^
};

var arr5 = mapForEach(arr1, checkPastLimitSimplified(1));
console.log(arr5);
