/** Find the largest element in an array using the reduce() method */

// function findLargestElement(arr) {
//   return arr.reduce((max, current) => (current > max ? current : max));
// }

// let arr = [1, 0, 8, 9, 75, 50, 34];

// let reduce = findLargestElement(arr);

// console.log(reduce);

let arr = [1, 0, 8, 9, 75, 50, 34];

function reduceArray(arr) {
  return arr.reduce((max, current) => (current > max ? current : max));
}
let x = reduceArray(arr);
console.log(x);
