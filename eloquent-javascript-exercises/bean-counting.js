// Your code here.
function countBs(array) {
    var count = 0;
    for (let i = 0; i < array.length; i++) { //takes the whole number of indexes in the array and goes through all of them, one by one
      if (array.charAt(i) === "B") { // pulls out those that are matching our strict equality sign
        count++; //add them to the total count of the same indexes in the array
      }
    }
    return count; //return the summary of the indexes
  }
  console.log(countBs("BBC"));
  // → 2
  
  
  
  
  
  function countChar(array, character) { //add second parameter "character"
    var count = 0;
    for (let i = 0; i < array.length; i++) {
      if (array.charAt(i) === character) { //replace "B" with second parameter variable
        count++;
      }
    }
    return count;
  }
  console.log(countChar("kakkerlak", "k"));
  // → 4