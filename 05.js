// Write a function that takes a string and returns the reversed version of it 

let str = "Hello World"

// 1. 
// function reverseString(str){
//   return str.split("").reverse().join("")
// }
// let x = reverseString(str)

// console.log(x)

// 2.
function reverseStr(str){
let bag=""

  for(let i=str.length-1; i>=0; i--){
    bag += str[i]
  }
  console.log(bag)
}
reverseStr(str)