// Use MAP() method to double all the elementsin an array

// function doubleNumber(arr) {
//   return arr.map((num) => {
//     return num * 2;
//   });
// }

// let arr = [2, 5, 8, 9, 7, 6, 3];

// let x = doubleNumber(arr);
// console.log(x);

// ...................................................................................

// let arr = [2, 55, 8, 9, 7, 6, 13];

// let double = arr.map((num) => {
//   return num * 2;
// });

// console.log(double);

// Or, using an arrow function for a more concise syntax:

let arr = [2, 15, 8, 9, 7, 6, 13];

const double = arr.map((num) => num * 2);

console.log(double);
