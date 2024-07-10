/** Implement a recursive function to find the nth Fibonacci number.  */

// 0 1 2 3 5 8
// n = 6 (8)
// n = 5 (5)

function fibonacci(n) {
  if (n <= 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}
console.log(fibonacci(5));
