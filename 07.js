// Create a program that checks if a given year is a leap Year.

// const LeapYearCheck = (year) => {
//   if ((year % 4 == 0 && year % 100 !== 0) || year % 400 == 0) {
//     console.log("Yes It is a Leap Year");
//   } else {
//     console.log("No It is not a leap year");
//   }
// };
// LeapYearCheck(1900);

function leapYearCheck(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  } else {
    return false;
  }
}
let x = leapYearCheck(3000)
console.log(x)