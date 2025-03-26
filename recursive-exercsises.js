// Sum of an Array
sum([1, 2, 3, 4]);

function sum(arr: number[]) {
  // base case
  if (arr.length === 0) {
    return 0;
  }

  // recursion
  return arr.shift() + sum(arr);
}

// Fibonacci
fibonacci(5); // 5
fibonacci(7); // 13

function fibonacci(x: number) {
  if (x <= 1) return x;

  return fibonacci(x - 2) + fibonacci(x - 1);
}

// Reverse string
reverse("hello"); // "olleh"
reverse(""); // ""

function reverse(str: string) {
  // base case, stops the operation
  if (str.length === 0) return "";

  // recursion
  return str.substring(str.length - 1) + reverse(str.substring(0, str.length - 1));
}
