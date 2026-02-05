const fs = require('fs');
// const book = {
//   title: 'Test book',
//   author: 'Test author',
// };

// // convert object to JSON
// const bookJSON = JSON.stringify(book);
// console.log(bookJSON);

// // convert JSON to object
// const parsedData = JSON.parse(bookJSON);
// console.log(parsedData.title);

// // save data to the file
// fs.writeFileSync('1-json.json', bookJSON);
// const dataBuffer = fs.readFileSync('1-json.json'); //returns <Buffer 7b 20 22 74 69 74 6c 65 22 3a 20 22 54 65 73 74 20 62 6f 6f 6b 22 2c 20 22 61 75 74 68 6f 72 22 3a 20 22 54 65 73 74 20 61 75 74 68 6f 72 22 20 7d 0d ... 1 more byte>
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);
// console.log(data.title);

const dataBuffer = fs.readFileSync('1-json.json');
const dataJSON = dataBuffer.toString();
let user = JSON.parse(dataJSON);
user = {
  name: 'Test',
  planet: 'Jupiter',
  age: 99,
};
const userJSON = JSON.stringify(user);
fs.writeFileSync('1-json.json', userJSON);
