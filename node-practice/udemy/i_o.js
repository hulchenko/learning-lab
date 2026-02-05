// Input / Output of Node js

// blocking
const getUserSync = require('.path/getUserSync');

const userOne = getUserSync(1);
console.log(userOne);

const userOne = getUserSync(1);
console.log(userOne);

const sum = 2 + 2;
console.log(sum);

// non-blocking
const getUserSync = require('.path/getUserSync');

getUserSync(1, (user) => {
  console.log(user);
});

getUserSync(2, (user) => {
  console.log(user);
});

const sum = 2 + 2;
console.log(sum);
