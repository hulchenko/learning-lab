var person = {
  firstname: 'John',
  lastname: 'Doe',
  getFullName: function () {
    var fullname = this.firstname + ' ' + this.lastname;
    return fullname;
  },
};

var logName = function (lang1, lang2) {
  console.log('Logged: ' + this.getFullName());
  console.log('Arguments: ' + lang1 + ' ' + lang2);
  console.log('-----------');
};

var logPersonName = logName.bind(person);
logPersonName('en');

logName.call(person, 'en', 'ru');
logName.apply(person, ['en', 'ru']);

(function (lang1, lang2) {
  console.log('Logged: ' + this.getFullName());
  console.log('Arguments: ' + lang1 + ' ' + lang2);
  console.log('-----------');
}.apply(person, ['ru', 'en']));

// function borrowing
var person2 = {
  firstname: 'Jane',
  lastname: 'Doe',
};

console.log(person.getFullName.apply(person2));

// function currying (copying a function with preset parameters)
function multiply(a, b) {
  return a * b;
}

var multipleByTwo = multiply.bind(this, 2);
console.log(multipleByTwo(4));
//or
var multipleByTwo = multiply.bind(this);
console.log(multipleByTwo(2, 4));

var multipleByThree = multiply.bind(this, 3);
console.log(multipleByThree(4));
//or
var multipleByThree = multiply.bind(this);
console.log(multipleByThree(3, 4));
