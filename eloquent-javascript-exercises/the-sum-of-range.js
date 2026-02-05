const array = [];
// range function
function range(a, b){
  for (i = a; i <= b; i++){
      array.push(i);
  }
  return array;
}

// sum function
function sum(array) {
  let total = 0;
  for (let i in array) {
    total = total + array[i];
  }
  return total;
}

console.log(sum(range(1, 10)));