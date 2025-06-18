// Write a JavaScript function getFibonacci(n) that returns the first n numbers in the Fibonacci sequence as an array.

// The Fibonacci sequence is a series of numbers where:

// F(0) = 0

// F(1) = 1

// F(n) = F(n-1) + F(n-2) for n > 1

// getFibonacci(1); // [0] 
// getFibonacci(2); // [0, 1] 0 
// getFibonacci(5); // [0, 1, 1, 2, 3]
// getFibonacci(8); // [0, 1, 1, 2, 3, 5, 8, 13]

function getFibonacci(n) {
  const result =[];
  let a = 0, b = 1; //initialise

  while (result.length < n) {
      result.push(a);
      const next = a+b; // to get next number in the series

      a=b ;
      b=next;
  }
  return result
}

console.log(getFibonacci(2))
console.log(getFibonacci(0))
console.log(getFibonacci(8))
console.log(getFibonacci(6))
console.log(getFibonacci(10))