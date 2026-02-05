//Path Module Nodejs
const path = require('path');

console.log(__filename);
console.log(path.basename(__filename)); //checks the file name
console.log(path.dirname(__filename)); //checks the folder name
console.log(path.extname(__filename)); //checks extension
console.log(path.parse(__filename)); //parses to readable format, like JSON

console.log(path.join(__filename, 'test', 'second.html')); //concats directory(without creating the actual folder)
console.log(path.basename(__filename, './test', './second.html')); // creates absolute path(without creating the actual folder)
