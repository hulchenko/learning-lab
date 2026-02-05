const arrayOfNumbers: Array<number> = [1, 1, 2, 3, 5];
const arrayOfStrings: Array<string> = ['Hello', 'World'];

function reverse<Test>(array: Test[]): Test[] {
  return array.reverse();
}

reverse(arrayOfNumbers);
reverse(arrayOfStrings);

//<Test> and Test[] are the Generic Type
