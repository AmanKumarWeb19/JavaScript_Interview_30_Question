// Write a function that takes an array of numbers and
// returns a new array with only the Even Numbers

// let arr = [12, 15, 20, 10, 40, 83, 24];

// function filterEvenNumber(arr) {
//   return arr.filter((num) => num % 2 === 0);
// }

// let x = filterEvenNumber(arr);
// console.log(x);
// console.log(arr);

let arr = [12, 15, 20, 10, 40, 83, 24];

function filterArray(arr) {
  return arr.filter((num) => num % 2 === 0);
}

let x = filterArray(arr);
console.log(x);
