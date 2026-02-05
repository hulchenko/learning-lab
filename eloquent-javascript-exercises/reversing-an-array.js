function reverseArray(array){
    let result = [];
      for (i = array.length - 1; i >= 0; i--){
        result.push(array[i]);
        }
      return result;
    }
    console.log(reverseArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
    
// second part of the task is unclear