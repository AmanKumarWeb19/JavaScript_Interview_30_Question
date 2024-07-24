// Find the sum of all the elements in an Array. 

// let arr = [20,10,40,50]

// let sum = 0

// for(let i=0; i<arr.length; i++){
//   sum += arr[i]
// }
// console.log(sum)


let arr = [20,10,40,50]


function FindSum(arr){
  let sum=0
  for(let i=0;i<arr.length;i++){
    sum += arr[i]
  }
  console.log(sum)
}
FindSum(arr)