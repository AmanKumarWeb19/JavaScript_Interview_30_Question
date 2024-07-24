/** Create a function that display the current date and time in a specific format */

// function getCurrentDateAndTime() {
//   let currentDate = new Date();
//   return currentDate.toLocaleString();
// }
// let date_time = getCurrentDateAndTime();
// console.log(date_time);

function dateAndTime(){
  let currentDate=new Date()
  console.log(currentDate.toLocaleString())
}
dateAndTime()