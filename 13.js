// Write a function that calculates the factorial of a given number
//  factorial of 1 = always 1
//  factorial of 0 = always 1

// const factorial = (num) => {
//   if (num === 0 || num === 1) {
//     return 1;
//   } else {
//     let fact = 1;
//     for (let i = 1; i <= num; i++) {
//       fact *= i;
//     }
//     console.log(fact);
//   }
// };
// factorial(5);


const factorial = (num)=>{
 if(num === 0 || num === 1){
    return 1
 }else{
  let fact=1
  for(let i=1;i<=num;i++){
    fact *= i
  }
  console.log(fact)
 }
}
factorial(4)