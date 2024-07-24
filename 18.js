/** Remove All the occurances of a specific from an array */

// USING FILTER METHOD:-
// function removeOccuranceElement(arr, target) {
//   return arr.filter((item) => item !== target);
// }

// let arr = [10, 10, 8, 5, 1, 6, 7];
// let target = 10;
// let removeoccur = removeOccuranceElement(arr, target);
// console.log(removeoccur);

// USING WITHOUT ANY METHOD :-

// function removeOccuranceElement(arr, target) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     let shouldRemove = false;
//     for (let j = 0; j < target.length; j++) {
//       if (arr[i] === target[j]) {
//         shouldRemove = true;
//         break;
//       }
//     }
//     if (!shouldRemove) {
//       result.push(arr[i]);
//     }
//   }
//   console.log(result);
// }

// let arr = [10, 10, 8, 7, 5, 1, 6, 7];
// let target = [10, 7];
// removeOccuranceElement(arr, target);

// ..................................................................................

/** if only one target is repeat then solve without any method */

// function removeOccurnace(arr, target) {
//   let result = [];
//   for(let i=0; i<arr.length; i++){
//     if(arr[i] !== target){
//       result.push(arr[i])
//     }
//   }
//   console.log(result)
// }

// let arr = [10, 10, 8, 5, 1, 6, 7];
// let target = 10
// removeOccurnace(arr,target)

let arr = [10, 10, 8, 5, 1, 6, 7];
let target = 10;

function removeOcurr(arr, target) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== target) {
      result.push(arr[i]);
    }
  }
  console.log(result);
}
removeOcurr(arr, target);
