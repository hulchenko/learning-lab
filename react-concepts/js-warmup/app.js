// ------------ CONST variable change value
// const users = ['Vadym', 'Bailey'];
// //users = ['Vadym', 'Bailey', 'Tony']; //error
// users.push('Tony'); // works
// console.log(users); // ['Vadym', 'Bailey', 'Tony'];

// ------------ Mutation and Mutation Fix with Spread

// const initNumbers = ['one', 'two', 'three'];

// // const currentNumbers = initNumbers; //REFERENCES const initNumbers, DOESN'T COPY
// const currentNumbers = [...initNumbers]; // spreads = copies values

// currentNumbers.push('four', 'five');

// console.log(initNumbers); // (before spread) [ 'one', 'two', 'three', 'four', 'five' ] -> (after spread) [ 'one', 'two', 'three' ]
// console.log(currentNumbers);

// ------------ Arrow Function
// const sayHello = (name) => {
//   return `Hello ${name}`;
// };
// const greeting = sayHello('Tony');
// console.log(greeting);

// ------------ Deconstruct
// const user = {
//   name: 'Vadym',
//   lastName: 'Hulchenko',
//   age: 28,
// };

// const { name, lastName, age } = user; // same as user.name, user.lastName, user.age
// console.log(name);

// const numbers = [1, 2, 3, 4, 5];
// const [someVar, anotherVar] = numbers;
// console.log(anotherVar); // 2

// ------------ Map & Filter
const users = [
  { name: 'Vadym', age: 28 },
  { name: 'Bailey', age: 26 },
  { name: 'Tony', age: 2 },
];

const modifiedUser = users.map((i) => i.age);
const filteredUser = users.filter((i) => i.age === 26); //[ { name: 'Bailey', age: 26 } ]

console.log(filteredUser);
