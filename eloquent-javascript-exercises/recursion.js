// Your code here.
function isEven(n) {
    if (n===0) {
      return true;
    } else if ( n === 1) {
      return false;
    } else if ( n < 0 ) {
      return isEven(-n) //keeping this at (-n) will simply turn negative number to positive
    } else {
      return isEven(n - 2); //will bring number down to 1, which is "false"
    }
    console.log(isEven(50));
    // → true
    console.log(isEven(75));
    // → false
    console.log(isEven(-1));
    // → ??