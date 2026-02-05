// Fisher–Yates shuffle
const shuffleItems = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    const randomIdx = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[randomIdx]] = [arr[randomIdx], arr[i]];
  }
  return arr;
};
console.log(shuffleItems([1, 2, 3, 4, 5]));
