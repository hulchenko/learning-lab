const list1 = [
  { firstName: 'Aba', lastName: 'N', country: 'Ghana', age: 21 },
  { firstName: 'Abb', lastName: 'O', country: 'Israel', age: 39 },
];

const findOddNames = (developersList) => {
  const summaryArray = developersList.map((developer) => {
    const calc = developer.firstName
      .split('')
      .map((char) =>
        //checks charcode of every individual character
        char.charCodeAt(0)
      )
      .reduce((prevValue, curValue) => prevValue + curValue);
    //odd number condition
    if (calc % 2 !== 0) {
      return developer;
    } else {
      return [];
    }
  });

  return summaryArray;
};

console.log(findOddNames(list1));
