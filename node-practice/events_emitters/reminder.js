//Object props and methods

var obj = {
  greet: 'Hello',
};

console.log(obj.greet);
console.log(obj['greet']);
var test = 'greet';
console.log(obj[test]);

//---

//functions and arrays

var arr = [];

arr.push(function () {
  console.log('Hello World 1');
});

arr.push(function () {
  console.log('Hello World 2');
});

arr.push(function () {
  console.log('Hello World 3');
});

arr.forEach((item) => item());
