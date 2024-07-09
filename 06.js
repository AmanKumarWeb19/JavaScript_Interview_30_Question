// Write a function that checks if a number is even or oddand
// returns "Even" or "Odd" accordingly.

function EvenOrOdd(num) {
  if (num % 2 == 0) {
    return "Even";
  } else {
    return "Odd";
  }
}
let x = EvenOrOdd(2)
console.log(x)
